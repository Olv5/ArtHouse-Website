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
      btnExplore: "Explore Rooms",
      heroBadge: "✦ Boutique Hotel • Luanda, Angola",
      heroTitle: "Your home in Luanda",
      heroDesc: "A boutique hotel where Angolan art, genuine hospitality, and some amazing views come together to create an unforgettable stay.",
      checkAvail: "Check Availability",
      arrival: "Check-in Date",
      departure: "Check-out Date",
      guests: "Guests",
      roomType: "Suite Category",
      allRooms: "All rooms",
      filterMaster: "Master Suites",
      filterTwin: "Twin rooms",
      filterSeaView: "Sea View",
      masterSuite: "Master Art Suite",
      gardenVilla: "Garden Villa Suite",
      executiveStudio: "Executive Studio",
      oceanfrontSuite: "Atlantic Oceanfront Suite",
      heritageSuite: "Heritage Gallery Suite",
      courtyardTwinSuite: "Courtyard Deluxe Twin Suite",
      penthouse: "Art House Penthouse",
      night: "/ night",
      currencySymbol: "$",
      whatsappMsgIntro: "Hello Art House! I would like to request a reservation at your hotel in Luanda, Angola.",

      // Brand & Philosophy
      cardCuratedArtTitle: "Curated Angolan Art",
      cardCuratedArtDesc: "We love local art, Angolan culture, and showing foreigners what our country has to offer!",
      aboutTag: "Experience the Soul of Luanda",
      aboutTitle: "Through Art, Culture and Genuine Hospitality",
      aboutP1: "Thomson Art House is a beach front boutique hotel located in Luanda's entertainment district, created to offer travelers an authentic connection with Luanda through art, culture, and genuine Angolan hospitality.",
      aboutP2: "Our friendly English-speaking team is always ready to ensure you feel at home from the moment you arrive.",
      philo1Title: "Prime location",
      philo1Desc: "Stay close to the city's best restaurants, bars, beaches, and nightlife while enjoying a peaceful boutique retreat.",
      philo2Title: "Local art",
      philo2Desc: "Discover original works and unique spaces inspired by Angola's vibrant creative community.",
      philo3Title: "Bespoke Care",
      philo3Desc: "Friendly service that makes every guest feel right at home.",
      philo4Title: "Sea view",
      philo4Desc: "Wake up to beautiful ocean views",

      // Rooms Section
      roomsTag: "Accommodations",
      roomsTitle: "Our Room Collection",
      roomsSubtitle: "Each one of our rooms features a one-of-a-kind theme inspired by our Angolan community and local artists.",
      btnExploreSuite: "Explore Suite",
      btnReserveSuite: "Reserve",

      // Experiences Section
      expTag: "Something you won't forget",
      expTitle: "The Art House Experience",
      expSubtitle: "Art House puts you at the heart of Ilha do Cabo, surrounded by the ocean, local culture, restaurants, bars, and some of Luanda's best entertainment. Inside, you'll find a peaceful place to slow down, with a team ready to make your stay effortless..",
      exp1Title: "Art Around Every Corner",
      exp1Desc: "Discover a collection of local artwork throughout the hotel, with spaces that celebrate the creativity and cultural character of Angola.",
      exp2Title: "The view is part of the stay",
      exp2Desc: "As the day winds down, the sky opens up over the water and gives you a front-row seat to some unforgettable sunsets.",
      exp3Title: "Feel at Home",
      exp3Desc: "Our English-speaking team and dedicated concierge are here to make your stay comfortable, from the little details to everything you need around the city.",
      exp4Title: "Here When You Need Us",
      exp4Desc: "Our reception is open around the clock, with concierge assistance, luggage storage, currency exchange, and local recommendations whenever you need them.",
      exp5Title: "Free Wi-Fi & Security",
      exp5Desc: "Dedicated high-speed Wi-Fi and round-the-clock security team.",
      exp6Title: "In the Heart of the Action",
      exp6Desc: "Located in Luanda's entertainment district, you're never far from the city's best bars, restaurants, nightlife, and seaside spots.",

      // Gallery Section
      galleryTag: "Visual Atmosphere",
      galleryTitle: "The Gallery",
      gallerySubtitle: "Explore the architecture, interior details, and artistic moments that define Art House Angola.",

      // Contact Section
      contactTag: "Reach Out",
      contactTitle: "Location & Contact",
      contactDesc: "We look forward to welcoming you to Art House in Luanda, Angola. Contact our concierge team for reservations, private events, or special requests.",
      labelAddress: "Address",
      labelPhone: "Telephone / WhatsApp",
      labelEmail: "Email",
      formInquiryTitle: "Get in Touch",
      formInquiryDesc: "Connect directly with our hospitality concierge for reservations, gallery viewings, or general inquiries.",
      btnChatWhatsApp: "Contact via WhatsApp",
      labelYourName: "Your Name",
      labelEmailAddr: "Email Address",
      labelMessage: "Message or Special Request",
      btnSendMessage: "Send Message",

      // FAQ Section
      faqTag: "Essential Information",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Everything you need to know about staying at Thomson Art House in Luanda.",
      faqQ1: "What are the check-in and check-out times?",
      faqA1: "Standard check-in is from 14:00 (2:00 PM) onwards, and check-out is until 12:00 (12:00 PM). Early check-in or late check-out options can be arranged depending on suite availability — simply notify our concierge in advance.",
      faqQ2: "Where is Thomson Art House located in Luanda?",
      faqA2: "We are located at <strong>Thomson House, Av. Murtala Mohammed, Luanda, Angola</strong>, right along the scenic Ilha do Cabo coastline. We are surrounded by fine dining, beach lounges, and just 15 minutes from Quatro de Fevereiro International Airport (LAD).",
      faqQ3: "Is airport transfer or chauffeur pickup available?",
      faqA3: "Yes, complimentary private chauffeur airport pickup is included for guests staying in our suites. Reliable airport transfers and city transit can also be coordinated directly with our reception team.",
      faqQ4: "Is breakfast included with my suite reservation?",
      faqA4: "Yes! All direct bookings include a daily gourmet artisanal breakfast served in our tranquil courtyard garden, featuring fresh local Angolan produce, tropical fruits, freshly baked pastries, and specialty espresso coffees.",
      faqQ5: "How can I make a direct booking or contact via WhatsApp?",
      faqA5: "You can reserve your suite online using our booking modal or send us a direct message on WhatsApp at <strong>+244 933 694 600</strong> for immediate confirmation and custom requests.",
      faqQ6: "Do you host private events, weddings, or business gatherings?",
      faqA6: "Yes, our lush courtyard and art gallery venues host private multi-course dinners, cocktail receptions, executive summits, and cultural celebrations. Visit our Events page or inquire via WhatsApp to receive a customized proposal.",

      // CTA & Footer
      ctaTag: "Plan Your Visit",
      ctaTitle: "Experience the Art of Staying",
      ctaSubtitle: "Discover Luanda, contemporary art, and authentic hospitality in Luanda, Angola.",
      footerDesc: "A boutique hotel inspired by Angolan art, culture, and genuine hospitality in the heart of Luanda.",
      footerNav: "Navigation",
      footerLegal: "Legal & Contact",
      footerAddressTitle: "Luanda Address",
      footerRights: "© 2026 Art House Angola. All rights reserved.",

      // Events Page Translations
      eventsTagline: "Botanico Rooftop",
      eventsHeroTitle: "Celebrate Every Occasion at Thomson Art House",
      eventsHeroP1: "Located on the fourth floor of Thomson Art House, Botanico Rooftop is a unique venue for private events overlooking the coastline of Ilha do Cabo.",
      eventsHeroP2: "With space for up to 100 guests, sweeping views, and a dedicated team to take care of every detail, it's the perfect setting for corporate events, birthdays, anniversaries, engagement parties, networking events, and unforgettable celebrations.",
      btnPlanEvent: "Plan Your Event",
      eventTypesTitle: "Perfect for Every Occasion",
      eventTypesDesc: "Whether you're planning an intimate gathering or a larger celebration, Botanico adapts to your vision.",
      corpEventsTitle: "Corporate Events",
      corpEventsDesc: "Meetings, networking events, team dinners, product launches, and company celebrations.",
      privEventsTitle: "Private Celebrations",
      privEventsDesc: "Birthdays, anniversaries, baby showers, graduation parties, and family gatherings.",
      btnStartPlanning: "Let's Start Planning",
      eventsAtmosphereTag: "Botanico Atmosphere",
      eventsAtmosphereTitle: "Rooftop & Sunset Experience",
      eventsAtmosphereDesc: "Panoramic coastal views, vibrant lounge ambiance, and custom event setups high above Ilha do Cabo.",
      banquetDiningTitle: "Oceanfront Banquet Setup",
      banquetDiningDesc: "Bespoke outdoor dining under canopy overlooking the sea.",
      coastalTableTitle: "Coastal Celebration Table",
      coastalTableDesc: "Elegant open-air banquet seating facing the Atlantic horizon.",
      sunsetDeckTitle: "Sunset Lounge & Ocean Horizon",
      sunsetDeckDesc: "Unmatched dusk views across the Ilha do Cabo coastline.",
      rooftopBarTitle: "Botanico Rooftop Bar",
      rooftopBarDesc: "Custom bar and lounge setup for private receptions.",
      inquiryTag: "Botanico Rooftop Events",
      inquiryTitle: "Ready to Host Your Event?",
      inquiryDesc: "Connect directly with our events team to discuss availability, menus, and custom arrangements for your celebration at Botanico Rooftop.",
      btnPlanYourEvent: "Plan Your Event",
      labelFullName: "Full Name *",

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
      bookingModalTag: "Direct Availability Inquiry",
      bookingModalTitle: "Reserve at Art House",
      bookingModalDesc: "Select your stay details for direct concierge reservation assistance.",
      labelGuestName: "Guest Name",
      labelGuestPhone: "Phone / WhatsApp",
      labelSelectSuite: "Select Suite",
      btnReserveWhatsApp: "💬 Reserve via WhatsApp",

      // About Page Translations EN
      aboutHeroTag: "Our Heritage & Vision",
      aboutHeroTitle: "The Art House Sanctuary",
      aboutHeroSubtitle: "A boutique destination in Luanda where Angolan contemporary art, peaceful architecture, and personal care converge into a quiet oasis.",
      aboutBadge: "Angolan art",
      aboutBadgeText: "We love local art, Angolan culture, and showing foreigners what our country has to offer!",
      aboutSoulTag: "Experience the soul of Luanda",
      aboutP3: "Our team is proudly Angolan and fluent in English, making it easy for guests from around the world to feel understood, welcomed, and at home from the moment they arrive.",
      aboutP4: "Whether you're discovering Luanda for the first time or returning to a city you already know, Art House gives you a comfortable place to stay, a friendly community to connect with, and a local perspective on the best of Angola.",
      aboutP5: "Come stay with us and experience Luanda at its best.",
      planStayTag: "Plan Your Stay",
      planStayTitle: "Experience Art House in Luanda",
      planStaySub: "Reserve your suite today and enjoy our curated hospitality in Angola.",
      btnExploreSuites: "Explore Suites",
      btnReserveStay: "Reserve a Stay",

      // Contact Page Translations EN
      contactHeroTag: "Get In Touch",
      contactHeroTitle: "Location & Concierge",
      contactHeroSubtitle: "Our dedicated hospitality team in Luanda is available to answer reservation inquiries, assist with chauffeur arrangements, or plan private gallery tours.",
      contactReachTag: "Reach Out",
      contactP1: "We look forward to welcoming you to Art House in Luanda, Angola. Contact our concierge team for reservations, private gallery viewings, or airport transfer coordination.",
      labelEmailConcierge: "Email Concierge",
      openInGoogleMaps: "Open in Google Maps →",
      conciergeDeskTag: "Concierge Desk",
      getInTouchTitle: "Get in Touch",
      getInTouchDesc: "Connect directly with our hospitality concierge for reservations, gallery viewings, or general inquiries.",
      btnWhatsappContact: "Contact via WhatsApp",

      // Rooms Page Translations EN
      roomsHeroTag: "Art House Accommodations",
      roomsHeroTitle: "Suites & Private Villas",
      roomsHeroSubtitle: "Every room is a private sanctuary featuring bespoke teak woodwork, high-speed fiber internet, original Angolan contemporary art, and personalized concierge care in Luanda.",
      masterSuiteTag: "Signature Suite",
      masterSuiteTitle: "Master Art Suite",
      masterSuiteDesc: "Expansive king suite featuring floor-to-ceiling windows, private balcony, marble bathroom, and curated master artworks from Angolan artists.",
      gardenVillaTag: "Private Villa",
      gardenVillaTitle: "Garden Villa Suite",
      gardenVillaDesc: "Secluded courtyard villa featuring a private plunge pool, teak sun deck, outdoor rain shower, and intimate botanical lounge.",
      execStudioTag: "Business & Leisure",
      execStudioTitle: "Executive Studio",
      execStudioDesc: "Modern studio engineered for high productivity and quiet relaxation, equipped with an ergonomic teak workstation and Nespresso bar.",
      oceanfrontTag: "Sea View",
      oceanfrontTitle: "Atlantic Oceanfront Suite",
      oceanfrontDesc: "Panoramic views of Luanda Bay and Atlantic waters, featuring a private teak balcony, rain shower, and custom Angolan craft.",
      heritageTag: "Art Sanctuary",
      heritageTitle: "Heritage Gallery Suite",
      heritageDesc: "Surrounded by curated sculptures and classic contemporary Angolan canvases, with a museum-quality atmosphere and plush reading alcove.",
      courtyardTag: "Garden Outlook",
      courtyardTitle: "Courtyard Deluxe Twin Suite",
      courtyardDesc: "Opening toward our tranquil inner courtyard garden, offering refined twin bedding, custom teak nightstands, and walk-in rain shower.",
      btnExploreDetails: "Explore Details",
      photoCount3: "📷 3 Photos",
      footerTagline: "Redesigned for Thomson Art House • Luanda, Angola",
      privacyPolicy: "Privacy Policy",
      termsOfStay: "Terms of Stay"
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
      btnExplore: "Explorar Suítes",
      heroBadge: "✦ Hotel Boutique • Luanda, Angola",
      heroTitle: "A sua casa em Luanda",
      heroDesc: "Um hotel boutique onde a arte angolana, a hospitalidade genuína e vistas incríveis se unem para criar uma estadia inesquecível.",
      checkAvail: "Verificar Disponibilidade",
      arrival: "Data de Entrada",
      departure: "Data de Saída",
      guests: "Hóspedes",
      roomType: "Categoria de Suíte",
      allRooms: "Todos os quartos",
      filterMaster: "Suítes Master",
      filterTwin: "Quartos Twin",
      filterSeaView: "Vista Mar",
      masterSuite: "Suíte Master Art",
      gardenVilla: "Suíte Garden Villa",
      executiveStudio: "Estúdio Executivo",
      oceanfrontSuite: "Suíte Frente ao Mar Atlântico",
      heritageSuite: "Suíte Galeria Heritage",
      courtyardTwinSuite: "Suíte Twin Deluxe Pátio",
      penthouse: "Cobertura Art House",
      night: "/ noite",
      currencySymbol: "$",
      whatsappMsgIntro: "Olá Art House! Gostaria de solicitar uma reserva para o vosso hotel em Luanda, Angola.",

      // Brand & Philosophy
      cardCuratedArtTitle: "Arte Angolana Curada",
      cardCuratedArtDesc: "Amamos a arte local, a cultura angolana e mostrar aos visitantes o melhor que o nosso país tem para oferecer!",
      aboutTag: "Viva a Alma de Luanda",
      aboutTitle: "Através da Arte, Cultura e Hospitalidade Genuína",
      aboutP1: "O Thomson Art House é um hotel boutique à beira-mar localizado no distrito de entretenimento de Luanda, criado para oferecer uma conexão autêntica através da arte, cultura e genuína hospitalidade angolana.",
      aboutP2: "A nossa equipa acolhedora está sempre pronta para garantir que se sinta em casa desde o momento em que chega.",
      philo1Title: "Localização privilegiada",
      philo1Desc: "Fique perto dos melhores restaurantes, bares, praias e vida noturna da cidade enquanto desfruta de um refúgio boutique tranquilo.",
      philo2Title: "Arte local",
      philo2Desc: "Descubra obras originais e espaços únicos inspirados na vibrante comunidade criativa de Angola.",
      philo3Title: "Atendimento personalizado",
      philo3Desc: "Serviço acolhedor que faz com que cada hóspede se sinta em casa.",
      philo4Title: "Vista para o mar",
      philo4Desc: "Acorde com deslumbrantes vistas sobre o oceano",

      // Rooms Section
      roomsTag: "Acomodações",
      roomsTitle: "A Nossa Coleção de Suítes",
      roomsSubtitle: "Cada um dos nossos quartos apresenta um tema único inspirado na nossa comunidade angolana e artistas locais.",
      btnExploreSuite: "Ver Detalhes",
      btnReserveSuite: "Reservar",

      // Experiences Section
      expTag: "Algo Inesquecível",
      expTitle: "A Experiência Art House",
      expSubtitle: "O Art House coloca-o no coração da Ilha do Cabo, cercado pelo oceano, cultura local, restaurantes e entretenimento. No interior, encontrará um lugar tranquilo para desacelerar com uma equipa pronta a tornar a sua estadia perfeita.",
      exp1Title: "Arte em Cada Canto",
      exp1Desc: "Descubra uma coleção de obras de arte locais por todo o hotel, celebrando a criatividade e o caráter cultural de Angola.",
      exp2Title: "A Vista Faz Parte da Estadia",
      exp2Desc: "Ao final do dia, o céu abre-se sobre as águas do Atlântico, oferecendo um lugar de primeira fila para pores do sol inesquecíveis.",
      exp3Title: "Sinta-se em Casa",
      exp3Desc: "A nossa equipa e o serviço de concierge estão disponíveis para tornar a sua estadia confortável em todos os detalhes.",
      exp4Title: "Sempre Aqui para Si",
      exp4Desc: "A nossa receção funciona para si, com assistência de concierge, guarda de bagagem, câmbio e recomendações locais.",
      exp5Title: "Wi-Fi Gratuito & Segurança",
      exp5Desc: "Wi-Fi de alta velocidade dedicado e equipa de segurança.",
      exp6Title: "No Coração de Luanda",
      exp6Desc: "Localizado no distrito de entretenimento de Luanda, perto dos melhores bares, restaurantes e atrações beira-mar da cidade.",

      // Gallery Section
      galleryTag: "Atmosfera Visual",
      galleryTitle: "A Galeria",
      gallerySubtitle: "Explore a arquitetura, detalhes de interiores e momentos artísticos que definem o Art House Angola.",

      // Contact Section
      contactTag: "Contacte-nos",
      contactTitle: "Localização & Contacto",
      contactDesc: "Estamos ansiosos por recebê-lo no Art House em Luanda, Angola. Entre em contacto com a nossa equipa para reservas, eventos privados ou pedidos especiais.",
      labelAddress: "Endereço",
      labelPhone: "Telefone / WhatsApp",
      labelEmail: "Correio Eletrónico",
      formInquiryTitle: "Entre em Contacto",
      formInquiryDesc: "Fale diretamente com a nossa receção e concierge para reservas, visitas à galeria ou informações gerais.",
      btnChatWhatsApp: "Contactar por WhatsApp",
      labelYourName: "O seu Nome",
      labelEmailAddr: "Endereço de Correio Eletrónico",
      labelMessage: "Mensagem ou Pedido Especial",
      btnSendMessage: "Enviar Mensagem",

      // FAQ Section
      faqTag: "Informações Essenciais",
      faqTitle: "Perguntas Frequentes",
      faqSubtitle: "Tudo o que precisa de saber sobre a sua estadia no Thomson Art House em Luanda.",
      faqQ1: "Quais são os horários de check-in e check-out?",
      faqA1: "O check-in padrão é a partir das 14:00 e o check-out até às 12:00. O check-in antecipado ou late check-out pode ser organizado sujeito à disponibilidade das suítes — basta avisar a receção com antecedência.",
      faqQ2: "Onde fica localizado o Thomson Art House em Luanda?",
      faqA2: "Estamos localizados no <strong>Thomson House, Av. Murtala Mohammed, Luanda, Angola</strong>, ao longo da costa da Ilha do Cabo, cercados por restaurantes, beach lounges e a apenas 15 minutos do Aeroporto Internacional Quatro de Fevereiro.",
      faqQ3: "O serviço de transporte para o aeroporto está disponível?",
      faqA3: "Sim, o transporte privado de/para o aeroporto está incluído para os hóspedes das nossas suítes. Transferes e deslocações na cidade também podem ser coordenados diretamente com a nossa receção.",
      faqQ4: "O pequeno-almoço está incluído na reserva da suíte?",
      faqA4: "Sim! Todas as reservas diretas incluem pequeno-almoço gourmet artesanal servido diariamente no nosso jardim interior, com produtos locais angolanos, frutas tropicais e cafés espresso.",
      faqQ5: "Como posso fazer uma reserva direta ou contactar por WhatsApp?",
      faqA5: "Pode reservar a sua suíte online através do nosso formulário ou enviar uma mensagem direta por WhatsApp para <strong>+244 933 694 600</strong> para confirmação imediata.",
      faqQ6: "Realizam eventos privados, casamentos ou reuniões de negócios?",
      faqA6: "Sim, o nosso pátio arborizado e galeria de arte acolhem jantares privados, receções de cocktail, reuniões executivas e celebrações culturais. Visite a página de Eventos ou contacte-nos por WhatsApp.",

      // CTA & Footer
      ctaTag: "Planeie a Sua Visita",
      ctaTitle: "Viva a Arte de Se Hospedar",
      ctaSubtitle: "Descubra Luanda, arte contemporânea e hospitalidade autêntica em Luanda, Angola.",
      footerDesc: "Um hotel boutique inspirado pela arte, cultura e hospitalidade genuína angolana no coração de Luanda.",
      footerNav: "Navegação",
      footerLegal: "Informações Legais",
      footerAddressTitle: "Endereço em Luanda",
      footerRights: "© 2026 Art House Angola. Todos os direitos reservados.",

      // Events Page Translations PT
      eventsTagline: "Botanico Rooftop",
      eventsHeroTitle: "Celebre Todas as Ocasiões no Thomson Art House",
      eventsHeroP1: "Localizado no quarto andar do Thomson Art House, o Botanico Rooftop é um local único para eventos privados com vista para a orla da Ilha do Cabo.",
      eventsHeroP2: "Com capacidade para até 100 convidados, vistas deslumbrantes e uma equipa dedicada a cuidar de cada detalhe, é o cenário perfeito para eventos corporativos, aniversários, festas de noivado, eventos de networking e celebrações inesquecíveis.",
      btnPlanEvent: "Planear o Seu Evento",
      eventTypesTitle: "Perfeito para Todas as Ocasiões",
      eventTypesDesc: "Quer esteja a planear um encontro íntimo ou uma celebração maior, o Botanico adapta-se à sua visão.",
      corpEventsTitle: "Eventos Corporativos",
      corpEventsDesc: "Reuniões, eventos de networking, jantares de equipa, lançamentos de produtos e celebrações da empresa.",
      privEventsTitle: "Celebrações Privadas",
      privEventsDesc: "Aniversários, festas de noivado, chás de bebé, festas de graduação e encontros familiares.",
      btnStartPlanning: "Comece a Planear",
      eventsAtmosphereTag: "Ambiente Botanico",
      eventsAtmosphereTitle: "Experiência no Rooftop ao Pôr do Sol",
      eventsAtmosphereDesc: "Vistas panorâmicas sobre a costa, ambiente de lounge vibrante e montagens personalizadas na Ilha do Cabo.",
      banquetDiningTitle: "Montagem de Banquete à Beira-Mar",
      banquetDiningDesc: "Jantares ao ar livre sob tenda personalizada com vista para o mar.",
      coastalTableTitle: "Mesa de Celebração Costeira",
      coastalTableDesc: "Jantares elegantes ao ar livre virados para o horizonte do Atlântico.",
      sunsetDeckTitle: "Sunset Lounge & Horizonte do Oceano",
      sunsetDeckDesc: "Vistas inigualáveis do pôr do sol na orla da Ilha do Cabo.",
      rooftopBarTitle: "Bar do Botanico Rooftop",
      rooftopBarDesc: "Bar e lounge personalizado para receções privadas.",
      inquiryTag: "Eventos Botanico Rooftop",
      inquiryTitle: "Pronto para Organizar o Seu Evento?",
      inquiryDesc: "Fale diretamente com a nossa equipa de eventos para consultar disponibilidade, menus e detalhes personalizados para a sua celebração no Botanico Rooftop.",
      btnPlanYourEvent: "Planear o Seu Evento",
      labelFullName: "Nome Completo *",

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
      bookingModalTag: "Consulta de Disponibilidade Direta",
      bookingModalTitle: "Reservar no Art House",
      bookingModalDesc: "Selecione os detalhes da sua estadia para assistência direta de reserva com o concierge.",
      labelGuestName: "Nome do Hóspede",
      labelGuestPhone: "Telefone / WhatsApp",
      labelSelectSuite: "Selecionar Suíte",
      btnReserveWhatsApp: "💬 Reservar via WhatsApp",

      // About Page Translations PT
      aboutHeroTag: "A Nossa Herança e Visão",
      aboutHeroTitle: "O Santuário Art House",
      aboutHeroSubtitle: "Um destino boutique em Luanda onde a arte contemporânea angolana, a arquitetura serena e o atendimento personalizado convergem num oásis de tranquilidade.",
      aboutBadge: "Arte angolana",
      aboutBadgeText: "Adoramos arte local, cultura angolana e mostrar a visitantes o que o nosso país tem para oferecer!",
      aboutSoulTag: "Sinta a alma de Luanda",
      aboutP3: "A nossa equipa é orgulhosamente angolana e fluente em inglês, tornando fácil para hóspedes de todo o mundo sentirem-se acolhidos e em casa desde o momento em que chegam.",
      aboutP4: "Quer esteja a descobrir Luanda pela primeira vez ou a regressar a uma cidade que já conhece, o Art House oferece-lhe um lugar confortável para ficar, uma comunidade acolhedora e uma perspetiva local sobre o melhor de Angola.",
      aboutP5: "Venha hospedar-se connosco e viva o melhor de Luanda.",
      planStayTag: "Planeie a Sua Estadia",
      planStayTitle: "Viva a Experiência Art House em Luanda",
      planStaySub: "Reserve a sua suíte hoje e desfrute da nossa hospitalidade em Angola.",
      btnExploreSuites: "Explorar Suítes",
      btnReserveStay: "Reservar Estadia",

      // Contact Page Translations PT
      contactHeroTag: "Fale Connosco",
      contactHeroTitle: "Localização & Concierge",
      contactHeroSubtitle: "A nossa equipa de hospitalidade em Luanda está disponível para responder a dúvidas sobre reservas, organizar transporte privado ou planear visitas à galeria.",
      contactReachTag: "Contacto Direto",
      contactP1: "Ansiamos por recebê-lo no Art House em Luanda, Angola. Contacte a nossa equipa de concierge para reservas, visitas privadas à galeria ou transporte do aeroporto.",
      labelEmailConcierge: "Email Concierge",
      openInGoogleMaps: "Abrir no Google Maps →",
      conciergeDeskTag: "Balcão Concierge",
      getInTouchTitle: "Fale Connosco",
      getInTouchDesc: "Fale diretamente com o nosso concierge de hospitalidade para reservas, visitas à galeria ou informações gerais.",
      btnWhatsappContact: "Contactar via WhatsApp",

      // Rooms Page Translations PT
      roomsHeroTag: "Acomodações Art House",
      roomsHeroTitle: "Suítes & Villas Privadas",
      roomsHeroSubtitle: "Cada quarto é um santuário privado com carpintaria em teca feita à medida, internet de fibra de alta velocidade, arte contemporânea angolana original e atendimento personalizado em Luanda.",
      masterSuiteTag: "Suíte de Assinatura",
      masterSuiteTitle: "Suíte Master Art",
      masterSuiteDesc: "Ampla suíte king com janelas do chão ao teto, varanda privada, casa de banho em mármore e obras de arte curadas de artistas angolanos.",
      gardenVillaTag: "Villa Privada",
      gardenVillaTitle: "Suíte Garden Villa",
      gardenVillaDesc: "Villa reservada no pátio com piscina privativa, terraço em teca, chuveiro exterior e lounge botânico acolhedor.",
      execStudioTag: "Negócios & Lazer",
      execStudioTitle: "Estúdio Executivo",
      execStudioDesc: "Estúdio moderno projetado para elevada produtividade e tranquilidade, equipado com mesa de trabalho ergonómica em teca e máquina Nespresso.",
      oceanfrontTag: "Vista Mar",
      oceanfrontTitle: "Suíte Frente ao Mar Atlântico",
      oceanfrontDesc: "Vistas panorâmicas sobre a Baía de Luanda e o Atlântico, com varanda privada em teca, chuveiro de teto e artesanato angolano.",
      heritageTag: "Santuário de Arte",
      heritageTitle: "Suíte Galeria Heritage",
      heritageDesc: "Rodeada por esculturas curadas e quadros contemporâneos angolanos, com uma atmosfera de qualidade museológica e canto de leitura.",
      courtyardTag: "Vista Jardim",
      courtyardTitle: "Suíte Twin Deluxe Pátio",
      courtyardDesc: "Com vista para o nosso tranquilo jardim interior, oferecendo camas twin requintadas, mesas de cabeceira em teca e chuveiro de teto.",
      btnExploreDetails: "Ver Detalhes",
      photoCount3: "📷 3 Fotos",
      footerTagline: "Redesenhado para Thomson Art House • Luanda, Angola",
      privacyPolicy: "Política de Privacidade",
      termsOfStay: "Termos de Estadia"
    }
  };

  // Load language preference from localStorage or default to English
  let currentLang = localStorage.getItem('arthouse_lang') || 'en';

  /* ==========================================================================
     2. LANGUAGE SWITCHER IMPLEMENTATION
     ========================================================================== */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('arthouse_lang', lang);
    document.documentElement.lang = lang;
    const t = translations[lang];
    if (!t) return;

    // Update active lang visual switch indicators on ALL language toggles
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

    // Update HTML elements with data-i18n-html attribute
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key]) {
        el.innerHTML = t[key];
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

    // Update room detail modal if open
    const modalEl = document.getElementById('roomDetailModal');
    if (modalEl && modalEl.classList.contains('is-open') && typeof window.openRoomModal === 'function' && typeof currentRoomId !== 'undefined') {
      window.openRoomModal(currentRoomId);
    }
  }

  // Bind language toggle click on all language toggles
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetSpan = e.target.closest('span[data-lang]');
      if (targetSpan && targetSpan.dataset.lang) {
        applyLanguage(targetSpan.dataset.lang);
      } else {
        const newLang = currentLang === 'en' ? 'pt' : 'en';
        applyLanguage(newLang);
      }
    });
  });

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
      title: { en: 'Master Art Suite', pt: 'Suíte Master Art' },
      tagline: { en: 'Sea view', pt: 'Suíte de autor' },
      priceUSD: 100,
      priceAOA: '185,000 Kz',
      size: '30 m²',
      capacity: { en: '2 Adults, 1 Child', pt: '2 Adultos, 1 Criança' },
      bed: { en: 'Super King-size Custom Wood Bed', pt: 'Cama Super King em Madeira Personalizada' },
      description: {
        en: 'A bright, contemporary suite with sweeping sea views with generous natural light and a welcoming atmosphere designed for unwinding.',
        pt: 'Uma suíte luminosa e contemporânea, com amplas vistas para o mar, generosa luz natural e uma atmosfera acolhedora concebida para relaxar.'
      },
      amenities: {
        en: ['Living Room', 'Ocean view', 'Free Wi-Fi', 'Soundproofing'],
        pt: ['Varanda Privada com Vista Jardim', 'Coleção Curada de Arte Angolana', 'Casa de Banho em Mármore com Banheira', 'Wi-Fi de Alta Velocidade por Fibra', 'Pequeno-Almoço Artesanal Incluído', 'Máquina de Café Espresso & Chá', 'Transporte Privado do Aeroporto']
      },
      images: [
        { url: '/images/MasterSuite1.jpg', caption: '' },
        { url: '/images/MasterSuite2.jpg', caption: '' },
        { url: '/images/MasterSuite3.jpg', caption: '' }
      ]
    },
    'garden-villa': {
      title: { en: 'Twin Room', pt: 'Suíte Garden Villa' },
      tagline: { en: 'Standard', pt: 'Refúgio Botânico Reservado com Piscina Privativa' },
      priceUSD: 89,
      priceAOA: '225,000 Kz',
      size: '30 m²',
      capacity: { en: '2 Adults', pt: '2 Adultos' },
      bed: { en: 'King-size Pillowtop Bed', pt: 'Cama King-size de Alto Conforto' },
      description: {
        en: 'Whether you re traveling with a friend, family member, or colleague, our Twin Room provides the perfect balance of comfort, functionality, and thoughtful design for a relaxing stay in Luanda.',
        pt: 'Aninhada no nosso pátio tropical privado, a Garden Villa oferece privacidade absoluta com piscina privativa, terraço em teca, chuveiro exterior e zona de estar íntima.'
      },
      amenities: {
        en: ['2 individual beds', 'Private bathroom', 'Free Wi-fi', 'Plain Tv'],
        pt: ['Piscina Privativa', 'Terraço Privado em Teca', 'Chuveiro Exterior de Teto', 'Serviço de Refeições na Villa', 'Produtos de Banho Orgânicos', 'Sistema de Som Inteligente', 'Serviço de Mordomo Privado']
      },
      images: [
        { url: '/images/Twins3.jpg', caption: 'Garden Villa Bedroom & Custom Wood Furnishings' },
        { url: '/images/Twins2.jpg', caption: 'Private Courtyard Lounge & Living Area' },
        { url: '/images/Twins.jpg', caption: 'Courtyard Garden View & Terrace Access' }
      ]
    },
    'executive-studio': {
      title: { en: 'Ocean Room', pt: 'Estúdio Executivo' },
      tagline: { en: 'Refined Comfort for Business & Leisure', pt: 'Conforto Refinado para Negócios & Lazer' },
      priceUSD: 220,
      priceAOA: '145,000 Kz',
      size: '20 m²',
      capacity: { en: '2 Adults', pt: '2 Adultos' },
      bed: { en: 'King-size Luxury Bed', pt: 'Cama King-size de Luxo' },
      description: {
        en: 'A vibrant blue feature wall and handcrafted fish artwork bring the beauty of the coastline into the room, creating a unique space inspired by the sea and the creativity of Angola.',
        pt: 'Projetado para executivos e viajantes exigentes, combinando uma estação de trabalho ergonómica, obras de arte originais, iluminação ambiente serena e ligação de fibra rápida.'
      },
      amenities: {
        en: ['King bed', 'Private bathroom', 'Free Wi-fi', 'Plain Tv'],
        pt: ['Estação de Trabalho Ergonómica', 'Internet de Fibra de Alta Velocidade', 'Máquina de Café Nespresso', 'Zona de Vestiarieiro Espaçosa', 'Cofre no Quarto', 'Serviço Diário de Limpeza', 'Acesso ao Lounge']
      },
      images: [
        { url: '/images/CityView1.jpg', caption: 'Executive Suite Bedroom & City View' },
        { url: '/images/CityView2.jpg', caption: 'Ergonomic Teak Workstation & Business Desk' },
        { url: '/images/CityView3.jpg', caption: 'Contemporary Sculpture Art Nook' }
      ]
    },
    'oceanfront-suite': {
      title: { en: 'Executive Suite', pt: 'Suíte Frente ao Mar Atlântico' },
      tagline: { en: 'Premium', pt: 'Vistas Panorâmicas sobre o Oceano & Varanda Privativa' },
      priceUSD: 260,
      priceAOA: '170,000 Kz',
      size: '35 m²',
      capacity: { en: '2 Adults', pt: '2 Adultos' },
      bed: { en: 'King-size Premium Ocean Bed', pt: 'Cama King Premium com Vista Mar' },
      description: {
        en: 'More than just a place to sleep, this spacious suite offers a calm, inviting atmosphere with refined interiors, a king-size bed, and flexible spaces to dine, work, or unwind at your own pace.',
        pt: 'Com vista para a Baía de Luanda e o horizonte do Atlântico, esta suíte acolhedora apresenta mobiliário feito à mão, amplo terraço em teca e arte angolana personalizada.'
      },
      amenities: {
        en: ['Panoramic Ocean Balcony', 'Custom Angolan Textiles', 'Rainfall Shower', 'Teak Daybed Lounge', 'High-Speed Fiber Wi-Fi', 'Courtyard Breakfast Included'],
        pt: ['Varanda Panorâmica com Vista Mar', 'Têxteis Angolanos Personalizados', 'Chuveiro de Teto', 'Zona de Relaxamento em Teca', 'Wi-Fi de Fibra de Alta Velocidade', 'Pequeno-Almoço no Pátio Incluído']
      },
      images: [
        { url: '/images/SuiteMaster1.jpg', caption: 'Atlantic Coastline Horizon View' },
        { url: '/images/SuiteMaster2.jpg', caption: 'Private Balcony & Sunset Terrace' },
        { url: '/images/SuiteMaster3.jpg', caption: 'Sunlit Coastal Suite Interior & Rain Shower' }
      ]
    },
    'heritage-gallery-suite': {
      title: { en: 'Heritage Gallery Suite', pt: 'Suíte Galeria Heritage' },
      tagline: { en: 'Private Art Curation & Sculptural Lounge', pt: 'Curadoria de Arte Privada & Lounge de Esculturas' },
      priceUSD: 240,
      priceAOA: '158,000 Kz',
      size: '52 m² / 560 sq ft',
      capacity: { en: '2 Adults', pt: '2 Adultos' },
      bed: { en: 'Queen Plush Canopy Bed', pt: 'Cama Queen de Dossel Acolhedora' },
      description: {
        en: 'Surrounded by curated sculptures and classic contemporary Angolan canvases, this suite offers a serene, museum-quality atmosphere with a plush reading alcove.',
        pt: 'Cercada por esculturas curadas e telas contemporâneas angolanas, esta suíte oferece uma atmosfera serena de qualidade museológica com recanto de leitura.'
      },
      amenities: {
        en: ['Private In-Suite Sculptures', 'Plush Reading & Art Alcove', 'Queen Canopy Bed', 'Nespresso Espresso Bar', 'Artisan Soaking Tub', 'Fiber Wi-Fi'],
        pt: ['Esculturas Privadas na Suíte', 'Recanto Acolhedor de Leitura & Arte', 'Cama Queen de Dossel', 'Bar de Café Nespresso', 'Banheira de Imersão Artesanal', 'Wi-Fi por Fibra']
      },
      images: [
        { url: '/images/ArtGallery.jpg', caption: 'Private In-Suite Angolan Art Gallery' },
        { url: '/images/ArtGallery3.jpg', caption: 'Curated Fine Art & Contemporary Paintings' },
        { url: '/images/SeaView1.jpg', caption: 'Serene Heritage Bedroom & Coastal Atmosphere' }
      ]
    },
    'courtyard-twin-suite': {
      title: { en: 'Courtyard Deluxe Twin Suite', pt: 'Suíte Twin Deluxe Pátio' },
      tagline: { en: 'Lush Botanical Views & Flexible Twin Comfort', pt: 'Vistas Botânicas & Conforto Twin Flexível' },
      priceUSD: 195,
      priceAOA: '128,000 Kz',
      size: '45 m² / 485 sq ft',
      capacity: { en: '2 Adults / 2 Companions', pt: '2 Adultos / 2 Acompanhantes' },
      bed: { en: '2 Custom Single Beds (or Joined King)', pt: '2 Camas Individuais Personalizadas (ou King)' },
      description: {
        en: 'Opening toward our tranquil inner courtyard garden, offering refined twin bedding, custom teak nightstands, and walk-in rain shower.',
        pt: 'Com acesso direto ao nosso tranquilo jardim do pátio interior, oferece camas twin requintadas, mesas de cabeceira em teca e chuveiro de teto.'
      },
      amenities: {
        en: ['Direct Courtyard Garden Access', 'Twin Plush Custom Beds', 'Walk-in Rainfall Shower', 'Work Desk & Lounge Chair', 'Espresso Station', 'Daily Maid Service'],
        pt: ['Acesso Direto ao Jardim do Pátio', 'Camas Twin Personalizadas', 'Chuveiro de Teto Walk-in', 'Secretária de Trabalho & Poltrona', 'Estação de Espresso', 'Serviço Diário de Limpeza']
      },
      images: [
        { url: '/images/Twins.jpg', caption: 'Courtyard Twin Bedroom & Custom Teak Beds' },
        { url: '/images/Twins2.jpg', caption: 'Twin Suite Lounge & Interior Details' },
        { url: '/images/Facade03.jpg', caption: 'Inner Courtyard Garden & Boutique Entrance' }
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

    const lang = currentLang || 'en';
    const getVal = (field) => (typeof field === 'object' ? (field[lang] || field.en) : field);

    document.getElementById('modalRoomTitle').textContent = getVal(data.title);
    document.getElementById('modalRoomTagline').textContent = getVal(data.tagline);
    document.getElementById('modalRoomPrice').textContent = `$${data.priceUSD} / ${lang === 'pt' ? 'noite' : 'night'} (${data.priceAOA})`;
    document.getElementById('modalRoomSize').textContent = data.size;
    document.getElementById('modalRoomCapacity').textContent = getVal(data.capacity);
    document.getElementById('modalRoomBed').textContent = getVal(data.bed);
    document.getElementById('modalRoomDesc').textContent = getVal(data.description);

    // Render Amenities
    const amenitiesList = document.getElementById('modalRoomAmenities');
    if (amenitiesList) {
      amenitiesList.innerHTML = '';
      const list = getVal(data.amenities) || [];
      list.forEach(item => {
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
     7. DIRECT WHATSAPP RESERVATION REDIRECT
     ========================================================================== */
  window.openBookingModal = (roomCategory = null) => {
    let text = "Hello Thomson Art House! I would like to inquire about reserving a stay.";
    if (typeof roomCategory === 'string' && roomCategory.trim()) {
      const suiteName = roomCategory.replace(/-/g, ' ');
      text = `Hello Thomson Art House! I would like to inquire about reserving the ${suiteName}.`;
    }
    const whatsappUrl = `https://wa.me/244933694600?text=${encodeURIComponent(text)}`;

    try {
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch (e) {
      window.location.href = whatsappUrl;
    }
  };

  window.closeBookingModal = () => {};

  window.sendWhatsAppReservation = window.handleModalBookingSubmit = (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    window.openBookingModal();
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
