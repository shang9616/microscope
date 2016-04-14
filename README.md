# microscope
本项目是根据《Discover Meteor》中文版学习Meteor的Dome。<br />
《Discover Meteor》中文版网址：http://zh.discovermeteor.com，可下载为PDF文件，方便阅读。

# Meteor
Meteor版本:1.3.1<br>

## Day3
1、学习session，Session是Meteor最有用的功能之一的探索。从中我们应该要学会：<br>
  1）应该在Session或者URL中存储用户状态。从而在动态代码重载的时候，让用户发生中断的机会降到最低。<br>
  2) 尽可能使用URL去存储你想要共享在用户之间的状态。<br>
2、增加用户功能。<br>
3、增加创建帖子。按书上使用的{{pathFOr 'template'}}和FlowRouter.go()，需增加以下pageback: arillo:flow-router-helpers<br>
4、路由访问权限的控制：<br>
<code>FlowRouter.route('/submit', {
	name: 'postSubmit',
	triggersEnter: [requireLogin],
	action() {
		BlazeLayout.render('layout', {main: 'postSubmit'});
	}
});

function requireLogin(context, redirect, stop) {
	if(! Meteor.user()) {
		BlazeLayout.render('layout', {main: 'accessDenied'});
		stop();
	} 
}</code>
5、创建postInsert的Meteor.methods

## Day2
1、创建postsList、postItem模板。<br>
2、创建post的Collection。<br>
3、publish与subscribe的使用，是Meteor的最基本最重要的概念之一。<br>
4、使用iron:router路由，路由模板{{> yield}}。<br>
   由于此路由在Meteor1.3版本好像取消了，现在改用官方的版本kadira:flow-router和配套的模板管理器<br>
   1）kadira:flow-router(https://github.com/kadirahq/flow-router)<br>
   2) kadira:blaze-layout(https://github.com/kadirahq/blaze-layout)<br>
   3) kadira:meteor-react-layout(https://github.com/kadirahq/meteor-react-layout)<br>
   meteor add kadira:flow-router kadira:blaze-layout<br>
   ** 也可以看看这个FlowRouter(https://github.com/loongmxbt/orion-kickstarter)的实例。

## Day 1
1、使用Github For Mac版本，在本地创建microscope的Repository。<br>
2、在终端输入：meteor crteate microscope && cd microscope。<br>
3、修改client目录下的main.html文件。
