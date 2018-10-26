package com.mywork.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


/**
 * @Description: 告警数据 web 接口.
 * @Author: yutaoxu
 * @Date: 2018/4/24
 * @Modified by:
 */

@Controller
@RequestMapping(value = "/api/v1/")

public class MainController {

    @RequestMapping(value = "/**", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

}
