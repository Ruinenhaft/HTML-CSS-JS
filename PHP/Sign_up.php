<html>
    <body>

    <p>회원가입 php페이지</p>
    ID : <?php echo $_POST['user_id']; ?><br>
    PW : <?php echo $_POST['user_pw']; ?><br>
    NAME : <?php echo $_POST['user_name']; ?><br>
    E-MAIL : <?php echo $_POST['user_email']; ?><br>
    E-MAIL(agr) : <?php echo $_POST['user_email_agr']; ?><br>
    SKILL : <?php for ($i = 0; $i < count($_POST['cb_skill']); $i++) {
                echo $_POST['cb_skill'][$i];
                echo ",";}?>
    Birthday : <?php echo $_POST['datetime_local']; ?><br>
    sex : <?php echo $_POST['sex']; ?><br>
    work : <?php echo $_POST['Com_class'];?><br>
    indtrod : <?php echo $_POST['introd'];?><br> 
    </body>
</html>
