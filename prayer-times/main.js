/* function index() {
    let main = document.getElementById('main');
    let h3 = document.createElement('h3');
    let liveTime = document.createElement('p');
    let digitalClock = document.createElement('p'); // Tambahkan elemen untuk jam digital
  
    h3.innerHTML = 'Prayer Times';
    main.appendChild(h3);
    main.appendChild(liveTime);
    main.appendChild(digitalClock); // Tambahkan elemen jam digital
  
    userLocation();
  
    // Update waktu dan jam setiap detik
    setInterval(function () {
      let now = new Date();
      liveTime.innerHTML = `Waktu saat ini: ${now.toLocaleTimeString()}`;
      digitalClock.innerHTML = `Jam: ${formatDigitalClock(now)}`;
    }, 1000);
  }
  
  function formatDigitalClock(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    // Tambahkan angka 0 di depan jika nilai kurang dari 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    return `${hours}:${minutes}:${seconds}`;
  }
  */

function index() {
    let main = document.getElementById('main');
    let h3 = document.createElement('h3');
    let liveTime = document.createElement('p');
    let digitalClock = document.createElement('p');

    h3.innerHTML = 'Prayer Times';
    main.appendChild(h3);
    main.appendChild(liveTime);
    main.appendChild(digitalClock);

    userLocation();

    // Update waktu dan jam setiap detik
}

/* function prayerTimes(latitude, longitude) {
    fetch('https://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=2')
        .then(response => response.json())
        .then(function (response) {
            let date = new Date();
            let today = date.getDate() - 1;
            let data = response.data[0].timings;

            let main = document.getElementById('main');
            let table = document.createElement('table');
            let tableTbody = document.createElement('tbody');

            for (i in data) {
                let row = tableTbody.insertRow();
                let name = row.insertCell(0);
                let time = row.insertCell(1);
                name.innerHTML = i;
                time.innerHTML = data[i];
                tableTbody.appendChild(row);

                // Tambahkan notifikasi 20 menit sebelum waktu salat
                let prayerTime = new Date(data[i]);
                let notificationTime = new Date(prayerTime - 20 * 60 * 1000);

                if (notificationTime > date) {
                    scheduleNotification(i, notificationTime);
                }
            }

            table.appendChild(tableTbody);
            main.appendChild(table);
        });

}

function scheduleNotification(prayerName, notificationTime) {
    if ('Notification' in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                let notification = new Notification('Pengingat Salat', {
                    body: `Waktu salat ${prayerName} akan segera tiba dalam 20 menit.`,
                });

                // Tambahkan logika lain yang diperlukan saat notifikasi diklik
                notification.onclick = function () {
                    console.log('Notifikasi diklik');
                };
            }
        });
    }
}*/

function prayerTimes(latitude, longitude) {
    fetch('https://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=2')
        .then(response => response.json())
        .then(function (response) {
            let date = new Date();
            let today = date.getDate() - 1;
            let data = response.data[0].timings;
  
            let main = document.getElementById('main');
            let table = document.createElement('table');
            let tableTbody = document.createElement('tbody');
            let liveTime = document.createElement('p');
            let digitalClock = document.createElement('p');
  
            for (i in data) {
                let row = tableTbody.insertRow();
                let name = row.insertCell(0);
                let time = row.insertCell(1);
                name.innerHTML = i;
                time.innerHTML = data[i];
                tableTbody.appendChild(row);
  
                // Tambahkan notifikasi 20 menit sebelum waktu salat
                let prayerTime = new Date(data[i]);
                let notificationTime = new Date(prayerTime - 20 * 60 * 1000);
  
                if (notificationTime > date) {
                    scheduleNotification(i, notificationTime);
                }
            }
  
            table.appendChild(tableTbody);
            main.appendChild(table);
            main.appendChild(liveTime);
            main.appendChild(digitalClock);
  
            // Update waktu dan jam setiap detik
            setInterval(function () {
                date = new Date();  // Perbarui objek date
                liveTime.innerHTML = `Waktu saat ini: ${date.toLocaleTimeString()}`;
                digitalClock.innerHTML = `Jam: ${formatDigitalClock(date)}`;
            }, 1000);
        });
  }
  

function success(position) {
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
    prayerTimes('-6.200000', '106.816666');
}

function userLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation tidak didukung browser anda, silahkan gunakan browser lain");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

/*function index() {
    let main = document.getElementById('main');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    main.appendChild(h3);

    userLocation();
}
*/

index();

