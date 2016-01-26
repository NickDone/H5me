<?php 
	require("ModleBase.php");
	
	class DairyModle extends lxdModleBase{
		
		/*
		 * diarys {pagecount,pagesize,totalcount,current[]}
		 * dairyDetials {id,title,readcount,date}
		 * */
		
		private $pagesize=10;
		
		private $total=0;
		
		/*get*/
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
			$sql2="select id from mydairy where id<".$id." order by id desc limit 0,1 ";
			$sql3="select id from mydairy where id>".$id." limit 0,1";
			
			$result=$db->get_all($sql);
			
			$result['pre']=$db->get_one($sql2);
			$result['next']=$db->get_one($sql3);


			$sql="update mydairy set Readers=Readers+1 where id=".$id;
			$db->query($sql);

			return $result;
			
		}
		
		public function GetDairyComments($id){
			$db=new DBHelper;
			//select comment main
			$sql1="select * from comments where parentid =".$id;
			
			$re1=$db->get_all($sql1);
						
			//select comment reply
			$count=count($re1);
			for($i= 0; $i< $count; $i++){ 
  				$replyid=$re1[$i]["id"];
				$sql2='select * from comments where replyid='.$replyid;
				$re2=$db->get_all($sql2);
				$re1[$i]["reply"]=$re2;
  			} 	
			
			$sql3="update mydairy set CommentCount=".$count." where id=".$id;
			$db->query($sql3);
			
			return $re1;
		}
		
		public function ILike($id){
			$db=new DBHelper;
			$sql="update mydairy set Likers=Likers+1 where id=".$id;
			$db->query($sql);	
			return "ok";
		}
		
		public function GetRecommend(){
			$db=new DBHelper;
			$sql="select id,Title,Abstract,CommentCount,Readers,Likers,UpdateDate from mydairy where IsRecommend=1 limit 0,4";
			$re=$db->get_all($sql);
			return $re;
		}
		
		/*post*/
		public function Reply($info){
			$db=new Dbhelper;
			$info["time"]= date('y-m-d H:i:s',time());
			$db->insert("comments", $info);
			$info["id"]=$db->insert_id();
			return $info;
		}
		
		
		
	}
	
	/*
	 * test*/
//	 $t=new DairyModle;
//	 echo json_encode($t->GetRecommend());
	
	?>
	