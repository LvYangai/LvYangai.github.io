(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{355:function(t,e,a){"use strict";a.r(e);var n=a(33),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子查询"}},[t._v("#")]),t._v(" 子查询")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("子查询其实就是要在一条查询语句中再嵌套1条或多条查询语句\n子查询可以出现的3个位置\n\t1、出现在where的后面作为一个或多个数据，\n注意：这个子查询只能返回1列n行的数据，如果返回的是1列1行数据那么可以使用简单条件例如 = <  <= > >= !=\n如果返回的是1列多行数据那么只能使用in 或not in\n\t2、出现在from后面作为一个临时表\n注意：\n\t1、这个子查询可以返回n行n列的数据，\n\t2、这个子查询的显示列名作为临时表的字段名使用，\n\t3、如果子查询中使用了函数 那么必须要为这个显示列起别名\n\t4、出现在select后面作为显示列的一部分\n注意：\n\t1、这个子查询需要返回1行1列的数据\n\t2、每一条记录都会执行一次这个子查询因此效率非常的低不推荐使用\n注意：\n\t1、无论子查询出现在什么位置上，子查询必须要放到()里面\n")])])]),a("h2",{attrs:{id:"_1-where中使用子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-where中使用子查询"}},[t._v("#")]),t._v(" 1.where中使用子查询")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("获取工资高于公司平均工资的所有员工\n思路\n\t1、获取公司的平均工资\n\tselect avg(sal) from emp\n\t2、使用步骤1的语句作为查询条件，获取工资高于步骤1查询结果的所有记录\n\tselect * from emp where sal>(select avg(sal) from emp)\n")])])]),a("h2",{attrs:{id:"_2-from中使用子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-from中使用子查询"}},[t._v("#")]),t._v(" 2.from中使用子查询")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("查询员工信息，查询哪些人是管理者，要求显示出其员工编号和员工姓名\n思路\n\t1、获取所有的管理者的编号\n\tselect mgr from emp where mgr is not null group by mgr\n\t2、使用步骤1的查询语句作为临时表temptable 然后使用emp与temptable进行多表查询\n\t使用emp中的empno与temptable表中的mgr消除笛卡尔积\n\tselect * from emp e inner join temptable tt on e.empno=tt.mgr \n\t3、使用步骤1的查询语句替换步骤2中的temptable\n\tselect * from emp e inner join (select mgr from emp where mgr is not null group by mgr) tt on e.empno=tt.mgr \n")])])]),a("h2",{attrs:{id:"_3-select中使用子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-select中使用子查询"}},[t._v("#")]),t._v(" 3.select中使用子查询")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("获取员工的信息以及部门的名称\n思路\n\t1.获取所有的员工信息\n\tselect * from emp e\n\t2.在步骤1的显示列中添加一个子查询，要根据当前记录行中的员工的部门编号作为条件查询dept表中的对应的部门名称\n\tselect *,(select dname from dept where deptno=e.deptno) from emp e\n")])])]),a("h2",{attrs:{id:"查询结果合并union"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询结果合并union"}},[t._v("#")]),t._v(" 查询结果合并union")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("将多条SQL语句的查询结果合并成1个结果\n语法格式\n\tselect语句1\n\tunion [all]\n\tselect语句2\n\t...\n\tunion [all]\n\tselect 语句n\n\n注意：\n\t1、union 的 all是可选的表示获取多条语句中所有的数据内容包括重复的 默认表示消除重复 all的效率较高\n\t如果可以确定这些语句中没有重复的数据可以使用 union all\n\t2、这些语句中返回的列的数量必须要完全相等\n\t3、所有的语句中每个列的数据类型必须完全对相应相同\n\t4、所有的语句中每个列的含义也必须相同\n\t5、这个合并效率不高因此不推荐使用\n")])])]),a("h2",{attrs:{id:"_4-查询job包含manager和包含salesman的员工"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查询job包含manager和包含salesman的员工"}},[t._v("#")]),t._v(" 4.查询job包含MANAGER和包含SALESMAN的员工")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("select * from emp where job in('MANAGER','SALESMAN')\n")])])]),a("h3",{attrs:{id:"使用union实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用union实现"}},[t._v("#")]),t._v(" 使用union实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("select * from emp where job ='MANAGER'\nunion\nselect * from emp where job ='SALESMAN'\n\nselect * from emp \nunion all\nselect * from emp \n")])])]),a("h2",{attrs:{id:"分页查询limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页查询limit"}},[t._v("#")]),t._v(" 分页查询limit")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("获取数据库表中的一部分的数据内容，用来提高数据库的响应速度，比较适合数据量大的时候使用\n分页也可以提高用户的体验\n\n语法格式\n\tselect 显示列 from 表名 [where] [group by[having]][order by] limit 跳过的记录数量,获取多少条记录\n\n跳过的记录数量 ：取值为正整数 ，大于等于0\n获取多少条记录： 取值为正整数 ，大于0\n")])])]),a("h2",{attrs:{id:"_5-获取前5条记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-获取前5条记录"}},[t._v("#")]),t._v(" 5.获取前5条记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("select  * from emp limit 0,5\n获取6到10的记录\nselect  * from emp limit 5,5\n获取薪水最高的前5条记录\nselect  * from emp order by sal desc limit 0,5\n")])])]),a("h2",{attrs:{id:"创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[t._v("#")]),t._v(" 创建表")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("语法格式\n\tcreate table 表名(  \n\t字段名1 数据类型[(长度)]  约束条件,\n\t字段名2 数据类型[(长度)]  约束条件,\n\t...\n\t字段名n 数据类型[(长度)]  约束条件\n\t)\n\n常用的数据类型\n\tvarchar(长度)\t                变长字符串，存储空间等于实际数据空间\n\tdouble (有效数字位数，小数位)\t数值型\n\tfloat(有效数字位数，小数位)\t数值型\n\tInt( 长度)\t                整型\n\tbigint(长度)\t               长整型\n\tdate\t                       日期型 年月日\n\tdatetime\t               日期型 年月日 时分秒 毫秒\n\n创建表t_student 拥有字段\n\tstu_no  字符串类型   长度64\n\tstu_name 字符串类型  长度64\n\tstu_age  数字       \n\n\tcreate table t_student(  \n\tstu_no varchar(64),\n\tstu_name varchar(64) ,\n\tstu_age int  \n\t);\n注意：\n\t1.创建表示数字和日期类型不需要指定长度，字符串必须指定长度 ，浮点型必须指定长度\n\t2.字段名在当前表中不能重复\n\t3.表名在当前库中不能重复\n")])])]),a("h2",{attrs:{id:"修改表结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改表结构"}},[t._v("#")]),t._v(" 修改表结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("语法格式  \n\talter table 表名 add    字段名  数据类型[(长度)] 约束条件    向表中添加一个字段\n\talter table 表名 modify 字段名 数据类型[(长度)] 约束条件   修改表中字段的类型 长度 以及约束\n\talter table 表名 change 旧字段名 新字段名[(长度)] 约束条件  修改字段的名字 类型 长度 以及约束\n\talter table 表名 drop   字段名  删除表中的字段同时删除数据\n")])])]),a("h2",{attrs:{id:"数据插入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据插入"}},[t._v("#")]),t._v(" 数据插入")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("语法格式\n\t全列数据插入，数据的类型以及含义必需与表中字段的默认顺序一一对应 不推荐\n\tinsert into 表名 values(数据1,数据2...,数据n) \n\t指定列插入 数据的类型以及含义必须与字段名的含义和类型一一对应 推荐\n\tinsert into 表名(字段名1,字段名2...,字段名n)values(数据1,数据2...,数据n) \n注意\n\t1.插入数据时非数字型的字段数据必须使用'' 包括字符串和日期，而且日期必须要符合数据库的默认日期格式\n\tMySQL默认的日期格式为 yyyy-MM-dd 或 yyyy-MM-dd hh:mm:ss例如 '2019-03-26 15:21:20'\n")])])]),a("h2",{attrs:{id:"_6-向t-stu表中插入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-向t-stu表中插入数据"}},[t._v("#")]),t._v(" 6.向t_stu表中插入数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("insert into t_stu(stu_no,stu_name,stu_age,stu_address)values('123456','张三',23,'北京'); \ninsert into t_stu values('张三','123456',23,'北京'); \n")])])]),a("h1",{attrs:{id:"修改数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改数据"}},[t._v("#")]),t._v(" 修改数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("语法格式\n\tupdate 表名 set 字段名1=数据,字段名2=数据...,字段名n=数据 [where 条件]\n注意：\n\t1.where 条件是可选的但是却必须要添加否则会修改表中所有的数据\n")])])]),a("h2",{attrs:{id:"_7-修改t-stu表中stu-no为123456的学生年龄和地址为25-和上海"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-修改t-stu表中stu-no为123456的学生年龄和地址为25-和上海"}},[t._v("#")]),t._v(" 7.修改t_stu表中stu_no为123456的学生年龄和地址为25 和上海")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("update t_stu set stu_age=25,stu_address='上海' where stu_no='123456'\n")])])]),a("h2",{attrs:{id:"删除数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[t._v("#")]),t._v(" 删除数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("语法格式\n\tdelete from 表名 [where 条件]\n注意：\n\t1.where 条件是可选的但是却必须要添加否则会删除表中所有的数据\n")])])]),a("h2",{attrs:{id:"_8-删除t-stu表中stu-no为123456-的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-删除t-stu表中stu-no为123456-的数据"}},[t._v("#")]),t._v(" 8.删除t_stu表中stu_no为123456 的数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("delete from t_stu  where stu_no='123456'\n")])])]),a("h1",{attrs:{id:"约束条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约束条件"}},[t._v("#")]),t._v(" 约束条件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("常用的约束\n\t1、非空约束，not null  如果某个列添加非空约束那么在插入数据就必须要插入这个字段否则直接报错\n\t2、唯一约束，unique    如果某个列添加唯一约束那么这个列中的数据是不能重复的\n\t3、主键约束，primary key 如果某个列添加主键约束那么这个列不能为空也不能重复，主键通常不需要有任何的业务逻辑\n\t含义，作用是标记这条记录在表中的唯一性，通常我们会命名为 id bigint类型  自动递增\n\t4、外键约束，foreign key 如果某个列添加了外键约束那么这个列的值可以为空但是不能填写一个不存在的值，作用是\n\t   完成2个表之间的关联关系，例如学生中应该存放一个班级表中的主键作为外键，用于约束这个学生\n\t   是哪个班级下的\n\n约束条件的使用语法有2中\n\t1.在创建表示添加\n\t2.在修改表结构时添加或修改或删除\n")])])]),a("h2",{attrs:{id:"数据的常用设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据的常用设计模式"}},[t._v("#")]),t._v(" 数据的常用设计模式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t1.一对多 ：一个表中的一条记录要对应另外一个表的多条记录，例如一个班级下可以拥有多个学生\n\t实现方式： 在多的一方中定义个字段用于存放一的一方中的主键作为外键\n\n\t2.一对一：一表中的一条记录只能对应另外一张表中的一条记录，例如学生和学生的详细信息\n\t实现方式：在2个表任意的一个表中添加一个列用于存放另外一张表中的主键作为外键，并设置这个外键列为唯一约束\n\t推荐在详情表中添加外键\n\t3.多对多：2张表中的每条记录都会对应另外一张表中的多条记录，例如学生和课程\n\t实现方式：需要定义第三张表，这个表中只需要拥有2个列分别存放2个表中的id作为外键\n\n\t4.自关联一对多：当前表中的一条记录要对应当前表中的多条记录，例如商品的类型\n\t实现方式：在当前表中定义一个列用于存放当前表中某一条记录的主键值\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);