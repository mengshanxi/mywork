package com.mywork.api;

import com.mywork.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Author songtao
 * @Description
 * @Date 12:04 2018/10/26
 **/
public interface IUserService {
    List<User> getUsers(@Param("keyword") String keyword);
}
