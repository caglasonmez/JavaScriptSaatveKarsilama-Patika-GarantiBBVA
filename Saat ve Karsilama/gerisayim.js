function showTime() {
    var currentDate = new Date();
    var currentDateTime = currentDate.toLocaleString();

    document.getElementById("myClock").textContent = currentDateTime;
}

// Sayfa yüklendiğinde showTime() fonksiyonu çağrılır
setInterval(showTime, 1000);