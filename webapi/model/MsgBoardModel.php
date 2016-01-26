<?php
/**
 * Created by PhpStorm.
 * User: Lixiaodong
 * Date: 2016/1/26
 * Time: 21:35
 */
require("ModleBase.php");

class MsgBoardModel extends lxdModleBase{
    private $msg=array();

    function GetMsg(){
        $db=new DBHelper;
        $sql="SELECT * FROM  `messageboard`";
        $_reData=$db->get_all($sql);
        return $_reData;
    }

    function LeaveMsg($msg)
    {
        $db=new DBHelper;
        $db->insert("messageboard", $msg);
        $msg["id"]=$db->insert_id();
        return $msg;
    }

}

?>