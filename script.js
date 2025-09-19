document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const backgroundMusic = document.getElementById('background-music');
    const imageContainer = document.getElementById('image-container');
    
    // Thay bằng danh sách tên các file ảnh của bạn
    const images = ['anh 1.jpg', 'anh 3.jpg', 'anh 5.jpg', 'anh 6.jpg', 'anh 7.jpg', 'anh 8.jpg']; 

    // Hàm xử lý khi người dùng chạm vào màn hình
    function startExperience() {
        // 1. Ẩn màn hình chờ
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500); // 0.5 giây sau khi mờ đi thì ẩn hẳn

        // 2. Phát nhạc
        if (backgroundMusic) {
            backgroundMusic.play();
        }

        // 3. Bắt đầu hiệu ứng ảnh rơi
        setInterval(createImage, 1000); // Tạo ảnh mới mỗi giây
    }

    // Lắng nghe sự kiện click hoặc chạm một lần duy nhất trên màn hình chờ
    overlay.addEventListener('click', startExperience, { once: true });

    // Hàm tạo ra một ảnh rơi ngẫu nhiên
    function createImage() {
        const img = document.createElement('img');
        
        // Chọn một ảnh ngẫu nhiên từ danh sách
        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add('falling-image');

        // Kích thước và vị trí ngẫu nhiên
        const size = Math.random() * 80 + 50; // Kích thước từ 50px đến 130px
        img.style.width = `${size}px`;
        img.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang

        // Thời gian rơi ngẫu nhiên
        const duration = Math.random() * 5 + 8; // Thời gian từ 8 đến 13 giây
        img.style.animationDuration = `${duration}s`;

        imageContainer.appendChild(img);

        // Xóa ảnh khỏi DOM sau khi nó rơi xong để tiết kiệm tài nguyên
        setTimeout(() => {
            img.remove();
        }, duration * 1000);
    }
});
