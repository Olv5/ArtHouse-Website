/**
 * ART HOUSE - LUXURY BOUTIQUE HOTEL & ACCOMMODATION (ANGOLA)
 * Official Website JavaScript Engine
 * Standard Vanilla JS - No Framework Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (EN / PT) DATA & STATE MANAGEMENT
     ========================================================================== */
  const translations = {
    en: {
      navHome: "Home",
      navRooms: "Suites",
      navAbout: "About",
      navEvents: "Events",
      navGallery: "Gallery",
      navExperiences: "Experiences",
      navContact: "Contact",
      btnReserve: "Reserve a Stay",
      btnExplore: "Explore Collection",
      heroBadge: "Boutique Hotel & Art Sanctuary • Luanda, Angola",
      heroTitle: "Your space to relax, reconnect, and stay awhile.",
      heroDesc: "A serene haven blending contemporary Angolan art, modern architectural elegance, and bespoke hospitality in the heart of Luanda.",
      checkAvail: "Check Availability",
      arrival: "Check-in Date",
      departure: "Check-out Date",
      guests: "Guests",
      roomType: "Suite Category",
      allRooms: "All Suites",
      masterSuite: "Master Art Suite",
      gardenVilla: "Garden Villa Suite",
      executiveStudio: "Executive Studio",
      penthouse: "Art House Penthouse",
      night: "/ night",
      currencySymbol: "$",
      whatsappMsgIntro: "Hello Art House! I would like to request a reservation at your hotel in Luanda, Angola.",
      
      // Events Page Translations
      eventsTagline: "Bespoke Gatherings & Cultural Celebrations",
      eventsHeroTitle: "Private Events & Art Gatherings",
      eventsHeroDesc: "From curatorial art vernissages and executive symposia to romantic courtyard galas, Art House Angola offers extraordinary spaces tailored to unforgettable moments in Luanda.",
      btnInquireEvent: "Request Event Proposal",
      eventTypesTag: "Tailored Occasions",
      eventTypesTitle: "Curated Event Categories",
      eventTypesDesc: "Each event is thoughtfully managed by our dedicated cultural concierge, sommelier, and culinary team.",
      eventCat1: "Cultural Vernissages",
      eventCat2: "Gourmet Hospitality",
      eventCat3: "Corporate Excellence",
      eventCat4: "Bespoke Celebrations",
      venuesTag: "Architectural Spaces",
      venuesTitle: "Event Venue Capabilities",
      venuesDesc: "Choose from flexible indoor art lounges and lush open-air botanical garden courtyards.",
      inquiryTag: "Direct Concierge Booking",
      inquiryTitle: "Request an Event Proposal",
      inquiryDesc: "Share details about your upcoming gathering in Luanda, and our Event Director will respond within 24 hours with a custom proposal.",
      labelFullName: "Full Name *",
      labelEmail: "Email Address *",
      labelPhone: "Phone Number *",
      labelEventType: "Type of Event *",
      labelEventDate: "Preferred Event Date *",
      labelGuestCount: "Estimated Guest Count *",
      labelSpecialReq: "Event Details & Special Catering Requirements",
      btnSendEventRequest: "Submit Event Proposal via WhatsApp",

      // Reviews & Testimonials Translations EN
      reviewsTag: "Guest Ratings & Feedback",
      reviewsTitle: "Words from Our Visitors",
      reviewsSubtitle: "Authentic reviews from guests who stayed with us, featured on Booking.com and Google My Business.",
      verifiedStays: "Verified Booking.com Stays",
      googleProfile: "Google Business Profile",
      guestSatisfaction: "Guest Choice",
      topBoutique: "Top-Rated Boutique in Luanda",
      recommended: "Guest Satisfaction",
      scoreExceptional: "Exceptional",
      topHospitality: "Superb Care",
      filterAllReviews: "All Reviews",

      // Modal & Booking Translations
      bookingModalTag: "Direct Hotel Booking",
      bookingModalTitle: "Reserve Your Art House Stay",
      bookingModalDesc: "Select dates and suite preference to connect directly with our reservations team in Luanda via WhatsApp or Email.",
      btnConfirmWhatsApp: "Send Reservation Request via WhatsApp"
    },
    pt: {
      navHome: "Início",
      navRooms: "Suítes",
      navAbout: "Sobre",
      navEvents: "Eventos",
      navGallery: "Galeria",
      navExperiences: "Experiências",
      navContact: "Contacto",
      btnReserve: "Reservar Estadia",
      btnExplore: "Explorar Coleção",
      heroBadge: "Hotel Boutique e Refúgio de Arte • Luanda, Angola",
      heroTitle: "O seu espaço para relaxar, reconectar e permanecer.",
      heroDesc: "Um refúgio sereno que combina arte contemporânea angolana, elegância arquitetónica e hospitalidade personalizada no coração de Luanda.",
      checkAvail: "Verificar Disponibilidade",
      arrival: "Data de Entrada",
      departure: "Data de Saída",
      guests: "Hóspedes",
      roomType: "Categoria de Suíte",
      allRooms: "Todas as Suítes",
      masterSuite: "Suíte Master Art",
      gardenVilla: "Suíte Garden Villa",
      executiveStudio: "Estúdio Executivo",
      penthouse: "Cobertura Art House",
      night: "/ noite",
      currencySymbol: "$",
      whatsappMsgIntro: "Olá Art House! Gostaria de solicitar uma reserva para o vosso hotel em Luanda, Angola.",

      // Events Page Translations PT
      eventsTagline: "Encontros Exclusivos & Celebrações Culturais",
      eventsHeroTitle: "Eventos Privados & Exposições de Arte",
      eventsHeroDesc: "Desde vernissages de arte e simpósios executivos até galas românticas no pátio tropical, o Art House Angola oferece espaços extraordinários sob medida para momentos inesquecíveis em Luanda.",
      btnInquireEvent: "Solicitar Proposta de Evento",
      eventTypesTag: "Ocasiões Sob Medida",
      eventTypesTitle: "Categorias de Eventos Curadas",
      eventTypesDesc: "Cada evento é cuidadosamente gerido pela nossa equipa de concierge cultural, sommelier e chefs executivos.",
      eventCat1: "Vernissages Culturais",
      eventCat2: "Hospitalidade Gourmet",
      eventCat3: "Excelência Corporativa",
      eventCat4: "Celebrações Únicas",
      venuesTag: "Espaços Arquitetónicos",
      venuesTitle: "Capacidade dos Espaços para Eventos",
      venuesDesc: "Escolha entre lounges de arte interiores climatizados e pátios de jardim botânico ao ar livre.",
      inquiryTag: "Reserva Direta com Concierge",
      inquiryTitle: "Solicitar Proposta de Evento",
      inquiryDesc: "Partilhe os detalhes da sua reunião em Luanda e o nosso Diretor de Eventos responderá dentro de 24 horas com uma proposta personalizada.",
      labelFullName: "Nome Completo *",
      labelEmail: "Endereço de Correio Eletrónico *",
      labelPhone: "Número de Telefone / WhatsApp *",
      labelEventType: "Tipo de Evento *",
      labelEventDate: "Data Preferencial do Evento *",
      labelGuestCount: "Número Estimado de Hóspedes *",
      labelSpecialReq: "Detalhes do Evento & Requisitos de Catering",
      btnSendEventRequest: "Enviar Pedido de Proposta via WhatsApp",

      // Reviews & Testimonials Translations PT
      reviewsTag: "Avaliações de Hóspedes Verificados",
      reviewsTitle: "Palavras dos Nossos Visitantes",
      reviewsSubtitle: "Avaliações autênticas de hóspedes que se hospedaram connosco, publicadas no Booking.com e no Google My Business.",
      verifiedStays: "Estadias Verificadas Booking.com",
      googleProfile: "Perfil de Empresa no Google",
      guestSatisfaction: "Escolha dos Hóspedes",
      topBoutique: "Melhor Cotado em Luanda",
      recommended: "Satisfação dos Hóspedes",
      scoreExceptional: "Excecional",
      topHospitality: "Cuidados Soberbos",
      filterAllReviews: "Todas as Avaliações",

      // Modal & Booking Translations PT
      bookingModalTag: "Reserva Direta de Hotel",
      bookingModalTitle: "Reserve a sua Estadia no Art House",
      bookingModalDesc: "Selecione as datas e a categoria de suíte para entrar em contacto direto com a nossa equipa de reservas em Luanda via WhatsApp ou Email.",
      btnConfirmWhatsApp: "Enviar Pedido de Reserva via WhatsApp"
    }
  };

  // Load language preference from localStorage or default to English
  let currentLang = localStorage.getItem('arthouse_lang') || 'en';

  /* ==========================================================================
     2. LANGUAGE SWITCHER IMPLEMENTATION
     ========================================================================== */
  const langToggleBtn = document.querySelector('.lang-toggle');
  
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('arthouse_lang', lang);
    const t = translations[lang];
    if (!t) return;

    // Update active lang visual switch indicators
    document.querySelectorAll('.lang-toggle span').forEach(el => {
      if (el.dataset.lang === lang) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Update text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update placeholder texts
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Update active review card if review engine is initialized
    if (typeof window.renderActiveReview === 'function') {
      window.renderActiveReview();
    }
  }

  // Bind language toggle click
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'pt' : 'en';
      applyLanguage(newLang);
    });
  }

  // Initial language application
  applyLanguage(currentLang);

  /* ==========================================================================
     3. NAVIGATION & HEADER CONTROLS
     ========================================================================== */
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header on scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu drawer
  const toggleMobileMenu = () => {
    const isOpen = mobileDrawer?.classList.contains('is-open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const openMobileMenu = () => {
    mobileDrawer?.classList.add('is-open');
    drawerBackdrop?.classList.add('is-visible');
    mobileToggle?.classList.add('is-active');
    document.body.classList.add('no-scroll');
  };

  const closeMobileMenu = () => {
    mobileDrawer?.classList.remove('is-open');
    drawerBackdrop?.classList.remove('is-visible');
    mobileToggle?.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  };

  window.toggleMobileMenu = toggleMobileMenu;
  window.openMobileMenu = openMobileMenu;
  window.closeMobileMenu = closeMobileMenu;

  if (mobileToggle) mobileToggle.addEventListener('click', toggleMobileMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.drawer-close-btn').forEach(btn => {
    btn.addEventListener('click', closeMobileMenu);
  });

  // Active link indicator based on current page URL
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    if (
      (currentPath === '/' || currentPath.endsWith('index.html')) && (href === '/index.html' || href === '/' || href === '#home') ||
      (currentPath.includes('rooms') && href.includes('rooms')) ||
      (currentPath.includes('about') && href.includes('about')) ||
      (currentPath.includes('events') && href.includes('events')) ||
      (currentPath.includes('gallery') && href.includes('gallery')) ||
      (currentPath.includes('contact') && href.includes('contact'))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }

    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  /* ==========================================================================
     4. MULTI-PHOTO ROOM REPOSITORY & GALLERY MODAL ENGINE
     ========================================================================== */
  const roomsData = {
    'master-art-suite': {
      title: 'Master Art Suite',
      tagline: 'Signature Luxury & Curated Contemporary Art',
      priceUSD: 280,
      priceAOA: '185,000 Kz',
      size: '65 m² / 700 sq ft',
      capacity: '2 Adults, 1 Child',
      bed: 'Super King-size Custom Wood Bed',
      description: 'Our crown jewel suite features floor-to-ceiling panoramic views, custom teak furnishings, private art curation from Angolan masters, and an expansive marble bathroom with double rain showers and soaking tub.',
      amenities: ['Private Balcony with Garden View', 'Curated Angolan Art Collection', 'Marble Bathroom with Soaking Tub', 'High-Speed Fiber Wi-Fi', 'Artisanal Breakfast Included', 'Espresso & Tea Station', 'Chauffeur Airport Transfer'],
      images: [
        { url: '/images/MasterSuite.jpg', caption: 'Master Bedroom & Custom Teak Furniture' },
        { url: '/images/MasterSuite1.jpg', caption: 'Luxury Marble Bathroom & Soaking Tub' },
        { url: '/images/MasterSuite2.jpg', caption: 'Curated Angolan Art Lounge & Balcony' }
      ]
    },
    'garden-villa': {
      title: 'Garden Villa Suite',
      tagline: 'Secluded Botanical Haven with Plunge Pool',
      priceUSD: 340,
      priceAOA: '225,000 Kz',
      size: '85 m² / 915 sq ft',
      capacity: '2 Adults',
      bed: 'King-size Pillowtop Bed',
      description: 'Nestled in our private tropical courtyard, the Garden Villa offers complete privacy with a private plunge pool, teak sun deck, outdoor rainfall shower, and intimate lounge area.',
      amenities: ['Private Plunge Pool', 'Private Teak Sun Deck', 'Outdoor Rainfall Shower', 'In-Villa Dining Service', 'Organic Bath Products', 'Smart Sound System', 'Private Butler Service'],
      images: [
        { url: '/images/Twins.jpg', caption: 'Twin Bedroom & Courtyard View' },
        { url: '/images/SeaView1.jpg', caption: 'Ocean & Coastline View' },
        { url: '/images/SeaView2.jpg', caption: 'Lounge & Balcony Ocean Outlook' }
      ]
    },
    'executive-studio': {
      title: 'Executive Studio',
      tagline: 'Refined Comfort for Business & Leisure',
      priceUSD: 220,
      priceAOA: '145,000 Kz',
      size: '48 m² / 515 sq ft',
      capacity: '2 Adults',
      bed: 'King-size Luxury Bed',
      description: 'Engineered for discerning executives and travelers, combining an ergonomic workstation, original art pieces, peaceful ambient lighting, and high-speed fiber connectivity.',
      amenities: ['Ergonomic Workstation', 'High-Speed Fiber Internet', 'Nespresso Coffee Machine', 'Spacious Dressing Area', 'In-Room Safe', 'Daily Housekeeping', 'Lounge Access'],
      images: [
        { url: '/images/CityView1.jpg', caption: 'Executive Suite Bedroom & City View' },
        { url: '/images/CityView2.jpg', caption: 'Ergonomic Teak Workstation & Business Desk' },
        { url: '/images/CityView3.jpg', caption: 'Contemporary Sculpture Art Nook' }
      ]
    },
    'oceanfront-suite': {
      title: 'Atlantic Oceanfront Suite',
      tagline: 'Panoramic Ocean Views & Private Coastal Balcony',
      priceUSD: 260,
      priceAOA: '170,000 Kz',
      size: '58 m² / 625 sq ft',
      capacity: '2 Adults',
      bed: 'King-size Premium Ocean Bed',
      description: 'Overlooking Luanda Bay and the Atlantic horizon, this open suite features custom handcrafted furniture, a broad teak terrace, and bespoke Angolan artwork.',
      amenities: ['Panoramic Ocean Balcony', 'Custom Angolan Textiles', 'Rainfall Shower', 'Teak Daybed Lounge', 'High-Speed Fiber Wi-Fi', 'Courtyard Breakfast Included'],
      images: [
        { url: '/images/SeaView3.jpg', caption: 'Atlantic Coastline Horizon View' },
        { url: '/images/SeaView4.jpg', caption: 'Private Balcony & Sunset Terrace' },
        { url: '/images/SeaView1.jpg', caption: 'Sunlit Coastal Suite Interior' }
      ]
    },
    'heritage-gallery-suite': {
      title: 'Heritage Gallery Suite',
      tagline: 'Private Art Curation & Sculptural Lounge',
      priceUSD: 240,
      priceAOA: '158,000 Kz',
      size: '52 m² / 560 sq ft',
      capacity: '2 Adults',
      bed: 'Queen Plush Canopy Bed',
      description: 'Surrounded by curated sculptures and classic contemporary Angolan canvases, this suite offers a serene, museum-quality atmosphere with a plush reading alcove.',
      amenities: ['Private In-Suite Sculptures', 'Plush Reading & Art Alcove', 'Queen Canopy Bed', 'Nespresso Espresso Bar', 'Artisan Soaking Tub', 'Fiber Wi-Fi'],
      images: [
        { url: "/images/Corridor's art.jpg", caption: 'Private Art Curation Corridor' },
        { url: '/images/art-sculpture.jpg', caption: 'Sculptural Art Nook' },
        { url: '/images/1stbedroom.jpeg', caption: 'Heritage Suite Master Layout' }
      ]
    },
    'courtyard-twin-suite': {
      title: 'Courtyard Deluxe Twin Suite',
      tagline: 'Lush Botanical Views & Flexible Twin Comfort',
      priceUSD: 195,
      priceAOA: '128,000 Kz',
      size: '45 m² / 485 sq ft',
      capacity: '2 Adults / 2 Companions',
      bed: '2 Custom Single Beds (or Joined King)',
      description: 'Opening toward our tranquil inner courtyard garden, offering refined twin bedding, custom teak nightstands, and walk-in rain shower.',
      amenities: ['Direct Courtyard Garden Access', 'Twin Plush Custom Beds', 'Walk-in Rainfall Shower', 'Work Desk & Lounge Chair', 'Espresso Station', 'Daily Maid Service'],
      images: [
        { url: '/images/Twins.jpg', caption: 'Courtyard Twin Suite Interior' },
        { url: '/images/1stbedroom.jpeg', caption: 'Bedroom Layout & Garden Light' },
        { url: '/images/Facade03.jpg', caption: 'Inner Courtyard Garden Outlook' }
      ]
    }
  };

  let currentRoomId = 'master-art-suite';
  let currentPhotoIndex = 0;

  const roomDetailModal = document.getElementById('roomDetailModal');

  window.openRoomModal = (roomId) => {
    const data = roomsData[roomId];
    if (!data || !roomDetailModal) return;

    currentRoomId = roomId;
    currentPhotoIndex = 0;

    document.getElementById('modalRoomTitle').textContent = data.title;
    document.getElementById('modalRoomTagline').textContent = data.tagline;
    document.getElementById('modalRoomPrice').textContent = `$${data.priceUSD} / night (${data.priceAOA})`;
    document.getElementById('modalRoomSize').textContent = data.size;
    document.getElementById('modalRoomCapacity').textContent = data.capacity;
    document.getElementById('modalRoomBed').textContent = data.bed;
    document.getElementById('modalRoomDesc').textContent = data.description;

    // Render Amenities
    const amenitiesList = document.getElementById('modalRoomAmenities');
    if (amenitiesList) {
      amenitiesList.innerHTML = '';
      data.amenities.forEach(item => {
        const li = document.createElement('li');
        li.className = 'feature-pill';
        li.textContent = item;
        amenitiesList.appendChild(li);
      });
    }

    // Render Modal Photo & Thumbnails
    renderModalGalleryPhoto();

    // Set dataset for quick reservation trigger
    const modalReserveBtn = document.getElementById('modalReserveBtn');
    if (modalReserveBtn) {
      modalReserveBtn.setAttribute('data-room-type', roomId);
    }

    roomDetailModal.classList.add('is-open');
    document.body.classList.add('no-scroll');
  };

  function renderModalGalleryPhoto() {
    const data = roomsData[currentRoomId];
    if (!data || !data.images || data.images.length === 0) return;

    const currentImgObj = data.images[currentPhotoIndex];
    const modalImg = document.getElementById('modalRoomImg');
    const badge = document.getElementById('modalPhotoBadge');
    const thumbsContainer = document.getElementById('modalRoomThumbnails');

    if (modalImg) {
      modalImg.style.opacity = '0.4';
      setTimeout(() => {
        modalImg.src = currentImgObj.url;
        modalImg.alt = currentImgObj.caption;
        modalImg.style.opacity = '1';
      }, 100);
    }

    if (badge) {
      badge.textContent = `Photo ${currentPhotoIndex + 1} of ${data.images.length}`;
    }

    // Render thumbnails strip
    if (thumbsContainer) {
      thumbsContainer.innerHTML = '';
      data.images.forEach((imgObj, idx) => {
        const btn = document.createElement('button');
        btn.className = `modal-thumb-btn ${idx === currentPhotoIndex ? 'active' : ''}`;
        btn.innerHTML = `<img src="${imgObj.url}" alt="${imgObj.caption}" referrerPolicy="no-referrer" />`;
        btn.addEventListener('click', () => {
          currentPhotoIndex = idx;
          renderModalGalleryPhoto();
        });
        thumbsContainer.appendChild(btn);
      });
    }
  }

  window.navigateRoomPhoto = (direction) => {
    const data = roomsData[currentRoomId];
    if (!data || !data.images) return;

    currentPhotoIndex = (currentPhotoIndex + direction + data.images.length) % data.images.length;
    renderModalGalleryPhoto();
  };

  window.closeRoomModal = () => {
    if (roomDetailModal) {
      roomDetailModal.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  };

  // Card Photo Thumbnail Switcher Function
  window.switchCardPhoto = (btn, photoUrl, cardImgId) => {
    const cardImg = document.getElementById(cardImgId);
    if (cardImg) {
      cardImg.style.opacity = '0.5';
      setTimeout(() => {
        cardImg.src = photoUrl;
        cardImg.style.opacity = '1';
      }, 100);
    }

    // Toggle active state on dots
    const parentContainer = btn.parentElement;
    if (parentContainer) {
      parentContainer.querySelectorAll('.thumb-dot').forEach(dot => dot.classList.remove('active'));
      btn.classList.add('active');
    }
  };

  // Card Photo Navigation Arrow Click Handler
  window.navigateCardPhoto = (btn, direction, event) => {
    if (event) event.stopPropagation();
    const wrap = btn.closest('.room-img-wrap');
    if (!wrap) return;
    const dots = Array.from(wrap.querySelectorAll('.thumb-dot'));
    if (dots.length <= 1) return;
    let activeIdx = dots.findIndex(dot => dot.classList.contains('active'));
    if (activeIdx === -1) activeIdx = 0;
    const nextIdx = (activeIdx + direction + dots.length) % dots.length;
    dots[nextIdx].click();
  };

  /* ==========================================================================
     5. ROOM FILTERING CONTROLS
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const roomCards = document.querySelectorAll('.room-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      roomCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ==========================================================================
     6. EDITORIAL GALLERY LIGHTBOX
     ========================================================================== */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCategory = document.getElementById('lightboxCategory');

  let currentGalleryIndex = 0;
  const galleryData = Array.from(galleryItems).map(item => ({
    src: item.getAttribute('data-full'),
    caption: item.querySelector('.gallery-caption')?.textContent || '',
    category: item.querySelector('.gallery-cat')?.textContent || ''
  }));

  const openLightbox = (index) => {
    if (!lightbox || !galleryData[index]) return;
    currentGalleryIndex = index;
    updateLightboxContent();
    lightbox.classList.add('is-open');
    document.body.classList.add('no-scroll');
  };

  const updateLightboxContent = () => {
    const item = galleryData[currentGalleryIndex];
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCategory) lightboxCategory.textContent = item.category;
  };

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  };

  const nextLightboxItem = () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    updateLightboxContent();
  };

  const prevLightboxItem = () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  const lbCloseBtn = document.querySelector('.lightbox-close');
  const lbNextBtn = document.querySelector('.lightbox-next');
  const lbPrevBtn = document.querySelector('.lightbox-prev');

  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
  if (lbNextBtn) lbNextBtn.addEventListener('click', nextLightboxItem);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', prevLightboxItem);

  // Keyboard navigation for Lightbox & Modal
  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('is-open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxItem();
      if (e.key === 'ArrowLeft') prevLightboxItem();
    } else if (roomDetailModal && roomDetailModal.classList.contains('is-open')) {
      if (e.key === 'Escape') closeRoomModal();
      if (e.key === 'ArrowRight') navigateRoomPhoto(1);
      if (e.key === 'ArrowLeft') navigateRoomPhoto(-1);
    }
  });

  /* ==========================================================================
     7. RESERVATION ENGINE & BOOKING MODAL
     ========================================================================== */
  const bookingModal = document.getElementById('bookingModal');

  window.openBookingModal = (roomCategory = null) => {
    if (bookingModal) {
      if (roomCategory) {
        const roomSelect = document.getElementById('modalRoomSelect');
        if (roomSelect) roomSelect.value = roomCategory;
      }
      bookingModal.classList.add('is-open');
      document.body.classList.add('no-scroll');
    }
  };

  window.closeBookingModal = () => {
    if (bookingModal) {
      bookingModal.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  };

  window.sendWhatsAppReservation = window.handleModalBookingSubmit = (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    const nameInput = document.getElementById('guestName') || document.getElementById('modalName');
    const phoneInput = document.getElementById('guestPhone');
    const emailInput = document.getElementById('guestEmail');
    const roomSelect = document.getElementById('modalRoomSelect');

    const name = nameInput?.value?.trim() || 'Guest';
    const phone = phoneInput?.value?.trim() || 'Not provided';
    const email = emailInput?.value?.trim() || 'Not provided';
    const roomName = (roomSelect && roomSelect.selectedIndex >= 0) ? roomSelect.options[roomSelect.selectedIndex].text : 'Suite';

    const checkin = document.getElementById('modalCheckIn')?.value?.trim() || '';
    const checkout = document.getElementById('modalCheckOut')?.value?.trim() || '';
    const guests = document.getElementById('modalGuests')?.value?.trim() || '';

    let message = `*ART HOUSE ANGOLA - RESERVATION REQUEST*\n\n` +
      `• *Guest Name:* ${name}\n` +
      `• *Phone / WhatsApp:* ${phone}\n` +
      `• *Email:* ${email}\n` +
      `• *Selected Suite:* ${roomName}\n`;

    if (checkin) message += `• *Check-in:* ${checkin}\n`;
    if (checkout) message += `• *Check-out:* ${checkout}\n`;
    if (guests) message += `• *Guests:* ${guests}\n`;

    message += `\nHello! I would like to check availability and request a reservation. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/244933694600?text=${encodedMsg}`;

    try {
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch (e) {
      window.location.href = whatsappUrl;
    }

    closeBookingModal();
  };

  /* ==========================================================================
     8. EVENT PROPOSAL FORM HANDLER
     ========================================================================== */
  window.handleEventFormSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('eventContactName')?.value || 'Client';
    const email = document.getElementById('eventContactEmail')?.value || 'Not provided';
    const phone = document.getElementById('eventContactPhone')?.value || 'Not provided';
    const typeSelect = document.getElementById('eventTypeSelect');
    const eventType = typeSelect ? typeSelect.options[typeSelect.selectedIndex].text : 'Event';
    const eventDate = document.getElementById('eventDate')?.value || 'TBD';
    const guestCount = document.getElementById('eventGuestCount')?.value || 'TBD';
    const notes = document.getElementById('eventNotes')?.value || 'None';

    const message = `*ART HOUSE ANGOLA - EVENT PROPOSAL REQUEST*\n\n` +
      `• *Name:* ${name}\n` +
      `• *Email:* ${email}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Event Type:* ${eventType}\n` +
      `• *Preferred Date:* ${eventDate}\n` +
      `• *Guest Count:* ${guestCount}\n` +
      `• *Details / Requirements:* ${notes}\n\n` +
      `Hello! I would like to request a custom event proposal with these details. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/244933694600?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');

    const formBox = document.getElementById('eventInquiryForm');
    if (formBox) {
      formBox.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem;">
          <div style="width: 64px; height: 64px; background: #25D366; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; font-size: 2rem; font-weight: bold; box-shadow: 0 8px 24px rgba(37,211,102,0.3);">✓</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.85rem; margin-bottom: 0.5rem; color: var(--color-primary);">Redirecting to WhatsApp</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 1.5rem; max-width: 520px; margin-left: auto; margin-right: auto;">
            Thank you, <strong>${name}</strong>! Your event proposal request for <strong>${eventType}</strong> on <strong>${eventDate}</strong> (${guestCount} guests) has been formatted for our WhatsApp concierge.
          </p>
          <div style="background: var(--color-bg-alt); padding: 1.25rem; border-radius: var(--radius-md); text-align: left; margin-bottom: 1.5rem; font-size: 0.9375rem; border-left: 3px solid #25D366;">
            <p style="margin: 0;">If WhatsApp didn't open automatically, click the button below to connect directly with our Event Director:</p>
          </div>
          <a href="${whatsappUrl}" target="_blank" class="btn btn-primary btn-lg" style="background-color: #25D366; border-color: #25D366; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2z"/></svg>
            Open WhatsApp Chat
          </a>
        </div>
      `;
    }
  };

  /* ==========================================================================
     8.5 BOOKING.COM & GOOGLE REVIEWS ENGINE (REAL VERIFIED BOOKING REVIEWS)
     ========================================================================== */
  const reviewsData = [
    {
      id: 1,
      author: "João",
      role_en: "Portugal • King Deluxe Suite • 4 nights • Couple",
      role_pt: "Portugal • Suite King Deluxe • 4 noites • Casal",
      platform: "booking",
      platform_name: "Booking.com",
      score: "9.0 / 10",
      score_label_en: "Exceptional",
      score_label_pt: "Excecional",
      title_en: "Great option",
      title_pt: "òtima opção",
      pos_en: "Design hotel with a great atmosphere. Right in front of the beach with a good breakfast. Great for enjoying Ilha de Luanda. I recommend suite 304.",
      pos_pt: "Hotel design com muito bom ambiente. Frente à praia e com bom pequeno almoço. Ótimo para desfrutar da Ilha de Luanda. Recomendo a suite 304.",
      neg_en: "Pillows were very high.",
      neg_pt: "Almofadas muito altas.",
      date_en: "September 2, 2024",
      date_pt: "2 de setembro, 2024"
    },
    {
      id: 2,
      author: "Rita",
      role_en: "Portugal • Small Twin Room • 1 night • Solo Traveler",
      role_pt: "Portugal • Quarto Twin Pequeno • 1 noite • Viajante individual",
      platform: "booking",
      platform_name: "Booking.com",
      score: "9.0 / 10",
      score_label_en: "Exceptional",
      score_label_pt: "Excecional",
      title_en: "Excellent service and great location. Highly recommend!",
      title_pt: "Excelente atendimento e boa localização. Recomendo!",
      pos_en: "I was only passing through Luanda and stayed at Art House on recommendation! The location is great and service was excellent! The room was cozy and super clean. Lastly, even though I hadn't checked if dinner was available, they kindly arranged a quick and delicious dinner for me! Super recommend :)",
      pos_pt: "Só estive em Luanda de passagem e fiquei no Art House por recomendação! A localização é muito boa e o atendimento foi excelente! O quarto era acolhedor e super limpo. Por último, apesar de não ter verificado se existia possibilidade de jantar ou não, tiveram a amabilidade de me arranjar um jantar bem rápido e óptimo! Super recomendo :)",
      neg_en: "",
      neg_pt: "",
      date_en: "July 31, 2025",
      date_pt: "31 de julho, 2025"
    },
    {
      id: 3,
      author: "Eduardo",
      role_en: "Brazil • Small Twin Room • 1 night • Group stay",
      role_pt: "Brasil • Quarto Twin Pequeno • 1 noite • Grupo",
      platform: "booking",
      platform_name: "Booking.com",
      score: "8.0 / 10",
      score_label_en: "Fabulous",
      score_label_pt: "Fabuloso",
      title_en: "The best part of the hotel is the staff.",
      title_pt: "O melhor do hotél são os funcionários.",
      pos_en: "The staff are extremely attentive and polite. On check-out day we had to leave for the airport before breakfast time, but they prepared and served breakfast earlier for us.",
      pos_pt: "Os funcionários são muito atenciosos e educados. No check-out tínhamos que sair antes do horário do café da manhã para o aeroporto, mas eles anteciparam e nos serviram mais cedo.",
      neg_en: "We were in a group of 8 people and had booking adjustments... Still, the staff were attentive, reassigning rooms and providing extra mattresses to accommodate everyone properly.",
      neg_pt: "Estávamos em um grupo de 8 pessoas e houve problemas com as reservas... Ainda sim os funcionários foram atenciosos, remanejando alguns quartos, providenciando colchões extras e acabamos acomodando todos devidamente.",
      date_en: "June 14, 2025",
      date_pt: "14 de junho, 2025"
    },
    {
      id: 4,
      author: "Marco",
      role_en: "Portugal • Double Room with Sea View • 9 nights • Couple",
      role_pt: "Portugal • Quarto Duplo com Vista Mar • 9 noites • Casal",
      platform: "booking",
      platform_name: "Booking.com",
      score: "8.0 / 10",
      score_label_en: "Fabulous",
      score_label_pt: "Fabuloso",
      title_en: "Loved it. Thank you so much for the stay :)",
      title_pt: "gostei bastante. muito obrigada pela estadia :)",
      pos_en: "Loved the decor. Very cozy and clean. Very friendly and attentive staff. Security at the door. Simple yet cozy rooms. Comfortable bed.",
      pos_pt: "Amei a decoração. Muito acolhedor e limpo. Pessoal muito simpático e atencioso. Segurança à porta. Quartos sem luxos mas acolhedor. Cama confortável.",
      neg_en: "Breakfast with tasty local fruit, but don't be late or it will be gone :(",
      neg_pt: "Pequeno almoço com fruta local e saborosa mas não se deixe atrasar porque senão desaparece :(",
      date_en: "January 27, 2026",
      date_pt: "27 de janeiro, 2026"
    }
  ];

  let currentSourceFilter = 'all';
  let activeReviewIndex = 0;
  let autoSlideTimer = null;

  const reviewCardStage = document.getElementById('reviewCardStage');
  const reviewDotsBar = document.getElementById('reviewDotsBar');
  const reviewPrevBtn = document.getElementById('reviewPrevBtn');
  const reviewNextBtn = document.getElementById('reviewNextBtn');
  const reviewFilterBtns = document.querySelectorAll('.review-filter-btn');

  function getFilteredReviews() {
    if (currentSourceFilter === 'all') return reviewsData;
    return reviewsData.filter(r => r.platform === currentSourceFilter);
  }

  function renderActiveReview() {
    if (!reviewCardStage) return;
    const list = getFilteredReviews();
    if (list.length === 0) return;

    if (activeReviewIndex >= list.length) {
      activeReviewIndex = 0;
    }

    const item = list[activeReviewIndex];
    const isPt = currentLang === 'pt';

    const role = isPt ? item.role_pt : item.role_en;
    const title = isPt ? item.title_pt : item.title_en;
    const posQuote = isPt ? item.pos_pt : item.pos_en;
    const negQuote = isPt ? item.neg_pt : item.neg_en;
    const scoreLabel = isPt ? item.score_label_pt : item.score_label_en;
    const dateStr = isPt ? item.date_pt : item.date_en;

    const tagClass = item.platform === 'booking' ? 'tag-booking' : 'tag-google';
    const tagIcon = item.platform === 'booking'
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.38 3.5H4.62C4.001 3.5 3.5 4.001 3.5 4.62v14.76c0 .619.501 1.12 1.12 1.12h14.76c.619 0 1.12-.501 1.12-1.12V4.62c0-.619-.501-1.12-1.12-1.12zm-8.32 12.75H8.25v-8.5h2.81c1.65 0 2.72.93 2.72 2.25 0 .97-.58 1.72-1.48 2.04.98.28 1.68 1.1 1.68 2.21 0 1.34-1.07 2.0-2.92 2.0zM10.12 9.5H9.6v2.2h.52c.74 0 1.25-.37 1.25-1.1 0-.73-.51-1.1-1.25-1.1zm.18 4.2H9.6v2.4h.7c.83 0 1.36-.4 1.36-1.2 0-.8-.53-1.2-1.36-1.2z"/></svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>`;

    reviewCardStage.style.opacity = '0.3';
    reviewCardStage.style.transform = 'translateY(10px)';

    const negHtml = negQuote ? `
      <div style="text-align: left; background-color: rgba(0,0,0,0.02); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-top: 0.5rem; display: flex; gap: 10px; align-items: flex-start;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666666" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top: 2px;"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        <span style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5;">${negQuote}</span>
      </div>
    ` : '';

    setTimeout(() => {
      reviewCardStage.innerHTML = `
        <div class="review-card-item">
          <div class="review-card-header">
            <span class="review-platform-tag ${tagClass}">
              ${tagIcon} ${item.platform_name}
            </span>
            <div class="review-score-badge">
              <span style="background: #003580; color: #fff; padding: 2px 8px; border-radius: 6px; font-weight: 700;">${item.score}</span>
              <span style="margin-left: 6px;">${scoreLabel}</span>
            </div>
          </div>
          <h3 class="review-card-title">${title}</h3>
          
          <div style="text-align: left; background-color: rgba(0,53,128,0.02); padding: 0.875rem 1rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem; display: flex; gap: 10px; align-items: flex-start;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008009" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span style="font-size: 0.9375rem; color: var(--color-text-main); line-height: 1.6; font-style: normal;">${posQuote}</span>
          </div>
          ${negHtml}

          <div style="margin-top: 1.25rem; border-top: 1px dashed var(--color-border-subtle); padding-top: 0.75rem;">
            <div class="testimonial-author" style="font-weight: 700;">${item.author}</div>
            <div class="testimonial-role" style="font-size: 0.8125rem;">${role}</div>
            <div class="testimonial-date" style="font-size: 0.75rem; color: var(--color-text-muted);">${dateStr}</div>
          </div>
        </div>
      `;
      reviewCardStage.style.opacity = '1';
      reviewCardStage.style.transform = 'translateY(0)';
    }, 120);

    renderReviewDots(list.length);
  }

  window.renderActiveReview = renderActiveReview;

  function renderReviewDots(count) {
    if (!reviewDotsBar) return;
    reviewDotsBar.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.className = `review-dot ${i === activeReviewIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to review ${i + 1}`);
      dot.addEventListener('click', () => {
        activeReviewIndex = i;
        renderActiveReview();
        resetAutoSlide();
      });
      reviewDotsBar.appendChild(dot);
    }
  }

  function nextReview() {
    const list = getFilteredReviews();
    if (list.length === 0) return;
    activeReviewIndex = (activeReviewIndex + 1) % list.length;
    renderActiveReview();
  }

  function prevReview() {
    const list = getFilteredReviews();
    if (list.length === 0) return;
    activeReviewIndex = (activeReviewIndex - 1 + list.length) % list.length;
    renderActiveReview();
  }

  if (reviewNextBtn) {
    reviewNextBtn.addEventListener('click', () => {
      nextReview();
      resetAutoSlide();
    });
  }

  if (reviewPrevBtn) {
    reviewPrevBtn.addEventListener('click', () => {
      prevReview();
      resetAutoSlide();
    });
  }

  reviewFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      reviewFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSourceFilter = btn.getAttribute('data-source') || 'all';
      activeReviewIndex = 0;
      renderActiveReview();
      resetAutoSlide();
    });
  });

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
      nextReview();
    }, 7000);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  if (reviewCardStage) {
    reviewCardStage.addEventListener('mouseenter', stopAutoSlide);
    reviewCardStage.addEventListener('mouseleave', startAutoSlide);
    renderActiveReview();
    startAutoSlide();
  }

  /* ==========================================================================
     9. SCROLL OBSERVER
     ========================================================================== */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .section-header, .room-card, .experience-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

});
