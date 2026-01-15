import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal/Modal";
import AuthForm from "./AuthForm/Authform.tsx";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header>
        <nav>
            <NavLink to="/">Home</NavLink> | {" "}
            <NavLink to="/teachers">Teachers</NavLink> | {" "}
            <NavLink to="/favorites">Favorites</NavLink> | {" "}
            <button onClick={() => setIsOpen(true)}>Login</button>
        </nav>
    </header>
    <main>
      <Outlet />
        {isOpen && (
            <Modal onClose={() => setIsOpen(false)}>
                <AuthForm onSuccess={() => setIsOpen(false)} />
            </Modal>
        )}
    </main>
    </>
  );
};

export default Layout;
