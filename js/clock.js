let userName = prompt("Lütfen Adınızı Giriniz!")
let myName =document.querySelector("#myName") // ekrana yazdırmak için querySelector ile #myName id sini belirttim
myName.innerHTML =` ${userName}`    // prompt a yazılan adı sayfaya yazdırmayı sağladık

let myClock =document.querySelector("#myClock") // let etiketi sayesinde fonksiyonun dışında bile olsa komut olarak çağırıldı

function tarihSaat() {
  
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gun = new Date();
    let day = weekday[gun.getDay()];        // Burada gün tanımlamamızı yaptık


    var date = new Date().toLocaleTimeString('tr-TR');  // Burada gün ay yıl ve saat 
   
    myClock.innerHTML = `${date + day}`   
}

setInterval(tarihSaat, 1000); // saniyenin sürekli artmasını sağladı
   



