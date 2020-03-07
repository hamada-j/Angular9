<?php

$conexion=mysqli_connect('localhost', 'root', 'root', 'gimnasio')

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>tests</title>
</head>
<body><table>
    
    <?php

$sql="SELECT * FROM salas";
$result = mysqli_query($conexion,$sql);

while($mostrar=mysqli_fetch_array($result)){


?>
<tr>
<td><?php echo $mostrar['id'] ?></td>
<td><?php echo $mostrar['nombre'] ?></td>
<td><?php echo $mostrar['capacidad'] ?></td>
<td><?php echo $mostrar['actividad'] ?></td>
</tr>
</tr>
<?php  } ?>
</table>
</body>
</html>