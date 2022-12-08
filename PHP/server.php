<html>
    <body>

    <p>여기는 server.php 페이지로 이동한것 입니다.</p>

    전달받은 아이디는 <?php echo $_POST['text']; ?><br>
    전달받은 비밀번호는 <?php echo $_POST['password']; ?><br>
    전달받은 텍스트는 <?php echo $_POST['text_2']; ?><br>
    전달받은 hidden_value는 <?php echo $_POST['hidden']; ?><br>
    전달받은 서치 <?php echo $_POST['search']; ?><br>
    전달받은 url <?php echo $_POST['url']; ?><br>
    전달받은 email <?php echo $_POST['email']; ?><br>
    전달받은 tel <?php echo $_POST['tel']; ?><br>

    number <?php echo $_POST['number']; ?><br>
    range <?php echo $_POST['range']; ?><br>

    신청과목 <?php echo $_POST['subject'];?><br>
    선택 메일링 주제<?php for ($i = 0; $i < count($_POST['mailing']); $i++) {
        echo $_POST['mailing'][$i];
        echo ",";
    }?><br>
        
    color <?php echo $_POST['color'];?><br>
    시작 날짜 <?php echo $_POST['start_date'];?>
    마감 날짜 <?php echo $_POST['end_date'];?><br>
    시작 시간 <?php echo $_POST['start_time'];?><br>
    마감 시간 <?php echo $_POST['end_time'];?><br>

    전체 시간 <?php echo $_POST['datetime_local'];?><br>

    선택 과목 <?php echo $_POST['Com_class'];?><br>
    취미 <?php echo $_POST['interest_datalist'];?><br>
    자기소개 <?php echo $_POST['txtarea'];?><br>
    
    </body>
</html>