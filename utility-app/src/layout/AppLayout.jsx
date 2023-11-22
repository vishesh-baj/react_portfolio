import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Navbar />

        {/* Page content here */}
        {children}
      </div>
      <Sidebar />
    </div>
  );
};

export default AppLayout;
