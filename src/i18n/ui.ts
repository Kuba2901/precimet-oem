import type { Locale } from './config';

/**
 * Cała treść interfejsu w trzech językach.
 * Zmiana tekstu = edycja tego pliku, bez dotykania komponentów.
 */

type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
};

type Dict = {
  seo: {
    title: string;
    description: string;
    blogTitle: string;
    blogDescription: string;
  };
  nav: {
    about: string;
    services: string;
    why: string;
    process: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    title2: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    facts: { value: string; label: string }[];
    imgAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: ServiceItem[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string }[];
    machineNote: string;
  };
  process: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; desc: string }[];
  };
  industries: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
  };
  blog: {
    eyebrow: string;
    title: string;
    lead: string;
    readMore: string;
    all: string;
    backToList: string;
    published: string;
    empty: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      file: string;
      fileHint: string;
      consent: string;
      submit: string;
      note: string;
    };
    info: {
      title: string;
      addressLabel: string;
      address: string;
      phoneLabel: string;
      phone: string;
      emailLabel: string;
      email: string;
      hoursLabel: string;
      hours: string;
      responseNote: string;
    };
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    langTitle: string;
    legal: string;
  };
};

const STOCK = {
  laser:
    'https://images.unsplash.com/photo-1764114235896-034c8772de01?auto=format&fit=crop&w=1200&q=70',
  bending:
    'https://images.unsplash.com/photo-1738162837340-da3e7a323a09?auto=format&fit=crop&w=1200&q=70',
  welding:
    'https://images.unsplash.com/photo-1780701247845-974f99e95984?auto=format&fit=crop&w=1200&q=70',
  robotWelding:
    'https://images.unsplash.com/photo-1752614671119-4868a91efc14?auto=format&fit=crop&w=1200&q=70',
  cncMill:
    'https://images.unsplash.com/photo-1740209475472-aa7d280f7452?auto=format&fit=crop&w=1200&q=70',
  cncTurn:
    'https://images.unsplash.com/photo-1727292486976-6fd4bc056761?auto=format&fit=crop&w=1200&q=70',
  tubes:
    'https://images.unsplash.com/photo-1764835746713-34a671e73569?auto=format&fit=crop&w=1200&q=70',
  assembly:
    'https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=1200&q=70',
  electrical:
    'https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=1200&q=70',
  cad:
    'https://images.unsplash.com/photo-1769149068959-b11392164add?auto=format&fit=crop&w=1200&q=70',
  locksmith:
    'https://images.unsplash.com/photo-1529479627062-5f1f0b88912a?auto=format&fit=crop&w=1200&q=70',
  hall:
    'https://images.unsplash.com/photo-1730584475256-9055b74420a2?auto=format&fit=crop&w=1200&q=70',
};

