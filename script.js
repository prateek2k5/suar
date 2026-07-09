/* ═══════════════════════════════════════════════════════════════════════════ */
/* POOJAVERSE - PREMIUM BIRTHDAY WEBSITE JAVASCRIPT */
/* ═══════════════════════════════════════════════════════════════════════════ */

// ════════════════════════════════════════════════════════════════════════════
// DATA & CONFIGURATION
// ════════════════════════════════════════════════════════════════════════════

// Loading screen texts
const loadingTexts = [
    "Preparing something special...",
    "Baking a virtual cake...",
    "Training the pig...",
    "Gathering sparkles...",
    "Loading happiness...",
    "Wrapping surprises...",
    "Inflating balloons...",
    "Polishing the crown...",
    "Creating magic...",
    "Almost there..."
];

// Conversation dialogues
const conversationDialogues = [
    "Oink oink! Let me tell you a story... 🐷",
    "Once upon a time, there was a very special person...",
    "She was incredibly smart, funny, and beautiful...",
    "But there was one tiny problem...",
    "She refused to admit she was a suar! 😤",
    "Every day, people would tell her the truth...",
    "And every day, she would deny it...",
    "But deep down, she knew...",
    "Being a suar isn't bad at all!",
    "It means being adorable, funny, and loved!",
    "And this person is loved more than anything...",
    "So, are you ready to accept the truth? 🐷"
];

// Verification messages (40+ unique)
const verificationMessages = [
    "Jhuth mat bol! 🐷",
    "Google disagrees with you.",
    "The pig is disappointed. 😔",
    "Professional liar unlocked! 🏆",
    "Still pressing NO? Seriously?",
    "Access denied! 🚫",
    "The pig has filed a complaint.",
    "FBI has been informed. 🕵️",
    "Your honesty subscription expired.",
    "Prateek predicted this. 😏",
    "Even the pig knows the truth!",
    "Error 404: Truth not found.",
    "Lying is a sin, you know!",
    "The pig is crying now. 😭",
    "NASA confirmed: You ARE a suar.",
    "Your nose is growing, Pinocchio!",
    "Science says: Definitely a suar.",
    "The algorithm has spoken.",
    "DNA test result: 100% Suar.",
    "This is getting embarrassing...",
    "Your pig license is being revoked!",
    "Mom knows you're a suar. 👀",
    "Dad knows too. Everyone knows!",
    "The mirror doesn't lie!",
    "Statistics don't lie. You do.",
    "World's most stubborn person award! 🏅",
    "Prateek is laughing at you right now.",
    "The pig has never been more disappointed.",
    "History will remember this denial.",
    "Breaking news: Local person denies being suar.",
    "Weather report: Cloudy with chance of PIGS!",
    "Your refusal has been documented.",
    "This is now a legal matter. ⚖️",
    "PETA has been notified about identity crisis.",
    "The pig demands a retraction!",
    "Your internal pig wants to be free! 🐽",
    "Suar detectors are off the charts!",
    "Confession accepted in 3... 2... 1...",
    "The pig will remember this betrayal.",
    "Fine, be that way... but you're still a suar! 😤",
    "Piggy bank of truth is empty now.",
    "Error: Cannot compute your denial.",
    "Warning: Honesty levels critical!",
    "Last chance to redeem yourself!"
];

// Pig commentary dialogues
const pigCommentaries = [
    "Oink! Keep scrolling! 🐷",
    "This is getting interesting!",
    "Ooh, look at that!",
    "Getting closer to the end...",
    "Did you read everything? 📖",
    "My favorite part coming up!",
    "You're doing great, suar!",
    "Almost there, oink!",
    "Enjoying the journey? 🎉",
    "This part makes me emotional...",
    "Keep going! Adventure awaits!",
    "Oink oink! Beautiful, isn't it?",
    "The pig approves this section!",
    "You scrolled so far! 😱",
    "Piggy is proud of you!",
    "Best suar ever! 💕",
    "Oink! Almost at the end!",
    "Saving the best for last...",
    "The pig is emotional now... 🥺",
    "Such a beautiful journey!",
    "Oink! Memory unlocked!",
    "The pig remembers this!",
    "Cuteness overload incoming!",
    "Oink! Time flies when you're a suar!",
    "The pig's commentary: A++ content!",
    "You're the best scroller ever!",
    "Oink! Keep exploring!",
    "Surprise around the corner!",
    "The pig is entertained! 🎭",
    "What a journey, oink!"
];

