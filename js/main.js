// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Initialize analytics tracking
  initAnalytics();
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
    
    // Close menu when clicking on a nav link
    navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
});

// Language Manager Class
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translations = {
      en: {
        // Navigation
        'nav-home': 'Home',
        'nav-gallery': 'Gallery',
        'nav-about': 'About Me',
        'nav-contact': 'Contact',
        'nav-donate': 'Donate',
        
        // Hero Section
        'hero-title': 'My world of colors and emotions',
        'hero-desc': 'Paintings made with soul. Welcome!',
        'hero-btn': 'View Gallery',
        
        // Featured Artwork
        'featured-title': 'Featured Artwork',
        'featured-digital-title': 'Digital Dreams',
        'featured-digital-desc': 'AI Generated Art • Created with advanced neural networks, this piece explores the intersection of technology and creativity.',
        'featured-urban-title': 'Urban Reflections',
        'featured-urban-desc': 'Photography • Captured during golden hour, showcasing the beauty of urban architecture and natural light.',
        'featured-abstract-title': 'Abstract Emotions',
        'featured-abstract-desc': 'Traditional Painting • Mixed media on canvas, expressing deep emotions through color and form.',
        
        // Artist Introduction
        'intro-title': 'About My Artistic Journey',
        'intro-paragraph1': 'I create art that bridges the gap between traditional techniques and cutting-edge technology. My work spans across AI-generated art, photography, and traditional paintings, each medium offering unique ways to express creativity and emotion.',
        'intro-paragraph2': 'Every piece tells a story - whether crafted with brushes and paint, captured through a lens, or born from algorithms and imagination. I believe art should inspire, provoke thought, and connect with the viewer on a personal level.',
        'intro-learn-more': 'Learn More About Me',
        
        // Medium Preview
        'medium-title': 'Explore My Art',
        'medium-ai-title': 'AI Generated Art',
        'medium-ai-desc': 'Cutting-edge digital creations using artificial intelligence and machine learning algorithms.',
        'medium-ai-btn': 'Explore AI Art',
        'medium-photo-title': 'Photography',
        'medium-photo-desc': 'Capturing moments, emotions, and beauty through the lens of creative vision.',
        'medium-photo-btn': 'View Photography',
        'medium-painting-title': 'Traditional Paintings',
        'medium-painting-desc': 'Hand-crafted artwork using traditional mediums like oil, acrylic, and mixed media.',
        'medium-painting-btn': 'See Paintings',
        
        // Recent Work
        'recent-title': 'Latest Creations',
        'recent-ai-title': 'New AI Series',
        'recent-ai-desc': 'Exploring new techniques in AI art generation with focus on abstract expressionism.',
        'recent-urban-title': 'Urban Photography Collection',
        'recent-urban-desc': 'Street photography series capturing the essence of city life and human connections.',
        'recent-mixed-title': 'Mixed Media Experiments',
        'recent-mixed-desc': 'New traditional painting techniques combining various mediums and textures.',
        
        // Gallery Page
        'gallery-title': 'Art Gallery',
        'gallery-desc': 'Explore my artistic journey through three distinct mediums',
        'filter-all': 'All Works',
        'filter-photography': 'Photography',
        'filter-paintings': 'Paintings',
        'filter-ai': 'AI Art',
        
        // Contact Page
        'contact-page-title': 'Contact - My Art Shop',
        'contact-title': 'Contact Me',
        'contact-desc': 'Get in touch for commissions or questions about my paintings.',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-subject': 'Subject',
        'contact-subject-select': 'Select a subject',
        'contact-subject-commission': 'Commission Request',
        'contact-subject-general': 'General Inquiry',
        'contact-subject-purchase': 'Print Purchase',
        'contact-subject-collaboration': 'Collaboration',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'contact-info-title': 'Get in Touch',
        'contact-response-time': 'Response Time:',
        'contact-response-desc': 'Usually within 24 hours',
        'contact-commission-info': 'Commissions:',
        'contact-commission-desc': 'Currently accepting custom artwork requests',
        'contact-social-title': 'Follow My Work:',
      },
      
      de: {
        // Navigation
        'nav-home': 'Startseite',
        'nav-gallery': 'Galerie',
        'nav-about': 'Über Mich',
        'nav-contact': 'Kontakt',
        'nav-donate': 'Spenden',
        
        // Hero Section
        'hero-title': 'Meine Welt der Farben und Emotionen',
        'hero-desc': 'Mit Seele gemalte Bilder. Willkommen!',
        'hero-btn': 'Galerie Ansehen',
        
        // Featured Artwork
        'featured-title': 'Ausgewählte Kunstwerke',
        'featured-digital-title': 'Digitale Träume',
        'featured-digital-desc': 'KI-generierte Kunst • Erstellt mit fortschrittlichen neuronalen Netzwerken, erkundet dieses Werk die Schnittstelle von Technologie und Kreativität.',
        'featured-urban-title': 'Urbane Reflexionen',
        'featured-urban-desc': 'Fotografie • Aufgenommen während der goldenen Stunde, zeigt die Schönheit urbaner Architektur und natürlichen Lichts.',
        'featured-abstract-title': 'Abstrakte Emotionen',
        'featured-abstract-desc': 'Traditionelle Malerei • Mischtechnik auf Leinwand, drückt tiefe Emotionen durch Farbe und Form aus.',
        
        // Artist Introduction
        'intro-title': 'Über Meine Künstlerische Reise',
        'intro-paragraph1': 'Ich erschaffe Kunst, die die Lücke zwischen traditionellen Techniken und modernster Technologie überbrückt. Meine Arbeit erstreckt sich über KI-generierte Kunst, Fotografie und traditionelle Malerei, wobei jedes Medium einzigartige Wege bietet, Kreativität und Emotion auszudrücken.',
        'intro-paragraph2': 'Jedes Stück erzählt eine Geschichte - ob mit Pinsel und Farbe geschaffen, durch eine Linse eingefangen oder aus Algorithmen und Vorstellungskraft geboren. Ich glaube, dass Kunst inspirieren, zum Nachdenken anregen und den Betrachter auf persönlicher Ebene berühren sollte.',
        'intro-learn-more': 'Mehr Über Mich Erfahren',
        
        // Medium Preview
        'medium-title': 'Entdecken Sie Meine Kunst',
        'medium-ai-title': 'KI-Generierte Kunst',
        'medium-ai-desc': 'Modernste digitale Kreationen mit künstlicher Intelligenz und maschinellen Lernalgorithmen.',
        'medium-ai-btn': 'KI-Kunst Erkunden',
        'medium-photo-title': 'Fotografie',
        'medium-photo-desc': 'Momente, Emotionen und Schönheit durch die Linse kreativer Vision einfangen.',
        'medium-photo-btn': 'Fotografie Ansehen',
        'medium-painting-title': 'Traditionelle Malerei',
        'medium-painting-desc': 'Handwerklich gefertigte Kunstwerke mit traditionellen Medien wie Öl, Acryl und Mischtechnik.',
        'medium-painting-btn': 'Gemälde Sehen',
        
        // Recent Work
        'recent-title': 'Neueste Kreationen',
        'recent-ai-title': 'Neue KI-Serie',
        'recent-ai-desc': 'Erforschung neuer Techniken in der KI-Kunstgenerierung mit Fokus auf abstrakten Expressionismus.',
        'recent-urban-title': 'Urbane Fotografie-Sammlung',
        'recent-urban-desc': 'Straßenfotografie-Serie, die das Wesen des Stadtlebens und menschlicher Verbindungen einfängt.',
        'recent-mixed-title': 'Mischtechnik-Experimente',
        'recent-mixed-desc': 'Neue traditionelle Maltechniken, die verschiedene Medien und Texturen kombinieren.',
        
        // Gallery Page
        'gallery-title': 'Kunstgalerie',
        'gallery-desc': 'Entdecken Sie meine künstlerische Reise durch drei verschiedene Medien',
        'filter-all': 'Alle Werke',
        'filter-photography': 'Fotografie',
        'filter-paintings': 'Gemälde',
        'filter-ai': 'KI-Kunst',
        
        // Contact Page
        'contact-page-title': 'Kontakt - Mein Kunst-Shop',
        'contact-title': 'Kontaktieren Sie Mich',
        'contact-desc': 'Nehmen Sie Kontakt auf für Aufträge oder Fragen zu meinen Gemälden.',
        'contact-name': 'Name',
        'contact-email': 'E-Mail',
        'contact-subject': 'Betreff',
        'contact-subject-select': 'Betreff auswählen',
        'contact-subject-commission': 'Auftragsanfrage',
        'contact-subject-general': 'Allgemeine Anfrage',
        'contact-subject-purchase': 'Druck-Kauf',
        'contact-subject-collaboration': 'Zusammenarbeit',
        'contact-message': 'Nachricht',
        'contact-send': 'Nachricht Senden',
        'contact-info-title': 'Kontakt Aufnehmen',
        'contact-response-time': 'Antwortzeit:',
        'contact-response-desc': 'Normalerweise innerhalb von 24 Stunden',
        'contact-commission-info': 'Aufträge:',
        'contact-commission-desc': 'Nehme derzeit Anfragen für individuelle Kunstwerke an',
        'contact-social-title': 'Folgen Sie Meiner Arbeit:',
      }
    };
    
    this.init();
  }
  
  init() {
    this.updateLanguageDisplay();
    this.translatePage();
    this.setupLanguageToggle();
  }
  
  setupLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      languageToggle.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }
  }
  
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    localStorage.setItem('selectedLanguage', this.currentLanguage);
    this.updateLanguageDisplay();
    this.translatePage();
  }
  
  updateLanguageDisplay() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      const langTexts = languageToggle.querySelectorAll('.lang-text');
      if (this.currentLanguage === 'en') {
        langTexts[0].style.fontWeight = 'bold';
        langTexts[0].style.color = '#333';
        langTexts[1].style.fontWeight = 'normal';
        langTexts[1].style.color = '#666';
      } else {
        langTexts[0].style.fontWeight = 'normal';
        langTexts[0].style.color = '#666';
        langTexts[1].style.fontWeight = 'bold';
        langTexts[1].style.color = '#333';
      }
    }
  }
  
  translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.translations[this.currentLanguage][key];
      if (translation) {
        element.textContent = translation;
      }
    });
    
    // Update page title and html lang attribute
    document.documentElement.lang = this.currentLanguage;
    if (this.currentLanguage === 'de') {
      document.title = 'Mein Kunst-Shop';
    } else {
      document.title = 'My Art Shop';
    }
  }
}

