var prov = document.getElementById('namaProvinsi');
function showCity(){
    if(prov.value === "0"){
        var city = document.getElementById("kosong")
        city.style.display = "block";
        document.getElementById("dki_id").style.display = "none";
        document.getElementById("jawa_barat_id").style.display = "none";
        document.getElementById("banten_id").style.display = "none";
    } else if(prov.value === "dki"){
        var city = document.getElementById("dki_id")
        city.style.display = "block";
        document.getElementById("kosong").style.display = "none";
        document.getElementById("jawa_barat_id").style.display = "none";
        document.getElementById("banten_id").style.display = "none";
    } else if(prov.value === "jawa_barat"){
        var city = document.getElementById("jawa_barat_id")
        city.style.display = "block";
        document.getElementById("kosong").style.display = "none";
        document.getElementById("dki_id").style.display = "none";
        document.getElementById("banten_id").style.display = "none";
    } else if(prov.value === "banten"){
        var city = document.getElementById("banten_id")
        city.style.display = "block";
        document.getElementById("kosong").style.display = "none";
        document.getElementById("dki_id").style.display = "none";
        document.getElementById("jawa_barat_id").style.display = "none";
    } 
}

prov.addEventListener("change", showCity);

showCity();

const form = document.getElementById("form");
const errorElement = document.getElementById("error");

const handleFormEvent = (event) => { 
    event.preventDefault();
    const passwordElement = document.getElementById('password')
    const confirmPasswordElement = document.getElementById('confirm-password')

    if(confirmPasswordElement.value != passwordElement.value){
        errorElement.innerHTML = "Password kgk sama"
        return
    }
    errorElement.innerHTML = ''
}

form.addEventListener('submit', handleFormEvent)