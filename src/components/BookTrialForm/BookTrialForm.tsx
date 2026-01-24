import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


interface FormValues { 
    name: string;
    email: string;
    phone: string;
}

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
});

const BookTrialForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        console.log('BOOK TRIAL FORM DATA:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Book Trial Lesson</h2>

            <input {...register("name")} placeholder="Name" />
            {errors.name && <p>{errors.name?.message}</p>}

            <input {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email?.message}</p>}

            <input {...register("phone")} placeholder="Phone" />
            {errors.phone && <p>{errors.phone?.message}</p>}

            <button type="submit">Book Now</button>
        </form>
    );
}

export default BookTrialForm;