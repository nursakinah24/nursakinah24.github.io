function tampilData() {
    var nama = document.getElementById("nama").value;
    var telepon = document.getElementById("telepon").value;
    var alamat = document.getElementById("alamat").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var merk = document.getElementsByName("merk");
    var daftarMerk = '' 
    var item = document.getElementById("item").value;
    var kurir = document.querySelector('#kurir').value;

    for(var merk2 of merk) {
        if(merk2.checked) {
            daftarMerk += ', ' + merk2.value
        }
    }

    daftarMerk = daftarMerk.substring(1)

    alert(
        "This is your data and your order^^" +
        "\nNama : " +
        nama +
        "\nTelepon : "  +
        telepon +
        "\nAlamat : " +
        alamat + 
        "\nJenis Kelamin : " +
        jeniskelamin + 
        "\nMerk : " +
        daftarMerk +
        "\nItem : " +
        item +
        "\nKurir : " +
        kurir
    );
}