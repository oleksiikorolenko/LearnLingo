import {useForm} from "react-hook-form";
import {useAuth} from "../../auth/useAuth.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
    email: string;
    password: string;       
}

interface AuthFormProps {
    onSuccess: () => void;
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

const AuthForm = ({onSuccess}: AuthFormProps) => {
    const { login, register} = useAuth();
    const{
        register: formregister, handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await login(data.email, data.password);
            onSuccess();        
        } catch {
            await register(data.email, data.password);
            onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder="Email" {...formregister("email")} />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <input type="password" placeholder="Password" {...formregister("password")} />
                <p>{errors.password?.message}</p>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AuthForm;