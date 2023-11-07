package com.enrolment.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.enrolment.models.InstructorModel;
import com.enrolment.models.LoginDetailsModel;
import com.enrolment.models.StudentModel;
import com.enrolment.repositories.LoginDetailsRepository;
import com.enrolment.repositories.StudentRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentService {
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private LoginDetailsRepository loginDetailsRepository;

	public String customerReg(StudentModel studentModel) {
		List<StudentModel>  StudentModelList = studentRepository.findByEmailOrPhone(studentModel.getEmail(),studentModel.getPhone());
		if(StudentModelList.size() >0) {
			return "Duplicate Details";
		}
		
		
		LoginDetailsModel loginDetailsModel = new LoginDetailsModel();
		loginDetailsModel.setEmail(studentModel.getEmail());
		loginDetailsModel.setPassword(new BCryptPasswordEncoder().encode(studentModel.getPassword()));
		loginDetailsModel.setRole("ROLE_STUDENT");
		loginDetailsRepository.save(loginDetailsModel);
		LoginDetailsModel loginDetailsModel2 = loginDetailsRepository.findByEmail(studentModel.getEmail());
		studentModel.setLoginDetailsModel(loginDetailsModel2);
	    
		studentRepository.save(studentModel);
		
		return "Student Registered Successfully";
	}

}
