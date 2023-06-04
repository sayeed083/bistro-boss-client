import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdFoodBank } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/user_home"><FaHome></FaHome>User Home</NavLink></li>

                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>

                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>

                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>

                    <div className="divider">OR</div>


                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

                    <li><NavLink to="/menu"><CgMenuLeftAlt></CgMenuLeftAlt> Our Menu</NavLink></li>

                    <li><NavLink to="/order/dessert"> <MdFoodBank></MdFoodBank> Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;