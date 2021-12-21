
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luas & Keliling Lingkaran</title>
    <script>
        function hitung(){
            const PHI = 3.14;
            let jari = document.getElementById("bil1").value;
            console.log("bilangan 1 : " + jari);
            let luas = PHI * jari * jari;
            let kll = 2.0 * PHI * jari;
            console.log("luas : " + luas);
            console.log("keliling : " + kll);
            let area_hasil = document.getElementById("hasil");
            area_hasil.innerHTML = "<br>Luas : " + luas + "<br>Keliling : " + kll;
        }
    </script>
</head>

<body>
    <h3>Menghitung Luas & Keliling Lingkaran</h3>
    Masukan Jari-Jari Lingkaran :
    <input type="number" value="" id="bil1" size="7">
    <br>
    <button onclick="hitung()">Hitung</button>
    <br>Hasil : <span id="hasil"></span>
</body>

</html>