<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konversi Kurs Rupiah</title>
</head>

<body>
    <input type="number" class="input" id="nama">
    <select class="kurs">
        <option value="usd">USD - 14.650</option>
    </select>
    <button class="hitung">Hitung</button>
    <p class="hasil">Hasil: </p>
    
    <script>
        const input = document.querySelector(".input");
        const kursSelect = document.querySelector(".kurs");
        const hitungBtn = document.querySelector(".hitung");
        const hasil = document.querySelector(".hasil");

        hitungBtn.addEventListener("click", function() {
            console.log("button diklik");
            if (kursSelect.value == "usd") {
                hasil.innerHTML = "Hasil : Rp. " + input.value * 14650;
            }
        })
    </script>
</body>

</html>