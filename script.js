// Global variables
let celebrationStarted = false;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add more sparkles and hearts dynamically
    createFloatingElements();
    
    // Initialize gift boxes
    initializeGiftBoxes();
    
    // Initialize timeline interactions
    initializeTimeline();
    
    // Initialize song interactions
    initializeSongs();
    
    // Add scroll animations
    initializeScrollAnimations();
});

// Enter celebration function
function enterCelebration() {
    const heroSection = document.getElementById('hero');
    const mainContent = document.getElementById('main-content');
    
    // Fade out hero section
    heroSection.style.transition = 'opacity 1s ease, transform 1s ease';
    heroSection.style.opacity = '0';
    heroSection.style.transform = 'scale(0.9)';
    
    // Show main content after delay
    setTimeout(() => {
        heroSection.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1';
        celebrationStarted = true;
        
        // Trigger confetti effect
        createConfetti();
        
        // Play entrance animation for sections
        animateSectionsEntrance();
    }, 1000);
}

// Create floating elements (hearts and sparkles)
function createFloatingElements() {
    const hero = document.querySelector('.hero-section');
    
    // Create additional floating hearts
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animation = `float ${Math.random() * 3 + 4}s ease-in-out infinite`;
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.opacity = '0.6';
        heart.style.pointerEvents = 'none';
        hero.appendChild(heart);
    }
    
    // Create additional sparkles
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = Math.random() * 1 + 0.8 + 'rem';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = `sparkle ${Math.random() * 2 + 3}s ease-in-out infinite`;
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.pointerEvents = 'none';
        hero.appendChild(sparkle);
    }
}

// Initialize gift boxes
function initializeGiftBoxes() {
    const giftBoxes = document.querySelectorAll('.gift-box');
    
    giftBoxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            openGift(index + 1);
        });
    });
}

// Open gift function
function openGift(giftNumber) {
    const modal = document.getElementById('gift-modal');
    const giftContent = document.getElementById('gift-content');
    
    const gifts = {
        1: {
            title: "Your Beautiful Eyes 👀",
            message: "Tumhari aankhon mein kuch toh baat hai shayad chashma chura ke laya hu !!",
            emoji: "✨👁️✨"
        },
        2: {
            title: " Your Sweet Voice 🎵",
            message: "Tumhari awaaz toh gulab jamun jasisi hai sunte hi mood meetha ho jata hai.",
            emoji: "🎶💕🎶"
        },
        3: {
            title: " Your Gentle Heart 💖",
            message: "Main duniya ki bheed mein tha... par tumhara dil mila toh pehli baar laga ke kahin apna sa hai.",
            emoji: "💝❤️💝"
        },
        4: {
            title: " Being You 🌟",
            message: "Tum kuch karti hi nahi... aur fir bhi dil le jaati | Bas tum hone ke wajah se.",
            emoji: "🌹👑🌹"
        }
    };
    
    const gift = gifts[giftNumber];
    giftContent.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 20px;">${gift.emoji}</div>
        <h3 style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #8E44AD; margin-bottom: 20px;">${gift.title}</h3>
        <p style="font-size: 1.1rem; line-height: 1.6; color: #333;">${gift.message}</p>
        <div style="margin-top: 30px; font-size: 2rem;">💕</div>
    `;
    
    modal.classList.remove('hidden');
    
    // Add gift opening animation
    const giftBox = document.querySelector(`[data-gift="${giftNumber}"]`);
    giftBox.style.animation = 'giftOpen 0.6s ease-in-out';
    
    setTimeout(() => {
        giftBox.style.animation = '';
    }, 600);
}

// Close modal
function closeModal() {
    const modal = document.getElementById('gift-modal');
    modal.classList.add('hidden');
}

// Initialize timeline interactions
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showTimelineDetail(index + 1);
        });
    });
}

// Show timeline detail
function showTimelineDetail(momentNumber) {
    const modal = document.getElementById('gift-modal');
    const giftContent = document.getElementById('gift-content');
    
    const moments = {
        1: {
            title: "First Smile 😊",
            message: "I still remember your first smile... not because it was perfect, but because that's the moment my heart forgot how to stay normal.",
            date: "The beginning of everything beautiful"
        },
        2: {
            title: "First Laugh 😄",
            message: "The first time you laughed... I swear, the world got a little quieter, just to listen to that sound .",
            date: "When music entered my world"
        },
        3: {
            title: "Every Day Since 💕",
            message: "Every day since i met you, even the ordinary moments feel like something straight out of a best friendship .",
            date: "Our beautiful journey continues"
        }
    };
    
    const moment = moments[momentNumber];
    giftContent.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 20px;">🌸</div>
        <h3 style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #8E44AD; margin-bottom: 10px;">${moment.title}</h3>
        <p style="font-style: italic; color: #666; margin-bottom: 20px;">${moment.date}</p>
        <p style="font-size: 1.1rem; line-height: 1.6; color: #333;">${moment.message}</p>
        <div style="margin-top: 30px; font-size: 2rem;">💖</div>
    `;
    
    modal.classList.remove('hidden');
}

