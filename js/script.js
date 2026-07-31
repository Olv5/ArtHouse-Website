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
    const whatsappUrl = `https://wa.me/244923000000?text=${encodedMsg}`;

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
    const whatsappUrl = `https://wa.me/244923000000?text=${encodedMsg}`;

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
