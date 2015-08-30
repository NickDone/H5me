<?php
	
	class DairyController{
		
		function GetDairyByPage($page){
			
			header("Content-type:text/html;charset=utf-8");
			
			require('../model/DairyModle.php');
			
			$d=new DairyModle;
			$r=$d->GetDairy($page);
			echo json_encode($r);
		}
		
		
		function GetDairyDetailsById($id){
			
			header("Content-type:text/html;charset=utf-8");
			
			require('../model/DairyModle.php');
			
			$d=new DairyModle;
			$r=$d->GetDairyDetailsById($id);
			echo json_encode($r);
		}
		
		function GetDairyComments($id){
			header("Content-type:text/html;charset=utf-8");
			
			require('../model/DairyModle.php');
			
			$d=new DairyModle;
			$r=$d->GetDairyComments($id);
			echo json_encode($r);
			
		}
		
		function ILike($id){
			header("Content-type:text/html;charset=utf-8");
			
			require('../model/DairyModle.php');
			
			$d=new DairyModle;
			$r=$d->ILike($id);
			
			echo json_encode($r);
		}
		
		function GetRecommend(){
			header("Content-type:text/html;charset=utf-8");
			
			require('../model/DairyModle.php');	
			$d=new DairyModle;
			$r=$d->GetRecommend();
			
			echo json_encode($r);
		}
		
		function Reply($postdata){
			$info = (Array)json_decode($postdata);
			
			require('../model/DairyModle.php');
			
			$d=new DairyModle;
			
			$re=$d->Reply($info);
			
			echo json_encode($re);
			
		}
		
		
	}
	
//	test
//	$t=new DairyController;
//	$t->GetDairyByPage(1);

?>