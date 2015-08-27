<?php 
	require("ModleBase.php");
	
	class DairyModle extends lxdModleBase{
		
		/*
		 * diarys {pagecount,pagesize,totalcount,current[]}
		 * dairyDetials {id,title,readcount,date}
		 * */
		
		private $pagesize=10;
		
		private $total=0;
		
		
		public function GetDairy($page){
			$db=new DBHelper;
			$total=$db->get_count("select count(*) from mydairy");
						
			if($page<0||$page>$total){
				return null;
			}
			$page-=1;
			$sql="select id,Title,Abstract,CommentCount,Readers,Likers,UpdateDate from mydairy limit ".($page*$this->pagesize).",".(($page+1)*$this->pagesize);
			
			$result=$db->get_all($sql);
			$redata=array();
			$redata["pagetotal"]=ceil($total/$this->pagesize);
			$redata["page"]=$page+1;
			$redata["data"]=$result;				
			return $redata;	
		}
		
		
		public function GetDairyDetailsById($id){
			$db=new DBHelper;
			
			$sql="select * from mydairy where id=".$id;
			
			$result=$db->get_all($sql);
			
			return $result;
			
		}
		
		public function GetDairyComments($id){
			$db=new DBHelper;
			//select comment main
			$sql1="select * from comments where parentid =".$id;
			
			$re1=$db->get_all($sql1);
						
			//select comment reply
			for($i= 0; $i< count($re1); $i++){ 
  				$replyid=$re1[$i]["id"];
				$sql2='select * from comments where replyid='.$replyid;
				$re2=$db->get_all($sql2);
				$re1[$i]["reply"]=$re2;
  			} 	
			return $re1;
		}
		
		
		
		
	}
	
	/*
	 * test*/
//	 $t=new DairyModle;
//	 echo json_encode($t->GetDairyComments(1));
	
	?>
	