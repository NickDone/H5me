<?php
	$request_method = strtolower($_SERVER['REQUEST_METHOD']);
	switch($request_method){
		case 'get':
			$controller=$_GET['c'];
			$controllerName=$controller.'Controller';
			$method=$_GET['m'];
			$controllerPath=$controllerName.'.php';
	
			$params=$_GET['p'];
			
			require($controllerPath);
			$ctr=new $controllerName;
			if($params!=0)
				$ctr->$method($params);
			else
				$ctr->$method();
			break;
		case 'post':
			
			$controller=$_GET['c'];
			$controllerName=$controller.'Controller';
			$method=$_GET['m'];
			$controllerPath=$controllerName.'.php';
			require($controllerPath);
			$ctr=new $controllerName;
			
			//获取postdata
			$postdata=file_get_contents("php://input") ;
			$ctr->$method($postdata);
			break;
	}
	
	
	
	
	
?>