// Easter egg triggers
const easterEggs = {
    'POOJA': 'pigRain',
    'SUAR': 'suarMode',
    'PRATEEK': 'loveMode',
    'LOVE': 'heartBurst',
    'HAPPYBIRTHDAY': 'fireworks'
};

// ════════════════════════════════════════════════════════════════════════════
// STATE MANAGEMENT
// ════════════════════════════════════════════════════════════════════════════

const state = {
    isLoading: true,
    currentPage: 'loading',
    conversationIndex: 0,
    verificationAttempts: 0,
    yesButtonScale: 1,
    noButtonScale: 1,
    musicPlaying: false,
    letterOpened: false,
    cakeBlown: false,
    gameStarted: false,
    catches: 0,
    easterEggInput: '',
    lastCommentaryIndex: -1,
    scrollPosition: 0
};

// ════════════════════════════════════════════════════════════════════════════
// DOM ELEMENTS
// ════════════════════════════════════════════════════════════════════════════

const elements = {
    // Loading
    loadingScreen: document.getElementById('loading-screen'),
    loadingText: document.getElementById('loading-text'),
    loadingProgress: document.getElementById('loading-progress'),
    loadingPercent: document.getElementById('loading-percent'),
    loadingParticles: document.getElementById('loading-particles'),

    // Main
    mainContent: document.getElementById('main-content'),
    cursorContainer: document.getElementById('cursor-container'),
    particlesContainer: document.getElementById('particles-container'),

    // Music
    musicPlayer: document.getElementById('music-player'),
    musicDisc: document.getElementById('music-disc'),
    musicToggle: document.getElementById('music-toggle'),
    volumeSlider: document.getElementById('volume-slider'),
    bgMusic: document.getElementById('bg-music'),

    // Commentary
    pigCommentary: document.getElementById('pig-commentary'),
    commentaryText: document.getElementById('commentary-text'),

    // Hero
    heroSection: document.getElementById('hero-section'),
    heroSparkles: document.getElementById('hero-sparkles'),
    openSurprise: document.getElementById('open-surprise'),

    // Conversation
    conversationSection: document.getElementById('conversation-section'),
    conversationText: document.getElementById('conversation-text'),
    progressDots: document.getElementById('progress-dots'),
    conversationNext: document.getElementById('conversation-next'),

    // Verification
    verificationSection: document.getElementById('verification-section'),
    verificationText: document.getElementById('verification-text'),
    yesBtn: document.getElementById('yes-btn'),
    noBtn: document.getElementById('no-btn'),
    attemptCount: document.getElementById('attempt-count'),

    // Portal
    portalSection: document.getElementById('portal-section'),
    portalParticles: document.getElementById('portal-particles'),

    // Birthday
    birthdaySection: document.getElementById('birthday-section'),
    birthdayParticles: document.getElementById('birthday-particles'),

    // Letter
    letterEnvelope: document.getElementById('letter-envelope'),
    letterPaper: document.getElementById('letter-paper'),
    letterContent: document.getElementById('letter-content'),

    // Gallery
    galleryGrid: document.getElementById('gallery-grid'),

    // Cake
    cake: document.getElementById('cake'),
    wishMessage: document.getElementById('wish-message'),

    // Analytics
    analyticsSection: document.getElementById('analytics-section'),

    // Certificate
    certificateDate: document.getElementById("certificate-date").textContent ="12 August 2026",

    // Game
    gameArea: document.getElementById('game-area'),
    gamePig: document.getElementById('game-pig'),
    gameStart: document.getElementById('game-start'),
    catchCount: document.getElementById('catch-count'),
    gameWin: document.getElementById('game-win'),

    // Ending
    endingStars: document.getElementById('ending-stars'),
    endingFireflies: document.getElementById('ending-fireflies'),
    endingFireworks: document.getElementById('ending-fireworks'),
    replayBtn: document.getElementById('replay-btn'),

    // Easter Egg
    easterEggDisplay: document.getElementById('easter-egg-display')
};

// ════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(randomBetween(min, max));
}

