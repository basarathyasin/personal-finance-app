import { useState } from "react";
import "./Sidebar.css"
import {
    FaArrowRight,
    FaHome,
    FaMoneyBillWave,
    FaChartPie,
    FaHandHoldingUsd,
    FaBullseye,
    FaHistory,
    FaArrowLeft,
    FaBuyNLarge,
} from "react-icons/fa"
import Dashboard from "../pages/Dashboard";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState("Dashboard");

    const menuItems = [
        {name: "Dashboard" , icon: <FaHome />},
        {name: "Income & Expense", icon: <FaMoneyBillWave/>},
        {name: "Budget Planner", icon: <FaChartPie/>},
        {name: "Debt Manager" , icon: <FaHandHoldingUsd/>},
        {name: "Goal Tracker" ,icon: <FaBullseye/>},
        {name: "Recent Transactions" , icon: <FaHistory/>},
    ];

    function handleCollapes(){
        setCollapsed(prev => !prev)
    }

    return (
    <aside className={`sidebar ${collapsed ? "collapsed":""}`}>
        <div className="sidebar-header">
            {!collapsed && <h2 className="sidebar-title">
            💸 MoneyMan</h2>}
            <button className="collapse-btn"
            onClick={handleCollapes}>
                {collapsed ? <FaArrowRight /> : <FaArrowLeft />}
            </button>
        </div>
        <nav className="sidebar-nav">
            {menuItems.map((item) =>(
                <li
                    key ={item.name}
                    className= {`nav-item ${active === item.name ? "active" : ""}`}
                    onClick= {()=> setActive(item.name)}
                    >
                        <span className="nav-icon">
                            {item.icon}
                        </span>
                        {!collapsed && <span>{item.name}</span>}
                </li>
            ))}

        </nav>

    </aside>
    )
}
