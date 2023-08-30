//supaya memanggil fungsi yang sama berulang2
//function replaceName() {
    //let name = prompt("Siapakah nama anda?", "");
    
    //console.log(name);
    
    //document.getElementById("name").innerHTML = name
//}

//replaceName(); //memanggil fungsi



//document.getElementById('tombol').addEventListener("click", function() {
    //replaceName();
//}) 
//setiap di klik dia akan menjalankan sebuah function


//form
//let nameInput = document.getElementById('name-input')

//document.getElementById('kirim').addEventListener("click", function() {
    //const nama = nameInput.value

    //if (name == ""){
       // document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!"
   // } else {
       // document.getElementById('name').innerHTML = nama
    //}
//})

function validateForm() {
    const nama = document.forms['message-form']['name-input'].value
    //const angka = 11;

    if (nama == '') {
        document.getElementById("error-name").innerHTML="Tidak boleh kosong!"

        return false
    }

    //untuk menampilkan
    //document.getElementById("name").innerHTML = nama;
    //document.getElementById("error-name").innerHTML="";

    setName(nama) //angka)

    return false;
}

function setName(nama) {//number) 
    document.getElementById("name").innerHTML = nama;
    document.getElementById("error-name").innerHTML="";
}


//
var slideIndex =1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

//img slideshow
function showDivs(n) {
    var i;
    var imgList =document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    //console.log(slideIndex);

    for(i=0; i < imgList.length ; i++) {
        imgList[i].style.display ='none';
    }//fungsi foor loop untuk pengulangan 

    imgList[slideIndex - 1].style.display = "block";

}

setInterval(() => {
    plusDivs(1)
}, 2000);

//Validation FORM

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak Boleh Ada yang Kosong!");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}