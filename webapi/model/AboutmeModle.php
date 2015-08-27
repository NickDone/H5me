<?php
	require("ModleBase.php");
	
	class AboutmeModle extends lxdModleBase{
		private $_myInfo=array();
		private $_reData=array();
		function GetMyInfo(){
				$db=new DBHelper;
				$sql="SELECT * FROM  `myinformation`"; 
				
				$_reData=$db->get_all($sql);
				
				return $_reData;
		}
		
		
		
		
	}



 ?>