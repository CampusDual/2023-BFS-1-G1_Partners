package com.campusdual.springontimize.ws.core.rest;


import com.campusdual.springontimize.api.core.service.IPersonalDocumentService;
import com.campusdual.springontimize.api.core.service.IUserService;
import com.campusdual.springontimize.model.core.dao.PersonalDocumentFileDao;
import com.campusdual.springontimize.model.core.dao.ProductFileDao;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/personal_documents")
public class PersonalDocumentRestController extends ORestController<IPersonalDocumentService> {

	public static final String STATUS = "status";
	public static final String NAME = "name";

	//the parameter in the yml where put the files in local path
	@Value("${aap.files.path}")
	private String path;

	@Autowired
	private IPersonalDocumentService personalDocumentsrv;

	@Override
	public IPersonalDocumentService getService() {
		return this.personalDocumentsrv;
	}

	@PostMapping(value = "upload")
	public ResponseEntity upload(@RequestParam("name") String[] names, @RequestParam("file") MultipartFile[] files, @RequestParam(name="data",required = false) String data) {

		//cast the data to a map object
		HashMap<String, Object> extraData = new HashMap<>();
		if (data != null) {
			try {
				extraData = new ObjectMapper().readValue(data, HashMap.class);
			} catch (JsonProcessingException e) {
				throw new RuntimeException(e);
			}
		}
		String user_id = null;
		String description = null;
		EntityResult result = new EntityResultMapImpl();
		if(extraData.get(PersonalDocumentFileDao.ATTR_USER_ID) instanceof Map){
			//get the user associated
			//get the description associated
			Map mUserId = (Map) extraData.get(PersonalDocumentFileDao.ATTR_USER_ID);
			user_id = (String) mUserId.get("value");
			description = (String) extraData.get("description");

			//the directory is related to the product
			String directory = path+user_id;
			try {
				//create the directory if not exists
				Files.createDirectories(Paths.get(directory));
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
			for(MultipartFile file:files){
				//for each file sote the file locally
				String filePath = directory+"\\"+file.getOriginalFilename();
				File newFile = new File(filePath);
				Map<String,Object> fileResult = new HashMap<>();
				try {
					if(newFile.exists()){
						//if exist not replace and return the already exists state
						fileResult.put(NAME,file.getOriginalFilename());
						fileResult.put(STATUS,"ALREADY_EXIST");
					}else{
						//write the file in the disk
						file.transferTo(newFile);
						Map<String,Object> attrMap = new HashMap();
						attrMap.put(PersonalDocumentFileDao.ATTR_USER_ID,user_id);
						attrMap.put(PersonalDocumentFileDao.ATTR_NAME,file.getOriginalFilename());
						attrMap.put(PersonalDocumentFileDao.ATTR_PATH,filePath);
						attrMap.put(PersonalDocumentFileDao.ATTR_DESCRIPTION,description);
						EntityResult fileInsert = personalDocumentsrv.personalFileInsert(attrMap);
						if(fileInsert.isWrong()){
							fileResult.put(NAME,file.getOriginalFilename());
							fileResult.put(STATUS,"ERROR_ON_INSERT");
						}else{
							fileResult.put(NAME,file.getOriginalFilename());
							fileResult.put(STATUS,"OK");
						}
					}
				} catch (IOException e) {
					fileResult.put(NAME,file.getOriginalFilename());
					fileResult.put(STATUS,"ERROR_ON_WRITE_FILE");
				}
				result.addRecord(fileResult);
			}
		}

		return new ResponseEntity<EntityResult>(result,HttpStatus.OK);
	}



}
