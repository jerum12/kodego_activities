<?php

class ContactForm {

    private $name;
    private $age;

   


    public function __construct(){

    }

    public function setName($name){
        $this->name = $name;
    }
    public function getName(){
        return  $this->name;
    }

    public function setAge($age){
        $this->age = $age;
    }
    public function getAge(){
        return  $this->age;
    }

}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['name'];
    $age = $_POST['age'];

    $userContactForm = new ContactForm();
    $userContactForm->setName($name);
    $userContactForm->setAge($age);


    
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" type="text/css">
</head>
<body>
    <header>My Profile</header>
    <nav>
        <ul>
         <li><a href="index.php">home</a></li>
    </nav>
    
    <div class="profile">
        <img src="./img.jpg">
        <br><br>
        <?php echo $userContactForm->getName();
        echo "<br/>";
        echo "<br/>";
        echo "age : " . $userContactForm->getAge();
        ?>
    </div>

    <footer>2023 Our Company. All Rights Reserved</footer>


    
</body>
</html>