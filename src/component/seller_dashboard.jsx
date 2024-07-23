import profile from "../assets/images/profile_pic.png";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
      };
  return (
    <div className="sidebar">
        <div className="left_upper">
          <div className="left_upper_img">
            <img src={profile} alt="profile" />
          </div>
          <div className="left_upper_info">
            <h3>John Cooper</h3>
            <p>demo@example.com</p>
          </div>
        </div>
        <div className="left_lower">
          <ul>
            <li onClick={() => handleNavigation("/selleraccount")}>
              <div className="phase">
                <div className="icon">
                  <PermIdentityOutlinedIcon />
                </div>
                <p>My Account</p>
              </div>
            </li>
            <li onClick={() => handleNavigation("/sellerpassword")}>
              <div className="phase">
                <div className="icon">
                  <LockOutlinedIcon />
                </div>
                <p>Change Password</p>
              </div>
            </li>
            <li onClick={() => handleNavigation("/liked")}>
              <div className="phase">
                <div className="icon">
                  <ApartmentOutlinedIcon />
                </div>
                <p>My Properties</p>
              </div>
            </li>
            <li onClick={() => handleNavigation("/response")}>
              <div className="phase">
                <div className="icon">
                  <MapsUgcRoundedIcon />
                </div>
                <p>Responses</p>
              </div>
            </li>
            <li onClick={() => handleNavigation("/login")}>
              <div className="phase_l">
                <div className="icon">
                  <LogoutRoundedIcon />
                </div>
                <p>Logout</p>
              </div>
            </li>
          </ul>
        </div>
     
    </div>
  );
};
 export default Dashboard;