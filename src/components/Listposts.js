import { Link } from "react-router-dom";

const ListPosts = ({posts}) => {
    return(
        <>
        {posts.map(post => (
                <div className="col-md-4" key={post.id}>
                    <div className="card">
                        <div className="card-header fw-boald"><Link to={`/posts/${post.id}`}>postname: {post.title}</Link></div>
                            <div className="card-body">email: {post.body}</div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ListPosts;