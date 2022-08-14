import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({postId}) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleDelete = () => {
       
       setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
          })
          .then((response) => {
              setLoading(false)
              setError(null)
              Swal.fire({
                 title: 'Thanks!',
                  text: 'Post delete successfully!',
                  icon: 'warning',
                  confirmButtonText: 'ok'
              })
          }).catch(err => {
              setLoading(false)
              setError(err.message)
          });
        }
        
    return(
        <>
            <button className="btn btn-danger me-3 mt-3" onClick={handleDelete}>
            {loading && <div className="spinner-border spinner-border-sm me-2"></div>}     
                Delete
            </button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
        </>
    )
}
export default DeletePost;