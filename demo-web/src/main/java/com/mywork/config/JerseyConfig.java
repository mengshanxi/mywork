package com.mywork.config;

import com.mywork.controller.UserController;
import org.glassfish.jersey.logging.LoggingFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

/**
 * @Description: jersey 注册信息.
 * @Author: yutaoxu
 * @Date: 2018/1/11
 * @Modified by:
 */
@Component
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig(){
        register(ValidationExceptionMapper.class);
        register(LoggingFeature.class);
        register(UserController.class);
    }
}