function randomColor() {
    const colors = ['#FFB6C1', '#FF91A4', '#DDA0DD', '#E6E6FA', '#ADD8E6', '#FFDAB9'];
    return colors[randomInt(0, colors.length)];
}

function createElement(tag, className, styles = {}) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    Object.assign(el.style, styles);
    return el;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ════════════════════════════════════════════════════════════════════════════
// LOADING SCREEN
// ════════════════════════════════════════════════════════════════════════════

async function initLoadingScreen() {
    // Create loading particles
    createLoadingParticles();

    // Animate loading progress
    let progress = 0;
    let textIndex = 0;

    const loadingInterval = setInterval(() => {
        progress += randomBetween(1, 5);

        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            setTimeout(() => {
                finishLoading();
            }, 500);
        }

        // Update progress bar
        elements.loadingProgress.style.width = `${progress}%`;
        elements.loadingPercent.textContent = `${Math.floor(progress)}%`;

        // Update loading text
        if (progress > textIndex * 10 && textIndex < loadingTexts.length) {
            elements.loadingText.textContent = loadingTexts[textIndex];
            textIndex++;
        }
    }, 100);
}

function createLoadingParticles() {
    for (let i = 0; i < 30; i++) {
        const particle = createElement('div', null, {
            position: 'absolute',
            width: `${randomBetween(5, 15)}px`,
            height: `${randomBetween(5, 15)}px`,
            background: randomColor(),
            borderRadius: '50%',
            left: `${randomBetween(0, 100)}%`,
            top: `${randomBetween(0, 100)}%`,
            opacity: '0.5',
            animation: `floatParticle ${randomBetween(10, 20)}s linear infinite`,
            animationDelay: `${randomBetween(0, 5)}s`
        });
        elements.loadingParticles.appendChild(particle);
    }
}

async function finishLoading() {
    // Fade out loading screen
    gsap.to(elements.loadingScreen, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
            elements.loadingScreen.style.display = 'none';
            state.isLoading = false;
            startMainContent();
        }
    });
}

async function startMainContent() {
    elements.mainContent.style.display = 'block';

    // Initialize all features
    initParticles();
    initCursorTrail();
    initHeroSparkles();
    initAOS();
    initScrollAnimations();
    initCertificateDate();

    // Show main content with animation
    gsap.from(elements.mainContent, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Init GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate hero content
    gsap.from('.hero-card', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5
    });
}

// ════════════════════════════════════════════════════════════════════════════
// PARTICLES SYSTEM
// ════════════════════════════════════════════════════════════════════════════

function initParticles() {
    const particleTypes = ['sparkle', 'heart', 'star', 'flower'];

    for (let i = 0; i < 25; i++) {
        const type = particleTypes[randomInt(0, particleTypes.length)];
        createFloatingParticle(type);
    }
}

function createFloatingParticle(type) {
    const symbols = {
        sparkle: '✨',
        heart: '💕',
        star: '⭐',
        flower: '🌸'
    };

    const particle = createElement('div', 'floating-particle', {
        fontSize: `${randomBetween(15, 30)}px`,
        left: `${randomBetween(0, 100)}%`,
        top: `${randomBetween(0, 100)}%`,
        color: randomColor()
    });
    particle.textContent = symbols[type];
    particle.style.animationDelay = `${randomBetween(0, 15)}s`;
    particle.style.animationDuration = `${randomBetween(15, 25)}s`;

    elements.particlesContainer.appendChild(particle);
}

// ════════════════════════════════════════════════════════════════════════════
// CURSOR TRAIL
// ════════════════════════════════════════════════════════════════════════════

function initCursorTrail() {
    let lastTime = 0;
    const throttleMs = 50;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTime < throttleMs) return;
        lastTime = now;

        createCursorHeart(e.clientX, e.clientY);
    });
}

