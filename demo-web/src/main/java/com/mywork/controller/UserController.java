package com.mywork.controller;

import com.mywork.api.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * @Description: 告警数据 web 接口.
 * @Author: yutaoxu
 * @Date: 2018/4/24
 * @Modified by:
 */

@Controller
@RequestMapping(value = "/api/v1/app", method = RequestMethod.GET)

public class UserController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/welcome")
    @ResponseBody
    public String welcome() {
        return "success";
    }

    @RequestMapping(value = "/users")
    @ResponseBody
    public Object getUses() {
        return userService.getUsers("mengjingyi");
    }
}
