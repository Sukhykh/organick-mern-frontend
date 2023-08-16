import { NavLink } from "react-router-dom"


export const AdminNavigation = () => {
    return (
        <div className="">
            <NavLink to="orders"> orders </NavLink>
            <NavLink to="addProduct"> add product </NavLink>
        </div>
    )
}