function createCursorHeart(x, y) {
    const heart = createElement('div', 'cursor-heart', {
        left: `${x}px`,
        top: `${y}px`
    });
    heart.textContent = '💖';

    elements.cursorContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// ════════════════════════════════════════════════════════════════════════════
// HERO SECTION
// ════════════════════════════════════════════════════════════════════════════

function initHeroSparkles() {
    for (let i = 0; i < 20; i++) {
        const sparkle = createElement('span', 'hero-sparkle', {
            left: `${randomBetween(0, 100)}%`,
            top: `${randomBetween(0, 100)}%`,
            animationDelay: `${randomBetween(0, 5)}s`,
            fontSize: `${randomBetween(20, 40)}px`
        });
        sparkle.textContent = '✨';
        elements.heroSparkles.appendChild(sparkle);
    }
}

// Open Surprise Button
elements.openSurprise.addEventListener('click', () => {
    gsap.to('.hero-card', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
            elements.heroSection.style.display = 'none';
            showConversationSection();
        }
    });
});

// ════════════════════════════════════════════════════════════════════════════
// CONVERSATION SECTION
// ════════════════════════════════════════════════════════════════════════════

function showConversationSection() {
    elements.conversationSection.style.display = 'flex';
    elements.conversationSection.style.opacity = '0';

    gsap.to(elements.conversationSection, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Create progress dots
    createProgressDots();

    // Show first dialogue
    showDialogue(0);
}

function createProgressDots() {
    elements.progressDots.innerHTML = '';
    for (let i = 0; i < conversationDialogues.length; i++) {
        const dot = createElement('div', 'progress-dot');
        if (i === 0) dot.classList.add('active');
        elements.progressDots.appendChild(dot);
    }
}

function showDialogue(index) {
    state.conversationIndex = index;

    // Update text with typing effect
    typeText(elements.conversationText, conversationDialogues[index]);

    // Update dots
    const dots = elements.progressDots.querySelectorAll('.progress-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i <= index);
    });
}

function typeText(element, text) {
    element.textContent = '';
    let charIndex = 0;

    const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(typeInterval);
        }
    }, 30);
}

elements.conversationNext.addEventListener('click', () => {
    if (state.conversationIndex < conversationDialogues.length - 1) {
        showDialogue(state.conversationIndex + 1);

        // Animate button click
        gsap.fromTo(elements.conversationNext,
            { scale: 1 },
            { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 }
        );
    } else {
        // Move to verification
        gsap.to(elements.conversationSection, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                elements.conversationSection.style.display = 'none';
                showVerificationSection();
            }
        });
    }
});

// ════════════════════════════════════════════════════════════════════════════
// VERIFICATION SECTION
// ════════════════════════════════════════════════════════════════════════════

function showVerificationSection() {
    elements.verificationSection.style.display = 'flex';
    elements.verificationSection.style.opacity = '0';

    gsap.to(elements.verificationSection, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });
}

// Yes Button
elements.yesBtn.addEventListener('click', () => {
    // Celebration!
    confetti({
        particleCount: 100,
        spread: 70,
        colors: ['#FFB6C1', '#DDA0DD', '#E6E6FA', '#FFD700']
    });

    // Move to portal
    setTimeout(() => {
        gsap.to(elements.verificationSection, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                elements.verificationSection.style.display = 'none';
                showPortalSection();
            }
        });
    }, 1000);
});

// No Button - The Fun Part!
elements.noBtn.addEventListener('mouseenter', moveNoButton);
elements.noBtn.addEventListener('click', handleNoClick);

function moveNoButton() {
    if (state.verificationAttempts >= 35) return;

    const maxX = (window.innerWidth / 2) - 100;
    const maxY = (window.innerHeight / 2) - 100;

    const newX = randomBetween(-maxX, maxX);
    const newY = randomBetween(-maxY, maxY);

    gsap.to(elements.noBtn, {
        x: newX,
        y: newY,
        scale: Math.max(0.3, state.noButtonScale - 0.05),
        rotation: randomBetween(-30, 30),
        duration: 0.1,
        ease: 'power2.out'
    });

    state.noButtonScale -= 0.05;
}

function handleNoClick() {
    state.verificationAttempts++;
    elements.attemptCount.textContent = state.verificationAttempts;

    // Update verification message
    const messageIndex = Math.min(state.verificationAttempts - 1, verificationMessages.length - 1);
    elements.verificationText.textContent = verificationMessages[messageIndex];

    // Grow YES button
    state.yesButtonScale += 0.1;
    gsap.to(elements.yesBtn, {
        scale: state.yesButtonScale,
        duration: 0.3,
        ease: 'power2.out'
    });

    // Make NO button smaller and harder to catch
    if (state.verificationAttempts >= 35) {
        elements.noBtn.classList.add('hide');
        setTimeout(() => {
            elements.noBtn.style.display = 'none';
        }, 500);
    }

    // Shake the screen slightly
    gsap.to(elements.verificationSection, {
        x: randomBetween(-5, 5),
        duration: 0.1,
        yoyo: true,
        repeat: 3
    });
}

