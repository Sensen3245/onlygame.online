document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // 切换汉堡按钮的样式
            const spans = this.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // 点击导航链接后关闭移动菜单
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // 多语言切换功能
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }

    // 语言翻译数据
    const translations = {
        'zh': {
            'featured-games': '精选游戏',
            'all-games': '所有游戏',
            'about': '关于我们',
            'hero-title': '发现最有趣的在线游戏体验',
            'hero-description': 'OnlyGame为您提供精选的高质量在线游戏，随时随地畅玩，完全免费',
            'start-playing': '开始游戏',
            'about-title': '关于 OnlyGame',
            'about-description-1': 'OnlyGame.online 是您的一站式在线游戏平台，致力于为全球玩家提供高质量、无需下载的免费游戏体验。我们精心挑选的游戏集合涵盖了各种类型，从休闲益智到刺激动作，适合各个年龄段的玩家。',
            'about-description-2': '我们的目标是创建一个友好、安全的游戏社区，让玩家可以随时随地享受游戏的乐趣。无论您是在短暂的休息时间寻找放松，还是想挑战自我的技能，OnlyGame都能满足您的需求。',
            'footer-tagline': '您的在线游戏天堂',
            'quick-links': '快速链接',
            'legal-info': '法律信息',
            'privacy-policy': '隐私政策',
            'terms-of-use': '使用条款',
            'cookie-policy': 'Cookie政策',
            'copyright': '© 2023 OnlyGame.online. 保留所有权利。',
            'play-now': '立即玩'
        },
        'en': {
            'featured-games': 'Featured Games',
            'all-games': 'All Games',
            'about': 'About Us',
            'hero-title': 'Discover the Most Fun Online Gaming Experience',
            'hero-description': 'OnlyGame offers you curated high-quality online games that you can play anytime, anywhere, completely free',
            'start-playing': 'Start Playing',
            'about-title': 'About OnlyGame',
            'about-description-1': 'OnlyGame.online is your one-stop online gaming platform dedicated to providing high-quality, no-download free gaming experiences for players worldwide. Our carefully curated collection of games covers various genres, from casual puzzles to exciting action, suitable for players of all ages.',
            'about-description-2': 'Our goal is to create a friendly, safe gaming community where players can enjoy the fun of gaming anytime, anywhere. Whether you\'re looking to relax during a short break or want to challenge your skills, OnlyGame has something for everyone.',
            'footer-tagline': 'Your Online Gaming Paradise',
            'quick-links': 'Quick Links',
            'legal-info': 'Legal Information',
            'privacy-policy': 'Privacy Policy',
            'terms-of-use': 'Terms of Use',
            'cookie-policy': 'Cookie Policy',
            'copyright': '© 2023 OnlyGame.online. All rights reserved.',
            'play-now': 'Play Now'
        }
    };

    // 语言切换函数
    function changeLanguage(lang) {
        if (!translations[lang]) return;

        // 更新导航菜单
        document.querySelector('.main-nav li:nth-child(1) a').textContent = translations[lang]['featured-games'];
        document.querySelector('.main-nav li:nth-child(2) a').textContent = translations[lang]['all-games'];
        document.querySelector('.main-nav li:nth-child(3) a').textContent = translations[lang]['about'];

        // 更新英雄区域
        document.querySelector('.hero h1').textContent = translations[lang]['hero-title'];
        document.querySelector('.hero p').textContent = translations[lang]['hero-description'];
        document.querySelector('.hero .btn-primary').textContent = translations[lang]['start-playing'];

        // 更新关于区域
        document.querySelector('.about h2').textContent = translations[lang]['about-title'];
        const aboutParas = document.querySelectorAll('.about p');
        aboutParas[0].textContent = translations[lang]['about-description-1'];
        aboutParas[1].textContent = translations[lang]['about-description-2'];

        // 更新页脚
        document.querySelector('.footer-logo p').textContent = translations[lang]['footer-tagline'];
        document.querySelector('.footer-links h4').textContent = translations[lang]['quick-links'];
        document.querySelector('.footer-legal h4').textContent = translations[lang]['legal-info'];
        
        const footerLinks = document.querySelectorAll('.footer-links li a');
        footerLinks[0].textContent = translations[lang]['featured-games'];
        footerLinks[1].textContent = translations[lang]['all-games'];
        footerLinks[2].textContent = translations[lang]['about'];

        const legalLinks = document.querySelectorAll('.footer-legal li a');
        legalLinks[0].textContent = translations[lang]['privacy-policy'];
        legalLinks[1].textContent = translations[lang]['terms-of-use'];
        legalLinks[2].textContent = translations[lang]['cookie-policy'];

        document.querySelector('.footer-bottom p').textContent = translations[lang]['copyright'];

        // 更新"立即玩"按钮文本
        const playButtons = document.querySelectorAll('.btn-secondary');
        playButtons.forEach(button => {
            button.textContent = translations[lang]['play-now'];
        });

        // 更新游戏标题和描述（可以根据需要扩展）
        if (lang === 'en') {
            // 如果需要翻译所有游戏标题和描述，可以在这里添加代码
            // 这需要为每个游戏准备英文描述
        }
    }
}); 