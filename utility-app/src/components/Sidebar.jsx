import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";
const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <h1 className="text-xl text-teal-400">LOGO</h1>

        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <h2 className="menu-title">Utilities</h2>
            <ul>
              <li>
                <Link to={PATHS.dashboard}>Dashboard</Link>
              </li>
              <li>
                <Link to={PATHS.todos}>Todos</Link>
              </li>
              <li>
                <Link to={PATHS.notes}>Notes</Link>
              </li>
              <li>
                <Link to={PATHS.pomodoro}>Pomodoros</Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="menu-title">About</h2>
            <ul>
              <li>
                <Link to={PATHS.dashboard}>Dashboard</Link>
              </li>
              <li>
                <Link to={PATHS.todos}>Todos</Link>
              </li>
              <li>
                <Link to={PATHS.notes}>Notes</Link>
              </li>
              <li>
                <Link to={PATHS.pomodoro}>Pomodoros</Link>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
