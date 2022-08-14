import { useEffect, useState } from "react";
import ListUsers from "../components/Listusers";

function Users() {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

     useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
                .then(data => {
                    setUsers(data)
                    setLoading(false)
                    setError(null)
                }).catch(err => {
                    setLoading(false)
                    setError(err.message)
                })
     }, [])
    return(
        <div className="container mt-5">
            <div className="row g-3">
            <h2>Users:</h2>
            {error && <div>{error}</div>}
            {loading && <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
            {users && <ListUsers users={users}/>}
            </div>
        </div>
    )
}
export default Users;