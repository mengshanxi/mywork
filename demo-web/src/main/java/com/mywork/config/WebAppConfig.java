package com.mywork.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @Author songtao
 * @Description
 * @Date 13:43 2018/10/27
 **/
@Configuration
public class WebAppConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addInterceptors(final InterceptorRegistry registry) {
       // registry.addInterceptor(new MyInterceptor())
               // .addPathPatterns("/**")
               // .excludePathPatterns("/index", "/pages/index.html", "/logout/**", "/loginPage/**", "/error/**");
        super.addInterceptors(registry);
    }
}