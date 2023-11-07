import { BrowserRouter,Route,Switch,Routes} from 'react-router-dom';
import HomePage from "./home";
import AdminLogin from './home/adminLogin';
import StudentLogin from './home/studentLogin';
import InstructorLogin from './home/instructorLogin';
import InstructorRegistration from './home/instructorRegistration';
import StudentRegistration from './home/studentRegistration';
import AdminHome from './admin/adminHome';
import Logout from './logout';
import InstructorHome from './instructor/instructorHome';
import StudentHome from './student/studentHome';
import AddCategories from './admin/addCategories';
import SubCategory from './admin/subCategories';
import AddCourse from './instructor/addCourse';
import viewCourses from './instructor/viewCourses';
import Addsection from './instructor/addsection';
import AddVideos from './instructor/addVideos';
import ViewCoursesRequest from './admin/viewCoursesRequest';
import Message from './admin/Message';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
         <Routes>
          <Route path='/'  Component={HomePage} />
          <Route path='/adminLogin'  Component={AdminLogin} />
          <Route path='/studentLogin'  Component={StudentLogin} />
          <Route path='/instructorLogin'  Component={InstructorLogin} />
          <Route path='/instructorRegistration'  Component={InstructorRegistration} />
          <Route path='/studentRegistration'  Component={StudentRegistration} />
          <Route path='/adminHome'  Component={AdminHome} />
          <Route path='/logout' Component={Logout}/>
          <Route path='/instructorHome' Component={InstructorHome}/>
          <Route path='/studentHome' Component={StudentHome}/>
          <Route path='/addCategories' Component={AddCategories}/>
          <Route path='/subCategories' Component={SubCategory}/>
          <Route path='/addCourse' Component={AddCourse}/>
          <Route path='/viewCourses' Component={viewCourses}/>
          <Route path='/addsection' Component={Addsection}/>
          <Route path='/addVideos' Component={AddVideos}/>
          <Route path='/viewCoursesRequest' Component={ViewCoursesRequest}/>
          <Route path='/Message' Component={Message}/>
          
          

         </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
