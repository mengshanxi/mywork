package com.mywork.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/**
 * @Author songtao
 * @Description
 * @Date 20:16 2018/10/31
 **/
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class WebsiteParamVO {

    private int currentPage=0;
    private int pageSize=10;
    private String merchantName;
}