// EmailJS Contact Form Manager
class ContactFormManager {
  constructor() {
    this.serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    this.templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    this.publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
    
    this.init();
  }
  
  init() {
    // Initialize EmailJS
    emailjs.init(this.publicKey);
    
    // Setup form handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const statusDiv = document.getElementById('form-status');
    
    // Show loading state
    this.setLoadingState(submitBtn, btnText, btnLoading, true);
    statusDiv.innerHTML = '';
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(this.serviceId, this.templateId, form);
      
      if (result.status === 200) {
        this.showStatus('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.showStatus('error', 'Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      this.setLoadingState(submitBtn, btnText, btnLoading, false);
    }
  }
  
  setLoadingState(submitBtn, btnText, btnLoading, isLoading) {
    if (isLoading) {
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';
      submitBtn.classList.add('loading');
    } else {
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.classList.remove('loading');
    }
  }
  
  showStatus(type, message) {
    const statusDiv = document.getElementById('form-status');
    statusDiv.className = `form-status ${type}`;
    statusDiv.innerHTML = message;
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        statusDiv.innerHTML = '';
        statusDiv.className = 'form-status';
      }, 5000);
    }
  }
}

// Google Analytics Manager
class AnalyticsManager {
  constructor() {
    this.init();
  }
  
