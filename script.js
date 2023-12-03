// Definisikan kelas untuk merepresentasikan item menu
class MenuItem {
    constructor(name, price, gambar) {
        this.name = name;
        this.price = price;
        this.gambar = gambar;
    }

    display() {
        return `
            <div class="menu-item">
                <div> 
                <img src="${this.gambar}"> 
                </div>
                <div class="deskripsi-menu">
                    <h2>${this.name}</h2>
                    <p>Harga: Rp ${this.price}</p>
                    <button class="order-btn" onclick="orderItem('${this.name}', ${this.price})">Order</button>
                </div>    
            </div>
        `;
    }
}

// Sample menu data
const menuItems = [
    new MenuItem("Nasi Goreng", 12000, "/assets/nasgor.png"),
    new MenuItem("Mie Goreng", 12000, "/assets/miegoreng.png"),
    new MenuItem("Rendang", 20000, "/assets/rendang.png"),
    new MenuItem("Bakso", 10000, "/assets/bakso.png"),
    new MenuItem("Spaghetti", 20000, "/assets/spaghetti.png"  ),
    new MenuItem("Soup", 15000, "/assets/soup.png"),
    new MenuItem("Sate Ayam", 15000, "/assets/sateayam.png"),
    new MenuItem("Soto", 10000, "/assets/soto.png"),
    new MenuItem("Rawon", 15000, "/assets/rawon.png"),
    // Tambahkan lebih banyak item menu sesuai kebutuhan
];

const menuItems2 = [
    new MenuItem("Es Teh", 5000, "/assets/esteh.png"),
    new MenuItem("Es Jeruk", 5000, "/assets/esjeruk.png"),
    new MenuItem("Soda Susu", 7000, "/assets/sodasusu.png"),
    new MenuItem("Aneka Jus", 8000, "/assets/jus.png"),
    new MenuItem("Kopi", 4000, "/assets/kopi.png"  ),
    new MenuItem("Dawet", 8000, "/assets/dawet.png"),
    // Tambahkan lebih banyak item menu sesuai kebutuhan
];
// Array untuk menyimpan item yang dipesan
const orderedItems = [];

// Fungsi untuk menampilkan menu
function displayMenu() {
    const menuContainer = document.querySelector(".container-makanan");
    let menuHtml = "";

    menuItems.forEach(item => {
        menuHtml += item.display();
    });

    menuContainer.innerHTML = menuHtml;
}

function displayMenu2() {
    const menuContainer2 = document.querySelector(".container-minuman");
    let menuHtml2 = "";

    menuItems2.forEach(item => {
        menuHtml2 += item.display();
    });

    menuContainer2.innerHTML = menuHtml2;
}

// Fungsi untuk memesan item
function orderItem(name, price) {
    // Menambahkan item ke dalam array pemesanan
    orderedItems.push({ name, price });

    // Menampilkan pesan konfirmasi
    alert(`Anda telah memesan ${name} seharga Rp ${price}.`);

    // Menampilkan total yang harus dibayar
    displayTotal();
}

// Fungsi untuk menampilkan total yang harus dibayar
function displayTotal() {
    const totalContainer = document.getElementById("total-container");
    let totalHtml = "<h2>Total Pesanan:</h2>";

    let totalAmount = 0;
    orderedItems.forEach(item => {
        totalHtml += `<p>${item.name}: Rp ${item.price}</p>`;
        totalAmount += item.price;
    });

    totalHtml += `<p>Total: Rp ${totalAmount}</p>`;

    totalContainer.innerHTML = totalHtml;

    // Menampilkan daftar pesanan
    const orderedItemsContainer = document.getElementById("ordered-items");
    let orderedItemsHtml = "";

    orderedItems.forEach(item => {
        orderedItemsHtml += `<p>${item.name}: Rp ${item.price}</p>`;
    });

    orderedItemsContainer.innerHTML = orderedItemsHtml;
}


// Tampilkan menu saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    displayMenu();
    displayMenu2();
});
