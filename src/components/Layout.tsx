import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext.ts";
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal/Modal";
import AuthForm from "./AuthForm/AuthForm.tsx";
// import { logout } from "../auth/AuthContext.tsx";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout} = useContext(AuthContext)!;

  
  return (
    <>
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/teachers">Teachers</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          { user ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <button onClick={() => setIsOpen(true)}>Log in / Sign up</button>
          )}  
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
