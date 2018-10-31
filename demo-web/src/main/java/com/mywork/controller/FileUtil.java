package com.mywork.controller;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

/**
 * @description:
 * @author: songtao
 * @date: 2018/6/30
 * @modified by:
 */
public class FileUtil {

    public static boolean isExist(String filePath) {
        File file = new File(filePath);
        return file.exists();
    }

    public static void closeOutStream(OutputStream out) {
        try {
            if (out != null) {
                out.flush();
                out.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static File upload(MultipartFile file, String filePath) {

        if (!file.isEmpty()) {
            String type = file.getOriginalFilename().substring(
                    file.getOriginalFilename().indexOf("."));
            String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String path = filePath + filename;
            File dstFile = new File(path);
            try {
                FileUtils
                        .copyInputStreamToFile(file.getInputStream(), dstFile);
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
            return dstFile;
        } else {
            return null;
        }
    }


    public static File copyTemplate(String templatePath, String filePath) {

        File srcFile = new File(templatePath);
        File dstFile = new File(filePath);
        try {
            FileUtils.copyFile(srcFile, dstFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return dstFile;
    }

    public static ResponseEntity getResEntity(String filePath, String filename) {

        File dstFile = new File(filePath);
        HttpHeaders headers = new HttpHeaders();
        String downloadFileName;
        try {
            downloadFileName = new String(filename.getBytes("UTF-8"), "iso-8859-1");
            headers.setContentDispositionFormData("attachment", downloadFileName);
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            return new ResponseEntity<>(FileUtils.readFileToByteArray(dstFile),
                    headers, HttpStatus.CREATED);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return null;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
