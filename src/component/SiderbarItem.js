import { useState } from "react"

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)

    console.log("saytsdhhj", item.products)
    // const userss=item.products.data.map((c, i) => (<div key={i}><h3>{c.attributes.category.data.attributes.name}</h3></div>))
    const category1 = ['IV Drip Therapy'];
    const category2= ['IM Booster Shots'];

const category1Filtered = item.products.data.filter((el) => category1.includes(el.attributes.category.data.attributes.name));
const category2Filtered = item.products.data.filter((el) => category2.includes(el.attributes.category.data.attributes.name));

console.log("myArrayFiltered",category1Filtered);
console.log("myThiredArrayFiltered",category2Filtered)

    if (item.products) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.linkText}
                    </span>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>

                {(() => {
                    if (category1Filtered || category2Filtered ) {
                        return (
                            <div className="sidebar-content"><br/>
                                <h2  style={{marginBottom:"5px"}}>IV Drip Therapy</h2>
                                {category1Filtered.map((child, index) => <span key={index}>
                                    <button style={{ height: "100%", width: "100%", backgroundColor:"blueviolet" }}>
                                        <p style={{fontWeight:"bold"}}>{child.attributes.title}</p>
                                        <p>{child.attributes.specification}</p>
                                    </button><br /><br />
                                </span>
                                )}<br/>
                                 <h2  style={{marginBottom:"5px"}}>IM Booster Shots</h2>
                                {category2Filtered.map((child, index) => <span key={index}>
                                    <button style={{ height: "100%", width: "100%",backgroundColor:"yellow", color:"red" }}>
                                       <p style={{fontWeight:"bold"}}> {child.attributes.title}</p>
                                       <p style={{marginTop:"5px"}}>{child.attributes.specification}</p>
                                    </button><br /><br />
                                </span>
                                )}
                            </div>
                        )
                    }    
                    else {
                        return (
                            <div className="sidebar-content">
                                nothing
                            </div>
                        )
                    }
                })()}
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.icon && <i className={item.icon}></i>}
                {item.linkText}
            </a>
        )
    }
}
