import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal/Modal";
import { authSchema, type AuthFormData } from "./AuthModal.schema";
import { useAuth } from "../../auth/useAuth.ts";

interface AuthModalProps {
    onClose: () => void;
}


const AuthModal = ({onClose}: AuthModalProps) => {
    const [isLogin, setIsLogin] = useState(true);
    const { signUp, login} = useAuth();

    const {
        register,
        handleSubmit,
        formState: {errors},
 } = useForm<AuthFormData>({
        resolver: yupResolver(authSchema),
    });


const onSubmit = async (data: AuthFormData) => {
    if(isLogin) {
        await login(data.email, data.password);
    }else{
        await signUp(data.email, data.password);
    }
    onClose();
};

return (
    <Modal onClose={onClose} >
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            type="email"
            placeholder="Email"
            {...register("email")}
             />
            <p>{errors.email?.message}</p>

            <input
            type="password"
            placeholder="Password"
            {...register("password")}
             />
            <p>{errors.password?.message}</p>

            <button type="submit">
                {isLogin ? "Login" : "Register"}
                </button>
        </form>

        <button onClick={() => setIsLogin(prev => !prev)}>
            {isLogin
             ? "Don't have an account? Register"
             : "Already have an account? Login"}
        </button>
    </Modal>
);
};

export default AuthModal;