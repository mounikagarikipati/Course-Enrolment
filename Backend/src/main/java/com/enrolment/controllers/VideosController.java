package com.enrolment.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.enrolment.models.VideosModel;
import com.enrolment.services.VideosService;

@RestController
public class VideosController {
	@Autowired
	private VideosService videosService;
	
	@Value("${video}")
	String video;
	@RequestMapping(value = "addVideos", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String addVideos(
   		@RequestParam(name="videoLink") MultipartFile multipartFile,
   		@RequestParam String videoTitle,
   		@RequestParam long sectionId,
   		@RequestParam String description,
   		@RequestParam String isFreeVideo
   		 
   		 ) {
   	try {
			File uploadedFile = new File(video, multipartFile.getOriginalFilename());
			uploadedFile.createNewFile();
			FileOutputStream fos = new FileOutputStream(uploadedFile);
			fos.write(multipartFile.getBytes());
			fos.close();
			
			VideosModel videosModel = new VideosModel();
			videosModel.setDescription(description);
			videosModel.setVideoTitle(videoTitle);
			videosModel.setIsFreeVideo(isFreeVideo);
			videosModel.setVideoLink(multipartFile.getOriginalFilename());
			videosModel.setSectionId(sectionId);
			
			
			return videosService.addVideos(videosModel);
		} catch (Exception e) {
			System.out.println(e);
			return "Fail to upload";
		}
   }
	
	@GetMapping("getVideos") 
	public List<VideosModel> getVideos(@RequestParam("sectionId") long sectionId){
		return videosService.videosService(sectionId);
	}

}

