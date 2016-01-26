<?php 

	
	class AboutmeController{
			
		function  MyInfo(){
			header("Content-type:text/html;charset=utf-8");
			
			require("../model/AboutmeModle.php");
			$model=new AboutmeModle;
			
			$myinfo=$model->GetMyInfo();
			
		//	echo  preg_replace("#\\\u([0-9a-f]+)#ie", "iconv('UCS-2', 'UTF-8', pack('H4', '\\1'))", json_encode($myinfo));
			echo json_encode($myinfo);
		}
		
	}


	


?>
