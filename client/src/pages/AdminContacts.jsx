import { useEffect, useState } from "react";
import { useAuth } from "../store/auth.jsx";
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

    useEffect(() => {
        getContact();
    }, [])
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
                        <button className="admin_button">{<PiUserCircleMinusFill />}</button>
                    </div>
                </div>
            })}
        </div>
    </section>
}