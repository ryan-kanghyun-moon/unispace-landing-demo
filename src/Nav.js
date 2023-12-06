import { Outlet, NavLink } from "react-router-dom";
import navLogo from "./Unispace Profile Logo_Official(1080_1080px).png";

function Nav() {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/">
            <img src={navLogo} alt="nav logo" style={{width:"5%"}}/>
            {/* Home */}
          </NavLink>
        </div>
        <div>
          <NavLink to="/page1">Coffee Chat</NavLink>
        </div>
        <div>
          <NavLink to="/page2">Jobs</NavLink>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
