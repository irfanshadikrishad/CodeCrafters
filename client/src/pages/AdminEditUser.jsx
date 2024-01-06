import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth"
// TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminEditUser() {
    const { token } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: ""
    });
    const { id } = useParams();

    const getUser = async (req, res) => {
        const request = await fetch(`https://codecrafters.up.railway.app/api/admin/users/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + token
                }
            })
        const response = await request.json();
        if (request.status === 200) {
            setUser(response);
        } else {
            console.log(response);
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    function errorToast(error) {
        toast.error(error, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const userUpdate = async () => {
        const request = await fetch(`https://codecrafters.up.railway.app/api/admin/users/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + token
                },
                body: JSON.stringify(user)
            })
        const response = await request.json();
        if (request.status === 200) {
            navigate("/admin/users");
        } else {
            errorToast(response);
        }
    }
    useEffect(() => {
        getUser();
    }, [])
    return <section className="container">
        <div className="editUserForm">
            <input
                name="username"
                onChange={handleChange}
                value={user.username}
                type="text"
                placeholder="username" />
            <input
                name="email"
                onChange={handleChange}
                value={user.email}
                type="email"
                placeholder="email" />
            <input
                name="phone"
                onChange={handleChange}
                value={user.phone}
                type="phone"
                placeholder="phone" />
            <button onClick={userUpdate}>Update</button>
        </div>
        <ToastContainer />
    </section>
}