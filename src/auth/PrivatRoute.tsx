import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth.ts";
import type { ReactNode } from "react";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { user, isLoading } = useAuth();

    if(isLoading) {
        return <div>Loading...</div>;
    }

    if(!user)  {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;