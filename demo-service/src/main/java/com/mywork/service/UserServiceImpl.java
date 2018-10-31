package com.mywork.service;

import com.mywork.api.IUserService;
import com.mywork.entity.User;
import com.mywork.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author songtao
 * @Description
 * @Date 12:07 2018/10/26
 **/
@Service(value = "userService")
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> getUsers(String keyword) {
        return userMapper.getUsers(keyword);
    }
}
