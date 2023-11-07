import Cookies from "js-cookie";
import AdminHead from "./adminHead";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewCoursesRequest(){

    const navigate = useNavigate();
    let token = Cookies.get("token");
    const [courses ,SetCourse] = useState([])

    useEffect(()=>{
        let url = "http://localhost:2023/getCoursesRequests";
        var httpReq = new XMLHttpRequest();
        httpReq.open("get", url,true);
        httpReq.setRequestHeader('Authorization', 'Bearer ' + token);
        httpReq.onreadystatechange = function(){
            if(this.readyState == 4 && this.status== 200){
                let data = this.responseText
                    data = JSON.parse(data);
                    SetCourse(data)
            }
            
        }
        httpReq.send();
       
    })
    const VerifyCourse = e =>{
        e.preventDefault();
        let courseId = e.target[0].value;
        let url = "http://localhost:2023/verifyCourse";
        var httpReq = new XMLHttpRequest();
        httpReq.open("get", url+"?courseId="+courseId,true);
        httpReq.setRequestHeader('Authorization', 'Bearer ' + token);
        httpReq.onreadystatechange = function(){
            if(this.readyState == 4 && this.status== 200){
                let data = this.responseText
                    alert(data);
            }
            
        }
        httpReq.send();


    }


    return(
        <>
        <AdminHead/>
        <div className="container mt-3" style={{position:'absolute',top:'50px',left:'150px'}}>
            <div className="text-center h6 mt-2">Courses</div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-11" >
                <div className="row">
                {courses.map((course,index)=>
                <div className="col-md-3">
                    <div className="card p-1  mt-3">
                       <div className="">
                        <img  className="" src={'data:image/jpeg;base64,'+course['image2']}  style={{height:'160px',width:'100%'}} />
                       </div>
                       <div className="h5 text-center "><b>{course['courseName']}</b>  </div>
                       <div className="card-body p-3">
                        <div className="h6 "><b>$ {course['coursePrice']}</b></div>
                        <div className="" style={{fontSize:"10px",}}>About</div>
                        <div className="h6 " style={{overflow:'auto',height:"30px",fontSize:'14px'}}>{course['courseDescription']}</div>
                        <div className="row">
                            
                        </div>
                       </div>
                       <div className="card-footer " style={{height:"55px"}}>
                      <div className="row">
                        {course['status']==="Not Authorized"?
                        <div className="col-md-6">
                            <div className="text-danger" style={{fontSize:"11px"}}>
                            <b>{course['status']}</b></div>
                            </div>
                        :
                        <></>}

                        {course['status']==="Authorized"?
                            <div className="col-md-6">
                            <div className="text-success" style={{fontSize:"11px"}}><b>{course['status']}</b></div>
                            </div>
                        :
                        <></>}
                        {course['status']==="Not Authorized"?
                            <div className="col-md-6">
                                <form onSubmit={VerifyCourse}>
                                    <input type="hidden" id="courseId" value={course['courseId']}></input>
                                    <input type ="submit" value="Authorize" className="btn btn-primary w-100" style={{fontSize:"12px"}}></input>
                                </form>
                                

                            </div>
                        :<></>}
                        {course['status']==="Authorized"?
                            <div className="col-md-6">
                                <form onSubmit={VerifyCourse}>
                                    <input type="hidden" id="courseId" value={course['courseId']}></input>
                                    <input type ="submit" value="UnAuthorize" className="btn btn-danger w-100" style={{fontSize:"12px"}}></input>
                                </form>
                            </div>
                        :<></>}
                        
                        
                      </div>
                       </div>
                    </div>
                    
                </div>
                )}
                </div>
            </div>
            </div>              
        </div>
        </>
    )
}
export default ViewCoursesRequest;