  init() {
    // Track page views automatically
    this.trackPageView();
    
    // Setup custom event tracking
    this.setupEventTracking();
  }
  
  trackPageView() {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }
  
  trackEvent(action, category, label = '', value = 0) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }
  
  setupEventTracking() {
    // Track gallery image views
    document.addEventListener('click', (e) => {
      if (e.target.closest('.card img')) {
        const imgSrc = e.target.src;
        const artworkName = imgSrc.split('/').pop().split('.')[0];
        this.trackEvent('image_view', 'Gallery', artworkName);
      }
    });
    
    // Track category filter usage
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('category-btn')) {
        const category = e.target.getAttribute('data-category');
        this.trackEvent('filter_click', 'Gallery', category);
      }
    });
    
    // Track language switches
    document.addEventListener('click', (e) => {
      if (e.target.closest('#language-toggle')) {
        this.trackEvent('language_switch', 'UI', 'Language Toggle');
      }
    });
    
    // Track engagement interactions (likes/shares)
    document.addEventListener('click', (e) => {
      if (e.target.closest('.like-btn')) {
        this.trackEvent('like_click', 'Engagement', 'Artwork Like');
      }
      if (e.target.closest('.share-btn')) {
        this.trackEvent('share_click', 'Engagement', 'Artwork Share');
      }
    });
    
    // Track contact form submissions
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'contact-form') {
        this.trackEvent('form_submit', 'Contact', 'Contact Form');
      }
    });
    
    // Track outbound links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.hostname !== window.location.hostname) {
        this.trackEvent('outbound_click', 'External Link', link.href);
      }
    });
  }
  
  // Track custom artwork interactions
  trackArtworkInteraction(artworkId, action) {
    this.trackEvent(action, 'Artwork Interaction', artworkId);
  }
  
  // Track user engagement time
  trackEngagementTime() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const engagementTime = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('engagement_time', 'User Behavior', '', engagementTime);
    });
  }
}

