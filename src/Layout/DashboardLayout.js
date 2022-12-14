import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import CustomHook from "../CustomHook/CustomHook/CustomHook";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role] = CustomHook(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Sidebar content here */}
            {role === "buyer" && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}
            {role === "seller" && (
              <li>
                <Link to="/dashboard/addproduct">Add A Product</Link>
              </li>
            )}
            {role === "seller" && (
              <li>
                <Link to="/dashboard/myproducts">My Products</Link>
              </li>
            )}
            {role === "admin" && (
              <li>
                <Link to="/dashboard/allsellers">All Sellers</Link>
              </li>
            )}
            {role === "admin" && (
              <li>
                <Link to="/dashboard/allbuyers">All Buyers</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
