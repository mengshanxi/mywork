package com.mywork.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/**
 * @Author songtao
 * @Description
 * @Date 20:39 2018/10/31
 **/
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class WebsiteDTO {
    private String merchantName;
    private String websiteName;
    private String domainName;
    private String industry1;
    private String industry2;
    private String attention;
}