// ...existing code...
// Gallery Lightbox Modal - Simple Version
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = Array.from(document.querySelectorAll('.gallery .card img'));
  const modal = document.getElementById('lightbox-modal');
  const modalImg = modal?.querySelector('.lightbox-img');
  const closeBtn = modal?.querySelector('.lightbox-close');
  const prevBtn = modal?.querySelector('.lightbox-prev');
  const nextBtn = modal?.querySelector('.lightbox-next');
  
  let currentIndex = 0;
  
  function openModal(index) {
    if (!modal || !modalImg) return;
    currentIndex = index;
    modalImg.src = galleryImages[index].src;
    modal.style.display = 'flex';
  }

  function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    modalImg.src = '';
    resetZoom();
  }

  function navigateModal(direction) {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openModal(newIndex);
  }

  // Event listeners
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
  });

  closeBtn?.addEventListener('click', closeModal);
  prevBtn?.addEventListener('click', () => navigateModal('prev'));
  nextBtn?.addEventListener('click', () => navigateModal('next'));

  // Close on background click
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal?.style.display === 'flex') {
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateModal('prev');
          break;
        case 'ArrowRight':
          navigateModal('next');
          break;
      }
    }
  });

  // Keep existing zoom functionality
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isZoomed = false;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  function resetZoom() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    isZoomed = false;
    updateTransform();
  }

  function updateTransform() {
    if (modalImg) {
      modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      modalImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
      modalImg.style.transition = isDragging ? 'none' : 'transform 0.2s ease';
    }
  }

  function setupZoomControls() {
    if (!modalImg) return;

    // Remove existing event listeners to prevent duplicates
    modalImg.replaceWith(modalImg.cloneNode(true));
    const newModalImg = modal.querySelector('.lightbox-img');

    // Double-click to zoom
    newModalImg.addEventListener('dblclick', (e) => {
      e.preventDefault();
      if (scale === 1) {
        const rect = newModalImg.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const clickX = e.clientX - centerX;
        const clickY = e.clientY - centerY;
        
        scale = 2.5;
        translateX = -clickX * (scale - 1);
        translateY = -clickY * (scale - 1);
        isZoomed = true;
      } else {
        resetZoom();
      }
      updateTransform();
    });

    // Wheel zoom
    newModalImg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.min(Math.max(0.5, scale * delta), 5);
      
      if (newScale !== scale) {
        const rect = newModalImg.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        translateX = translateX * (newScale / scale) - mouseX * (newScale - scale);
        translateY = translateY * (newScale / scale) - mouseY * (newScale - scale);
        scale = newScale;
        isZoomed = scale > 1;
        updateTransform();
      }
    });

    // Mouse drag for panning
    newModalImg.addEventListener('mousedown', (e) => {
      if (scale > 1) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        newModalImg.style.cursor = 'grabbing';
        e.preventDefault();
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging && scale > 1) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
      }
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        if (newModalImg) {
          newModalImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
        }
      }
    });
  }

  function showPrev() {
    if (currentIndex > 0) {
      openModal(currentIndex - 1);
    }
  }
  
  function showNext() {
    if (currentIndex < galleryImages.length - 1) {
      openModal(currentIndex + 1);
    }
  }

  galleryImages.forEach((img, idx) => {
    img.addEventListener('click', function() {
      openModal(idx);
    });
  });
  
  closeBtn?.addEventListener('click', closeModal);
  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);
  
  modal?.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex') {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    }
  });
});

// Gallery Category Filter Logic
document.addEventListener('DOMContentLoaded', function() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const gallerySections = document.querySelectorAll('.gallery-section');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Update active button
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Show/hide sections based on category
      gallerySections.forEach(section => {
        const sectionCategory = section.getAttribute('data-category');
        
        if (category === 'all' || sectionCategory === category) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});

// Sensitive image reveal logic
document.querySelectorAll('.reveal-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const blurContainer = this.closest('.blur-container');
    blurContainer.classList.add('revealed');
    this.parentElement.style.display = 'none';
  });
});

