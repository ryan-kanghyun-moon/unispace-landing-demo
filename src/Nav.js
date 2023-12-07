import { Outlet, NavLink } from "react-router-dom";
import navLogo from "./Unispace Profile Logo_Official(1080_1080px).png";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <div>
          <NavLink to="/">
            <img src={navLogo} alt="nav logo" style={{ width: "30%" }} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/page1" className="nav-link">
            Coffee Chat
          </NavLink>
        </div>
        <div>
          <NavLink to="/page2" className="nav-link">
            Jobs
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
