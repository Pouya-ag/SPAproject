import { Route, Routes } from "react-router-dom"
import Posts from "./Posts";
import ShowPost from "./ShowPost";
import CreatePost from "./Create";
import EditPost from "./Editpost";

 const Postsroute = () => {
    
    return(
        <div className="container mt-5">
            <div className="row g-3">
                <Routes>
                    <Route path='/' element={<Posts />} />
                    <Route path='/create' element={<CreatePost />} />
                    <Route path='/edit/:postId' element={<EditPost />} />
                    <Route path='/:postId' element={<ShowPost />} />
                </Routes>
            </div>
        </div>
    )
 }
 export default Postsroute;