const translations = {
  ru: {
    home: "Главная",
    gallery: "Галерея",
    about: "Обо мне",
    contact: "Контакты",
    "hero-title": "Мой мир красок и эмоций",
    "hero-desc": "Картины, написанные с душой. Добро пожаловать!",
    "hero-btn": "Смотреть галерею",
    footer: "© 2025 Мой арт-магазин",
    "contact-title": "Напишите мне",
    "contact-desc": "Свяжитесь со мной для заказа или вопросов о картинах.",
    "contact-name": "Имя",
    "contact-email": "Email",
    "contact-message": "Сообщение",
    "contact-send": "Отправить",
    "gallery-title": "Галерея картин",
    "gallery-item1-title": "Название картины 1",
    "gallery-item1-desc": "Акрил, холст — 40x60 см",
    "gallery-item2-title": "Название картины 2",
    "gallery-item2-desc": "Масло, холст — 50x70 см",
    "gallery-item3-title": "Название картины 3",
    "gallery-item3-desc": "Акварель, бумага — 30x40 см",
    "gallery-item4-title": "Название картины 4",
    "gallery-item4-desc": "Гуашь, холст — 60x80 см",
    "gallery-item5-title": "Название картины 5",
    "gallery-item5-desc": "Масло, холст — 40x50 см",
    "gallery-item6-title": "Название картины 6",
    "gallery-item6-desc": "Акрил, холст — 30x30 см",
    "gallery-item7-title": "Название картины 7",
    "gallery-item7-desc": "Акварель, бумага — 50x60 см",
    "gallery-item8-title": "Название картины 8",
    "gallery-item8-desc": "Гуашь, холст — 70x90 см",
    "gallery-item9-title": "Название картины 9",
    "gallery-item9-desc": "Масло, холст — 60x60 см",
    "gallery-item10-title": "Название картины 10",
    "gallery-item10-desc": "Акрил, холст — 80x100 см",
    "about-title": "Привет! Я художник.",
    "about-desc": "Я создаю картины, вдохновлённые чувствами, светом и природой. Каждый мазок — это эмоция, каждый цвет — часть истории."
  },
  en: {
    home: "Home",
    gallery: "Gallery",
    about: "About Me",
    contact: "Contact",
    "hero-title": "My world of colors and emotions",
    "hero-desc": "Paintings made with soul. Welcome!",
    "hero-btn": "View Gallery",
    footer: "© 2025 My Art Shop",
    "contact-title": "Contact Me",
    "contact-desc": "Get in touch for commissions or questions about my paintings.",
    "contact-name": "Name",
    "contact-email": "Email",
    "contact-message": "Message",
    "contact-send": "Send",
    "gallery-title": "Art Gallery",
    "gallery-item1-title": "Painting Title 1",
    "gallery-item1-desc": "Acrylic, canvas — 40x60 cm",
    "gallery-item2-title": "Painting Title 2",
    "gallery-item2-desc": "Oil, canvas — 50x70 cm",
    "gallery-item3-title": "Painting Title 3",
    "gallery-item3-desc": "Watercolor, paper — 30x40 cm",
    "gallery-item4-title": "Painting Title 4",
    "gallery-item4-desc": "Gouache, canvas — 60x80 cm",
    "gallery-item5-title": "Painting Title 5",
    "gallery-item5-desc": "Oil, canvas — 40x50 cm",
    "gallery-item6-title": "Painting Title 6",
    "gallery-item6-desc": "Acrylic, canvas — 30x30 cm",
    "gallery-item7-title": "Painting Title 7",
    "gallery-item7-desc": "Watercolor, paper — 50x60 cm",
    "gallery-item8-title": "Painting Title 8",
    "gallery-item8-desc": "Gouache, canvas — 70x90 cm",
    "gallery-item9-title": "Painting Title 9",
    "gallery-item9-desc": "Oil, canvas — 60x60 cm",
    "gallery-item10-title": "Painting Title 10",
    "gallery-item10-desc": "Acrylic, canvas — 80x100 cm",
    "about-title": "Hello! I'm an artist.",
    "about-desc": "I create paintings inspired by feelings, light, and nature. Every brushstroke is an emotion, every color is part of a story."
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById("lang-ru")?.addEventListener("click", () => switchLanguage("ru"));
document.getElementById("lang-en")?.addEventListener("click", () => switchLanguage("en"));
document.getElementById("contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Спасибо! Ваше сообщение отправлено (пока что только тестовая форма).");
  this.reset();
});

// Cookie Consent Management
class CookieManager {
  constructor() {
    this.init();
  }

  init() {
    if (!this.hasConsent()) {
      this.showBanner();
    } else {
      this.startTracking();
    }
    this.bindEvents();
  }

  hasConsent() {
    return localStorage.getItem('cookieConsent') === 'accepted';
  }

  showBanner() {
    const banner = document.getElementById('cookieConsent');
    if (banner) {
      banner.classList.add('show');
    }
  }

