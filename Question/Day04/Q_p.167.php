<?php

    header("Content-Type:text/html; charset=utf-8");

    $r_name= $_POST['r_name'];
    $r_phone= $_POST['r_phone'];
    $web= $_POST['web'];
    $motivation= $_POST['mtv'];

    echo "<p>이름: $r_name</p>";
    echo "<p>연락처: $r_phone</p>";
    echo "<p>지원 분야: $web</p>";
    echo "<p>지원 동기: $motivation</p>";

    $now=date('Y-m-d H:i:s');

    $db= mysqli_connect('localhost','mbcaadmin','a1s2d3f4!','mbcaadmin');

    mysqli_query($db, "set names utf8");

    $sql = "INSERT INTO Day04167 (r_name, r_phone, web, mtv, r_date)
    VALUES ('$r_name', '$r_phone', '$web', '$motivation', '$now')";

    $result= mysqli_query($db, $sql);

    if($result){
        echo "위 내용으로 지원이 완료되었습니다.<br>";
    }else{
        echo "지원에 실패했습니다. 다시 시도해주세요. <br>";
    }

    //4. 연결종료
    mysqli_close($db);

?>