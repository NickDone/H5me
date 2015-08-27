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
		
	}
?>