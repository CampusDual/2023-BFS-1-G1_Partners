package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.IProductService;
import com.campusdual.springontimize.model.core.dao.ProductDao;
import com.campusdual.springontimize.model.core.dao.ProductFileDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Lazy
@Service("ProductService")
public class ProductService implements IProductService {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private ProductFileDao productFileDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;


    @Override
    public EntityResult productQuery(Map<String, Object> keyMap, List<String> attrList) {
        return daoHelper.query(productDao,keyMap,attrList);
    }


    @Override
    public EntityResult productInsert(Map<String, Object> attrMap) {
        return daoHelper.insert(productDao,attrMap);
    }

    @Override
    public EntityResult productUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return daoHelper.update(productDao,attrMap,keyMap);
    }

    @Override
    public EntityResult productDelete(Map<String, Object> keyMap) {
        return daoHelper.delete(productDao,keyMap);
    }


    public EntityResult fileQuery(Map<String, Object> keyMap, List<String> attrList) {
        return daoHelper.query(productFileDao,keyMap,attrList);
    }

    @Override
    public EntityResult fileContentQuery(Map<String, Object> keyMap, List<String> attrList) {
        attrList.add(ProductFileDao.ATTR_PATH);
        attrList.remove(ProductFileDao.ATTR_BASE64);
        EntityResult fileResult = daoHelper.query(productFileDao,keyMap,attrList);
        List<String> base64Files = new ArrayList<>();
        //for each file calculate the Base64 value of the local file
        for(int i=0;i<fileResult.calculateRecordNumber();i++){
            String filePath = (String) fileResult.getRecordValues(i).get(ProductFileDao.ATTR_PATH);
            File file = new File(filePath);
            try {
                //calculate the Base64
                byte[] encoded = Base64.encodeBase64(FileUtils.readFileToByteArray(file));
                base64Files.add(new String(encoded));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        //add all the Base64 values for each file
        fileResult.put(ProductFileDao.ATTR_BASE64,base64Files);
        return fileResult;
    }

    @Override
    public EntityResult fileInsert(Map<String, Object> attrMap) {
        return daoHelper.insert(productFileDao,attrMap);
    }

    @Override
    public EntityResult fileDelete(Map<String, Object> keyMap) {
        return daoHelper.delete(productFileDao,keyMap);
    }
}