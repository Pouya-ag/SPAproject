import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeletePost from './Deletepost';

const ShowPost = () => {
    const { postId } = useParams()

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
                .then(data => {
                    setPost(data)
                    setLoading(false)
                    setError(null)
                }).catch(err => {
                    setLoading(false)
                    setError(err.message)
                })
     }, [postId])

    return(
        <>
            {error && <div>{error}</div>}
            {loading && <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {post && <div className="col-md-4" key={post.id}>
                <div className="card">
                    <div className="card-header fw-boald">{post.title}</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">userID: {post.userId}</li>
                        <li className="list-group-item">id: {post.id}</li>
                        <li className="list-group-item">body: {post.body}</li>
                    </ul>
                </div>
                <DeletePost postId={post.id} />
            <Link to={`/posts/edit/${postId}`} className="btn btn-dark mt-3">Edit</Link>
            </div>}
        </>
    )
}
export default ShowPost;