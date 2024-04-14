import {Outlet} from 'react-router-dom'
function AdminDashBOard(){
    return(
        <>
        <h1>Welcome to this outlet</h1>
        <Outlet />
        </>
    )
}

export default AdminDashBOard;