import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
    return <section className="container admin">
        <header className="admin_navbar">
            <NavLink to="/admin/users">Users</NavLink>
            <NavLink to="/admin/contacts">Contacts</NavLink>
            <NavLink to="/admin/services">Services</NavLink>
        </header>
        <Outlet />
    </section>
}