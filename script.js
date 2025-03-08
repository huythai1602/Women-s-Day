function showMessage(name, message) {
    document.getElementById("modal-name").textContent = name;
    document.getElementById("modal-message").textContent = message;
    document.getElementById("modal").style.display = "flex";
}

function closeMessage() {
    document.getElementById("modal").style.display = "none";
}
function createFallingFlower() {
    const flower = document.createElement("div");
    flower.classList.add("falling-flower");
    flower.innerHTML = "&#10047;"; // Biểu tượng hoa ❋ hoặc bạn có thể thay bằng hình ảnh
    document.body.appendChild(flower);

    // Vị trí ngẫu nhiên theo chiều ngang
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Thời gian rơi

    setTimeout(() => {
        flower.remove();
    }, 5000); // Xóa sau khi hoàn thành hiệu ứng
}

// Tạo nhiều hoa rơi theo thời gian
setInterval(createFallingFlower, 300);