// ════════════════════════════════════════════════════════════════════════════
// PORTAL SECTION
// ════════════════════════════════════════════════════════════════════════════

function showPortalSection() {
    elements.portalSection.style.display = 'flex';
    elements.portalSection.style.opacity = '0';

    gsap.to(elements.portalSection, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Create portal particles
    createPortalParticles();

    // Portal animation sequence
    setTimeout(() => {
        animatePortal();
    }, 2000);
}

function createPortalParticles() {
    for (let i = 0; i < 30; i++) {
        const particle = createElement('div', null, {
            position: 'absolute',
            width: `${randomBetween(5, 15)}px`,
            height: `${randomBetween(5, 15)}px`,
            background: randomColor(),
            borderRadius: '50%',
            left: `${randomBetween(30, 70)}%`,
            top: `${randomBetween(30, 70)}%`,
            animation: `portalParticleSpin ${randomBetween(2, 5)}s linear infinite`
        });
        elements.portalParticles.appendChild(particle);
    }
}

function animatePortal() {
    // Zoom effect
    gsap.to('.portal-container', {
        scale: 50,
        opacity: 0,
        duration: 2,
        ease: 'power2.in',
        onComplete: () => {
            // Flash and show birthday
            document.body.style.background = 'white';

            setTimeout(() => {
                document.body.style.background = '';
                elements.portalSection.style.display = 'none';
                showBirthdaySection();
            }, 200);
        }
    });
}

// ════════════════════════════════════════════════════════════════════════════
// BIRTHDAY SECTION
// ════════════════════════════════════════════════════════════════════════════

function showBirthdaySection() {
    elements.birthdaySection.style.display = 'flex';
    elements.birthdaySection.style.opacity = '0';

    // Mega confetti burst!
    confetti({
        particleCount: 200,
        spread: 180,
        colors: ['#FFB6C1', '#DDA0DD', '#E6E6FA', '#FFD700', '#FF91A4'],
        origin: { y: 0.6 }
    });

    // Multiple confetti bursts
    setTimeout(() => confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } }), 250);
    setTimeout(() => confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } }), 400);

    gsap.to(elements.birthdaySection, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });

    // Create birthday particles
    createBirthdayParticles();

    // Animate title
    animateBirthdayTitle();
}

function createBirthdayParticles() {
    for (let i = 0; i < 40; i++) {
        const particle = createElement('div', null, {
            position: 'absolute',
            fontSize: `${randomBetween(20, 40)}px`,
            left: `${randomBetween(0, 100)}%`,
            top: `${randomBetween(0, 100)}%`,
            opacity: '0.6',
            animation: `floatParticle ${randomBetween(15, 25)}s linear infinite`
        });
        particle.textContent = ['✨', '💖', '🌟', '🎉', '🎊', '💫'][randomInt(0, 6)];
        elements.birthdayParticles.appendChild(particle);
    }
}

function animateBirthdayTitle() {
    gsap.from('.title-line', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'bounce.out',
        delay: 0.5
    });

    gsap.from('.title-name', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.8
    });

    gsap.from('.title-heart', {
        scale: 0,
        rotation: 360,
        duration: 1,
        ease: 'power2.out',
        delay: 1.2
    });
}

// ════════════════════════════════════════════════════════════════════════════
// LETTER SECTION
// ════════════════════════════════════════════════════════════════════════════

document
.getElementById("waxSeal")
.addEventListener("click",openLetter);

function openLetter() {
    if (state.letterOpened) return;
    state.letterOpened = true;

    // Animate envelope flap opening
    const flap = elements.letterEnvelope.querySelector('.envelope-flap');
    flap.classList.add('open');

    setTimeout(() => {
        elements.letterEnvelope.style.display = 'none';
        elements.letterPaper.style.display = 'block';
        elements.letterPaper.classList.add('visible');

        // Type letter content
        typeLetterContent();
    }, 500);
}

