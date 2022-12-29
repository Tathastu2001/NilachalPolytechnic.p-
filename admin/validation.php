<?php
session_start();



$con = mysql_connect('localhost','root','1234567890qwertyuiop' );
mysql_select_db($con, 'resturant_management');
if(isset(['user_id']))
{
$name= $_POST['user_id'];
$password= $_POST['password'];

$s="select * from registation where name='$name'&& password='$password'";
$result=mysql_query($con,$s);
    
if(mysql_num_rows($result) == 1)
{
while($registation=mysqli_fetch_assoc($result))
{
    if($name==$registation['user_id'] && $password==$registation['password'])
    {
       
    }
}

}else{
   echo 'return 0';
}
}
?>