  hideBanner() {
    const banner = document.getElementById('cookieConsent');
    if (banner) {
      banner.classList.remove('show');
    }
  }

  acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    this.hideBanner();
    this.startTracking();
  }

  declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    this.hideBanner();
  }

  startTracking() {
    // Track page visit
    this.trackPageVisit();
  }

  trackPageVisit() {
    const currentPage = window.location.pathname;
    const visits = JSON.parse(localStorage.getItem('pageVisits') || '{}');
    visits[currentPage] = (visits[currentPage] || 0) + 1;
    localStorage.setItem('pageVisits', JSON.stringify(visits));
    console.log(`Page visit tracked: ${currentPage} - ${visits[currentPage]} visits`);
  }

  bindEvents() {
    document.getElementById('acceptCookies')?.addEventListener('click', () => this.acceptCookies());
    document.getElementById('declineCookies')?.addEventListener('click', () => this.declineCookies());
  }
}

// Engagement Tracking System
class EngagementTracker {
  constructor() {
    this.init();
  }

  init() {
    this.loadEngagementData();
    this.bindEvents();
    this.updateDisplays();
  }

  loadEngagementData() {
    this.engagement = JSON.parse(localStorage.getItem('artworkEngagement') || '{}');
  }

  saveEngagementData() {
    localStorage.setItem('artworkEngagement', JSON.stringify(this.engagement));
  }

  toggleLike(artworkId) {
    if (!this.engagement[artworkId]) {
      this.engagement[artworkId] = { likes: 0, reposts: 0, userLiked: false, userReposted: false };
    }

    const artwork = this.engagement[artworkId];
    if (artwork.userLiked) {
      artwork.likes = Math.max(0, artwork.likes - 1);
      artwork.userLiked = false;
    } else {
      artwork.likes += 1;
      artwork.userLiked = true;
    }

    this.saveEngagementData();
    this.updateDisplays();
  }

  toggleShare(artworkId, buttonElement) {
    if (!this.engagement[artworkId]) {
      this.engagement[artworkId] = { likes: 0, shares: 0, userLiked: false, userShared: false };
    }

    const artwork = this.engagement[artworkId];
    
    // Get artwork details for sharing
    const artworkCard = buttonElement.closest('.card');
    const artworkTitle = artworkCard.querySelector('h2').textContent;
    const artworkDesc = artworkCard.querySelector('p').textContent;
    const artworkImg = artworkCard.querySelector('img').src;
    
    // Try to use native share API (like Instagram/mobile)
    if (navigator.share) {
      navigator.share({
        title: `${artworkTitle} - My Art Gallery`,
        text: `Check out this amazing artwork: ${artworkTitle} - ${artworkDesc}`,
        url: window.location.href
      }).then(() => {
        // Share was successful
        if (!artwork.userShared) {
          artwork.shares += 1;
          artwork.userShared = true;
          this.saveEngagementData();
          this.updateDisplays();
        }
        
        // Add visual feedback
        buttonElement.classList.add('share-animation');
        setTimeout(() => {
          buttonElement.classList.remove('share-animation');
        }, 600);
      }).catch(() => {
        // Share was cancelled or failed
        console.log('Share cancelled');
      });
    } else {
      // Fallback: copy link to clipboard
      const shareUrl = window.location.href;
      const shareText = `Check out "${artworkTitle}" - ${artworkDesc} at ${shareUrl}`;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
          // Update share count
          if (!artwork.userShared) {
            artwork.shares += 1;
            artwork.userShared = true;
            this.saveEngagementData();
            this.updateDisplays();
          }
          
          // Show feedback
          this.showShareFeedback(buttonElement, 'Link copied to clipboard!');
        });
      } else {
        // Ultimate fallback
        this.showShareFeedback(buttonElement, 'Share this artwork with your friends!');
        if (!artwork.userShared) {
          artwork.shares += 1;
          artwork.userShared = true;
          this.saveEngagementData();
          this.updateDisplays();
        }
      }
    }
  }

  showShareFeedback(buttonElement, message) {
    // Create temporary feedback message
    const feedback = document.createElement('div');
    feedback.className = 'share-feedback';
    feedback.textContent = message;
    feedback.style.cssText = `
      position: absolute;
      background: #1F687D;
      color: white;
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 0.8rem;
      z-index: 1000;
      white-space: nowrap;
      transform: translateX(-50%);
      left: 50%;
      bottom: 100%;
      margin-bottom: 0.5rem;
    `;
    
    buttonElement.style.position = 'relative';
    buttonElement.appendChild(feedback);
    
    // Add animation
    buttonElement.classList.add('share-animation');
    
    // Remove after 2 seconds
    setTimeout(() => {
      feedback.remove();
      buttonElement.classList.remove('share-animation');
    }, 2000);
  }

  updateDisplays() {
    document.querySelectorAll('.like-btn').forEach(btn => {
      const artworkId = btn.dataset.artworkId;
      const artwork = this.engagement[artworkId] || { likes: 0, userLiked: false };
      
      btn.querySelector('.like-count').textContent = artwork.likes;
      btn.classList.toggle('liked', artwork.userLiked);
    });

    document.querySelectorAll('.share-btn').forEach(btn => {
      const artworkId = btn.dataset.artworkId;
      const artwork = this.engagement[artworkId] || { shares: 0, userShared: false };
      
      btn.classList.toggle('shared', artwork.userShared);
    });
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.like-btn')) {
        const btn = e.target.closest('.like-btn');
        const artworkId = btn.dataset.artworkId;
        this.toggleLike(artworkId);
      }
      
      if (e.target.closest('.share-btn')) {
        const btn = e.target.closest('.share-btn');
        const artworkId = btn.dataset.artworkId;
        this.toggleShare(artworkId, btn);
      }
    });
  }
}

