var toLuas      = document.getElementById('toLuas')
var toKeliling  = document.getElementById('toKeliling')

var formLuas        = document.getElementById('formLuas')
var formKeliling    = document.getElementById('formKeliling')

var hitungLuas  = document.getElementById('hitungluas')
var alas        = document.getElementById('alas')
var tinggi      = document.getElementById('tinggi')
var hasil_luas  = document.getElementById('hasilluas')

var hitungkeliling  = document.getElementById('hitungkeliling')
var sisi_satu       = document.getElementById('sisi_satu')
var sisi_dua        = document.getElementById('sisi_dua')
var sisi_tiga       = document.getElementById('sisi_tiga')
var hasil_keliling  = document.getElementById('hasil_keliling')
var total_keliling  = parseInt(sisi_satu.value) + parseInt(sisi_dua.value) + parseInt(sisi_tiga.value)

toLuas.addEventListener('click', function() {
    formLuas.style.display = "block"
    formKeliling.style.display = "none"
    sisi_satu.value = 1
    sisi_dua.value = 1
    sisi_tiga.value = 1
    hasil_keliling.innerHTML = ''
})

toKeliling.addEventListener('click', function() {
    formLuas.style.display = "none"
    formKeliling.style.display = "block"
    hasil_luas.innerHTML = ''
    alas.value      = 1
    tinggi.value    = 1
})



var total_luas = 1/2 * alas.value * tinggi.value 
hitungLuas.addEventListener('click', function() {
    hasil_luas.innerHTML = `Rumus Luas Segitiga adalah 1/2 x ${alas.value} x ${tinggi.value} = ${total_luas}` 
})

hitungkeliling.addEventListener('click', function() {
    hasil_keliling.innerHTML = `Rumus Keliling adalah ${sisi_satu.value} + ${sisi_dua.value} + ${sisi_tiga.value} = ${total_keliling}`
})