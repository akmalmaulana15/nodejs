const express = require("express"); // memanggil library express js
const bodyParser = require("body-parser"); // memanggil library body-parser
const cors = require("cors"); // memangil library cors


const app = express(); // mengimplementasikan express

// Penggunaan body-parser untuk mengekstrak data request berformat JSON
app.use(bodyParser.json()); 

// Penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}));

// Penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());

// Endpoint "/test" dengan method GET 
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // Membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertamaku",
        method: req.method,
        code: res.statusCode
    }
    
})

//endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) =>{

    // :name dan :age diberikan titik dua didepan agar menunkukkan "name" dan "age"
    // bersifat dinamis yang dapat digantik nilainya saat melakukan request

    // Menampung data yang dikirimkan
    let name = req.params.name //mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        Nama : name,
        Umur : age
    }
    // Memberikan response dengan format JSON yang berisi objek di atas
    res.json(response);  
})

// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {

    // menampung data yang dikirimkan dan mengkonversi menjadi tipe number
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body

    let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // Membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang : panjang,
        lebar : lebar,
        luas : luas,
        keliling : keliling
    }

    // Memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)


})

// Tugas 1

// No.1

// Menghitung Vol dan LP Kubus
app.post("/kubus", (req,res) =>{

    let sisi = Number(req.body.sisi)

    let volume = sisi * sisi * sisi 
    let luas_permukaan = 6 * sisi * sisi

    let response = {
        Bangun : "Kubus",
        Sisi : sisi,
        Volume : volume,
        Luas_Permukaan : luas_permukaan
    }
    res.json(response)

})

// Menghitung Vol dan LP Balok
app.post("/balok", (req,res) =>{

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi= Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    let response = {
        Bangun : "Balok",
        Panjang : panjang,
        Lebar : lebar,
        Tinggi : tinggi,
        Volume : volume,
        Luas_Permukaan : luas_permukaan,
        
    }
    res.json(response)
})

// Menghitung Vol dan LP Tabung
app.post("/tabung", (req,res) =>{

    let tinggi = Number(req.body.tinggi)
    let jari = Number(req.body.jari)

    let volume = 3.14 * jari * jari * tinggi
    let luas_permukaan = 2 * 3.14 * jari * (jari + tinggi)

    let response = {
        Bangun : "Tabung",
        Tinggi : tinggi,
        Jari : jari,
        Volume : volume,
        Luas_Permukaan : luas_permukaan
    }
    res.json(response)
})

// Menghitung Vol dan LP Bola
app.post("/bola", (req,res) =>{

    let jari = Number(req.body.jari)

    let volume = 1.33 * 3.14 * jari * jari * jari
    let luas_permukaan = 4 * 3.14 * jari * jari

    let response ={
        Bangun : "Bola",
        Jari : jari,
        Volume : volume,
        Luas_Permukaan : luas_permukaan
    }

    res.json(response)
})

// No 2
// Conversi Dari Celcius
app.get("/celcius", (req,res) => {

    let celcius = Number(req.body.celcius)

    let reamur = celcius * 0.8
    let fahrenheit = celcius * 1.8 + 32
    let kelvin = celcius + 273.15

    let response = {
        Celcius : celcius,
        Result : {
            Reamur : reamur,
            Fahrenheit : fahrenheit,
            Kelvin : kelvin
        }
    }

    res.json(response)


})

// Conversi Dari Reamur
app.get("/reamur", (req,res) => {

    let reamur = Number(req.body.reamur)

    let celcius = reamur * 1.25
    let fahrenheit = reamur * 2.25 + 32
    let kelvin = reamur / 4 * 5 + 273.15

    let response = {
        Reamur : reamur,
        Result : {
            Celcius : celcius,
            Fahrenheit : fahrenheit,
            Kelvin : kelvin.toPrecision(3)
        }
    }

    res.json(response)
})

// Conversi Dari Kelvin
app.get("/kelvin", (req,res) => {

    let kelvin = Number(req.body.kelvin)

    let celcius = kelvin - 273
    let fahrenheit = kelvin * 1.8 - 459.67
    let reamur = (kelvin - 273.15) * 0.8

    let response = {
        Kelvin : kelvin,
        Result : {
            Celcius : celcius,
            Fahrenheit : fahrenheit.toFixed(2),
            Reamur : reamur.toFixed(2)
        }
    }

    res.json(response)
})

// Conversi Dari Fahrenheit
app.get("/fahrenheit", (req,res) => {

    let fahrenheit = Number(req.body.fahrenheit)

    let celcius = (fahrenheit - 32) / 1.8
    let reamur = (fahrenheit -32) * 0.44
    let kelvin = (fahrenheit + 459.67) / 1.8

    let response = {
        Fahrenheit : fahrenheit,
        Result : {
            Celcius : celcius,
            Reamur : reamur,
            Kelvin : kelvin
        }
    }
    res.json(response)
})

// No.3

// Decimal Converter
app.post("/decimal", (req,res) => {

    let decimal = Number(req.body.decimal)

    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let hex = decimal.toString(16)

    let response = {
        Decimal : decimal,
        Result : {
            Biner : biner,
            Octal : octal,
            Hex : hex
        }
    }
    res.json(response)
})

// Biner Converter
app.post("/biner", (req,res) =>{

    let biner = Number(req.body.biner)

    let decimal = parseInt(biner,2)
    let octal = parseInt(biner, 2).toString(8)
    let hex = parseInt(biner, 2).toString(16)

    let response = {
        Biner : biner,
        Result : {
            Decimal : decimal,
            Octal : octal,
            Hex : hex
        }
    }
    res.json(response)
})

// Octal Converter
app.post("/octal", (req,res) =>{

    let octal = Number(req.body.octal)

    let decimal = parseInt(octal,8)
    let binary = parseInt(octal, 8).toString(2)
    let hex = parseInt(octal, 8).toString(16)

    let response = {
        Octal : octal,
        Result : {
            Decimal : decimal,
            Binary : binary,
            Hex : hex
        }
    }
    res.json(response)
})
// Hexadecimal Converter
app.post("/hex", (req,res) => {

    let hex = Number(req.body.hex)

    let decimal = parseInt(hex,16)
    let binary = parseInt(hex, 16).toString(2)
    let octal = parseInt(hex, 16).toString(8)

    let response = {
        Hexadecimal : hex,
        Result : {
            Decimal : decimal,
            Octal : octal,
            Binary : binary
        }
    }
    res.json(response)
})

// No.4

app.post("/bmi", (req,res) =>{

    let bb = Number(req.body.bb)
    let tb = Number(req.body.tb)
    
    let bmi = bb / (tb * tb)
    let status
    if (bmi<18.5) {
        status = "Kekurangan Berat badan"
    }
    else if (bmi<=24.9 && bmi>=18.5) {
        status = "Normal (Ideal)"
    }
    else if (bmi<=29.9 && bmi>=25.0) {
        status = "Kelebihan Berat badan"
    }
    else {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        Tinggi : tb,
        Berat : bb,
        BMI : bmi,
        Status : status
    }

    res.json(response)
})

// Menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