// Initialize systems when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CookieManager();
  new EngagementTracker();
  new ImageProtection();
  new LanguageManager();
  new ContactFormManager();
  new AnalyticsManager();
});

// Image Protection System
class ImageProtection {
  constructor() {
    this.init();
  }

  init() {
    this.protectLightbox();
    this.disableRightClickOnLightbox();
    this.disableKeyboardShortcutsInLightbox();
    this.detectDevToolsInLightbox();
  }

  protectLightbox() {
    // Only protect the lightbox modal, not gallery thumbnails
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal) {
      lightboxModal.classList.add('protected-content');
      
      // Listen for lightbox opening
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const isVisible = !lightboxModal.style.display || lightboxModal.style.display !== 'none';
            if (isVisible) {
              this.activateProtection();
            } else {
              this.deactivateProtection();
            }
          }
        });
      });
      
      observer.observe(lightboxModal, { attributes: true });
    }
  }

  activateProtection() {
    console.log('Lightbox opened - activating protection');
    const lightboxImg = document.querySelector('.lightbox-img');
    if (lightboxImg) {
      lightboxImg.classList.add('protected-image-active');
      
      // Disable right-click on lightbox
      lightboxImg.setAttribute('oncontextmenu', 'return false;');
      lightboxImg.setAttribute('draggable', 'false');
      lightboxImg.style.userSelect = 'none';
      lightboxImg.style.webkitUserSelect = 'none';
    }
    
    // Enable dev tools detection
    this.lightboxProtectionActive = true;
    this.startDevToolsMonitoring();
  }

  deactivateProtection() {
    console.log('Lightbox closed - deactivating protection');
    const lightboxImg = document.querySelector('.lightbox-img');
    if (lightboxImg) {
      lightboxImg.classList.remove('protected-image-active');
      lightboxImg.classList.remove('screenshot-protection');
    }
    
    // Disable dev tools detection
    this.lightboxProtectionActive = false;
    this.stopDevToolsMonitoring();
  }

  disableRightClickOnLightbox() {
    document.addEventListener('contextmenu', (e) => {
      const lightboxModal = document.getElementById('lightbox-modal');
      const isLightboxOpen = lightboxModal && (!lightboxModal.style.display || lightboxModal.style.display !== 'none');
      
      if (isLightboxOpen && (e.target.classList.contains('lightbox-img') || e.target.closest('#lightbox-modal'))) {
        e.preventDefault();
        this.showProtectionMessage();
        return false;
      }
    });
  }

  disableKeyboardShortcutsInLightbox() {
    document.addEventListener('keydown', (e) => {
      const lightboxModal = document.getElementById('lightbox-modal');
      const isLightboxOpen = lightboxModal && (!lightboxModal.style.display || lightboxModal.style.display !== 'none');
      
      if (!isLightboxOpen) return; // Only protect when lightbox is open
      
      // Block save/copy shortcuts when lightbox is open
      const forbiddenKeys = [
        { ctrl: true, key: 's' }, // Save
        { ctrl: true, key: 'S' }, // Save As
        { ctrl: true, key: 'c' }, // Copy
        { ctrl: true, key: 'a' }, // Select All
      ];

      const currentKey = {
        ctrl: e.ctrlKey,
        shift: e.shiftKey,
        alt: e.altKey,
        key: e.key
      };

      const isForbidden = forbiddenKeys.some(forbidden => {
        return Object.keys(forbidden).every(prop => forbidden[prop] === currentKey[prop]);
      });

      if (isForbidden) {
        e.preventDefault();
        this.showProtectionMessage();
        return false;
      }
    });
  }

  detectDevToolsInLightbox() {
    // Only detect dev tools when lightbox is open
    this.lightboxProtectionActive = false;
  }

  startDevToolsMonitoring() {
    if (this.devToolsInterval) return; // Already monitoring
    
    this.devToolsInterval = setInterval(() => {
      if (!this.lightboxProtectionActive) return;
      
      const threshold = 200;
      const heightDiff = window.outerHeight - window.innerHeight;
      const widthDiff = window.outerWidth - window.innerWidth;
      
      if ((heightDiff > threshold && widthDiff > threshold) || heightDiff > 300) {
        console.log('Dev tools detected - hiding lightbox image');
        this.hideLightboxImage();
      } else {
        this.showLightboxImage();
      }
    }, 1000);
  }

  stopDevToolsMonitoring() {
    if (this.devToolsInterval) {
      clearInterval(this.devToolsInterval);
      this.devToolsInterval = null;
    }
  }

  hideLightboxImage() {
    const lightboxImg = document.querySelector('.lightbox-img');
    if (lightboxImg) {
      lightboxImg.classList.add('screenshot-protection');
    }
  }

  showLightboxImage() {
    const lightboxImg = document.querySelector('.lightbox-img');
    if (lightboxImg) {
      lightboxImg.classList.remove('screenshot-protection');
    }
  }

  disableTextSelection() {
    document.addEventListener('selectstart', (e) => {
      if (e.target.closest('.card') || e.target.closest('.protected-image')) {
        e.preventDefault();
        return false;
      }
    });
  }

  showProtectionMessage() {
    // Create a temporary message
    const message = document.createElement('div');
    message.textContent = '🔒 Content is protected from copying';
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      z-index: 10001;
      font-size: 1rem;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
    }, 2000);
  }
}