// Initialize songs
function initializeSongs() {
    const songItems = document.querySelectorAll('.song-item');
    
    songItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            playSongAnimation(item);
        });
    });
}

// Play song animation
function playSongAnimation(songElement) {
    const icon = songElement.querySelector('.song-icon');
    
    // Change icon to playing state
    icon.innerHTML = '🎵';
    icon.style.animation = 'pulse 1s ease-in-out infinite';
    
    // Add playing effect
    songElement.style.background = 'linear-gradient(45deg, #FFE6E6, #FFD1DC)';
    songElement.style.transform = 'scale(1.02)';
    
    // Reset after 3 seconds
    setTimeout(() => {
        icon.style.animation = '';
        songElement.style.background = 'white';
        songElement.style.transform = '';
        icon.innerHTML = '🎵';
    }, 3000);
}

// Blow candle function
function blowCandle() {
    const flame = document.getElementById('flame');
    const candle = document.getElementById('candle');
    const cake = document.querySelector('.cake');
    
    // Blow out the flame
    flame.style.animation = 'blowOut 0.5s ease-in-out forwards';
    
    setTimeout(() => {
        flame.style.display = 'none';
        
        // Add cake glow effect
        cake.style.boxShadow = '0 0 30px #FFEB3B, 0 0 60px #FF6B6B';
        cake.style.animation = 'cakeGlow 2s ease-in-out';
        
        // Show wish granted message
        showWishMessage();
        
        // Create celebration particles
        createWishParticles();
        
    }, 500);
    
    // Reset after 5 seconds
    setTimeout(() => {
        flame.style.display = 'block';
        flame.style.animation = 'flicker 1s ease-in-out infinite alternate';
        cake.style.boxShadow = '';
        cake.style.animation = '';
    }, 5000);
}

// Show wish message
function showWishMessage() {
    const modal = document.getElementById('gift-modal');
    const giftContent = document.getElementById('gift-content');
    
    giftContent.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px;">🎂✨</div>
        <h3 style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; color: #8E44AD; margin-bottom: 20px;">Wish Granted! 🌟</h3>
        <p style="font-size: 1.2rem; line-height: 1.6; color: #333; margin-bottom: 20px;">
            May all your dreams come true, beautiful soul! 
            <br><br>
            Another year of your amazing life begins today, and I can't wait to be part of every magical moment ahead.
        </p>
        <div style="font-size: 3rem;">🎉💖🎉</div>
    `;
    
    modal.classList.remove('hidden');
}

// Create wish particles
function createWishParticles() {
    const container = document.querySelector('.cake-container');
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = ['✨', '🎉', '💖', '🌟'][Math.floor(Math.random() * 4)];
        particle.style.position = 'absolute';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '50%';
        particle.style.fontSize = '1.5rem';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `wishParticle ${Math.random() * 2 + 2}s ease-out forwards`;
        particle.style.animationDelay = Math.random() * 0.5 + 's';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }
}

// Create confetti effect
function createConfetti() {
    const body = document.body;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['🎉', '🎊', '💖', '🌹', '✨'][Math.floor(Math.random() * 5)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.fontSize = Math.random() * 1 + 1 + 'rem';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Animate sections entrance
function animateSectionsEntrance() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.timeline-item, .gift-box, .song-item, .letter, .gallery-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes giftOpen {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(5deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
    
    @keyframes blowOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.3); }
    }
    
    @keyframes cakeGlow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
    }
    
    @keyframes wishParticle {
        0% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translateY(-100px) scale(0.5); 
        }
    }
    
    @keyframes confettiFall {
        0% { 
            transform: translateY(-10px) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: translateY(100vh) rotate(360deg); 
            opacity: 0; 
        }
    }
    
    @keyframes slideInUp {
        0% { 
            opacity: 0; 
            transform: translateY(30px); 
        }
        100% { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('gift-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