function typeLetterContent() {
    const letterText = `Dear Pooja,

Happy Birthday, Suar! 🐷❤️

I know I tease you a lot by calling you "Suar," but if I ever stop, that's when you should start worrying. 😂

You're honestly one of the most supercalifragilisticexpialidocious people I've ever met—sweet, funny, a little dramatic, and absolutely impossible to replace.

I hope this year brings you endless reasons to smile, lots of success, good health, amazing adventures, and all the happiness you truly deserve.

Keep being your wonderfully unique self... because that's exactly what makes you, YOU.

Now go enjoy your birthday, eat lots of cake, click on every little surprise on this website, and as my birthday gift... try not to roast me for at least one day.

(I know that's probably asking for too much. 😭😂)

Once again...

Happy Birthday, my favourite Suar! 💖

With lots of affection,
unlimited Suar jokes,
and best wishes,

— ❤️`;


    // Clear and type with GSAP TextPlugin
    gsap.to(elements.letterContent, {
        duration: 15,
        text: letterText,
        ease: 'none'
    });
}

// ════════════════════════════════════════════════════════════════════════════
// CAKE SECTION
// ════════════════════════════════════════════════════════════════════════════

elements.cake.addEventListener('click', blowCandles);

function blowCandles() {
    if (state.cakeBlown) return;
    state.cakeBlown = true;

    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add('blown');
        }, index * 200);
    });

    // Show wish message
    setTimeout(() => {
        elements.wishMessage.style.display = 'block';

        // Fireworks!
        confetti({
            particleCount: 150,
            spread: 100,
            colors: ['#FFD700', '#FF6B35', '#FFB6C1'],
            origin: { y: 0.7 }
        });

        // Show pig commentary
        showPigCommentary("Wish granted! ✨");
    }, 1000);
}

// ════════════════════════════════════════════════════════════════════════════
// ANALYTICS SECTION
// ════════════════════════════════════════════════════════════════════════════

function initScrollAnimations() {
    // Analytics bars animation on scroll
    ScrollTrigger.create({
        trigger: '.analytics-section',
        start: 'top 80%',
        onEnter: animateAnalyticsBars
    });

    // Pie commentary on scroll
    let commentaryThrottle = 0;
    window.addEventListener('scroll', () => {
        const now = Date.now();
        if (now - commentaryThrottle < 3000) return;
        commentaryThrottle = now;

        randomPigCommentary();
    });
}

function animateAnalyticsBars() {
    const bars = document.querySelectorAll('.stat-fill');
    bars.forEach((bar, index) => {
        const width = bar.dataset.width;
        gsap.to(bar, {
            width: `${width}%`,
            duration: 1.5,
            delay: index * 0.2,
            ease: 'power2.out'
        });
    });
}

// ════════════════════════════════════════════════════════════════════════════
// CERTIFICATE DATE
// ════════════════════════════════════════════════════════════════════════════

function initCertificateDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    elements.certificateDate.textContent = today.toLocaleDateString('en-US', options);
}

// ════════════════════════════════════════════════════════════════════════════
// MINI GAME
// ════════════════════════════════════════════════════════════════════════════

elements.gameStart.addEventListener('click', startGame);
elements.gamePig.addEventListener('click', catchPig);

function startGame() {
    state.gameStarted = true;
    state.catches = 0;
    elements.catchCount.textContent = 0;
    elements.gameWin.style.display = 'none';

    elements.gameStart.textContent = 'Catch the pig!';

    // Move pig randomly
    moveGamePig();
}

function moveGamePig() {
    if (!state.gameStarted || state.catches >= 3) return;

    const areaWidth = elements.gameArea.offsetWidth - 80;
    const areaHeight = elements.gameArea.offsetHeight - 80;

    const newX = randomBetween(0, areaWidth);
    const newY = randomBetween(0, areaHeight);

    gsap.to(elements.gamePig, {
        left: newX,
        top: newY,
        duration: randomBetween(0.3, 0.8),
        ease: 'power2.out',
        onComplete: moveGamePig
    });
}