export const ui: Record<Locale, Dict> = {
  /* ------------------------------------------------------------------ PL */
  pl: {
    seo: {
      title:
        'Precimet OEM Manufacturing — kooperacja w obróbce metalu | cięcie laserowe, gięcie, spawanie, CNC',
      description:
        'Precimet OEM Manufacturing: partner kooperacyjny w obróbce metalu. Cięcie laserowe blach, gięcie, spawanie ręczne i zrobotyzowane, frezowanie i toczenie CNC, montaż. 15+ lat doświadczenia, ISO 9001:2015, produkcja kontraktowa dla firm OEM z całej Polski.',
      blogTitle: 'Blog i aktualności — Precimet OEM Manufacturing',
      blogDescription:
        'Aktualności firmowe, case studies i wiedza technologiczna z obszaru obróbki metalu: cięcie laserowe, gięcie blach, spawanie, obróbka CNC i produkcja kontraktowa.',
    },
    nav: {
      about: 'O firmie',
      services: 'Usługi',
      why: 'Dlaczego my',
      process: 'Proces',
      blog: 'Blog',
      contact: 'Kontakt',
      cta: 'Poproś o wycenę',
    },
    hero: {
      eyebrow: 'Precimet OEM Manufacturing · Kooperacja w obróbce metalu',
      title1: 'Części i zespoły metalowe',
      titleAccent: 'dla producentów OEM.',
      title2: 'Od prototypu do produkcji seryjnej.',
      lead:
        'Jesteśmy zapleczem produkcyjnym dla producentów maszyn i integratorów. Tniemy laserem, gniemy, spawamy, toczymy, frezujemy i kompletujemy Wasze zamówienia - zgodnie z dokumentacją, terminowo i powtarzalnie.',
      ctaPrimary: 'Poproś o wycenę',
      ctaSecondary: 'Skontaktuj się',
      chips: [
        'Cięcie laserowe',
        'Gięcie blach',
        'Spawanie',
        'Obróbka CNC',
        'Montaż',
      ],
      stats: [
        { value: '15+', label: 'lat w kooperacji przemysłowej' },
        { value: '3,5 mln', label: 'części wyprodukowanych dla klientów' },
        { value: '50+', label: 'gatunków blach w magazynie' },
        { value: 'ISO 9001', label: 'certyfikowany system jakości od 2015' },
      ],
    },
    about: {
      eyebrow: 'O firmie',
      title: 'Partner kooperacyjny, nie tylko podwykonawca',
      p1: 'Precimet od ponad 15 lat realizuje zlecenia kooperacyjne i outsourcing produkcji metalowej dla klientów przemysłowych z całej Polski. Pracujemy na dokumentacji klienta lub wspieramy jej przygotowanie — od pojedynczych prototypów po powtarzalne serie produkcyjne.',
      p2: 'Wyprodukowaliśmy już ponad 3,5 miliona części. Utrzymujemy magazyn z ponad 50 gatunkami blach, co skraca czas realizacji i uniezależnia harmonogram od dostaw materiału. Współpracujemy z działami R&D klientów i realizujemy szybkie prototypowanie przed uruchomieniem serii.',
      p3: 'Od 2015 roku pracujemy w certyfikowanym systemie zarządzania jakością zgodnym z ISO 9001:2015. Każde zlecenie przechodzi kontrolę jakości, a proces produkcji jest udokumentowany i powtarzalny.',
      facts: [
        { value: '15+', label: 'lat doświadczenia' },
        { value: '3 500 000+', label: 'wyprodukowanych części' },
        { value: '50+', label: 'gatunków blach od ręki' },
        { value: '100%', label: 'zleceń z kontrolą jakości' },
      ],
      imgAlt: 'Hala produkcyjna z nowoczesnym parkiem maszynowym',
    },
    services: {
      eyebrow: 'Zakres usług',
      title: 'Kompleksowa produkcja części i zespołów metalowych w jednym miejscu',
      lead:
        'Łączymy kluczowe etapy produkcji — od przygotowania technologii, przez cięcie laserowe, gięcie, spawanie i obróbkę CNC, aż po montaż gotowych zespołów. Jeden partner odpowiada za cały proces, jego jakość i termin realizacji.',
      items: [
        {
          id: 'laser',
          title: 'Cięcie laserowe blach',
          desc: 'Precyzyjne cięcie blach stalowych, nierdzewnych i aluminiowych. Magazyn 50+ gatunków materiału pozwala startować z produkcją bez czekania na dostawy.',
          img: STOCK.laser,
          imgAlt: 'Wycinarka laserowa tnąca blachę stalową',
        },
        {
          id: 'bending',
          title: 'Gięcie blach',
          desc: 'Gięcie na prasach krawędziowych CNC — od cienkich blach po elementy konstrukcyjne. Powtarzalne kąty i wymiary w całej serii.',
          img: STOCK.bending,
          imgAlt: 'Prasa krawędziowa CNC podczas gięcia blachy',
        },
        {
          id: 'welding',
          title: 'Spawanie ręczne',
          desc: 'Spawanie MIG/MAG i TIG konstrukcji stalowych, nierdzewnych i aluminiowych przez wykwalifikowanych spawaczy. Spoiny konstrukcyjne i estetyczne.',
          img: STOCK.welding,
          imgAlt: 'Spawacz wykonujący spoinę metodą TIG',
        },
        {
          id: 'robot-welding',
          title: 'Spawanie zrobotyzowane',
          desc: 'Zrobotyzowane stanowiska spawalnicze dla serii produkcyjnych — stała jakość spoin, krótszy czas cyklu i niższy koszt jednostkowy.',
          img: STOCK.robotWelding,
          imgAlt: 'Robot spawalniczy na stanowisku zautomatyzowanym',
        },
        {
          id: 'milling',
          title: 'Frezowanie CNC',
          desc: 'Frezowanie elementów maszyn i części precyzyjnych na centrach obróbczych CNC. Obróbka detali ciętych laserem i elementów spawanych.',
          img: STOCK.cncMill,
          imgAlt: 'Centrum frezarskie CNC w trakcie obróbki detalu',
        },
        {
          id: 'turning',
          title: 'Toczenie CNC',
          desc: 'Toczenie części obrotowych — tuleje, wałki, kołnierze, elementy złączne — w klasach dokładności wymaganych przez dokumentację.',
          img: STOCK.cncTurn,
          imgAlt: 'Tokarka CNC podczas obróbki wałka',
        },
        {
          id: 'tube-bending',
          title: 'Gięcie rur CNC',
          desc: 'Gięcie rur i profili na giętarkach CNC — ramy, poręcze, konstrukcje przestrzenne i elementy instalacji, z zachowaniem geometrii przekroju.',
          img: STOCK.tubes,
          imgAlt: 'Wygięte rury stalowe na stanowisku produkcyjnym',
        },
        {
          id: 'profile-cutting',
          title: 'Cięcie kształtowników CNC',
          desc: 'Cięcie profili, rur i kształtowników na maszynach CNC — dokładne długości i kąty pod konstrukcje spawane i ramy maszyn.',
          img: STOCK.locksmith,
          imgAlt: 'Cięcie profili stalowych na maszynie CNC',
        },
        {
          id: 'assembly',
          title: 'Montaż mechaniczny',
          desc: 'Montaż podzespołów i kompletnych zespołów z części własnej produkcji i elementów powierzonych. Dostarczamy gotowy, sprawdzony produkt.',
          img: STOCK.assembly,
          imgAlt: 'Montaż podzespołów mechanicznych na hali produkcyjnej',
        },
        {
          id: 'electrical',
          title: 'Montaż elektryczny',
          desc: 'Okablowanie i montaż elektryczny zespołów — od prostych wiązek po kompletne szafy i moduły zgodnie z dokumentacją klienta.',
          img: STOCK.electrical,
          imgAlt: 'Montaż elektryczny szafy sterowniczej',
        },
        {
          id: 'cad',
          title: 'Projektowanie CAD/CAM',
          desc: 'Wsparcie technologiczne: przygotowanie i optymalizacja dokumentacji pod produkcję, rozwinięcia blach, programy CAM, doradztwo materiałowe.',
          img: STOCK.cad,
          imgAlt: 'Inżynier pracujący nad modelem CAD',
        },
        {
          id: 'locksmith',
          title: 'Ślusarstwo warsztatowe',
          desc: 'Prace ślusarskie, wiercenie, gwintowanie, szlifowanie i wykończenie detali — wszystko, czego wymaga kompletne zlecenie kooperacyjne.',
          img: STOCK.hall,
          imgAlt: 'Stanowisko ślusarskie w hali produkcyjnej',
        },
      ],
    },
    why: {
      eyebrow: 'Dlaczego Precimet',
      title: 'Dlaczego producenci OEM współpracują z nami przez lata?',
      items: [
        {
          title: 'Terminowość',
          desc: 'Planujemy produkcję według potwierdzonych terminów dostaw. Nasz własny magazyn i zapas podstawowych materiałów pomagają nam ograniczać ryzyko przestojów i opóźnień.',
        },
        {
          title: 'Powtarzalność',
          desc: 'Udokumentowana technologia oraz zapisane programy CNC pozwalają zachować powtarzalne parametry kolejnych partii produkcyjnych.',
        },
        {
          title: 'Kontrola jakości',
          desc: 'Pracujemy zgodnie z systemem ISO 9001:2015. Prowadzimy kontrolę materiałów, kontrolę międzyoperacyjną i końcową, a na życzenie dostarczamy wymaganą dokumentację jakościową.',
        },
        {
          title: 'Elastyczność produkcji',
          desc: 'Na tym samym parku maszynowym realizujemy prototypy, zamówienia jednostkowe oraz powtarzalne małe i średnie serie.',
        },
        {
          title: 'Wsparcie technologiczne',
          desc: 'Analizujemy dobór materiału i technologię wykonania, wskazując możliwości obniżenia kosztów bez wpływu na funkcję i jakość wyrobu.',
        },
        {
          title: 'Doświadczenie w kooperacji',
          desc: 'Od ponad 15 lat produkujemy na podstawie dokumentacji klientów przemysłowych. Znamy realia współpracy OEM: zmiany rewizji, audyty, wymagania jakościowe i harmonogramy dostaw.',
        },
      ],
      machineNote:
        'Jeden partner produkcyjny, jeden kontakt i odpowiedzialność za cały zakres realizacji.',
    },
    process: {
      eyebrow: 'Proces współpracy',
      title: 'Od zapytania do dostawy w sześciu krokach',
      lead:
        'Prosty, przewidywalny proces. Na każdym etapie wiesz, co się dzieje z Twoim zleceniem.',
      steps: [
        {
          title: 'Zapytanie',
          desc: 'Prześlij zapytanie i dokumentację w formacie DXF, STEP lub PDF, określ materiał, liczbę sztuk i oczekiwany termin realizacji.',
        },
        {
          title: 'Analiza zapytania',
          desc: 'Technolog sprawdza kompletność dokumentacji i wykonalność detalu, dobiera technologię produkcji oraz zgłasza ewentualne pytania lub propozycje optymalizacji.',
        },
        {
          title: 'Wycena',
          desc: 'Otrzymujesz ofertę określającą zakres realizacji, cenę, termin oraz warunki współpracy.',
        },
        {
          title: 'Realizacja',
          desc: 'Po zaakceptowaniu oferty uruchamiamy produkcję zgodnie z dokumentacją i uzgodnioną technologią.',
        },
        {
          title: 'Kontrola jakości',
          desc: 'Produkcja podlega kontroli zgodnej z procedurami systemu ISO 9001:2015. Na życzenie dostarczamy uzgodnioną dokumentację jakościową i świadectwa materiałowe.',
        },
        {
          title: 'Dostawa',
          desc: 'Gotowe elementy odpowiednio zabezpieczamy i dostarczamy pod wskazany adres — w Polsce i Europie.',
        },
      ],
    },
    industries: {
      eyebrow: 'Branże, które obsługujemy',
      title: 'Produkcja kontraktowa dla firm przemysłowych',
      lead:
        'Współpracujemy z producentami maszyn i urządzeń, integratorami automatyki oraz firmami rozwijającymi własne produkty. Dostarczamy pojedyncze komponenty, części seryjne i gotowe zespoły.',
      items: [
        'Branża spożywcza - elementy i części maszyn dla przemysłu spożywczego',
        'Transport i logistyka - elementy i części urządzeń transportowych i logistycznych',
        'Meble metalowe i wyposażenie - elementy i części konstrukcyjne',
        'Budownictwo - elementy stalowe dla firm budowlanych',
      ],
    },
    blog: {
      eyebrow: 'Blog / Aktualności',
      title: 'Realizacje i wiedza produkcyjna',
      lead:
        'Pokazujemy wybrane realizacje, dzielimy się wiedzą technologiczną i informujemy o rozwoju naszych możliwości produkcyjnych.',
      readMore: 'Czytaj dalej',
      all: 'Zobacz wszystkie wpisy',
      backToList: 'Wróć do listy wpisów',
      published: 'Opublikowano',
      empty: 'Wkrótce pojawią się tu pierwsze wpisy.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Prześlij rysunek — odezwiemy się z wyceną',
      lead:
        'Masz dokumentację, model 3D albo tylko szkic? Napisz do nas. Zapytania wyceniamy szybko i konkretnie.',
      form: {
        name: 'Imię i nazwisko *',
        company: 'Firma',
        email: 'Adres e-mail *',
        phone: 'Telefon',
        message: 'Treść zapytania *',
        messagePlaceholder:
          'Opisz detal, ilości i oczekiwany termin. Możesz też wkleić link do dokumentacji.',
        file: 'Załącz plik (DXF, STEP, PDF…)',
        fileHint: 'Maks. 20 MB. Większe pliki prześlij linkiem w treści.',
        consent: 'Wyrażam zgodę na przetwarzanie danych w celu odpowiedzi na zapytanie. *',
        submit: 'Wyślij zapytanie',
        note: 'Pola oznaczone * są wymagane.',
      },
      info: {
        title: 'Dane kontaktowe',
        addressLabel: 'Adres',
        address: 'PRECIMET H.C.E. Sp. z o.o.\nul. Pomorska 555\n92-735 Łódź, Polska',
        phoneLabel: 'Telefon',
        phone: 'Biuro:\n+48 42 672 57 10\n+48 422 080 400\n\nCięcie laserowe, obróbka metalu:\n+48 422 080 411\n+48 422 080 412\n+48 422 080 413\n+48 422 080 416',
        emailLabel: 'E-mail',
        email: 'produkcja@precimet.pl',
        hoursLabel: 'Godziny pracy',
        hours: 'Pon–Pt: 8:00–16:00',
        responseNote:
          'Na zapytania ofertowe odpowiadamy zwykle w ciągu 1–2 dni roboczych.',
      },
    },
    footer: {
      tagline: 'Kooperacja w obróbce metalu dla firm przemysłowych z całej Polski.',
      navTitle: 'Nawigacja',
      contactTitle: 'Kontakt',
      langTitle: 'Język',
      legal: 'Wszelkie prawa zastrzeżone. PRECIMET H.C.E. Sp. z o.o. · NIP: 728-280-49-18 · KRS: 0000587797',
    },
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    seo: {
      title:
        'Precimet OEM Manufacturing — metal fabrication partner | laser cutting, bending, welding, CNC',
      description:
        'Precimet OEM Manufacturing: your contract manufacturing partner for metal parts. Sheet metal laser cutting, bending, manual and robotic welding, CNC milling and turning, assembly. 15+ years of experience, ISO 9001:2015, serving OEMs across Poland and the EU.',
      blogTitle: 'Blog & news — Precimet OEM Manufacturing',
      blogDescription:
        'Company news, case studies and engineering know-how on metal fabrication: laser cutting, sheet metal bending, welding, CNC machining and contract manufacturing.',
    },
    nav: {
      about: 'About us',
      services: 'Services',
      why: 'Why us',
      process: 'Process',
      blog: 'Blog',
      contact: 'Contact',
      cta: 'Request a quote',
    },
    hero: {
      eyebrow: 'Precimet OEM Manufacturing · Metal fabrication partner',
      title1: 'Metal parts built',
      titleAccent: 'to your drawing.',
      title2: 'From prototype to series.',
      lead:
        'We are the production backbone for OEMs, integrators and machine builders. Laser cutting, bending, welding, CNC machining and assembly — on time, repeatable, to spec.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'Contact us',
      chips: ['Laser cutting', 'Sheet bending', 'Welding', 'CNC machining', 'Assembly'],
      stats: [
        { value: '15+', label: 'years in industrial subcontracting' },
        { value: '3.5 M', label: 'parts manufactured for customers' },
        { value: '50+', label: 'sheet metal grades in stock' },
        { value: 'ISO 9001', label: 'certified quality system since 2015' },
      ],
    },
    about: {
      eyebrow: 'About us',
      title: 'A manufacturing partner, not just a subcontractor',
      p1: 'For over 15 years Precimet has delivered subcontracted production and manufacturing outsourcing to industrial customers across Poland. We work from your documentation — or help you prepare it — from one-off prototypes to repeatable production series.',
      p2: 'We have manufactured more than 3.5 million parts to date. Our warehouse holds over 50 grades of sheet metal, which shortens lead times and decouples your schedule from raw material deliveries. We cooperate with customers’ R&D teams and provide rapid prototyping before serial launch.',
      p3: 'Since 2015 we have operated a certified quality management system compliant with ISO 9001:2015. Every order goes through quality control, and the production process is documented and repeatable.',
      facts: [
        { value: '15+', label: 'years of experience' },
        { value: '3,500,000+', label: 'parts manufactured' },
        { value: '50+', label: 'sheet grades in stock' },
        { value: '100%', label: 'of orders quality-checked' },
      ],
      imgAlt: 'Production hall with modern machine park',
    },
    services: {
      eyebrow: 'Our services',
      title: 'The complete metal fabrication chain under one roof',
      lead:
        'From process engineering through cutting and bending to welding, CNC machining and assembly of finished units. One partner, one point of responsibility for quality and delivery.',
      items: [
        {
          id: 'laser',
          title: 'Sheet metal laser cutting',
          desc: 'Precision laser cutting of carbon steel, stainless and aluminium sheets. 50+ material grades in stock let us start production without waiting for deliveries.',
          img: STOCK.laser,
          imgAlt: 'Laser cutting machine processing steel sheet',
        },
        {
          id: 'bending',
          title: 'Sheet metal bending',
          desc: 'CNC press brake bending — from thin gauge sheet to structural components. Repeatable angles and dimensions across the whole batch.',
          img: STOCK.bending,
          imgAlt: 'CNC press brake bending a sheet metal part',
        },
        {
          id: 'welding',
          title: 'Manual welding',
          desc: 'MIG/MAG and TIG welding of steel, stainless and aluminium structures by qualified welders. Structural and cosmetic welds.',
          img: STOCK.welding,
          imgAlt: 'Welder making a TIG weld',
        },
        {
          id: 'robot-welding',
          title: 'Robotic welding',
          desc: 'Robotic welding cells for production series — consistent weld quality, shorter cycle times and lower unit cost.',
          img: STOCK.robotWelding,
          imgAlt: 'Welding robot in an automated cell',
        },
        {
          id: 'milling',
          title: 'CNC milling',
          desc: 'Milling of machine components and precision parts on CNC machining centres, including post-processing of laser-cut and welded parts.',
          img: STOCK.cncMill,
          imgAlt: 'CNC milling centre machining a part',
        },
        {
          id: 'turning',
          title: 'CNC turning',
          desc: 'Turning of rotational parts — bushings, shafts, flanges, fasteners — to the accuracy classes your documentation requires.',
          img: STOCK.cncTurn,
          imgAlt: 'CNC lathe turning a shaft',
        },
        {
          id: 'tube-bending',
          title: 'CNC tube bending',
          desc: 'Bending of tubes and profiles on CNC benders — frames, handrails, spatial structures and piping components with preserved cross-section geometry.',
          img: STOCK.tubes,
          imgAlt: 'Bent steel tubes at a production station',
        },
        {
          id: 'profile-cutting',
          title: 'CNC profile cutting',
          desc: 'Cutting of profiles, tubes and sections on CNC machines — accurate lengths and angles for welded structures and machine frames.',
          img: STOCK.locksmith,
          imgAlt: 'Cutting steel profiles on a CNC machine',
        },
        {
          id: 'assembly',
          title: 'Mechanical assembly',
          desc: 'Assembly of sub-units and complete units from our own parts and customer-supplied components. You receive a finished, tested product.',
          img: STOCK.assembly,
          imgAlt: 'Mechanical assembly on the shop floor',
        },
        {
          id: 'electrical',
          title: 'Electrical assembly',
          desc: 'Wiring and electrical assembly — from simple harnesses to complete cabinets and modules built to your documentation.',
          img: STOCK.electrical,
          imgAlt: 'Electrical assembly of a control cabinet',
        },
        {
          id: 'cad',
          title: 'CAD/CAM engineering',
          desc: 'Engineering support: preparing and optimising documentation for manufacture, sheet metal unfolds, CAM programs, material consulting.',
          img: STOCK.cad,
          imgAlt: 'Engineer working on a CAD model',
        },
        {
          id: 'locksmith',
          title: 'General metalwork',
          desc: 'Workshop metalwork, drilling, tapping, grinding and finishing — everything a complete subcontracted order requires.',
          img: STOCK.hall,
          imgAlt: 'Metalwork station in the production hall',
        },
      ],
    },
    why: {
      eyebrow: 'Why Precimet',
      title: 'Six reasons OEMs stay with us for years',
      items: [
        {
          title: 'On-time delivery',
          desc: 'We plan production around confirmed delivery dates. Our own material warehouse removes the most common cause of delay.',
        },
        {
          title: 'Repeatability',
          desc: 'Documented process engineering and CNC programs guarantee that part number one thousand matches part number one.',
        },
        {
          title: 'Quality control',
          desc: 'ISO 9001:2015 system with incoming, in-process and final inspection. We supply the quality documentation your order requires.',
        },
        {
          title: 'Production flexibility',
          desc: 'We handle one-off orders and prototypes as well as high-volume series — on the same machine park.',
        },
        {
          title: 'Engineering support',
          desc: 'We advise on material, technology and part design to cut manufacturing cost without compromising function.',
        },
        {
          title: 'Subcontracting experience',
          desc: 'Over 15 years of working to industrial customers’ documentation. We know OEM reality: revision changes, audits, delivery schedules.',
        },
      ],
      machineNote:
        'We run a modern machine park from reputable manufacturers and use materials from proven suppliers — for single-piece orders and high volumes alike.',
    },
    process: {
      eyebrow: 'How we work',
      title: 'From inquiry to delivery in six steps',
      lead: 'A simple, predictable process. At every stage you know exactly where your order stands.',
      steps: [
        {
          title: 'Contact',
          desc: 'Send your inquiry with a drawing, 3D model or part description. A DXF, STEP or PDF file is enough.',
        },
        {
          title: 'Inquiry analysis',
          desc: 'Our process engineer reviews the documentation, selects technology and material, and flags any design remarks.',
        },
        {
          title: 'Quotation',
          desc: 'You receive a concrete offer: price, lead time and terms — no hidden costs.',
        },
        {
          title: 'Production',
          desc: 'Manufacturing to your documentation and the approved process, with ongoing supervision.',
        },
        {
          title: 'Quality control',
          desc: 'Inspection and measurement per ISO 9001:2015. Measurement reports and material certificates on request.',
        },
        {
          title: 'Delivery',
          desc: 'Protective packaging and delivery to your address on the agreed date — across Poland and the EU.',
        },
      ],
    },
    industries: {
      eyebrow: 'Industries we serve',
      title: 'Trusted by manufacturers in demanding industries',
      lead: 'We provide contract manufacturing for machine builders, automation integrators and OEM companies, among others.',
      items: [
        'Machine and equipment builders',
        'Automation and robotics',
        'Food industry',
        'Energy sector',
        'Transport and logistics',
        'Construction and infrastructure',
        'Metal furniture and fit-out',
        'Agriculture and agri-tech',
      ],
    },
    blog: {
      eyebrow: 'Blog / News',
      title: 'Knowledge and news from the shop floor',
      lead: 'Case studies, engineering tips and updates on new production capabilities.',
      readMore: 'Read more',
      all: 'View all posts',
      backToList: 'Back to all posts',
      published: 'Published',
      empty: 'First posts coming soon.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Send us a drawing — we’ll come back with a quote',
      lead: 'Got documentation, a 3D model or just a sketch? Write to us. We quote quickly and concretely.',
      form: {
        name: 'Full name *',
        company: 'Company',
        email: 'E-mail address *',
        phone: 'Phone',
        message: 'Your inquiry *',
        messagePlaceholder:
          'Describe the part, quantities and expected lead time. You can also paste a link to documentation.',
        file: 'Attach a file (DXF, STEP, PDF…)',
        fileHint: 'Max 20 MB. For larger files, share a link in the message.',
        consent: 'I consent to the processing of my data to answer this inquiry. *',
        submit: 'Send inquiry',
        note: 'Fields marked * are required.',
      },
      info: {
        title: 'Contact details',
        addressLabel: 'Address',
        address: 'PRECIMET H.C.E. Sp. z o.o.\nul. Pomorska 555\n92-735 Łódź, Poland',
        phoneLabel: 'Phone',
        phone: 'Office:\n+48 42 672 57 10\n+48 422 080 400\n\nLaser cutting, metalworking:\n+48 422 080 411\n+48 422 080 412\n+48 422 080 413\n+48 422 080 416',
        emailLabel: 'E-mail',
        email: 'produkcja@precimet.pl',
        hoursLabel: 'Working hours',
        hours: 'Mon–Fri: 8:00–16:00 CET',
        responseNote: 'We usually answer inquiries within 1–2 business days.',
      },
    },
    footer: {
      tagline: 'Contract metal fabrication for industrial companies across Poland and the EU.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      langTitle: 'Language',
      legal: 'All rights reserved. PRECIMET H.C.E. Sp. z o.o. · NIP: 728-280-49-18 · KRS: 0000587797',
    },
  },

  /* ------------------------------------------------------------------ DE */
  de: {
    seo: {
      title:
        'Precimet OEM Manufacturing — Partner für Metallbearbeitung | Laserschneiden, Biegen, Schweißen, CNC',
      description:
        'Precimet OEM Manufacturing: Ihr Partner für Lohnfertigung in der Metallbearbeitung. Laserschneiden von Blechen, Abkanten, manuelles und Roboterschweißen, CNC-Fräsen und -Drehen, Montage. 15+ Jahre Erfahrung, ISO 9001:2015, Auftragsfertigung für OEMs in Polen und der EU.',
      blogTitle: 'Blog & Aktuelles — Precimet OEM Manufacturing',
      blogDescription:
        'Unternehmensnachrichten, Case Studies und technisches Know-how zur Metallbearbeitung: Laserschneiden, Blechbiegen, Schweißen, CNC-Bearbeitung und Auftragsfertigung.',
    },
    nav: {
      about: 'Über uns',
      services: 'Leistungen',
      why: 'Warum wir',
      process: 'Ablauf',
      blog: 'Blog',
      contact: 'Kontakt',
      cta: 'Angebot anfragen',
    },
    hero: {
      eyebrow: 'Precimet OEM Manufacturing · Partner für Metallbearbeitung',
      title1: 'Metallteile gefertigt',
      titleAccent: 'nach Ihrer Zeichnung.',
      title2: 'Vom Prototyp zur Serie.',
      lead:
        'Wir sind das Fertigungsrückgrat für OEMs, Integratoren und Maschinenbauer. Laserschneiden, Abkanten, Schweißen, CNC-Bearbeitung und Montage — termingerecht, wiederholgenau, nach Spezifikation.',
      ctaPrimary: 'Angebot anfragen',
      ctaSecondary: 'Kontakt aufnehmen',
      chips: ['Laserschneiden', 'Blechbiegen', 'Schweißen', 'CNC-Bearbeitung', 'Montage'],
      stats: [
        { value: '15+', label: 'Jahre in der industriellen Lohnfertigung' },
        { value: '3,5 Mio.', label: 'gefertigte Teile für Kunden' },
        { value: '50+', label: 'Blechsorten auf Lager' },
        { value: 'ISO 9001', label: 'zertifiziertes QM-System seit 2015' },
      ],
    },
    about: {
      eyebrow: 'Über uns',
      title: 'Ein Fertigungspartner, nicht nur ein Zulieferer',
      p1: 'Seit über 15 Jahren realisiert Precimet Lohnfertigung und Produktions-Outsourcing für Industriekunden aus ganz Polen. Wir fertigen nach Ihrer Dokumentation — oder unterstützen bei deren Erstellung — vom Einzelprototyp bis zur wiederholgenauen Serienproduktion.',
      p2: 'Bis heute haben wir über 3,5 Millionen Teile gefertigt. Unser Lager umfasst mehr als 50 Blechsorten — das verkürzt Lieferzeiten und macht Ihren Zeitplan unabhängig von Materiallieferungen. Wir arbeiten mit den F&E-Abteilungen unserer Kunden zusammen und bieten Rapid Prototyping vor dem Serienstart.',
      p3: 'Seit 2015 arbeiten wir mit einem zertifizierten Qualitätsmanagementsystem nach ISO 9001:2015. Jeder Auftrag durchläuft die Qualitätskontrolle, der Fertigungsprozess ist dokumentiert und reproduzierbar.',
      facts: [
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '3.500.000+', label: 'gefertigte Teile' },
        { value: '50+', label: 'Blechsorten ab Lager' },
        { value: '100%', label: 'der Aufträge qualitätsgeprüft' },
      ],
      imgAlt: 'Produktionshalle mit modernem Maschinenpark',
    },
    services: {
      eyebrow: 'Unsere Leistungen',
      title: 'Die komplette Metallbearbeitungskette unter einem Dach',
      lead:
        'Von der Arbeitsvorbereitung über Schneiden und Biegen bis zu Schweißen, CNC-Bearbeitung und Montage fertiger Baugruppen. Ein Partner, eine Verantwortung für Qualität und Termin.',
      items: [
        {
          id: 'laser',
          title: 'Laserschneiden von Blechen',
          desc: 'Präzises Laserschneiden von Stahl-, Edelstahl- und Aluminiumblechen. 50+ Materialsorten auf Lager ermöglichen den Fertigungsstart ohne Wartezeit auf Lieferungen.',
          img: STOCK.laser,
          imgAlt: 'Laserschneidanlage beim Schneiden von Stahlblech',
        },
        {
          id: 'bending',
          title: 'Blechbiegen',
          desc: 'Abkanten auf CNC-Abkantpressen — vom Dünnblech bis zum Konstruktionsteil. Wiederholgenaue Winkel und Maße über die gesamte Serie.',
          img: STOCK.bending,
          imgAlt: 'CNC-Abkantpresse beim Biegen eines Blechteils',
        },
        {
          id: 'welding',
          title: 'Manuelles Schweißen',
          desc: 'MIG/MAG- und WIG-Schweißen von Stahl-, Edelstahl- und Aluminiumkonstruktionen durch qualifizierte Schweißer. Tragende und Sichtnähte.',
          img: STOCK.welding,
          imgAlt: 'Schweißer bei einer WIG-Schweißnaht',
        },
        {
          id: 'robot-welding',
          title: 'Roboterschweißen',
          desc: 'Roboterschweißzellen für Serienfertigung — konstante Nahtqualität, kürzere Taktzeiten und geringere Stückkosten.',
          img: STOCK.robotWelding,
          imgAlt: 'Schweißroboter in einer automatisierten Zelle',
        },
        {
          id: 'milling',
          title: 'CNC-Fräsen',
          desc: 'Fräsen von Maschinenkomponenten und Präzisionsteilen auf CNC-Bearbeitungszentren, inklusive Nachbearbeitung lasergeschnittener und geschweißter Teile.',
          img: STOCK.cncMill,
          imgAlt: 'CNC-Fräszentrum bei der Bearbeitung eines Teils',
        },
        {
          id: 'turning',
          title: 'CNC-Drehen',
          desc: 'Drehen von Rotationsteilen — Buchsen, Wellen, Flansche, Verbindungselemente — in den von Ihrer Dokumentation geforderten Toleranzklassen.',
          img: STOCK.cncTurn,
          imgAlt: 'CNC-Drehmaschine beim Drehen einer Welle',
        },
        {
          id: 'tube-bending',
          title: 'CNC-Rohrbiegen',
          desc: 'Biegen von Rohren und Profilen auf CNC-Biegemaschinen — Rahmen, Geländer, Raumkonstruktionen und Leitungskomponenten mit erhaltener Querschnittsgeometrie.',
          img: STOCK.tubes,
          imgAlt: 'Gebogene Stahlrohre an einem Fertigungsplatz',
        },
        {
          id: 'profile-cutting',
          title: 'CNC-Profilzuschnitt',
          desc: 'Zuschnitt von Profilen, Rohren und Formstahl auf CNC-Maschinen — exakte Längen und Winkel für Schweißkonstruktionen und Maschinenrahmen.',
          img: STOCK.locksmith,
          imgAlt: 'Zuschnitt von Stahlprofilen auf einer CNC-Maschine',
        },
        {
          id: 'assembly',
          title: 'Mechanische Montage',
          desc: 'Montage von Baugruppen und kompletten Einheiten aus eigengefertigten und beigestellten Teilen. Sie erhalten ein fertiges, geprüftes Produkt.',
          img: STOCK.assembly,
          imgAlt: 'Mechanische Montage in der Fertigungshalle',
        },
        {
          id: 'electrical',
          title: 'Elektromontage',
          desc: 'Verdrahtung und Elektromontage — von einfachen Kabelsätzen bis zu kompletten Schaltschränken und Modulen nach Ihrer Dokumentation.',
          img: STOCK.electrical,
          imgAlt: 'Elektromontage eines Schaltschranks',
        },
        {
          id: 'cad',
          title: 'CAD/CAM-Engineering',
          desc: 'Technologische Unterstützung: Aufbereitung und Optimierung der Fertigungsdokumentation, Blechabwicklungen, CAM-Programme, Materialberatung.',
          img: STOCK.cad,
          imgAlt: 'Ingenieur bei der Arbeit an einem CAD-Modell',
        },
        {
          id: 'locksmith',
          title: 'Schlosserarbeiten',
          desc: 'Werkstattschlosserei, Bohren, Gewindeschneiden, Schleifen und Finish — alles, was ein kompletter Lohnfertigungsauftrag erfordert.',
          img: STOCK.hall,
          imgAlt: 'Schlosserarbeitsplatz in der Fertigungshalle',
        },
      ],
    },
    why: {
      eyebrow: 'Warum Precimet',
      title: 'Sechs Gründe, warum OEMs uns über Jahre treu bleiben',
      items: [
        {
          title: 'Termintreue',
          desc: 'Wir planen die Fertigung nach bestätigten Lieferterminen. Das eigene Materiallager beseitigt die häufigste Verzögerungsursache.',
        },
        {
          title: 'Wiederholgenauigkeit',
          desc: 'Dokumentierte Arbeitsvorbereitung und CNC-Programme garantieren: Teil Nummer tausend entspricht Teil Nummer eins.',
        },
        {
          title: 'Qualitätskontrolle',
          desc: 'ISO 9001:2015-System mit Eingangs-, Zwischen- und Endprüfung. Wir liefern die geforderte Qualitätsdokumentation mit.',
        },
        {
          title: 'Flexible Fertigung',
          desc: 'Wir realisieren Einzelaufträge und Prototypen ebenso wie große Serien — auf demselben Maschinenpark.',
        },
        {
          title: 'Technologische Beratung',
          desc: 'Wir beraten bei Material, Technologie und Bauteilkonstruktion, um Fertigungskosten ohne Funktionsverlust zu senken.',
        },
        {
          title: 'Erfahrung in der Lohnfertigung',
          desc: 'Über 15 Jahre Fertigung nach Kundendokumentation. Wir kennen die OEM-Realität: Revisionsänderungen, Audits, Lieferpläne.',
        },
      ],
      machineNote:
        'Wir arbeiten mit einem modernen Maschinenpark renommierter Hersteller und Materialien bewährter Lieferanten — bei Einzelaufträgen wie bei großen Stückzahlen.',
    },
    process: {
      eyebrow: 'So arbeiten wir',
      title: 'Von der Anfrage zur Lieferung in sechs Schritten',
      lead: 'Ein einfacher, planbarer Ablauf. In jeder Phase wissen Sie, wo Ihr Auftrag steht.',
      steps: [
        {
          title: 'Kontakt',
          desc: 'Senden Sie Ihre Anfrage mit Zeichnung, 3D-Modell oder Bauteilbeschreibung. Eine DXF-, STEP- oder PDF-Datei genügt.',
        },
        {
          title: 'Anfrageanalyse',
          desc: 'Unser Arbeitsvorbereiter prüft die Dokumentation, wählt Technologie und Material und meldet ggf. konstruktive Hinweise.',
        },
        {
          title: 'Angebot',
          desc: 'Sie erhalten ein konkretes Angebot: Preis, Lieferzeit und Konditionen — ohne versteckte Kosten.',
        },
        {
          title: 'Fertigung',
          desc: 'Produktion nach Ihrer Dokumentation und dem freigegebenen Prozess, mit laufender Überwachung.',
        },
        {
          title: 'Qualitätskontrolle',
          desc: 'Prüfung und Messung nach ISO 9001:2015. Auf Wunsch Messprotokolle und Materialzeugnisse.',
        },
        {
          title: 'Lieferung',
          desc: 'Schützende Verpackung und Lieferung an Ihre Adresse zum vereinbarten Termin — in Polen und der EU.',
        },
      ],
    },
    industries: {
      eyebrow: 'Branchen',
      title: 'Hersteller anspruchsvoller Branchen vertrauen uns',
      lead: 'Wir fertigen im Auftrag u. a. für Maschinenbauer, Automatisierungsintegratoren und OEM-Unternehmen.',
      items: [
        'Maschinen- und Anlagenbau',
        'Automatisierung und Robotik',
        'Lebensmittelindustrie',
        'Energiewirtschaft',
        'Transport und Logistik',
        'Bau und Infrastruktur',
        'Metallmöbel und Ausstattung',
        'Landwirtschaft und Agrartechnik',
      ],
    },
    blog: {
      eyebrow: 'Blog / Aktuelles',
      title: 'Wissen und Neuigkeiten aus der Fertigungshalle',
      lead: 'Case Studies, technische Tipps und Informationen zu neuen Fertigungsmöglichkeiten.',
      readMore: 'Weiterlesen',
      all: 'Alle Beiträge ansehen',
      backToList: 'Zurück zur Übersicht',
      published: 'Veröffentlicht',
      empty: 'Die ersten Beiträge erscheinen in Kürze.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Senden Sie uns eine Zeichnung — wir melden uns mit einem Angebot',
      lead: 'Sie haben eine Dokumentation, ein 3D-Modell oder nur eine Skizze? Schreiben Sie uns. Wir kalkulieren schnell und konkret.',
      form: {
        name: 'Vor- und Nachname *',
        company: 'Firma',
        email: 'E-Mail-Adresse *',
        phone: 'Telefon',
        message: 'Ihre Anfrage *',
        messagePlaceholder:
          'Beschreiben Sie das Bauteil, Stückzahlen und den gewünschten Termin. Sie können auch einen Link zur Dokumentation einfügen.',
        file: 'Datei anhängen (DXF, STEP, PDF…)',
        fileHint: 'Max. 20 MB. Größere Dateien bitte per Link in der Nachricht.',
        consent: 'Ich stimme der Verarbeitung meiner Daten zur Beantwortung dieser Anfrage zu. *',
        submit: 'Anfrage senden',
        note: 'Mit * gekennzeichnete Felder sind Pflichtfelder.',
      },
      info: {
        title: 'Kontaktdaten',
        addressLabel: 'Adresse',
        address: 'PRECIMET H.C.E. Sp. z o.o.\nul. Pomorska 555\n92-735 Łódź, Polen',
        phoneLabel: 'Telefon',
        phone: 'Büro:\n+48 42 672 57 10\n+48 422 080 400\n\nLaserschneiden, Metallbearbeitung:\n+48 422 080 411\n+48 422 080 412\n+48 422 080 413\n+48 422 080 416',
        emailLabel: 'E-Mail',
        email: 'produkcja@precimet.pl',
        hoursLabel: 'Arbeitszeiten',
        hours: 'Mo–Fr: 8:00–16:00 Uhr MEZ',
        responseNote: 'Anfragen beantworten wir in der Regel innerhalb von 1–2 Werktagen.',
      },
    },
    footer: {
      tagline: 'Auftragsfertigung in Metallbearbeitung für Industrieunternehmen in Polen und der EU.',
      navTitle: 'Navigation',
      contactTitle: 'Kontakt',
      langTitle: 'Sprache',
      legal: 'Alle Rechte vorbehalten. PRECIMET H.C.E. Sp. z o.o. · NIP: 728-280-49-18 · KRS: 0000587797',
    },
  },
};

export function t(locale: Locale): Dict {
  return ui[locale];
}
