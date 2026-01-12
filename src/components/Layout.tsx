import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/teachers">Teachers</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
    </header>
    <main>
        <Outlet />
    </main>
    </>
  );
};

export default Layout;
