<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv= "Content-Type" charset="utf-8" content="text/html">
	<meta name="description" content="Это описание страницы">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 


	<title> Страница PHP</title>
	
</head>
<body>

<form action="index.php" method="get">
<table>
<tr>
<td>Ссылка</td>
<td>
<input name="link" type="text"/>
</td>
</tr>
<tr>
<td>Изменить ссылку</td>
<td><textarea name="edit_link" type="text" /><?php echo $str;?></textarea></td>
</tr>
<tr>
<td colspan="2">
<input name="send" type="submit" value="Сгенерировать"/>
</td>

</tr>

</table>
</form>
<?php

	class Point {
		private $x;
		private $y;
		
		public function __construct ($x, $y){
			$this->x=$x;
			$this->y=$y;
			
		}
		public function getX(){
			return $this->x;
			
		}
		
		
		
	}
$point = new Point(-5,10);
echo $point->getX();

?>

</body>
</html>