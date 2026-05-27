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

    echo "<p>위 내용으로 지원이 완료됐습니다.</p>";
?>