```
#重启mysql
#第一步 以root账号登录mysql
mysql -u root -p
#输入密码之后，进入mysql命令行
#输入
SHUTDOWN;
#命令行回显示 Query OK, 0 rows affected (0.00 sec)
#退出mysql命令行
#输入
sudo /usr/local/mysql/support-files/mysql.server restart
# 会显示以下数据，表示成功
#  ERROR! MySQL server PID file could not be found!
# Starting MySQL
# . SUCCESS! 


```
