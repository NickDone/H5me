-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
<<<<<<< HEAD
-- 生成日期: 2016 年 01 月 26 日 22:11
=======
-- 生成日期: 2016 年 01 月 24 日 13:49
>>>>>>> origin/master
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `lxdonge`
--

-- --------------------------------------------------------

--
-- 表的结构 `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(200) NOT NULL,
  `parentid` int(11) NOT NULL DEFAULT '0',
  `replyid` int(11) NOT NULL DEFAULT '0',
  `time` datetime NOT NULL,
  `nicky` varchar(18) NOT NULL,
<<<<<<< HEAD
  `headPic` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=51 ;
=======
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=43 ;

--
-- 转存表中的数据 `comments`
--

INSERT INTO `comments` (`id`, `content`, `parentid`, `replyid`, `time`, `nicky`) VALUES
(2, '测试', 0, 1, '2015-08-12 00:00:00', 'Rdsw'),
(3, '测试2', 1, 0, '2015-08-04 00:00:00', 'SW'),
(4, '测试3', 1, 0, '2015-08-06 00:00:00', 'Vdds'),
(5, '测试回复', 0, 1, '2015-08-05 00:00:00', 'Opdw'),
(6, '测试回复2', 0, 1, '2015-08-04 00:00:00', 'Bdsa'),
(7, '测试回复2', 0, 1, '0000-00-00 00:00:00', 'Ares'),
(8, '扯啥', 0, 4, '0000-00-00 00:00:00', '我'),
(9, '瞎扯淡', 0, 4, '0000-00-00 00:00:00', '我'),
(10, '媛媛，你是我心目中美化了无数次的女神', 0, 3, '0000-00-00 00:00:00', '我'),
(11, '你说你会嫁给我', 0, 3, '2015-08-30 00:00:00', '我'),
(12, '我爱你', 0, 4, '2015-08-30 03:50:18', '我'),
(13, '爱玩', 0, 4, '0000-00-00 00:00:00', '我'),
(14, '爱妻', 0, 4, '2015-08-30 15:52:33', '我'),
(15, '测试', 2, 0, '2015-08-30 16:03:15', '我'),
(16, '测绘', 0, 15, '2015-08-30 16:03:27', '我'),
(17, '阿斯蒂芬', 2, 0, '2015-08-30 16:03:35', '我'),
(18, '表示可以', 3, 0, '2015-08-30 16:03:58', '我'),
(19, '可以加', 3, 0, '2015-08-30 16:04:08', '我'),
(20, '地方', 0, 18, '2015-08-30 16:04:21', '我'),
(21, '大师傅', 0, 19, '2015-08-30 16:06:07', '我'),
(22, '心一跳', 3, 0, '2015-08-30 16:06:13', '我'),
(23, '信他', 0, 0, '2015-08-30 16:07:49', '我'),
(24, '发表', 3, 0, '2015-08-30 16:09:07', '我'),
(25, '心跳', 0, 0, '2015-08-30 16:09:13', '我'),
(26, '心跳', 0, 24, '2015-08-30 16:09:24', '我'),
(27, '发表是', 3, 0, '2015-08-30 16:09:35', '我'),
(28, '成都', 0, 0, '2015-08-30 16:10:07', '我'),
(29, '就爱', 3, 0, '2015-08-30 16:12:08', '我'),
(30, '测试', 0, 29, '2015-08-30 16:12:31', '我'),
(31, '我爱北京', 3, 0, '2015-08-30 16:12:43', '我'),
(32, '才怪呢', 0, 31, '2015-08-30 16:12:50', '我'),
(33, '我们在哪儿见过，你记得吗', 3, 0, '2015-08-30 16:15:55', '我'),
(34, '可能吧', 0, 33, '2015-08-30 16:16:03', '我'),
(35, 'daf', 0, 4, '2015-08-30 16:31:08', '我'),
(36, 'ds', 0, 1, '2015-08-30 16:35:32', 'Marker'),
(37, '好吧', 1, 0, '2015-08-30 16:36:22', '不做大哥很多年'),
(38, '一不小心爱上你了', 0, 37, '2015-08-30 16:39:00', '我的名字叫更多'),
(39, '我', 0, 37, '2015-08-30 16:39:13', '爱我'),
(40, '发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢   发表一个很长段落会镇么样呢 发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发表一个很长段落会镇么样呢发', 0, 3, '2015-08-30 17:08:34', 'Marker'),
(41, '啊第三方', 0, 3, '2015-08-30 17:09:03', 'Marker'),
(42, 'fuck', 4, 0, '2015-09-15 20:13:18', 'Marker');
>>>>>>> origin/master

-- --------------------------------------------------------

--
-- 表的结构 `dairytype`
--

CREATE TABLE IF NOT EXISTS `dairytype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typename` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

<<<<<<< HEAD
-- --------------------------------------------------------

--
-- 表的结构 `messageboard`
--

CREATE TABLE IF NOT EXISTS `messageboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(500) NOT NULL,
  `name` varchar(20) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=gbk AUTO_INCREMENT=3 ;
