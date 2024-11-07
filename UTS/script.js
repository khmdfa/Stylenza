const addButtons = document.querySelectorAll('.btn');
addButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.textContent = 'Sudah Ditambahkan';
        this.disabled = true;
    });
});

const profileMenu = document.getElementById("profileMenu");
const dropdownContent = document.getElementById("dropdownContent");

profileMenu.addEventListener("mouseover", () => {
    dropdownContent.style.display = "block";
});

profileMenu.addEventListener("mouseleave", () => {
    dropdownContent.style.display = "none";
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const masukan = document.getElementById('masukan').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (!name || !email || !masukan) {
        errorMessage.textContent = 'Semua kolom harus diisi!';
        return;
    }

    alert(`Form berhasil dikirim!\nNama: ${name}\nEmail: ${email}\nMasukan: ${masukan}`);
});
