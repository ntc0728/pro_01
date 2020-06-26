/*
// 忽略文件
.gitignore

glob模式
星号*匹配零或多个任意字符
[abc]匹配任何一个列在方括号中的字符
问号？只匹配一个任意字符

git log

git reflog --oneline 一行显示，简洁一点

回退到某个版本：git reset --hard xxx


git init
git add / git add .
git status / git status -s
git commit -m '描述信息'
git commit -a -m '描述信息'
有效的文件是：之前被添加到追踪文件，修改后的文件


忽略文件：是之前没有被添加到追踪的文件


remote:远程的意思
add:添加
origin:默认的名字 远程的分支的名称
xx.git:明确的远程的仓库地址
git remote add origin git@github.com:ntc0728/pro_01.git
git push -u origin master

push:推送
-u:固定用法

git remote rm origin
git remote add origin https://github.com/ntc0728/pro_01.git
git push -u origin master

后续提交：git push
git status -> git add . -> git status -> git commit -m '描述信息' -> git push

git push -u origin master -f force 强制push
控制面板 -> windows凭证 -> 需要删除 ->
Invalid username and password ->


生成 ssh key 命名： ssh-keygen -t rsa 4096 -C '1343810646@qq.com'
C:\Users\用户文件夹\.ssh 目录中生成 id_rsa -T git@github.com
检查：ssh key 是否配置成功的命令:ssh -T git@github.com

克隆：就是把远程的代码拷贝一份到本地
git clone git@github.com:ntc0728/pro_01.git


分支：树的树杈 branch
3个前端 -> 没人一个分支 -> 合并分支+
master分支，一般情况下不在master主分支里面开发，主要做合并的分支
功能分支：主要做某一块的业务功能 login master 分支合并


查看分支列表：git branch * 标识的是当前所处的分支
创建功能分支 git branch 分支名称
特点：在master分支上，新建了一个login分支上面的代码和master分支上完全一致
      不管是建了多少分支，此时仍在主分支上，不会进行切换

切换分支：git checkout 分支名称

先创建，同时并切换分支：git checkout -b 分支名称

合并分支：1.先切换分支 git checkout 分支名称    (主分支合并功能分支)
         2.再运行 git merge 命令，合并分支







*/
