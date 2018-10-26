#!/bin/bash

#需要执行的命令.
cmd=$1

#容器名称.
name=$2

#镜像版本
image_version=$3

#环境 1:本地环境，2:测试环境，3：预发布环境
env=$4


#判断容器是否已经存在(不管是否在运行)
check_is_exists(){
  set -x
  ex=$(docker ps -a | grep '$name' | awk '{print $1}' | wc -l)
  echo "$ex"
  set +x
  if [ ${#ex} -gt 0  ]
  then
    echo "1"
    exit 0
  fi
  echo  "0"
}

#脚本使用方式
usage(){
 echo "该命令的使用格式为 $0 create|stop|start|restart|remove  镜像名称 镜像版本 启动环境"
 echo "比如在本地环境创建镜像 test,版本为 1.8.0, $0 create test 1.8.0 1"
 exit 0
}

#停止容器.
stop(){
  status=$(check_is_exists)
  if [ $status = "0" ]
  then
     echo "容器 $name 并没有运行"
  else
     echo "停止 $name 容器"
     docker stop $name

  fi
}

#移除容器。
remove(){
  status=$(check_is_exists)
  if [ $status = "0" ]
  then
      echo "容器 $name 并没有运行"
  else
      echo "移除 $name 容器"
      docker rm -f $name
  fi
}

#启动容器.
start(){
  set -x
  stop
  remove
  echo "启动 $name 容器"
  if [ $env = 1 ]
  then
    docker run -d -p 8888:8080 --name $name -e "JAVA_OPTS=-Dspring.profiles.active=test -Xmx512m -Xms512m"  $name:$image_version
  else
    docker run -d -p 8888:8080 --name $name -e "JAVA_OPTS=-Dspring.profiles.active=prod -Xmx512m -Xms512m"  $name:$image_version
  fi
  set +x
}

#重启容器.
restart(){
  status=$(check_is_exists)
  if [ $status = "0" ]
  then
      echo "容器 $name 并没有运行"
  else
      echo "重启 $name 容器"
      docker restart $name

  fi
}

#创建镜像
create_image(){
 echo "切换到服务部署目录"
 cd /data/riil-service/$name

 echo '开始解压部署包'
 tar -zxvf $name*.tar.gz

 echo "进入 docker 脚本目录"
 cd ./$name/docker/

 echo "重命名 Dockefile"
 mv Dockerfile.yml Dockefile

 echo "copy 应用 lib 目录下 jar 包到当前 docker 部署目录"
 cp ../lib/*.jar ./


 echo "mv 重命名 jar 名称."
 mv *.jar app.jar

 echo "开始构建 $name 服务镜像."
 docker build -t $name:$image_version .
}

#脚本执行入口点.
if [ $# -eq 0 ] || [ $# -eq 1 ]
then
    usage
fi

case "$1" in
   create)
           stop
           remove
           create_image
           start
           ;;

   stop)
           stop
           ;;
   start)
           start
           ;;
   restart)
           restart
           ;;
   remove)
            remove
            ;;
  *)
       echo "无效的命令行参数 $0 $1 $2 $3 $4"
esac