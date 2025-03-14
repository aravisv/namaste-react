import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const { onlineStatus } = useOnlineStatus();
  return (
    <div className="flex px-[10px] items-center justify-between bg-blue-400 shadow-2xs">
      <div>
        <img className="w-[60px] rounded-2xl" src={LOGO_URL} />
      </div>
      <div>
        <ul className="p-4 flex [&>li]:p-4 text-white font-medium">
          <li>Online {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
