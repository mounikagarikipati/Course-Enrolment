import React from "react";
import {Link} from 'react-router-dom';

function StudentHead(){
    return (
        <>
<nav>
    <div  className="bg-dark text-white p-2" style={{ textTransform: "uppercase"}}>Course Enrollment</div>
    <input type="checkbox" id="checkbox" />
    <label htmlFor="checkbox" id="icon">
    </label>
    <ul>
        <li>
            <Link  aria-current="page" className="text-dark" to="/studentHome"><b>Student Home</b></Link>
        </li>
      <li>
            <Link  aria-current="page" className="text-dark" to="/logout"><b>Logout</b></Link>
        </li>
    </ul>
</nav>
</>
    )
}
export default StudentHead;





        
