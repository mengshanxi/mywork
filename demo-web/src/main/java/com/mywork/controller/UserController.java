package com.mywork.controller;

import org.springframework.stereotype.Component;

import javax.ws.rs.*;


/**
 * @Description: 告警数据 web 接口.
 * @Author: yutaoxu
 * @Date: 2018/4/24
 * @Modified by:
 */

@Component
@Path("/api/v1/user")
@Produces("application/json")
@Consumes("application/json")
public class UserController {

    @POST
    @Path("/login")
    public String insertAlarmData() {
        return "success";
    }


}
