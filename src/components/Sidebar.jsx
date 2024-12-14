import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-wide text-center mb-6">
          SahaYatri Admin
        </h1>
      </div>
      <nav>
        <ul className="space-y-4 px-4">
          <li>
            <NavLink
              to="/guide-verification-request"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 text-green-400 font-semibold block py-2 px-3 rounded"
                  : "hover:bg-gray-700 block py-2 px-3 rounded"
              }
            >
              Guide Verification Request
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/verified-guides"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 text-green-400 font-semibold block py-2 px-3 rounded"
                  : "hover:bg-gray-700 block py-2 px-3 rounded"
              }
            >
              Verified Guides
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 text-green-400 font-semibold block py-2 px-3 rounded"
                  : "hover:bg-gray-700 block py-2 px-3 rounded"
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admins"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 text-green-400 font-semibold block py-2 px-3 rounded"
                  : "hover:bg-gray-700 block py-2 px-3 rounded"
              }
            >
              Assigned Admins
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
