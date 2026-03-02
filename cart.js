let cart = [];

function showCustomAlert(message, isError = false) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('custom-alert-message');
    const alertIcon = document.querySelector('.custom-alert-icon i');
    const alertIconContainer = document.querySelector('.custom-alert-icon');

    alertMessage.innerText = message;

    if (isError) {
        alertIcon.className = "fa-solid fa-circle-exclamation";
        alertIconContainer.classList.add('error');
    } else {
        alertIcon.className = "fa-solid fa-circle-check";
        alertIconContainer.classList.remove('error');
    }

    alertBox.style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCartUI();
    showCustomAlert(productName + " berhasil ditambahkan ke keranjang!");
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.innerText = totalItems;
    }
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showCustomAlert("Keranjang Anda masih kosong. Silakan pilih produk terlebih dahulu.", true);
        return;
    }

    let message = "Halo Apotek Kosambi, saya ingin memesan:\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `- ${item.name} (${item.quantity}x) = Rp ${subtotal.toLocaleString('id-ID')}\n`;
    });

    message += `\nTotal Belanja: Rp ${total.toLocaleString('id-ID')}\n\nMohon informasi ketersediaan stok. Terima kasih.`;

    const waNumber = "6289629857172";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');
}