// Simple Analytics Tracking System
function initAnalytics() {
  // Track page view
  trackPageView();
  
  // Track painting views in gallery
  trackPaintingViews();
  
  // Track contact form submissions
  trackContactForms();
  
  // Track button clicks
  trackButtonClicks();
}

function trackPageView() {
  const stats = getStats();
  const today = new Date().toDateString();
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Update total visits
  stats.totalVisits = (stats.totalVisits || 0) + 1;
  
  // Update today's visits
  if (stats.lastVisitDate !== today) {
    stats.todayVisits = 1;
    stats.lastVisitDate = today;
  } else {
    stats.todayVisits = (stats.todayVisits || 0) + 1;
  }
  
  // Update page views
  if (!stats.pageViews) stats.pageViews = {};
  stats.pageViews[currentPage] = (stats.pageViews[currentPage] || 0) + 1;
  
  // Track visitor location (simplified)
  if (navigator.language) {
    if (!stats.countries) stats.countries = {};
    const country = navigator.language.split('-')[1] || 'Unknown';
    stats.countries[country] = (stats.countries[country] || 0) + 1;
  }
  
  saveStats(stats);
}

function trackPaintingViews() {
  // Track when paintings are viewed in lightbox
  document.addEventListener('click', function(e) {
    if (e.target.closest('.painting-item')) {
      const paintingElement = e.target.closest('.painting-item');
      const paintingName = paintingElement.querySelector('img')?.alt || 'Unknown';
      
      const stats = getStats();
      if (!stats.paintingViews) stats.paintingViews = {};
      stats.paintingViews[paintingName] = (stats.paintingViews[paintingName] || 0) + 1;
      saveStats(stats);
    }
  });
}

function trackContactForms() {
  // Track contact form submissions
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      const stats = getStats();
      stats.contactForms = (stats.contactForms || 0) + 1;
      saveStats(stats);
    });
  }
}

function trackButtonClicks() {
  // Track important button clicks
  document.addEventListener('click', function(e) {
    const button = e.target.closest('button, .btn, .donate-btn');
    if (button) {
      const stats = getStats();
      if (!stats.buttonClicks) stats.buttonClicks = {};
      
      const buttonName = button.textContent.trim() || button.className;
      stats.buttonClicks[buttonName] = (stats.buttonClicks[buttonName] || 0) + 1;
      saveStats(stats);
    }
  });
}

function getStats() {
  const stored = localStorage.getItem('siteStats');
  return stored ? JSON.parse(stored) : {};
}

function saveStats(stats) {
  localStorage.setItem('siteStats', JSON.stringify(stats));
}
