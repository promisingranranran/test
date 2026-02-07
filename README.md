# 🎓 北京科技大学官网

<div align="center">

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

一个现代化、响应式的大学官网展示平台，展现北京科技大学的教学、科研和校园生活风采。

[在线预览](#快速开始) • [功能展示](#功能特性) • [项目结构](#项目结构)

</div>

---

## ✨ 项目介绍

这是一个为北京科技大学（USTB）设计的现代化官方网站，融合了优雅的设计和强大的交互功能。网站展示了大学的核心特色，包括学科优势、科研成果、校园生活等内容，为学生、教职员工和访客提供了良好的用户体验。

## 🚀 功能特性

### ✓ 核心功能
- **📰 动态轮播** - 自动循环播放校园重点信息和景观，支持手动切换
- **🧭 导航菜单** - 完整的导航栏包含首页、新闻、教学、科研、毕业生、招生、校园等模块
- **⚡ 平滑滚动** - 点击导航链接实现页面平滑过渡效果
- **🎨 快速导航** - 本科招生、研究生招生、国际交流、校园生活快速入口
- **📌 校园看点** - 展示讲座、论坛、展览、活动等校园活动信息
- **💡 响应式设计** - 完美适配各种设备屏幕（桌面、平板、手机）

### ✓ 交互特性
- **🔄 自动轮播** - 每5秒自动切换一次轮播内容
- **🖱️ 导航交互** - 导航栏悬停效果和平滑滚动
- **📱 移动友好** - 完整的移动设备优化
- **✨ 视觉反馈** - 丰富的过渡动画和阴影效果

## 📁 项目结构

```
.
├── index.html          # 网站主页面（结构层）
├── styles.css          # 样式表（表现层）
├── script.js           # 交互脚本（行为层）
└── README.md          # 项目说明文档
```

### 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | HTML主文件，包含页面结构和内容布局 |
| `styles.css` | CSS样式表，包含响应式设计和视觉效果（1000+行） |
| `script.js` | JavaScript脚本，处理轮播、导航等交互逻辑 |

## 🛠️ 技术栈

- **前端框架**: 原生 HTML5 + CSS3 + JavaScript (无依赖)
- **样式方案**: CSS Grid 和 Flexbox 布局系统
- **交互实现**: Vanilla JavaScript DOM 操作
- **浏览器兼容**: Chrome、Firefox、Safari、Edge 最新版本

## 📖 快速开始

### 方式一：直接打开文件
```bash
# 在项目目录中
# 直接用浏览器打开 index.html 文件即可
```

### 方式二：使用本地服务器（推荐）
```bash
# 使用 Python 本地服务器（Python 3）
python -m http.server 8000

# 或者使用 Node.js http-server
npx http-server

# 然后访问
http://localhost:8000
```

## 📸 主要功能演示

### 1. 导航栏
- 粘性导航栏设计，始终位于顶部
- 提供快速访问菜单
- 具有视觉反馈效果

### 2. 轮播图
```
[主校区] ← 左键/右键 → [科研园区]
        ↓ 自动切换 ↓
    [学生活动中心]
```
- 支持自动和手动轮播
- 配有说明文字
- 前后按钮控制

### 3. 快速导航区
四个主要链接：
- 🎓 本科招生
- 📚 研究生招生
- 🌍 国际交流
- 🏫 校园生活

### 4. 校园看点
展示最新活动和事件：
- **讲座**: 材料科学前沿讲座系列
- **论坛**: 工程创新高端论坛
- **展览**: 科技成果展览会
- **活动**: 其他校园活动

## 🎯 使用指南

### 基础操作
1. **浏览导航** - 点击导航栏的各个链接直接跳转到对应页面
2. **切换轮播** - 点击轮播图两边的箭头(❮/❯)切换内容
3. **查看详情** - 点击校园看点卡片的"查看详情"按钮了解更多

### 自定义修改

#### 修改学校信息
编辑 `index.html` 中的以下内容：
```html
<div class="logo">
    <h1>北京科技大学</h1>  <!-- 修改学校名称 -->
    <p>USTB</p>            <!-- 修改英文简称 -->
</div>
```

#### 修改轮播内容
在 `index.html` 中修改 `.carousel-item` 的图片和文字：
```html
<div class="carousel-item">
    <img src="your-image.jpg" alt="描述">
    <div class="carousel-caption">你的标题</div>
</div>
```

#### 调整轮播速度
编辑 `script.js` 中的自动轮播时间（单位：毫秒）：
```javascript
setInterval(autoSlide, 5000); // 改为你需要的时间
```

## 🎨 设计特点

- **色彩方案**: 运用深蓝色系，显得专业、沉稳
- **排版设计**: 采用现代化的网格布局，信息层级清晰
- **动画效果**: 丰富的过渡效果，提升用户体验
- **响应式**: 完全响应式设计，支持所有设备

## 💻 浏览器支持

| 浏览器 | 版本 | 支持度 |
|--------|------|--------|
| Chrome | 60+ | ✅ 完全支持 |
| Firefox | 55+ | ✅ 完全支持 |
| Safari | 12+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |

## 📋 项目页面结构

```
首页
├── 导航栏（header）
├── 轮播图（banner）
├── 快速导航（quick-nav）
├── 校园看点（campus-highlights）
├── 新闻动态（news）
├── 教学科研（teaching & research）
├── 优秀毕业生（alumni）
├── 招生信息（admission）
└── 页脚（footer）
```

## 🔧 代码示例

### 轮播图交互
```javascript
function changeSlide(n) {
    showSlide(currentSlide + n);
}

// 自动轮播
setInterval(autoSlide, 5000);
```

### 平滑滚动
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
```

## 📝 文件说明

- **HTML**: 380 行代码，包含完整的页面结构和内容
- **CSS**: 1000+ 行代码，提供精美的样式和动画
- **JavaScript**: 70+ 行代码，实现轮播、导航等交互

## 🚀 后续扩展方向

- [ ] 添加网站后台管理系统
- [ ] 集成数据库，实现动态内容加载
- [ ] 增加搜索功能
- [ ] 实现用户评论系统
- [ ] 添加在线报名功能
- [ ] 集成社交媒体分享
- [ ] 多语言支持（英文、日语等）
- [ ] 暗黑模式主题

## 📄 许可证

本项目采用 **MIT License** 开源许可证。详见 [LICENSE](LICENSE) 文件。

## 👤 作者

- **项目创建日期**: 2026年2月
- **版本**: 1.0.0
- **维护者**: [Your Name]

## 📧 联系方式

如有建议或问题，欢迎通过以下方式联系：
- 📧 Email: your-email@example.com
- 💬 Issue: [提交Issue](https://github.com/yourname/ustb-website/issues)
- 🍴 Fork: [欢迎Fork此项目](https://github.com/yourname/ustb-website)

## 🌟 致谢

感谢所有为这个项目做出贡献的人员！

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给个Star支持一下！**

Made with ❤️ for USTB

</div>