=======
--
-- 转存表中的数据 `dairytype`
--

INSERT INTO `dairytype` (`id`, `typename`) VALUES
(1, '日记'),
(2, '技术相关');
>>>>>>> origin/master

-- --------------------------------------------------------

--
-- 表的结构 `mydairy`
--

CREATE TABLE IF NOT EXISTS `mydairy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(64) NOT NULL,
  `Content` varchar(7000) NOT NULL,
  `CommentCount` int(11) NOT NULL DEFAULT '0',
  `Readers` int(11) NOT NULL DEFAULT '0',
  `Likers` int(11) NOT NULL DEFAULT '0',
  `UpdateDate` date NOT NULL,
  `IsRecommend` tinyint(1) NOT NULL,
  `Abstract` varchar(60) NOT NULL,
  `Category` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

<<<<<<< HEAD
=======
--
-- 转存表中的数据 `mydairy`
--

INSERT INTO `mydairy` (`id`, `Title`, `Content`, `CommentCount`, `Readers`, `Likers`, `UpdateDate`, `IsRecommend`, `Abstract`, `Category`) VALUES
(2, '测试', ' 从初三萨芬阿萨德 发奥德赛  奥德赛', 2, 0, 1, '2015-08-11', 0, '从初三..', 1),
(3, 'jquery返回页面顶部', '//2个div，点击某个时回到顶部  <div style="height:1000px">111111111111111</div>  <div id="top" >top</div>  <引用JQuery>  <script type="text/javascript">  $(function(){   $("#top").click(function() {       $("html,body").animate({scrollTop:0}, 500);   });   })  </script>', 8, 0, 1, '2015-08-05', 0, '此博文图片样式引用腾讯网站，效果如下：', 1),
(4, 'SQL数据插入（复制）命令', 'insert into C select * from B 一样的啊 insert into c(c1,c2,c3) select b1,b2,b3 from B', 1, 0, 1, '2015-08-03', 1, 'SQL数据插入（复制）命令', 1),
(5, '技术相关', '测试技术相关的东西', 0, 0, 0, '2015-08-06', 1, '技术相关的东西', 2);

>>>>>>> origin/master
-- --------------------------------------------------------

--
-- 表的结构 `myinformation`
--

CREATE TABLE IF NOT EXISTS `myinformation` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(55) NOT NULL,
  `Content` varchar(255) NOT NULL,
  `Userid` varchar(64) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

<<<<<<< HEAD
=======
--
-- 转存表中的数据 `myinformation`
--

INSERT INTO `myinformation` (`Id`, `Title`, `Content`, `Userid`) VALUES
(1, '请叫我', '东哥', ''),
(2, '多大了', '今年就要满24了', '');

>>>>>>> origin/master
-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

<<<<<<< HEAD
=======
--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(2, 'lxdadmin', '80e6b1f7c70145b00461');

>>>>>>> origin/master
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
