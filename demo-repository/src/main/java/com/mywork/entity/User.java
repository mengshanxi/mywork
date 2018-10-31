package com.mywork.entity;

import lombok.Data;

import java.util.Date;

/**
 * @author mengshanxi
 * @ClassName: User
 * @Description: TODO
 * @date 2017年9月13日 上午11:52:48
 */
@Data
public class User {
    private Integer id;
    private String password;
    private String username;
    private String fullname;
    private String email;
    private String mobile;
    private String userType;
    private String recAlert;
    private Date lastUpdate;
    private Date lastLogin;
}