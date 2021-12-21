<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biaya Parkir</title>
    <script>
        function hitungParkir(){
            let jamMasuk = document.getElementById("masuk").value;
            let jamKeluar = document.getElementById("keluar").value;
            let selisih = jamKeluar - jamMasuk
            let biaya = 0;
            const TARIF_AWAL = 3000;
            const TARIF_PERJAM = 1000;
            if(selisih <= 2){
                biaya = TARIF_AWAL;
            }
            else{
                let tambahanJam = selisih -2 ;
                biaya = TARIF_AWAL + (TARIF_PERJAM * tambahanJam)
            }
            let areaBiaya = document.getElementById("biaya");
            areaBiaya.innerHTML = "BIAYA PARKIR RP. " + biaya;
        }
    </script>
</head>

<body>
    <h3>Hitung Biaya Parkir</h3>
    Masuk Parkir : <input type="number" value="" size="10" id="masuk">
    <br>
    Keluar Parkir : <input type="number" value="" size="10" id="keluar">
    <br>
    <button onclick="hitungParkir()">Biaya Parkir</button> : <span id="biaya"></span>
</body>

</html>