import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const EditForm = ({post}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handelSubmit = (e) => {
        e.preventDefault()
        
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
          id:post.id
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => {
          setLoading(false)
          setError(null)
          Swal.fire({
             title: 'Thanks!',
              text: 'Post updated successfully!',
              icon: 'success',
              confirmButtonText: 'ok'
          })
      }).catch(err => {
          setLoading(false)
          setError(err.message)
          Swal.fire({
            title: 'Error!',
             text: err.message,
             icon: 'warning',
             confirmButtonText: 'ok'
         })
      });
    }

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    },[post])

    return(
      <>
           <form className="col-md-4" onSubmit={(e) => {handelSubmit(e)}}>
            <div className="mb-3">
                <label className="form-label">Title:</label>
                <input type="text" onChange={(e) => {setTitle(e.target.value)}} value={title} className="form-control" />
                <div className="form-text text-danger">{title ? '' : 'title is required'}</div>
                </div>
                <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea className="form-control" onChange={(e) => {setBody(e.target.value)}} value={body} rows="6"></textarea>
                <div className="form-text text-danger">{body ? '' : 'body is required'}</div>
            </div>
            <button className="btn btn-dark" type="submit" disabled={title === '' || body === ''}>
            {loading && <div className="spinner-border spinner-border-sm me-2"></div>} 
            Edit
            </button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
        </form>
      </>
    )
}
export default EditForm;