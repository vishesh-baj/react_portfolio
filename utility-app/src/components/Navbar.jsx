import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <input
          type="text"
          placeholder="search"
          className="input input-bordered input-ghost input-sm"
          name=""
          id=""
        />
      </div>
      <div className="flex-none">
        <label
          htmlFor="my-drawer"
          className="lg:hidden btn btn-primary drawer-button "
        >
          <RxHamburgerMenu />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
