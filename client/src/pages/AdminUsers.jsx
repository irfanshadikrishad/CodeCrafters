import { useEffect, useState } from "react";
import { useAuth } from "../store/auth.jsx";
import { PiUserCircleMinusFill } from "react-icons/pi";

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

    useEffect(() => {
        getUser();
    }, [])
    return <section className="admin_users">
        <div className="adminUsers">
            {users && users.map((user) => {
                return <div key={user._id} className="adminUserIndividual">
                    <div>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <button className="admin_button">{<PiUserCircleMinusFill />}</button>
                    </div>
                </div>
            })}
        </div>
    </section>
}