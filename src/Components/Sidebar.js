import { Outlet,Link } from 'react-router-dom'

// import Dashboard from './Dashboard'
// import Employee from './Employee'
// import Student from './Student'



const sideBar = () => {
    return (
        <>
        <div className ="container-fluid">
            <div className="row">
                <div className="col-auto min-vh-100 bg-dark">
                    <ul className="mt-5">
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                        <Link to ="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                        <Link to ="/employee">Employee</Link>
                        </li>
                        <li>
                        <Link to ="/student">Student</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    )
}





        
       
      
 
export default sideBar