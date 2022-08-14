import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="container m-5 col-md-6">
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nobis. Ducimus in ipsum et aspernatur, laborum cum perspiciatis error minus nihil quia consequuntur doloribus vero mollitia quaerat quidem non illum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor similique neque repudiandae inventore magni fugiat! Illo obcaecati perspiciatis provident id amet impedit consequatur quia vitae ratione illum, officia, aliquid voluptatem?</p>
            <Link className="btn btn-dark m-2" to="/users">users</Link>
            <Link className="btn btn-light m-2" to="/posts">posts</Link>
        </div>
    )
}
export default Home;