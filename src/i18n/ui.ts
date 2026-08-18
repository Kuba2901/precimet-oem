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

type MachineSpec = {
  label: string;
  value: string;
};

type MachineItem = {
  name: string;
  brand: string;
  img: string;
  imgAlt: string;
  specs: MachineSpec[];
};

type MachineGroup = {
  id: string;
  title: string;
  machines: MachineItem[];
};

type Dict = {
  seo: {
    title: string;
    description: string;
    blogTitle: string;
    blogDescription: string;
    privacyDescription: string;
  };
  nav: {
    about: string;
    services: string;
    machines: string;
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
  machines: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    cta: string;
    groups: MachineGroup[];
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
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
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
      error: string;
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
    map: {
      directions: string;
    };
  };
  thankYou: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    langTitle: string;
    legal: string;
  };
  cookie: {
    message: string;
    linkLabel: string;
    accept: string;
    decline: string;
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

/** Zdjęcia maszyn z parku maszynowego (public/maszyny). */
const MACHINE = (name: string): string => `${import.meta.env.BASE_URL}maszyny/${name}.webp`;

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
      privacyDescription:
        'Polityka prywatności serwisu Precimet OEM Manufacturing — jak przetwarzamy dane osobowe, jakie pliki cookies stosujemy i jakie przysługują Ci prawa.',
    },
    nav: {
      about: 'O firmie',
      services: 'Usługi',
      machines: 'Park maszynowy',
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
    machines: {
      eyebrow: 'Park maszynowy',
      title: 'Maszyny, na których realizujemy Państwa zlecenia',
      lead:
        'Prezentujemy nasz aktualny park maszynowy. Stale go modernizujemy, inwestując w nowe maszyny, narzędzia i technologie.',
      note: 'Potrzebują Państwo detalu wykraczającego poza powyższe zakresy? Prosimy o przesłanie dokumentacji — po analizie potwierdzimy wykonalność.',
      cta: 'Prześlij dokumentację',
      groups: [
        {
          id: 'lasery',
          title: 'Wycinarki laserowe',
          machines: [
            {
              name: 'NEXUS OPTIPLEX 2D',
              brand: 'Mazak',
              img: MACHINE('laser-mazak-nexus'),
              imgAlt: 'Wycinarka laserowa Mazak Nexus Optiplex 2D z laserem światłowodowym',
              specs: [
                { label: 'Źródło', value: 'Laser Fiber, 4 kW' },
                { label: 'Maks. arkusz', value: '3000 × 1500 mm' },
                { label: 'Blachy czarne', value: 'do 20 mm' },
                { label: 'Nierdzewne i kwasoodporne', value: 'do 20 mm' },
                { label: 'Aluminium', value: 'do 10 mm' },
                { label: 'Metale kolorowe', value: 'mosiądz, miedź' },
              ],
            },
          ],
        },
        {
          id: 'prasy',
          title: 'Prasy krawędziowe',
          machines: [
            {
              name: 'Serwoelektryczna prasa krawędziowa',
              brand: 'Safan',
              img: MACHINE('prasa-safan'),
              imgAlt: 'Serwoelektryczna prasa krawędziowa Safan',
              specs: [
                { label: 'Maks. długość gięcia', value: '3000 mm' },
                { label: 'Maks. nacisk', value: '160 ton' },
              ],
            },
          ],
        },
        {
          id: 'cnc',
          title: 'Obróbka mechaniczna CNC — frezowanie i toczenie',
          machines: [
            {
              name: 'DNM-750L',
              brand: 'Doosan',
              img: MACHINE('frezarka-doosan-dnm-750l'),
              imgAlt: 'Centrum frezarskie CNC Doosan DNM-750L',
              specs: [
                { label: 'Typ', value: 'Frezarka CNC' },
                { label: 'Zakres obróbki', value: '2160 × 762 × 650 mm' },
              ],
            },
            {
              name: 'VMC 650',
              brand: 'Avia',
              img: MACHINE('frezarka-avia-vmc-650'),
              imgAlt: 'Centrum frezarskie CNC Avia VMC 650',
              specs: [
                { label: 'Typ', value: 'Frezarka CNC' },
                { label: 'Zakres obróbki', value: '650 × 540 × 620 mm' },
              ],
            },
            {
              name: '510',
              brand: 'Romi',
              img: MACHINE('tokarka-romi-510'),
              imgAlt: 'Tokarka CNC Romi 510',
              specs: [
                { label: 'Typ', value: 'Tokarka CNC' },
                { label: 'Maks. długość toczenia', value: '1500 mm' },
                { label: 'Maks. średnica', value: '255 mm' },
              ],
            },
            {
              name: 'Lynx 300M',
              brand: 'Doosan',
              img: MACHINE('tokarka-doosan-lynx-300m'),
              imgAlt: 'Tokarka CNC Doosan Lynx 300M',
              specs: [
                { label: 'Typ', value: 'Tokarka CNC' },
                { label: 'Maks. długość toczenia', value: '712 mm' },
                { label: 'Maks. średnica', value: '254 mm' },
              ],
            },
          ],
        },
        {
          id: 'spawanie',
          title: 'Spawanie zrobotyzowane',
          machines: [
            {
              name: 'Robot spawalniczy',
              brand: 'OTC Daihen',
              img: MACHINE('robot-otc-daihen'),
              imgAlt: 'Zrobotyzowane stanowisko spawalnicze OTC Daihen podczas pracy',
              specs: [
                { label: 'Zakres spawania', value: 'dł. 2000 × szer. 1000 × gł. 400 mm' },
              ],
            },
          ],
        },
        {
          id: 'ksztaltowniki',
          title: 'Cięcie kształtowników CNC',
          machines: [
            {
              name: 'Piła CNC',
              brand: 'IMET',
              img: MACHINE('pila-imet'),
              imgAlt: 'Automatyczna piła taśmowa CNC IMET do cięcia kształtowników',
              specs: [
                { label: 'Podawanie', value: 'Automatyczne' },
                { label: 'Ukosowanie', value: 'Automatyczne, −60° / 0 / +60°' },
              ],
            },
          ],
        },
        {
          id: 'giecie-rur',
          title: 'Gięcie rur na giętarce CNC',
          machines: [
            {
              name: 'Giętarka CNC',
              brand: 'SOCO',
              img: MACHINE('gietarka-soco'),
              imgAlt: 'Numeryczna giętarka do rur SOCO',
              specs: [
                { label: 'Gięcie', value: 'W jednej płaszczyźnie' },
                { label: 'Średnice rur', value: '⌀25, ⌀32, ⌀50 mm' },
                { label: 'Inne wymiary', value: 'na zapytanie' },
              ],
            },
          ],
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
    faq: {
      eyebrow: 'Pytania i odpowiedzi',
      title: 'Najczęściej zadawane pytania',
      items: [
        {
          q: 'Z jakimi formatami plików pracujecie?',
          a: 'Przyjmujemy modele i rysunki w formatach STEP, STP, IGES, IGS, DXF, DWG oraz PDF. Nie masz modelu 3D? Prześlij szkic lub próbkę — pomożemy uzupełnić dokumentację.',
        },
        {
          q: 'Czy realizujecie zamówienia prototypowe i małe serie?',
          a: 'Tak. Traktujemy prototypy i zamówienia jednostkowe tak samo poważnie jak duże serie — ten sam park maszynowy, ta sama kontrola jakości. Często prototyp przechodzi płynnie w produkcję seryjną.',
        },
        {
          q: 'Jakie są minimalne i maksymalne ilości zamówienia?',
          a: 'Nie narzucamy minimalnej wielkości zamówienia. Specjalizujemy się w produkcji od pojedynczych sztuk po duże serie — wycena i technologia zawsze zależą od detalu.',
        },
        {
          q: 'Jakie gatunki materiałów macie w magazynie?',
          a: 'Stale nierdzewne i konstrukcyjne, aluminium, miedź i mosiądz — ponad 50 gatunków blach w magazynie. To skraca czasy realizacji i chroni Cię przed wahaniami cen surowców.',
        },
        {
          q: 'Ile trwa wycena i realizacja zamówienia?',
          a: 'Oferty wysyłamy zwykle w ciągu 1–2 dni roboczych. Czas realizacji zależy od złożoności detalu i obłożenia maszyn — potwierdzamy go w ofercie i trzymamy się go.',
        },
        {
          q: 'Czy dysponujecie certyfikatem jakości?',
          a: 'Tak, od 2015 r. utrzymujemy certyfikowany system jakości ISO 9001:2015 z kontrolą wejściową, międzyoperacyjną i końcową. W razie potrzeby dostarczamy dokumentację jakościową do zamówienia.',
        },
      ],
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
        error: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub napisz do nas e-mail.',
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
      map: {
        directions: 'Wyznacz trasę',
      },
    },
    thankYou: {
      title: 'Dziękujemy za zapytanie',
      text: 'Twoja wiadomość została wysłana. Odpowiadamy zwykle w ciągu 1–2 dni roboczych. Jeśli sprawa jest pilna, zadzwoń: +48 42 672 57 10.',
      cta: 'Wróć na stronę główną',
    },
    footer: {
      tagline: 'Kooperacja w obróbce metalu dla firm przemysłowych z całej Polski.',
      navTitle: 'Nawigacja',
      contactTitle: 'Kontakt',
      langTitle: 'Język',
      legal: 'Wszelkie prawa zastrzeżone. PRECIMET H.C.E. Sp. z o.o. · NIP: 728-280-49-18 · KRS: 0000587797',
    },
    cookie: {
      message: 'Używamy plików cookie i podobnych technologii, aby zapewnić prawidłowe działanie naszej strony, analizować ruch i personalizować Twoje doświadczenia. Możesz zaakceptować wszystkie pliki cookie, odrzucić opcjonalne lub zarządzać swoimi preferencjami w dowolnym momencie.',
      linkLabel: ' Polityka prywatności',
      accept: 'Akceptuję',
      decline: 'Odrzucam',
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
      privacyDescription:
        'Precimet OEM Manufacturing privacy policy — how we process personal data, what cookies we use and what rights you have.',
    },
    nav: {
      about: 'About us',
      services: 'Services',
      machines: 'Machine park',
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
    machines: {
      eyebrow: 'Machine park',
      title: 'The machines your parts are made on',
      lead:
        'This is our current machine park. We keep modernising it, investing in new machines, tooling and technologies.',
      note: 'Need a part outside the ranges listed above? Send us your documentation — we will confirm feasibility after reviewing it.',
      cta: 'Send your drawings',
      groups: [
        {
          id: 'lasers',
          title: 'Laser cutting machines',
          machines: [
            {
              name: 'NEXUS OPTIPLEX 2D',
              brand: 'Mazak',
              img: MACHINE('laser-mazak-nexus'),
              imgAlt: 'Mazak Nexus Optiplex 2D fibre laser cutting machine',
              specs: [
                { label: 'Source', value: 'Fibre laser, 4 kW' },
                { label: 'Max. sheet size', value: '3000 × 1500 mm' },
                { label: 'Mild steel', value: 'up to 20 mm' },
                { label: 'Stainless & acid-resistant', value: 'up to 20 mm' },
                { label: 'Aluminium', value: 'up to 10 mm' },
                { label: 'Non-ferrous metals', value: 'brass, copper' },
              ],
            },
          ],
        },
        {
          id: 'press-brakes',
          title: 'Press brakes',
          machines: [
            {
              name: 'Servo-electric press brake',
              brand: 'Safan',
              img: MACHINE('prasa-safan'),
              imgAlt: 'Safan servo-electric press brake',
              specs: [
                { label: 'Max. bending length', value: '3000 mm' },
                { label: 'Max. tonnage', value: '160 t' },
              ],
            },
          ],
        },
        {
          id: 'cnc',
          title: 'CNC machining — milling and turning',
          machines: [
            {
              name: 'DNM-750L',
              brand: 'Doosan',
              img: MACHINE('frezarka-doosan-dnm-750l'),
              imgAlt: 'Doosan DNM-750L CNC machining centre',
              specs: [
                { label: 'Type', value: 'CNC milling machine' },
                { label: 'Working envelope', value: '2160 × 762 × 650 mm' },
              ],
            },
            {
              name: 'VMC 650',
              brand: 'Avia',
              img: MACHINE('frezarka-avia-vmc-650'),
              imgAlt: 'Avia VMC 650 CNC machining centre',
              specs: [
                { label: 'Type', value: 'CNC milling machine' },
                { label: 'Working envelope', value: '650 × 540 × 620 mm' },
              ],
            },
            {
              name: '510',
              brand: 'Romi',
              img: MACHINE('tokarka-romi-510'),
              imgAlt: 'Romi 510 CNC lathe',
              specs: [
                { label: 'Type', value: 'CNC lathe' },
                { label: 'Max. turning length', value: '1500 mm' },
                { label: 'Max. diameter', value: '255 mm' },
              ],
            },
            {
              name: 'Lynx 300M',
              brand: 'Doosan',
              img: MACHINE('tokarka-doosan-lynx-300m'),
              imgAlt: 'Doosan Lynx 300M CNC lathe',
              specs: [
                { label: 'Type', value: 'CNC lathe' },
                { label: 'Max. turning length', value: '712 mm' },
                { label: 'Max. diameter', value: '254 mm' },
              ],
            },
          ],
        },
        {
          id: 'robotic-welding',
          title: 'Robotic welding',
          machines: [
            {
              name: 'Welding robot',
              brand: 'OTC Daihen',
              img: MACHINE('robot-otc-daihen'),
              imgAlt: 'OTC Daihen robotic welding cell in operation',
              specs: [
                { label: 'Welding envelope', value: 'L 2000 × W 1000 × D 400 mm' },
              ],
            },
          ],
        },
        {
          id: 'profile-cutting',
          title: 'CNC profile cutting',
          machines: [
            {
              name: 'CNC saw',
              brand: 'IMET',
              img: MACHINE('pila-imet'),
              imgAlt: 'IMET automatic CNC band saw for cutting profiles',
              specs: [
                { label: 'Feeding', value: 'Automatic' },
                { label: 'Mitre cutting', value: 'Automatic, −60° / 0 / +60°' },
              ],
            },
          ],
        },
        {
          id: 'tube-bending',
          title: 'CNC tube bending',
          machines: [
            {
              name: 'CNC tube bender',
              brand: 'SOCO',
              img: MACHINE('gietarka-soco'),
              imgAlt: 'SOCO CNC tube bending machine',
              specs: [
                { label: 'Bending', value: 'Single plane' },
                { label: 'Tube diameters', value: '⌀25, ⌀32, ⌀50 mm' },
                { label: 'Other sizes', value: 'on request' },
              ],
            },
          ],
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
    faq: {
      eyebrow: 'Questions & answers',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Which file formats do you accept?',
          a: 'We work with STEP, STP, IGES, IGS, DXF, DWG and PDF models and drawings. No 3D model? Send a sketch or a sample part and we will help you complete the documentation.',
        },
        {
          q: 'Do you take on prototypes and small batches?',
          a: 'Yes. We treat prototypes and one-off orders as seriously as large series — same machine park, same quality control. Prototypes often flow straight into series production.',
        },
        {
          q: 'Is there a minimum order quantity?',
          a: 'We do not impose a minimum order size. We produce anything from single parts to large volumes — pricing and technology always depend on the part.',
        },
        {
          q: 'Which materials do you keep in stock?',
          a: 'Stainless and structural steels, aluminium, copper and brass — over 50 sheet metal grades in stock. That shortens lead times and protects you from raw material price swings.',
        },
        {
          q: 'How long do quotes and production take?',
          a: 'Quotes usually go out within 1–2 business days. Production time depends on part complexity and machine capacity — we confirm it in the quote and stick to it.',
        },
        {
          q: 'Are you quality certified?',
          a: 'Yes — we have maintained a certified ISO 9001:2015 quality system since 2015, with incoming, in-process and final inspection. Quality documentation is available on request.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Send us a drawing — we\u2019ll come back with a quote',
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
        error: 'Something went wrong while sending. Try again or email us directly.',
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
      map: {
        directions: 'Get directions',
      },
    },
    thankYou: {
      title: 'Thank you for your inquiry',
      text: 'Your message has been sent. We usually reply within 1–2 business days. For urgent matters, call: +48 42 672 57 10.',
      cta: 'Back to homepage',
    },
    footer: {
      tagline: 'Contract metal fabrication for industrial companies across Poland and the EU.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      langTitle: 'Language',
      legal: 'All rights reserved. PRECIMET H.C.E. Sp. z o.o. · NIP: 728-280-49-18 · KRS: 0000587797',
    },
    cookie: {
      message: 'We use cookies and similar technologies to help our site work, analyze traffic, and personalize your experience. You can accept all cookies, decline non-essential ones, or manage your preferences at any time.',
      linkLabel: 'Privacy Policy',
      accept: 'Accept',
      decline: 'Decline',
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
      privacyDescription:
        'Datenschutzerklärung von Precimet OEM Manufacturing — wie wir personenbezogene Daten verarbeiten, welche Cookies wir einsetzen und welche Rechte Ihnen zustehen.',
    },
    nav: {
      about: 'Über uns',
      services: 'Leistungen',
      machines: 'Maschinenpark',
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
    machines: {
      eyebrow: 'Maschinenpark',
      title: 'Maschinen, auf denen wir Ihre Teile fertigen',
      lead:
        'Hier stellen wir Ihnen unseren aktuellen Maschinenpark vor. Wir modernisieren ihn laufend und investieren in neue Maschinen, Werkzeuge und Technologien.',
      note: 'Sie benötigen ein Teil außerhalb der genannten Bereiche? Senden Sie uns Ihre Unterlagen — nach der Prüfung bestätigen wir die Machbarkeit.',
      cta: 'Zeichnungen senden',
      groups: [
        {
          id: 'laser',
          title: 'Laserschneidanlagen',
          machines: [
            {
              name: 'NEXUS OPTIPLEX 2D',
              brand: 'Mazak',
              img: MACHINE('laser-mazak-nexus'),
              imgAlt: 'Faserlaser-Schneidanlage Mazak Nexus Optiplex 2D',
              specs: [
                { label: 'Strahlquelle', value: 'Faserlaser, 4 kW' },
                { label: 'Max. Tafelformat', value: '3000 × 1500 mm' },
                { label: 'Baustahl', value: 'bis 20 mm' },
                { label: 'Edelstahl und säurebeständig', value: 'bis 20 mm' },
                { label: 'Aluminium', value: 'bis 10 mm' },
                { label: 'NE-Metalle', value: 'Messing, Kupfer' },
              ],
            },
          ],
        },
        {
          id: 'abkantpressen',
          title: 'Abkantpressen',
          machines: [
            {
              name: 'Servoelektrische Abkantpresse',
              brand: 'Safan',
              img: MACHINE('prasa-safan'),
              imgAlt: 'Servoelektrische Abkantpresse von Safan',
              specs: [
                { label: 'Max. Biegelänge', value: '3000 mm' },
                { label: 'Max. Presskraft', value: '160 t' },
              ],
            },
          ],
        },
        {
          id: 'cnc',
          title: 'CNC-Zerspanung — Fräsen und Drehen',
          machines: [
            {
              name: 'DNM-750L',
              brand: 'Doosan',
              img: MACHINE('frezarka-doosan-dnm-750l'),
              imgAlt: 'CNC-Bearbeitungszentrum Doosan DNM-750L',
              specs: [
                { label: 'Typ', value: 'CNC-Fräsmaschine' },
                { label: 'Bearbeitungsbereich', value: '2160 × 762 × 650 mm' },
              ],
            },
            {
              name: 'VMC 650',
              brand: 'Avia',
              img: MACHINE('frezarka-avia-vmc-650'),
              imgAlt: 'CNC-Bearbeitungszentrum Avia VMC 650',
              specs: [
                { label: 'Typ', value: 'CNC-Fräsmaschine' },
                { label: 'Bearbeitungsbereich', value: '650 × 540 × 620 mm' },
              ],
            },
            {
              name: '510',
              brand: 'Romi',
              img: MACHINE('tokarka-romi-510'),
              imgAlt: 'CNC-Drehmaschine Romi 510',
              specs: [
                { label: 'Typ', value: 'CNC-Drehmaschine' },
                { label: 'Max. Drehlänge', value: '1500 mm' },
                { label: 'Max. Durchmesser', value: '255 mm' },
              ],
            },
            {
              name: 'Lynx 300M',
              brand: 'Doosan',
              img: MACHINE('tokarka-doosan-lynx-300m'),
              imgAlt: 'CNC-Drehmaschine Doosan Lynx 300M',
              specs: [
                { label: 'Typ', value: 'CNC-Drehmaschine' },
                { label: 'Max. Drehlänge', value: '712 mm' },
                { label: 'Max. Durchmesser', value: '254 mm' },
              ],
            },
          ],
        },
        {
          id: 'roboterschweissen',
          title: 'Roboterschweißen',
          machines: [
            {
              name: 'Schweißroboter',
              brand: 'OTC Daihen',
              img: MACHINE('robot-otc-daihen'),
              imgAlt: 'Roboterschweißzelle OTC Daihen im Betrieb',
              specs: [
                { label: 'Schweißbereich', value: 'L 2000 × B 1000 × T 400 mm' },
              ],
            },
          ],
        },
        {
          id: 'profilsaegen',
          title: 'CNC-Profilsägen',
          machines: [
            {
              name: 'CNC-Säge',
              brand: 'IMET',
              img: MACHINE('pila-imet'),
              imgAlt: 'Automatische CNC-Bandsäge IMET zum Sägen von Profilen',
              specs: [
                { label: 'Zuführung', value: 'Automatisch' },
                { label: 'Gehrungsschnitt', value: 'Automatisch, −60° / 0 / +60°' },
              ],
            },
          ],
        },
        {
          id: 'rohrbiegen',
          title: 'CNC-Rohrbiegen',
          machines: [
            {
              name: 'CNC-Rohrbiegemaschine',
              brand: 'SOCO',
              img: MACHINE('gietarka-soco'),
              imgAlt: 'CNC-Rohrbiegemaschine von SOCO',
              specs: [
                { label: 'Biegen', value: 'In einer Ebene' },
                { label: 'Rohrdurchmesser', value: '⌀25, ⌀32, ⌀50 mm' },
                { label: 'Weitere Abmessungen', value: 'auf Anfrage' },
              ],
            },
          ],
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
    faq: {
      eyebrow: 'Fragen & Antworten',
      title: 'Häufig gestellte Fragen',
      items: [
        {
          q: 'Welche Dateiformate akzeptieren Sie?',
          a: 'Wir arbeiten mit STEP, STP, IGES, IGS, DXF, DWG und PDF. Kein 3D-Modell? Senden Sie eine Skizze oder ein Musterteil — wir helfen, die Dokumentation zu vervollständigen.',
        },
        {
          q: 'Fertigen Sie auch Prototypen und Kleinserien?',
          a: 'Ja. Prototypen und Einzelteile behandeln wir genauso sorgfältig wie große Serien — derselbe Maschinenpark, dieselbe Qualitätskontrolle. Häufig geht der Prototyp direkt in die Serienfertigung über.',
        },
        {
          q: 'Gibt es eine Mindestbestellmenge?',
          a: 'Wir legen keine Mindestmenge fest. Wir fertigen vom Einzelteil bis zur Großserie — Kalkulation und Technologie hängen immer vom Bauteil ab.',
        },
        {
          q: 'Welche Materialien halten Sie auf Lager?',
          a: 'Rostfreie und Baustähle, Aluminium, Kupfer und Messing — über 50 Blechgüten auf Lager. Das verkürzt Lieferzeiten und schützt Sie vor Rohstoffpreisschwankungen.',
        },
        {
          q: 'Wie lange dauern Angebot und Fertigung?',
          a: 'Angebote erhalten Sie in der Regel innerhalb von 1–2 Werktagen. Die Fertigungszeit hängt von der Komplexität des Bauteils und der Maschinenauslastung ab — wir bestätigen sie im Angebot und halten sie ein.',
        },
        {
          q: 'Sind Sie zertifiziert?',
          a: 'Ja — seit 2015 unterhalten wir ein zertifiziertes Qualitätsmanagementsystem nach ISO 9001:2015 mit Eingangs-, Zwischen- und Endprüfung. Qualitätsdokumentation stellen wir auf Wunsch bereit.',
        },
      ],
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
        error: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns.',
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
      map: {
        directions: 'Route anzeigen',
      },
    },
    thankYou: {
      title: 'Vielen Dank für Ihre Anfrage',
      text: 'Ihre Nachricht wurde gesendet. Wir antworten in der Regel innerhalb von 1–2 Werktagen. Bei Eilfragen erreichen Sie uns unter: +48 42 672 57 10.',
      cta: 'Zurück zur Startseite',
    },
    footer: {
      tagline: 'Auftragsfertigung in Metallbearbeitung für Industrieunternehmen in Polen und der EU.',
      navTitle: 'Navigation',
      contactTitle: 'Kontakt',
      langTitle: 'Sprache',
      legal: 'Alle Rechte vorbehalten. PRECIMET H.C.E. Sp. z o.o. · NIP: 728-280-49-18 · KRS: 0000587797',
    },
    cookie: {
      message: 'Wir verwenden Cookies und ähnliche Technologien, um die Funktionalität unserer Website zu gewährleisten, den Datenverkehr zu analysieren und Ihr Erlebnis zu personalisieren. Sie können alle Cookies akzeptieren, nicht essenzielle ablehnen oder Ihre Einstellungen jederzeit verwalten.',
      linkLabel: 'Datenschutzerklärung',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
    },
  },
};

export function t(locale: Locale): Dict {
  return ui[locale];
}
