import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRouting = ({children}) => {
    const { user,   isLoading } =useAuth0();
    const location = useLocation();

    if(isLoading){
        return <progress className="progress mx-auto w-56"></progress>
    }

    if (user){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default PrivetRouting;