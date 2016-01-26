<?php
/**
 * Created by PhpStorm.
 * User: Lixiaodong
 * Date: 2016/1/26
 * Time: 21:32
 */

class MessageBoardController{

    function  LeaveMsg($msg){
        header("Content-type:text/html;charset=utf-8");
        $msginfo = (Array)json_decode($msg);
        require("../model/MsgBoardModel.php");
        $model=new MsgBoardModel();
        $re=$model->LeaveMsg($msginfo);
        echo json_encode($re);
    }

    function GetMsg(){
        header("Content-type:text/html;charset=utf-8");
        require("../model/MsgBoardModel.php");
        $model=new MsgBoardModel();
        $re=$model->GetMsg();

        echo json_encode($re);
    }


}

?>