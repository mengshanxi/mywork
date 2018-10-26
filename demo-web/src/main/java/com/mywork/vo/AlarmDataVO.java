package com.mywork.vo;

import lombok.Data;


/**
 * @Description: 告警数据 VO,主要用户 Restful 接口间数据交互.
 * @Author: yutaoxu
 * @Date: 2018/1/31
 * @Modified by:
 */
@Data
public class AlarmDataVO {
    private String resIp;
    private String resName;
    private String serviceId;
    private String type;
    private String status;
    private String ext;
    private String time;
    private String level;
    private String updateTime;
    private String open;
    private String vipId;
    private String harm;
    private String reason;
    private String devId;
    private String suggestion;
    private String urgencyDegree;
}
