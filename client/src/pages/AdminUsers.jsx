import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// STORE AUTH
import { useAuth } from "../store/auth.jsx";
// ICONS
import { PiUserCircleMinusFill } from "react-icons/pi";
import { RiEditCircleLine } from "react-icons/ri";
// TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminUsers() {
    const { token } = useAuth();
    const [users, setUsers] = useState([]);

    const getUser = async () => {
        const request = await fetch("https://codecrafters.up.railway.app/api/admin/users",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + token
                }
            })
        const response = await request.json();
        if (request.status === 200) {
            setUsers(response);
        }
    }

    function successToast(success) {
        toast.success(success, {
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

    const deleteUser = async (ID) => {
        const request = await fetch("https://codecrafters.up.railway.app/api/admin/users", {
            method: "DELETE",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ` + token
            },
            body: JSON.stringify({ ID: ID })
        })
        const response = await request.json();
        if (request.status === 200) {
            successToast(response.message);
        } else {
            errorToast(response.message)
        }
    }

    useEffect(() => {
        getUser();
    }, [deleteUser])
    return <section className="admin_users">
        <div className="adminUsers">
            {users && users.map((user) => {
                return <div key={user._id} className="adminUserIndividual">
                    <div>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="adminButtons">
                        <NavLink to={`/admin/users/${user._id}/edit`}
                            className="admin_button">
                            {<RiEditCircleLine />}
                        </NavLink>
                        <button
                            onClick={() => { deleteUser(user._id) }}
                            className="admin_button admin_buttonDelete">
                            {<PiUserCircleMinusFill />}
                        </button>
                    </div>
                </div>
            })}
        </div>
        <ToastContainer />
    </section>
}