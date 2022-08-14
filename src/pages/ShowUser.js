import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowUser = () => {
    const { id } = useParams()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
                .then(data => {
                    setUser(data)
                    setLoading(false)
                    setError(null)
                }).catch(err => {
                    setLoading(false)
                    setError(err.message)
                })
     }, [id])

    return(
            <div className="container mt-5">
                <div className="row g-3">
                    {error && <div>{error}</div>}
                    {loading && <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    {user && <div className="col-md-4" key={user.id}>
                        <div className="card">
                            <div className="card-header fw-boald">{user.name}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">username: {user.username}</li>
                                <li className="list-group-item">email: {user.email}</li>
                                <li className="list-group-item">phone: {user.phone}</li>
                                <li className="list-group-item">website: {user.website}</li>
                            </ul>
                        </div>
                    </div>}
                </div>
            </div>
    )
}
export default ShowUser;