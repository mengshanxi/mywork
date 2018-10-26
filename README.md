service-quickStart-template 是锐智平台项目生成脚手架，基于此脚手架生成 maven 项目模块，
开发人员能快速的基于模版进行开发，减少前期熟悉开发框架时间。同时
也通过此模版来统一平台开发规范，实现工程能力提升，沉淀工程规范。
## 目的
  
   - 工程化
   - 服务化
   - 易用性
 
## 工程涉及的的技术
   - 核心框架：springboot 1.5.8、dubbo、jersey.
   - 数据库连接池：druid.
   - 持久层框架：mybatis-spring-boot-starter 或 mybatis3.4.2.
   - 分页插件：pagehelper-spring-boot-starter.
   - 日志管理：SLF4J、logback.
   - 编码规约：阿里巴巴 JAVA 开发规范插件.
   - 第三方插件： lombok.
   - 中间件客户端：rabbitmq、redis.
 
  
## 结构说明
  1. app-bom    工程依赖管理.
  2. app-manager  工程胶合层，service 层通用能力下沉，复杂 dao 组合.
  3. app-repository 数据操作层，与数据库进行交互.
  4. app-rpc-api 服务向外暴露的 rpc api 接口.
  5. app-service 服务业务逻辑实现.
  6. app-web 服务 restful 接口.
  
  项目文件说明
  
  - appctl.sh 文件主要作用为阿里云效部署时使用.
  - settings.xml 文件主要目的是指向云效仓库.
  - xxx.release 阿里云效发布时构建文件.
  
## 分层领域模型说明

- DO（Data Object）:与数据库表结构一一对应，通过 DAO 层向上传输数据源对象.
- DTO (Data Transfer Object) : 数据传输对象，Service 层向外传输的对象.
- BO (Bussiness Object) :业务对象，由 Service 层封装的输出业务能力的对象.
- VO (Value Object): 显示对象，由 web 层向外输出的对象.

## 版本说明
  1. 目前为 v1.0.8版本，该版本为测试验证版本.

## 功能
  1. 由该骨架代码生成 maven 原型.

  
## 使用说明

  1. 主要要目的是为了规范化后端代码的开发，使得开发规范统一、模版统一.
  2. 依赖xxx.
  
  
 
 