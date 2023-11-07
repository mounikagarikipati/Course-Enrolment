package com.enrolment.controllers;

import java.io.File;
import java.io.FileOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.enrolment.models.StudentModel;
import com.enrolment.services.StudentService;

@RestController
public class StudentController {
	@Autowired
	private StudentService studentService;
	@Value("${studentImagePath}")
	String studentImagePath;
    @RequestMapping(value = "customerReg", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String instructorReg(
   		@RequestParam(name="profielPicture") MultipartFile multipartFile,
   		@RequestParam String name,
   		@RequestParam String email,
   		@RequestParam String phone,
   		@RequestParam String password,
   		@RequestParam String address,
   		@RequestParam float walletAmount
   		 
   		 )
    {
    	System.out.println(name);
    	System.out.println(email);
    	System.out.println(phone);
    	System.out.println(password);
    	System.out.println(address);
   	try {
			File uploadedFile = new File(studentImagePath, multipartFile.getOriginalFilename());
			uploadedFile.createNewFile();
			FileOutputStream fos = new FileOutputStream(uploadedFile);
			fos.write(multipartFile.getBytes());
			fos.close();
			
			StudentModel studentModel = new StudentModel();
			studentModel.setName(name);
			studentModel.setEmail(email);
			studentModel.setPhone(phone);
			studentModel.setPassword(password);
			studentModel.setWalletAmount(walletAmount);
			studentModel.setAddress(address);
			studentModel.setProfilePicture(multipartFile.getOriginalFilename());
			
			return studentService.customerReg(studentModel);
			
		} catch (Exception e) {
			System.out.println(e);
			return "Fail to upload";
		}
   	
   	
   }


	

}
