import { useEffect, useState } from "react";
import LinkPosts from "../components/Listposts"
import { Link } from "react-router-dom";

function Posts() {

    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

     useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
                .then(data => {
                    setPosts(data)
                    setLoading(false)
                    setError(null)
                }).catch(err => {
                    setLoading(false)
                    setError(err.message)
                })
     }, [])
    return(
        <>
            <h2>posts:</h2>
            <div>
                <Link to="create" className="btn btn-dark">Create Post</Link>
            </div>
            {error && <div>{error}</div>}
            {loading && <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
            {posts && <LinkPosts posts={posts} />}
        </>
    )
}
export default Posts;