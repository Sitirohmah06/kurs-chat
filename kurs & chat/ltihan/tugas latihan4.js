<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tambah2an</title>
    <script>
        function hitung(){
            let x = Number(document.getElementById("bil1").value);
            let y = Number(document.getElementById("bil2").value);
            let z = x + y;
            document.getElementById("bil3").value=z;
        }
    </script>
</head>

<body>
    <form id="form1">
        <input type="text" id="bil1" value="0" onchange="hitung()"/>
        <b>+</b><input type="text" id="bil2" value="0" onchange="hitung()"/>
        <b>=</b><input type="text" id="bil3" value="0"/>
    </form>
</body>

</html>