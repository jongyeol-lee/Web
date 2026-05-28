<?php
    header("Content-Type:text/html; charset=utf-8");

    $r_name= $_POST['r_name'];
    $r_phone= $_POST['r_phone'];
    $r_email= $_POST['r_email'];

    echo "<p>이름: $r_name</p>";
    echo "<p>전 화: $r_phone</p>";
    echo "<p>이메일: $r_email</p>";

    $now= date('Y-m-d H:i:s');

    $db= mysqli_connect('localhost','mbcaadmin','a1s2d3f4!','mbcaadmin');

    mysqli_query($db, "set names utf8");

    $sql = "INSERT INTO Day04166 (r_name, r_phone, r_email, r_date)
    VALUES ('$r_name', '$r_phone', '$r_email', '$now')";

    $result= mysqli_query($db, $sql);

    if($result){
        echo "예약이 완료되었습니다.<br>";
    }else{
        echo "예약에 실패했습니다. 다시 시도해주세요. <br>";
    }

    //4. 연결종료
    mysqli_close($db);




?>