function catchPig(e) {
    if (!state.gameStarted) return;

    state.catches++;
    elements.catchCount.textContent = state.catches;

    // Pop effect
    gsap.fromTo(elements.gamePig,
        { scale: 1 },
        { scale: 0.5, duration: 0.1, yoyo: true, repeat: 1 }
    );

    // Confetti burst
    confetti({
        particleCount: 30,
        spread: 50,
        colors: ['#FFB6C1', '#FF91A4'],
        origin: {
            x: (e.clientX - elements.gameArea.getBoundingClientRect().left) / elements.gameArea.offsetWidth,
            y: (e.clientY - elements.gameArea.getBoundingClientRect().top) / elements.gameArea.offsetHeight
        }
    });

    if (state.catches >= 3) {
        // Win!
        state.gameStarted = false;
        elements.gameWin.style.display = 'block';
        elements.gameStart.textContent = 'Play Again!';
        elements.gameStart.onclick = startGame;

        // Big celebration
        confetti({
            particleCount: 100,
            spread: 180,
            colors: ['#FFD700', '#FFB6C1', '#DDA0DD']
        });
    }
}

// ════════════════════════════════════════════════════════════════════════════
// ENDING SECTION
// ════════════════════════════════════════════════════════════════════════════

ScrollTrigger.create({
    trigger: '.ending-section',
    start: 'top 80%',
    onEnter: initEndingSection
});

function initEndingSection() {
    // Create stars
    createEndingStars();

    // Create fireflies
    createFireflies();

    // Start fireworks loop
    startFireworks();
}

function createEndingStars() {
    for (let i = 0; i < 100; i++) {
        const star = createElement('div', 'ending-star', {
            left: `${randomBetween(0, 100)}%`,
            top: `${randomBetween(0, 100)}%`,
            animationDelay: `${randomBetween(0, 3)}s`,
            width: `${randomBetween(1, 4)}px`,
            height: `${randomBetween(1, 4)}px`
        });
        elements.endingStars.appendChild(star);
    }
}

function createFireflies() {
    for (let i = 0; i < 15; i++) {
        const firefly = createElement('div', 'firefly', {
            left: `${randomBetween(10, 90)}%`,
            top: `${randomBetween(30, 90)}%`,
            animationDelay: `${randomBetween(0, 3)}s`
        });
        elements.endingFireflies.appendChild(firefly);
    }
}

function startFireworks() {
    setInterval(() => {
        createFirework();
    }, 2000);
}

function createFirework() {
    const firework = createElement('div', null, {
        position: 'absolute',
        left: `${randomBetween(10, 90)}%`,
        top: `${randomBetween(20, 60)}%`,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: randomColor(),
        boxShadow: `0 0 20px ${randomColor()}, 0 0 40px ${randomColor()}`,
        animation: 'fireworkExplode 1s ease-out forwards'
    });

    elements.endingFireworks.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
}

// Replay button
elements.replayBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        location.reload();
    }, 1000);
});

// ════════════════════════════════════════════════════════════════════════════
// PIG COMMENTARY
// ════════════════════════════════════════════════════════════════════════════

function randomPigCommentary() {
    let index = randomInt(0, pigCommentaries.length);
    while (index === state.lastCommentaryIndex) {
        index = randomInt(0, pigCommentaries.length);
    }
    state.lastCommentaryIndex = index;

    showPigCommentary(pigCommentaries[index]);
}

function showPigCommentary(text) {
    elements.commentaryText.textContent = text;
    elements.pigCommentary.classList.add('visible');

    setTimeout(() => {
        elements.pigCommentary.classList.remove('visible');
    }, 3000);
}

// ════════════════════════════════════════════════════════════════════════════
// MUSIC PLAYER
// ════════════════════════════════════════════════════════════════════════════

elements.musicToggle.addEventListener('click', toggleMusic);
elements.volumeSlider.addEventListener('input', (e) => {
    elements.bgMusic.volume = e.target.value / 100;
});

function toggleMusic() {
    if (state.musicPlaying) {
        elements.bgMusic.pause();
        elements.musicDisc.classList.remove('playing');
        elements.musicToggle.querySelector('.play-icon').style.display = 'block';
        elements.musicToggle.querySelector('.pause-icon').style.display = 'none';
    } else {
        elements.bgMusic.play().catch(() => {
            console.log('Music autoplay blocked');
        });
        elements.musicDisc.classList.add('playing');
        elements.musicToggle.querySelector('.play-icon').style.display = 'none';
        elements.musicToggle.querySelector('.pause-icon').style.display = 'block';
    }
    state.musicPlaying = !state.musicPlaying;
}

