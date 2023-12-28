import { useEffect, useState } from "react";
import { useAuth } from "../store/auth.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PiUserCircleMinusFill } from "react-icons/pi";

export default function AdminContacts() {
    const { token } = useAuth();
    const [contact, setContact] = useState([]);

    const getContact = async () => {
        const request = await fetch("https://codecrafters.up.railway.app/api/admin/contacts",
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
            setContact(response);
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

    const deleteContact = async (ID) => {
        const request = await fetch("https://codecrafters.up.railway.app/api/admin/contacts", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ` + token
            },
            body: JSON.stringify({ ID: ID })
        })
        const response = await request.json();
        if (request.status === 200) {
            successToast(response.message)
        } else {
            errorToast(response.message)
        }
    }

    useEffect(() => {
        getContact();
    }, [deleteContact])
    return <section className="admin_contacts">
        <div className="adminContacts">
            {contact && contact.map((con) => {
                return <div key={con._id} className="adminContactIndividual">
                    <div>
                        <p>{con.username}</p>
                        <p>{con.email}</p>
                        <p>{con.message}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => { deleteContact(con._id) }}
                            className="admin_button">
                            {<PiUserCircleMinusFill />}
                        </button>
                    </div>
                </div>
            })}
        </div>
        <ToastContainer />
    </section>
}