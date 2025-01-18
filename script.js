
function pengujian() {
    var kegiatan = document.getElementById("kegiatan").value
    var jam = document.getElementById("jam").value

    if (kegiatan == "" || jam == "") {
        alert("Inputan Harus Diisi!")
        return false
    } else {
        alert("Kegiatan Berhasil Dikirim")
        return true
    }
}

function tabel() {
    var kegiatan = document.getElementById("kegiatan").value;
    var jam = document.getElementById("jam").value;

    if (!pengujian()) {
        return false;
    }

    var tabel = document.getElementById("tabkegiatan");
    var baris = document.createElement("tr");

    var bagKegiatan = document.createElement("td");
    var masukKegiatan = document.createTextNode(kegiatan);
    bagKegiatan.appendChild(masukKegiatan);
    baris.appendChild(bagKegiatan);
    bagKegiatan.classList.add("td4")

    var bagJam = document.createElement("td");
    var masukJam = document.createTextNode(jam);
    bagJam.appendChild(masukJam);
    baris.appendChild(bagJam);
    bagJam.classList.add("td4");

    tabel.appendChild(baris);

    document.getElementById("kegiatan").value = "";
    document.getElementById("jam").value = "";

    return false;
}