// ════════════════════════════════════════════════════════════════════════════
// EASTER EGGS
// ════════════════════════════════════════════════════════════════════════════

document.addEventListener('keydown', (e) => {
    state.easterEggInput += e.key.toUpperCase();

    // Keep only last 15 characters
    if (state.easterEggInput.length > 15) {
        state.easterEggInput = state.easterEggInput.slice(-15);
    }

    // Check for easter eggs
    for (const [trigger, action] of Object.entries(easterEggs)) {
        if (state.easterEggInput.includes(trigger)) {
            triggerEasterEgg(action);
            state.easterEggInput = '';
            break;
        }
    }
});

function triggerEasterEgg(action) {
    const easterContent = createElement('div', 'easter-egg-content');
    elements.easterEggDisplay.innerHTML = '';
    elements.easterEggDisplay.appendChild(easterContent);

    switch (action) {
        case 'pigRain':
            easterContent.innerHTML = '<h2>🐷 PIG RAIN! 🐷</h2><p>The sky is falling with pigs!</p>';
            pigRain();
            break;
        case 'suarMode':
            easterContent.innerHTML = '<h2>SUAR MODE ACTIVATED!</h2><p>You are 100% certified suar!</p>';
            break;
        case 'loveMode':
            easterContent.innerHTML = '<h2>❤️ LOVE FROM PRATEEK ❤️</h2><p>You are loved infinity percent!</p>';
            heartBurst();
            break;
        case 'heartBurst':
            heartBurst();
            easterContent.innerHTML = '<h2>💕 HEART EXPLOSION! 💕</h2><p>So much love!</p>';
            break;
        case 'fireworks':
            easterContent.innerHTML = '<h2>🎆 HAPPY BIRTHDAY! 🎆</h2><p>Fireworks in your honor!</p>';
            megaFireworks();
            break;
    }

    elements.easterEggDisplay.classList.add('active');

    setTimeout(() => {
        elements.easterEggDisplay.classList.remove('active');
    }, 3000);
}

function pigRain() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const pig = createElement('div', null, {
                position: 'fixed',
                left: `${randomBetween(0, 100)}vw`,
                top: '-50px',
                fontSize: '40px',
                zIndex: '100000',
                animation: `fallingPig ${randomBetween(2, 4)}s linear forwards`
            });
            pig.textContent = '🐷';
            document.body.appendChild(pig);
            setTimeout(() => pig.remove(), 4000);
        }, i * 100);
    }
}

function heartBurst() {
    confetti({
        particleCount: 300,
        spread: 180,
        shapes: ['circle'],
        colors: ['#ec4899', '#f43f5e', '#fb7185', '#fda4af'],
        origin: { y: 0.5 }
    });
}

function megaFireworks() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: randomBetween(100, 180),
                origin: { x: randomBetween(0.2, 0.8), y: randomBetween(0.3, 0.7) }
            });
        }, i * 300);
    }
}

// ════════════════════════════════════════════════════════════════════════════
// AOS INITIALIZATION
// ════════════════════════════════════════════════════════════════════════════

function initAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
}

// ════════════════════════════════════════════════════════════════════════════
// ADDITIONAL CSS FOR DYNAMIC ANIMATIONS
// ════════════════════════════════════════════════════════════════════════════

const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes portalParticleSpin {
        from { transform: rotate(0deg) translateX(${randomBetween(50, 100)}px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(${randomBetween(50, 100)}px) rotate(-360deg); }
    }

    @keyframes fireworkExplode {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(20); opacity: 0; }
    }

    @keyframes fallingPig {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(120vh) rotate(720deg); }
    }
`;
document.head.appendChild(dynamicStyles);

// ════════════════════════════════════════════════════════════════════════════
// INITIALIZE
// ════════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
});

console.log('%c🐷 Welcome to PoojaVerse! 🐷', 'font-size: 24px; color: #ec4899; font-family: cursive;');
console.log('%cMade with love by Prateek for Pooja ❤️', 'font-size: 14px; color: #be185d;');
