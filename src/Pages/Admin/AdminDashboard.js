import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const redirectTo = useNavigate();

    const logedUser = JSON.parse(localStorage.getItem("user-info"));

    useEffect(() => {

        if(logedUser.role_as === 0) {
            return redirectTo("/user");
        }

    }, [])

    return(
        <div>
            <h1>
                Admin Dashboard
            </h1>
        </div>
    )
}

export default AdminDashboard;