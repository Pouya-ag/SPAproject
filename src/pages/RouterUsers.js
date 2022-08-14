import { Route, Routes } from "react-router-dom"
import ShowUser from './ShowUser';
import Users from './Users';

 const Usersrout = () => {
    
    return(
        <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/:id' element={<ShowUser />} />
        </Routes>
    )
 }
 export default Usersrout;