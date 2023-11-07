import React from "react";
import {Link} from 'react-router-dom';
import '../admin/admin.css';

function AdminHead(){
  
    return (
        <>
 <body>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"/>
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <input type="checkbox" id="check" />
  <header>
    <label for="check">
      <i style={{left: "210px",marginTop: "11px"}} class="fas fa-bars" id="sidebar_btn"></i>
    </label>
    <div class="left_area">
      <h6>Course Enrollment</h6>
    </div>
    <div class="right_area">
      <Link to="/logout" className="logout_btn" style={{borderRadius:"0px"}}> Logout</Link>
    </div>
  </header>

  <div className="sidebar">
    <center>
      <img src="https://e7.pngegg.com/pngimages/9/763/png-clipart-computer-icons-login-user-system-administrator-admin-desktop-wallpaper-megaphone-thumbnail.png" class="profile_image" alt="" />
      <h4>Admin</h4>
    </center>
     <Link to="/AdminHome"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></Link>
    <Link to="/addCategories"><i className="fa fa-list-alt"></i><span>Category</span></Link>
    <Link to="/subCategories"><i className="fa fa-list-alt"></i><span>SubCategory</span></Link>
    <Link to="/viewCoursesRequest"><i className="fas fa-book"></i><span>Manage Courses</span></Link>

    
    
  </div>
  <div class="content">
    <br/><br/><br/><br/>

  </div>
</body>
</>
    )
}
export default AdminHead;

