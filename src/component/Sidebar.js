import { useEffect, useState } from "react";
import axios from "axios";
import SidebarItem from "./SiderbarItem";

export default function Sidebar() {
  const [post, setPost] = useState([]);
  const baseURL =
    "https://staging.reviv-backend.wearedigitl.com/api/navigation/?populate%5BmainMenu%5D%5Bpopulate%5D%5B0%5D=page&populate%5BmainMenu%5D%5Bpopulate%5D%5B1%5D=products&populate%5BmainMenu%5D%5Bpopulate%5D%5B2%5D=nutrients&populate%5BmainMenu%5D%5Bpopulate%5D%5Bpage%5D%5Bfields%5D%5B0%5D%5B1%5D=title%2Cslug&populate%5BmainMenu%5D%5Bpopulate%5D%5Bproducts%5D%5Bpopulate%5D%5Bcategory%5D%5Bfields%5D=name&populate%5BmainMenu%5D%5Bpopulate%5D%5Bproducts%5D%5Bfields%5D%5B0%5D%5B1%5D=title%2Cslug%2Cspecification&populate%5BmainMenu%5D%5Bpopulate%5D%5Bnutrients%5D%5Bfields%5D%5B0%5D%5B1%5D=title";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const dataa = response.data.data.attributes.mainMenu;
      setPost(dataa);
      console.log("datata", dataa);
    });
  }, []);

  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>

      <div >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="d-flex">
            {post.map((item, index) => (
              <SidebarItem className="d-flex" key={index} item={item} />
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}
