// 轮播图功能
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(n) {
    // 移除所有幻灯片的 active 类
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // 重新设置当前幻灯片索引
    if (n >= totalSlides) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = n;
    }

    // 添加 active 类到当前幻灯片
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// 自动轮播
function autoSlide() {
    showSlide(currentSlide + 1);
}

// 初始化轮播
if (slides.length > 0) {
    showSlide(0);
    setInterval(autoSlide, 5000); // 每5秒切换一次
}

// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 页面滚动事件 - 导航栏效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 点击外部关闭导航菜单（如果需要）
document.addEventListener('click', function(event) {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    
    if (nav && !header.contains(event.target)) {
        // 处理移动菜单逻辑
    }
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// 初始化
document.body.style.opacity = '0.95';
