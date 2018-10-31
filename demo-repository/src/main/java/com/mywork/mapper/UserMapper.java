package com.mywork.mapper;

import com.mywork.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * @author mengshanxi
 * @ClassName: UserMapper
 * @Description: TODO
 * @date 2017年9月13日 上午11:52:13
 */
@Repository
public interface UserMapper {

    List<User> getUsers(@Param("keyword") String keyword);

}
