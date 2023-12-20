// Array untuk menyimpan item yang dipesan
const orderedItems = [];

// Fungsi untuk menampilkan menu
// Fungsi untuk menampilkan menu makanan
function displayMenu() {
    const menuContainer = document.querySelector(".container-makanan");
    let menuHtml = "";

    menuItems.forEach(item => {
        menuHtml += item.display();
    });

    menuContainer.innerHTML = menuHtml;
}

// Fungsi untuk menampilkan menu minuman
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
    // Cek apakah pesanan dengan nama yang sama sudah ada di keranjang
    const existingItem = orderedItems.find(item => item.name === name);

    if (existingItem) {
        // Jika ada, tingkatkan jumlah pesanan
        existingItem.quantity += 1;
    } else {
        // Jika tidak ada, tambahkan pesanan baru ke dalam array pemesanan
        orderedItems.push({ name, price, quantity: 1 });
    }

    // Store the ordered items in localStorage
    localStorage.setItem("orderedItems", JSON.stringify(orderedItems));

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
        const itemTotal = item.price * item.quantity;
        totalHtml += `<p>${item.name} x${item.quantity}: Rp ${itemTotal}</p>`;
        totalAmount += itemTotal;
    });

    totalHtml += `<p>Total: Rp ${totalAmount}</p>`;
    totalHtml += `<button class="order-btn" onclick="keCheckout()">Checkout</button>`;

    totalContainer.innerHTML = totalHtml;

}


// Fungsi untuk checkout (dapat disesuaikan dengan logika pembayaran)
function checkout() {
    alert("Terima kasih atas pesanan Anda!");
    // Reset keranjang setelah checkout
    orderedItems.length = 0;
    displayTotal();
}

function keCheckout() {
            window.location.href = "checkout.html";
        }

// Tampilkan menu saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    displayMenu();
    displayMenu2();
});


function checkout() {
    alert("Terima kasih atas pesanan Anda!");
    window.location.href = "checkout.html";
}

document.addEventListener("DOMContentLoaded", () => {
    displayMenu();
    displayMenu2();
  });
