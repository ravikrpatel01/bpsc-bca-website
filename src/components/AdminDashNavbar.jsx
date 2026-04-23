import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const AdminDashNavbar = () => {
  const menuItems = [
    { id: 1, title: "Add New Notice" },
    { id: 2, title: "Add New Announcement" },
    { id: 3, title: "Update College Logo" },
    { id: 4, title: "Update College Name" },
    { id: 5, title: "Update Hero Image" },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full mt-17 w-64 bg-blue-900 text-white pl-4 py-2 transform transition-transform duration-300 z-50 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div
          onClick={() => setOpenSidebar(false)}
          className="flex justify-end p-2 text-xl cursor-pointer"
        >
          <ImCancelCircle className="hover:text-red-500 text-2xl" />
        </div>

        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-yellow-400 pb-2"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <div className="px-5 py-4 bg-blue-900 flex items-center justify-between border-b border-b-gray-400">
        {/* Left */}
        <div className="flex items-center gap-2 text-white">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpenSidebar(true)}
          />

          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Right (Dropdown) */}
        <div className="relative" ref={menuRef}>
          {/* Icon */}
          <div className="flex items-center gap-2">
            <span className="text-white text-xl font-medium">ADMIN</span>

            <MdAdminPanelSettings
              onClick={() => setOpenMenu(!openMenu)}
              className="text-4xl border rounded-full p-1 border-white cursor-pointer text-white"
            />
          </div>
          {/* Dropdown */}
          {openMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md z-50">
              <div className="px-4 py-2 flex items-center gap-1 hover:bg-gray-100 hover:rounded cursor-pointer font-medium">
                <RiLockPasswordLine />
                Update Password
              </div>

              <div
                onClick={handleLogout}
                className="px-4 py-2 flex items-center gap-1 hover:bg-gray-100 cursor-pointer text-red-500 font-medium"
              >
                <IoIosLogOut />
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashNavbar;
