import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import EditForm from "./EditFormPost"

const EditPost = () => {

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
        <h2>Update Post:</h2>
        {error && <div>{error}</div>}
            {loading && <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {post && <EditForm post={post} /> }
        
    </>
)
}
export default EditPost;