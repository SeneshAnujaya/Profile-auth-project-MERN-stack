import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentuser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-900 border-b border-b-slate-700">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <h1 className="font-medium text-white">Auth App</h1>
        <ul className="flex gap-4 text-white">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/profile">
            {currentuser ? (
              <img src={currentuser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover"/>
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
