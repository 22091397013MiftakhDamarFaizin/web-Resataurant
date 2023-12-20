<?php
$servername = "127.0.0.1"; // Ganti dengan nama server database Anda
$username = "root"; // Ganti dengan username database Anda
$password = ""; // Ganti dengan password database Anda
$dbname = "menu"; // Ganti dengan nama database Anda

// Buat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fungsi untuk mendapatkan menu makanan dari database
function getMenuMakanan() {
    global $conn;
    $query = "SELECT * FROM makanan";
    $result = $conn->query($query);
    $menuItems = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $menuItems[] = $row;
        }
    }

    return $menuItems;
}

// Fungsi untuk mendapatkan menu minuman dari database
function getMenuMinuman() {
    global $conn;
    $query = "SELECT * FROM minuman";
    $result = $conn->query($query);
    $menuItems = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $menuItems[] = $row;
        }
    }

    return $menuItems;
}
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="HOME">
        <div class="navbar">
            <div class="logo">WAROENK</div>
            <ul class="option">
                <li><a href="#HOME">HOME</a></li>
                <li><a href="#ABOUT">ABOUT</a></li>
                <li><a href="#MAKANAN">MAKANAN</a></li>
                <li><a href="#MINUMAN">MINUMAN</a></li>
                <li><a href="checkout.html">CHECKOUT</a></li>
            </ul>
        </div>
        <div class="hiro">
            <div class="ucapan">
                <p class="ucapan-besar">Silahkan Menikmati Makanan Kami</p>
                <p class="ucapan-kecil">Selamat datang di menu website restoran kami! Restoran kami dengan bangga menawarkan beragam hidangan lezat dari berbagai daerah di Indonesia. Terima kasih atas kunjungan Anda, kami siap melayani dengan sepenuh hati.</p>
            </div>
            <img class="gambar-hiro" src="assets/gambar-hiro.png" alt="">
        </div> 
    </div>
        
    <div id="ABOUT" class="section">
        <h2>About Us</h2>
        <p>
            Selamat datang di WAROENK, tempat di mana kami menggubah momen kuliner menjadi pengalaman tak terlupakan. Dengan bahan-bahan terbaik dan resep rahasia yang kami jaga erat, kami berkomitmen memberikan hidangan berkualitas tinggi dan pelayanan yang istimewa.
        </p>
        <div class="info-container">
            <div class="info-box">
                <img src="assets/interior.png" alt="">
                <p>
                    WAROENK adalah restoran yang menyajikan berbagai hidangan lezat dari berbagai daerah di Indonesia. Dengan suasana yang nyaman dan penuh kehangatan, kami mengundang Anda untuk menikmati momen spesial Anda bersama kami.
                </p>
            </div>
            <p>Jalan Ketintang Baru No. 12</p>
            <p>Jam Buka: Senin - Minggu: 10.00 - 22.00</p>
        </div>
    </div>
    
 
    <div id="MAKANAN">
        <div class="header-makanan">
            <h2>MAKANAN</h2>
        </div>
        <div class="container-makanan">
            <?php
            // include 'db_connection.php';

            // Mendapatkan menu makanan dari database
            $makanan = getMenuMakanan();

            // Menampilkan menu makanan
            foreach ($makanan as $item) {
                echo '<div class="menu-item">';
                echo '<div><img src="' . $item['gambar_makanan'] . '"></div>';
                echo '<div class="deskripsi-menu">';
                echo '<h2>' . $item['nama_makanan'] . '</h2>';
                echo '<p>Harga: Rp ' . $item['harga_makanan'] . '</p>';
                echo '<button class="order-btn" onclick="orderItem(\'' . $item['nama_makanan'] . '\', ' . $item['harga_makanan'] . ')">Order</button>';
                echo '</div></div>';
            }
            ?>
        </div>
    </div>
    
    <div id="MINUMAN">
        <div class="header-minuman">
            <h2>MINUMAN</h2>
        </div>
        <div class="container-minuman">
            <?php
            // Mendapatkan menu minuman dari database
            $minuman = getMenuMinuman();

            // Menampilkan menu minuman
            foreach ($minuman as $item) {
                echo '<div class="menu-item">';
                echo '<div><img src="' . $item['gambar_minuman'] . '"></div>';
                echo '<div class="deskripsi-menu">';
                echo '<h2>' . $item['nama_minuman'] . '</h2>';
                echo '<p>Harga: Rp ' . $item['harga_minuman'] . '</p>';
                echo '<button class="order-btn" onclick="orderItem(\'' . $item['nama_minuman'] . '\', ' . $item['harga_minuman'] . ')">Order</button>';
                echo '</div></div>';
            }
            ?>
        </div>
    </div>

    <div id="cart-container">
        <!-- <h2>Keranjang</h2> -->
        <div id="ordered-items"></div>
        <div id="total-container"></div>
    </div>    

    <div id="CONTACT">
        <p>
    </div>
    
    <script src="script.js"></script>
</body>
</html>