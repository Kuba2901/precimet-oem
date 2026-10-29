import type { ImageMetadata } from 'astro';
import type { Locale } from './config';
import laser from '../assets/laser.jpg';
import bending from '../assets/bending.jpg';
import welding from '../assets/welding.jpg';
import robotWelding from '../assets/robot_welding.jpg';
import cncMill from '../assets/cnc_mill.jpg';
import cncTurn from '../assets/cnc_turn.jpg';
import tubes from '../assets/tubes.jpg';
import assembly from '../assets/assembly.jpg';
import electrical from '../assets/electrical.jpg';
import cad from '../assets/cad.jpg';
import locksmith from '../assets/locksmith.jpg';
import hall from '../assets/hall.jpg';

/**
 * Cała treść interfejsu w trzech językach.
 * Zmiana tekstu = edycja tego pliku, bez dotykania komponentów.
 */

type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  /** Zdjęcie z src/assets — przetwarzane przez astro:assets (WebP, srcset). */
  img: ImageMetadata;
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

/** Treść podstrony usługi (np. /ciecie-laserowe). Parametry maszyn bierzemy z `machines`. */
type ServicePageContent = {
  /** Ścieżka bez prefiksu językowego, np. '/ciecie-laserowe'. */
  path: string;
  title: string;
  description: string;
  serviceType: string;
  eyebrow: string;
  h1: string;
  lead: string;
  imgAlt: string;
  /** Nazwy maszyn z `machines.groups[].machines[].name`, których parametry pokazujemy. */
  machineNames: string[];
  specsTitle: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  processTitle: string;
  process: { title: string; desc: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; button: string };
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
    /** Etykieta strony głównej — używana w okruszkach (BreadcrumbList). */
    home: string;
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
    /** Nagłówek samodzielnej strony /contact (h1) — niesie frazę kluczową. */
    pageTitle: string;
    lead: string;
    /** Lista kontrolna RFQ — tylko na samodzielnej stronie /contact. */
    rfq: {
      title: string;
      lead: string;
      items: string[];
      formatsLabel: string;
      formats: string;
      noModel: string;
    };
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
  notFound: {
    badge: string;
    title: string;
    lead: string;
    homeCta: string;
    contactCta: string;
    shortcutsTitle: string;
    links: {
      services: string;
      machines: string;
      about: string;
      blog: string;
      contact: string;
    };
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
  };  servicePages: {
    laser: ServicePageContent;
  };
};

const STOCK = {
  laser,
  bending,
  welding,
  robotWelding,
  cncMill,
  cncTurn,
  tubes,
  assembly,
  electrical,
  cad,
  locksmith,
  hall,
};

/** Zdjęcia maszyn z parku maszynowego (public/maszyny). */
const MACHINE = (name: string): string => `${import.meta.env.BASE_URL}maszyny/${name}.webp`;

export const ui: Record<Locale, Dict> = {
  /* ------------------------------------------------------------------ PL */
  pl: {
    seo: {
      title:
        'Produkcja kontraktowa metalu — Precimet OEM, Łódź',
      description:
        'Cięcie laserowe, gięcie, spawanie i obróbka CNC dla firm OEM. ISO 9001:2015, od prototypu do serii. Prześlij rysunek — wycenimy w 1–2 dni.',
      blogTitle: 'Blog i aktualności — Precimet OEM Manufacturing',
      blogDescription:
        'Aktualności firmowe, case studies i wiedza technologiczna z obróbki metalu: cięcie laserowe, gięcie blach, spawanie, obróbka CNC i produkcja kontraktowa.',
      privacyDescription:
        'Polityka prywatności serwisu Precimet OEM Manufacturing — jak przetwarzamy dane osobowe, jakie pliki cookies stosujemy i jakie przysługują Ci prawa.',
    },
    nav: {
      home: 'Strona główna',
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
        { value: '30+', label: 'lat doświadczenia w obróbce metali' },
        { value: '3,5 mln', label: 'części wyprodukowanych dla klientów' },
        { value: '50+', label: 'gatunków blach w magazynie' },
        { value: 'ISO 9001', label: 'certyfikowany system jakości od 2015' },
      ],
    },
    about: {
      eyebrow: 'O firmie',
      title: 'Partner kooperacyjny, nie tylko podwykonawca',
      p1: 'Za Precimet stoi ponad 30 lat doświadczenia w obróbce metali. Realizujemy zlecenia kooperacyjne i outsourcing produkcji metalowej dla klientów przemysłowych z całej Polski. Pracujemy na dokumentacji klienta lub wspieramy jej przygotowanie — od pojedynczych prototypów po powtarzalne serie produkcyjne.',
      p2: 'Wyprodukowaliśmy już ponad 3,5 miliona części. Utrzymujemy magazyn z ponad 50 gatunkami blach, co skraca czas realizacji i uniezależnia harmonogram od dostaw materiału. Współpracujemy z działami R&D klientów i realizujemy szybkie prototypowanie przed uruchomieniem serii.',
      p3: 'Od 2015 roku pracujemy w certyfikowanym systemie zarządzania jakością zgodnym z ISO 9001:2015. Każde zlecenie przechodzi kontrolę jakości, a proces produkcji jest udokumentowany i powtarzalny.',
      facts: [
        { value: '30+', label: 'lat doświadczenia' },
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
          img: STOCK.locksmith,
          imgAlt: 'Cięcie profili stalowych na maszynie CNC',
        },
        {
          id: 'profile-cutting',
          title: 'Cięcie kształtowników CNC',
          desc: 'Cięcie profili, rur i kształtowników na maszynach CNC — dokładne długości i kąty pod konstrukcje spawane i ramy maszyn.',
          img: STOCK.tubes,
          imgAlt: 'Wygięte rury stalowe na stanowisku produkcyjnym',
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
          desc: 'Mamy ponad 30 lat doświadczenia w produkcji na podstawie dokumentacji klientów przemysłowych. Znamy realia współpracy OEM: zmiany rewizji, audyty, wymagania jakościowe i harmonogramy dostaw.',
        },
      ],
      machineNote:
        'Jako partner, przejmujemy odpowiedzialność za cały zakres realizacji powierzonej produkcji',
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
          a: 'Stale nierdzewne i konstrukcyjne, aluminium — ponad 50 gatunków blach w magazynie.',
        },
        {
          q: 'Ile trwa wycena i realizacja zamówienia?',
          a: 'Oferty wysyłamy zwykle w ciągu 1–2 dni roboczych. Czas realizacji zależy od złożoności detalu i obłożenia maszyn — potwierdzamy go w ofercie i trzymamy się go.',
        },
        {
          q: 'Czy dysponujecie certyfikatem jakości?',
          a: 'Tak, od 2015 r. utrzymujemy certyfikowany system jakości ISO 9001:2015. W razie potrzeby dostarczamy dokumentację jakościową do zamówienia.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Prześlij rysunek — odezwiemy się z wyceną',
      pageTitle: 'Zapytanie ofertowe — cięcie laserowe, gięcie i obróbka CNC',
      lead:
        'Masz dokumentację, model 3D albo tylko szkic? Napisz do nas. Zapytania wyceniamy szybko i konkretnie.',
      rfq: {
        title: 'Jak przygotować zapytanie ofertowe',
        lead: 'Kompletne zapytanie pozwala nam przygotować ofertę w ciągu 1–2 dni roboczych. Prześlij:',
        items: [
          'Rysunek 2D lub model 3D detalu',
          'Gatunek i grubość materiału',
          'Liczbę sztuk — pojedynczą partię lub prognozę serii',
          'Oczekiwany termin realizacji',
          'Wymagania jakościowe, np. dokumentację lub świadectwa materiałowe',
        ],
        formatsLabel: 'Akceptowane formaty',
        formats: 'STEP, STP, IGES, IGS, DXF, DWG, PDF',
        noModel: 'Nie masz modelu 3D? Prześlij szkic lub próbkę — pomożemy uzupełnić dokumentację.',
      },
      form: {
        name: 'Imię i nazwisko *',
        company: 'Firma',
        email: 'Adres e-mail *',
        phone: 'Telefon',
        message: 'Treść zapytania *',
        messagePlaceholder:
          'Opisz detal, ilości i oczekiwany termin. Możesz też wkleić link do dokumentacji.',
        file: 'Załącz pliki (DXF, STEP, PDF…)',
        fileHint: 'Można dodać kilka plików. Maks. 15 MB/plik, 25 MB łącznie. Większe pliki prześlij linkiem w treści.',
        consent: 'Wyrażam zgodę na przetwarzanie danych w celu odpowiedzi na zapytanie. *',
        submit: 'Wyślij zapytanie',
        note: 'Pola oznaczone * są wymagane.',
        error: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń: +48 422 080 402.',
      },
      info: {
        title: 'Dane kontaktowe',
        addressLabel: 'Adres',
        address: 'PRECIMET H.C.E. Sp. z o.o.\nul. Pomorska 555\n92-735 Łódź, Polska',
        phoneLabel: 'Telefon',
        phone: 'Biuro:\n+48 42 672 57 10\n+48 422 080 400\n\nCięcie laserowe, obróbka metalu:\n+48 422 080 402\n+48 422 080 419\n+48 422 080 413\n+48 422 080 418',
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
    notFound: {
      badge: 'Błąd 404',
      title: 'Strona nie została znaleziona',
      lead: 'Przepraszamy, ale strona, której szukasz, nie istnieje, została usunięta lub zmieniono jej adres URL.',
      homeCta: 'Wróć na stronę główną',
      contactCta: 'Skontaktuj się z nami',
      shortcutsTitle: 'Przydatne działy',
      links: {
        services: 'Usługi produkcyjne',
        machines: 'Park maszynowy',
        about: 'O firmie Precimet',
        blog: 'Baza wiedzy & DFM',
        contact: 'Wycena & Kontakt',
      },
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
    servicePages: {
      laser: {
        path: '/ciecie-laserowe',
        title: 'Cięcie laserowe blach Łódź — Precimet OEM',
        description: 'Cięcie laserowe blach w Łodzi: laser fiber 4 kW, arkusz 3000 × 1500 mm, stal do 20 mm, aluminium do 10 mm. 50+ gatunków w magazynie, wycena w 1–2 dni.',
        serviceType: 'Cięcie laserowe blach',
        eyebrow: 'Usługi · Cięcie laserowe',
        h1: 'Cięcie laserowe blach w Łodzi',
        lead: 'Tniemy laserem blachy stalowe, nierdzewne, kwasoodporne i aluminiowe na wycinarce Mazak z laserem światłowodowym 4 kW. Od pojedynczego prototypu po powtarzalne serie — z materiału z własnego magazynu i z wyceną w 1–2 dni robocze.',
        imgAlt: 'Wycinarka laserowa tnąca blachę stalową',
        machineNames: ['NEXUS OPTIPLEX 2D'],
        specsTitle: 'Zakres cięcia laserowego',
        sections: [
          {
            title: 'Wycinanie laserowe detali z blach — od prototypu do serii',
            paragraphs: [
              'Cięcie laserem to pierwszy etap większości zleceń, które realizujemy dla producentów maszyn, integratorów automatyki i firm rozwijających własne produkty. Wycinamy detale płaskie i rozwinięcia, które trafiają potem do gięcia, spawania, obróbki CNC lub montażu — u nas albo u klienta.',
              'Nie narzucamy minimalnej wielkości zamówienia. Pojedynczy prototyp traktujemy tak samo jak serię: ta sama maszyna, ten sam program i ta sama kontrola jakości, dzięki czemu prototyp przechodzi płynnie w produkcję seryjną.',
            ],
          },
          {
            title: 'Jakie materiały tniemy laserem',
            paragraphs: [
              'W magazynie utrzymujemy ponad 50 gatunków blach, więc cięcie metalu laserem zwykle startuje bez czekania na dostawę materiału. To najczęstsza przyczyna opóźnień w kooperacji, którą eliminujemy po swojej stronie. Tniemy też z materiału powierzonego przez klienta.',
            ],
            bullets: [
              'stal czarna (konstrukcyjna) do 20 mm',
              'stal nierdzewna i kwasoodporna do 20 mm',
              'aluminium do 10 mm',
              'metale kolorowe: mosiądz i miedź',
            ],
          },
          {
            title: 'Cięcie laserowe jako część całego procesu',
            paragraphs: [
              'Detale po cięciu nie muszą jechać do kolejnego dostawcy. W tym samym zakładzie gniemy je na serwoelektrycznej prasie krawędziowej Safan (do 3000 mm, 160 t), spawamy ręcznie metodami MIG/MAG i TIG lub na robocie OTC Daihen, obrabiamy na centrach CNC i montujemy w gotowe zespoły.',
              'Przygotowujemy też technologię: dokumentację pod produkcję, rozwinięcia blach i programy CAM. Nie masz modelu 3D? Wystarczy szkic lub próbka detalu — pomożemy uzupełnić dokumentację.',
            ],
          },
          {
            title: 'Jakość i dokumentacja',
            paragraphs: [
              'Pracujemy w systemie zarządzania jakością ISO 9001:2015, certyfikowanym od 2015 roku. Kontrolujemy materiał na wejściu, detale w trakcie produkcji i przed wysyłką. Na życzenie dołączamy uzgodnioną dokumentację jakościową i świadectwa materiałowe.',
            ],
          },
          {
            title: 'Cięcie laserowe w Łodzi dla firm z Polski i Europy',
            paragraphs: [
              'Zakład mieści się w Łodzi przy ul. Pomorskiej 555. Za firmą stoi ponad 30 lat doświadczenia w obróbce metali i ponad 3,5 miliona wyprodukowanych części. Realizujemy zlecenia dla firm z Łodzi i województwa łódzkiego, z całej Polski i z Europy — m.in. z branży maszynowej, automatyki i robotyki, spożywczej, energetyki, transportu i logistyki, budownictwa oraz mebli metalowych.',
            ],
          },
        ],
        processTitle: 'Jak wygląda zlecenie cięcia laserowego',
        process: [
          { title: 'Prześlij dokumentację', desc: 'Rysunek 2D lub model 3D (STEP, STP, IGES, IGS, DXF, DWG, PDF), gatunek i grubość materiału, ilość oraz oczekiwany termin.' },
          { title: 'Wycena w 1–2 dni robocze', desc: 'Analizujemy wykonalność i wysyłamy ofertę z potwierdzonym terminem realizacji.' },
          { title: 'Technologia', desc: 'Przygotowujemy program CAM i rozkład detali na arkuszu, a w razie potrzeby rozwinięcia blach.' },
          { title: 'Cięcie i dalsze operacje', desc: 'Tniemy laserem, a jeśli zlecenie tego wymaga — gniemy, spawamy, obrabiamy CNC i montujemy.' },
          { title: 'Kontrola i wysyłka', desc: 'Kontrola końcowa, dokumentacja na życzenie i dostawa w uzgodnionym terminie.' },
        ],
        faqTitle: 'Cięcie laserowe — pytania i odpowiedzi',
        faq: [
          { q: 'Jaką maksymalną grubość blachy tniecie laserem?', a: 'Stal czarną oraz stal nierdzewną i kwasoodporną do 20 mm, aluminium do 10 mm. Tniemy też mosiądz i miedź. Maksymalny format arkusza to 3000 × 1500 mm.' },
          { q: 'Czy wycinacie pojedyncze sztuki?', a: 'Tak. Nie mamy minimalnej wielkości zamówienia — realizujemy zarówno prototypy i pojedyncze detale, jak i duże serie.' },
          { q: 'Czy tniecie z materiału powierzonego?', a: 'Tak. Tniemy z naszego magazynu (ponad 50 gatunków blach) albo z materiału dostarczonego przez klienta — w zapytaniu wystarczy zaznaczyć, którą opcję wybierasz.' },
          { q: 'W jakich formatach przesłać pliki?', a: 'STEP, STP, IGES, IGS, DXF, DWG lub PDF. Jeśli nie masz modelu 3D, prześlij szkic lub próbkę — pomożemy przygotować dokumentację.' },
          { q: 'Ile trwa wycena cięcia laserowego?', a: 'Ofertę wysyłamy zwykle w ciągu 1–2 dni roboczych. Termin realizacji zależy od detalu i obłożenia maszyn — potwierdzamy go w ofercie.' },
          { q: 'Czy po cięciu możecie detale giąć i spawać?', a: 'Tak. W jednym zakładzie gniemy, spawamy (ręcznie i zrobotyzowanie), obrabiamy CNC i montujemy, więc cały detal lub zespół powstaje u jednego dostawcy.' },
        ],
        cta: {
          title: 'Potrzebujesz detali ciętych laserem?',
          text: 'Prześlij rysunek lub model — przygotujemy ofertę w ciągu 1–2 dni roboczych.',
          button: 'Zapytaj o wycenę',
        },
      },
    },
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    seo: {
      title:
        'Contract Metal Fabrication in Poland — Precimet OEM',
      description:
        'Laser cutting, bending, welding and CNC machining for OEMs. ISO 9001:2015, prototype to series. Send a drawing — quoted in 1–2 working days.',
      blogTitle: 'Blog & news — Precimet OEM Manufacturing',
      blogDescription:
        'Company news, case studies and engineering know-how on metal fabrication: laser cutting, sheet metal bending, welding, CNC machining and contract manufacturing.',
      privacyDescription:
        'Precimet OEM Manufacturing privacy policy — how we process personal data, what cookies we use and what rights you have.',
    },
    nav: {
      home: 'Home',
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
      title1: 'From drawing to metal parts.',
      titleAccent: 'From prototype to series.',
      title2: '',
      lead:
        'We are the production backbone for OEMs, integrators and machine builders. Laser cutting, bending, welding, CNC machining and assembly — on time, repeatable, to spec.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'Contact us',
      chips: ['Laser cutting', 'Sheet bending', 'Welding', 'CNC machining', 'Assembly'],
      stats: [
        { value: '30+', label: 'years of metalworking experience' },
        { value: '3.5 M', label: 'parts manufactured for customers' },
        { value: '50+', label: 'sheet metal grades in stock' },
        { value: 'ISO 9001', label: 'certified quality system since 2015' },
      ],
    },
    about: {
      eyebrow: 'About us',
      title: 'A manufacturing partner, not just a subcontractor',
      p1: 'Precimet is built on more than 30 years of metalworking experience. We deliver subcontracted production and manufacturing outsourcing to industrial customers across Poland. We work from your documentation — or help you prepare it — from one-off prototypes to repeatable production series.',
      p2: 'We have manufactured more than 3.5 million parts to date. Our warehouse holds over 50 grades of sheet metal, which shortens lead times and decouples your schedule from raw material deliveries. We cooperate with customers’ R&D teams and provide rapid prototyping before serial launch.',
      p3: 'Since 2015 we have operated a certified quality management system compliant with ISO 9001:2015. Every order goes through quality control, and the production process is documented and repeatable.',
      facts: [
        { value: '30+', label: 'years of experience' },
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
          img: STOCK.locksmith,
          imgAlt: 'Cutting steel profiles on a CNC machine',
        },
        {
          id: 'profile-cutting',
          title: 'CNC profile cutting',
          desc: 'Cutting of profiles, tubes and sections on CNC machines — accurate lengths and angles for welded structures and machine frames.',
          img: STOCK.tubes,
          imgAlt: 'Bent steel tubes at a production station',
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
          desc: 'Over 30 years of experience working to industrial customers’ documentation. We know OEM reality: revision changes, audits, delivery schedules.',
        },
      ],
      machineNote:
        'As your partner, we take full responsibility for the entire scope of the production entrusted to us.',
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
          a: 'Stainless and structural steels, aluminium — over 50 sheet metal grades in stock.',
        },
        {
          q: 'How long do quotes and production take?',
          a: 'Quotes usually go out within 1–2 business days. Production time depends on part complexity and machine capacity — we confirm it in the quote and stick to it.',
        },
        {
          q: 'Are you quality certified?',
          a: 'Yes — we have maintained a certified ISO 9001:2015 quality system since 2015. Quality documentation is available on request.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Send us a drawing — we\u2019ll come back with a quote',
      pageTitle: 'Request a quote — laser cutting, bending and CNC machining',
      lead: 'Got documentation, a 3D model or just a sketch? Write to us. We quote quickly and concretely.',
      rfq: {
        title: 'How to prepare your RFQ',
        lead: 'A complete request lets us send your quote within 1–2 business days. Please include:',
        items: [
          'A 2D drawing or 3D model of the part',
          'Material grade and thickness',
          'Quantity — a single batch or a series forecast',
          'Your target delivery date',
          'Quality requirements, e.g. documentation or material certificates',
        ],
        formatsLabel: 'Accepted formats',
        formats: 'STEP, STP, IGES, IGS, DXF, DWG, PDF',
        noModel: 'No 3D model? Send a sketch or a sample part and we will help you complete the documentation.',
      },
      form: {
        name: 'Full name *',
        company: 'Company',
        email: 'E-mail address *',
        phone: 'Phone',
        message: 'Your inquiry *',
        messagePlaceholder:
          'Describe the part, quantities and expected lead time. You can also paste a link to documentation.',
        file: 'Attach files (DXF, STEP, PDF…)',
        fileHint: 'You can add several files. Max 15 MB/file, 25 MB total. For larger files, share a link in the message.',
        consent: 'I consent to the processing of my data to answer this inquiry. *',
        submit: 'Send inquiry',
        note: 'Fields marked * are required.',
        error: 'Something went wrong while sending. Try again or call us at +48 422 080 402.',
      },
      info: {
        title: 'Contact details',
        addressLabel: 'Address',
        address: 'PRECIMET H.C.E. Sp. z o.o.\nul. Pomorska 555\n92-735 Łódź, Poland',
        phoneLabel: 'Phone',
        phone: 'Office:\n+48 42 672 57 10\n+48 422 080 400\n\nLaser cutting, metalworking:\n+48 422 080 402\n+48 422 080 419\n+48 422 080 413\n+48 422 080 418',
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
    notFound: {
      badge: 'Error 404',
      title: 'Page Not Found',
      lead: 'Sorry, the page you are looking for does not exist, has been removed, or the URL has changed.',
      homeCta: 'Back to homepage',
      contactCta: 'Contact us',
      shortcutsTitle: 'Quick links',
      links: {
        services: 'Manufacturing Services',
        machines: 'Machine Park',
        about: 'About Precimet',
        blog: 'Engineering Blog & DFM',
        contact: 'RFQ & Contact',
      },
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
    servicePages: {
      laser: {
        path: '/laser-cutting',
        title: 'Laser Cutting Services in Poland — Precimet OEM',
        description: 'Sheet metal laser cutting in Łódź, Poland: 4 kW fibre laser, 3000 × 1500 mm sheets, steel up to 20 mm, aluminium up to 10 mm. Quoted in 1–2 working days.',
        serviceType: 'Sheet metal laser cutting',
        eyebrow: 'Services · Laser cutting',
        h1: 'Sheet metal laser cutting in Poland',
        lead: 'We laser cut mild steel, stainless and acid-resistant steel and aluminium on a Mazak machine with a 4 kW fibre laser. From a single prototype to repeat series — from material in our own warehouse, with a quote in 1–2 working days.',
        imgAlt: 'Laser cutting machine processing steel sheet',
        machineNames: ['NEXUS OPTIPLEX 2D'],
        specsTitle: 'Laser cutting capacity',
        sections: [
          {
            title: 'Laser cut parts from prototype to series',
            paragraphs: [
              'Laser cutting is the first step of most orders we run for machine builders, automation integrators and companies developing their own products. We cut flat parts and blanks that then go on to bending, welding, CNC machining or assembly — in our plant or at yours.',
              'There is no minimum order quantity. A single prototype gets the same machine, the same program and the same quality control as a series, so the prototype moves straight into series production.',
            ],
          },
          {
            title: 'Materials we laser cut',
            paragraphs: [
              'We keep more than 50 sheet metal grades in stock, so laser cutting usually starts without waiting for material. Material lead time is the most common cause of delay in subcontracting, and we remove it on our side. We also cut customer-supplied material.',
            ],
            bullets: [
              'mild (structural) steel up to 20 mm',
              'stainless and acid-resistant steel up to 20 mm',
              'aluminium up to 10 mm',
              'non-ferrous metals: brass and copper',
            ],
          },
          {
            title: 'Laser cutting as part of the whole process',
            paragraphs: [
              'Cut parts do not need to travel to another supplier. In the same plant we bend them on a Safan servo-electric press brake (up to 3000 mm, 160 t), weld them manually (MIG/MAG and TIG) or on an OTC Daihen robot, machine them on CNC centres and assemble them into finished units.',
              'We also handle the engineering: documentation for manufacture, sheet metal unfolds and CAM programming. No 3D model? A sketch or a sample part is enough — we will help complete the documentation.',
            ],
          },
          {
            title: 'Quality and documentation',
            paragraphs: [
              'We work under an ISO 9001:2015 quality management system, certified since 2015. Material is checked on arrival, parts are inspected during production and before shipping, and agreed quality documentation and material certificates are supplied on request.',
            ],
          },
          {
            title: 'A laser cutting partner in Poland for customers across Europe',
            paragraphs: [
              'Our plant is at ul. Pomorska 555 in Łódź, central Poland. The company draws on more than 30 years of metalworking experience and has produced over 3.5 million parts. We supply customers in Poland and across Europe — including machine and equipment building, automation and robotics, food, energy, transport and logistics, construction and metal furniture.',
            ],
          },
        ],
        processTitle: 'How a laser cutting order works',
        process: [
          { title: 'Send your documentation', desc: 'A 2D drawing or 3D model (STEP, STP, IGES, IGS, DXF, DWG, PDF), material grade and thickness, quantity and target date.' },
          { title: 'Quote in 1–2 working days', desc: 'We check manufacturability and send an offer with a confirmed lead time.' },
          { title: 'Engineering', desc: 'We prepare the CAM program and sheet nesting, and the sheet metal unfolds if needed.' },
          { title: 'Cutting and further operations', desc: 'We laser cut and, where the order requires it, bend, weld, machine and assemble.' },
          { title: 'Inspection and delivery', desc: 'Final inspection, documentation on request and delivery on the agreed date.' },
        ],
        faqTitle: 'Laser cutting — questions and answers',
        faq: [
          { q: 'What is the maximum sheet thickness you can laser cut?', a: 'Mild steel and stainless or acid-resistant steel up to 20 mm, aluminium up to 10 mm. We also cut brass and copper. The maximum sheet size is 3000 × 1500 mm.' },
          { q: 'Do you cut single parts?', a: 'Yes. There is no minimum order quantity — we handle prototypes and one-off parts as well as large series.' },
          { q: 'Can you cut customer-supplied material?', a: 'Yes. We cut from our own stock (more than 50 sheet metal grades) or from material you supply — just say which in your enquiry.' },
          { q: 'Which file formats do you accept?', a: 'STEP, STP, IGES, IGS, DXF, DWG or PDF. No 3D model? Send a sketch or a sample and we will help prepare the documentation.' },
          { q: 'How long does a laser cutting quote take?', a: 'We usually send the offer within 1–2 working days. Lead time depends on the part and machine load and is confirmed in the offer.' },
          { q: 'Can you bend and weld the parts after cutting?', a: 'Yes. We bend, weld (manual and robotic), machine and assemble in one plant, so the whole part or assembly comes from a single supplier.' },
        ],
        cta: {
          title: 'Need laser cut parts?',
          text: 'Send a drawing or a model — we will prepare an offer within 1–2 working days.',
          button: 'Request a quote',
        },
      },
    },
  },

  /* ------------------------------------------------------------------ DE */
  de: {
    seo: {
      title:
        'Fertigungspartner für OEM aus Polen — Precimet',
      description:
        'Fertigungspartner für OEM in Polen: Laserschneiden, Abkanten, Schweißen, CNC. ISO 9001:2015, Lieferung nach DE und CH, Ansprechpartner auf Deutsch.',
      blogTitle: 'Blog & Aktuelles — Precimet OEM Manufacturing',
      blogDescription:
        'Case Studies und technisches Know-how zur Metallbearbeitung: Laserschneiden, Blechbiegen, Schweißen, CNC-Bearbeitung und Lohnfertigung.',
      privacyDescription:
        'Datenschutzerklärung von Precimet OEM Manufacturing — wie wir personenbezogene Daten verarbeiten, welche Cookies wir einsetzen und welche Rechte Ihnen zustehen.',
    },
    nav: {
      home: 'Startseite',
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
      eyebrow: 'Precimet OEM Manufacturing · Fertigungspartner für OEM',
      title1: 'Metallteile gefertigt',
      titleAccent: 'nach Ihrer Zeichnung.',
      title2: 'Vom Prototyp zur Serie.',
      lead:
        'Wir sind das Fertigungsrückgrat für OEMs, Integratoren und Maschinenbauer. Laserschneiden, Abkanten, Schweißen, CNC-Bearbeitung und Montage — termingerecht, wiederholgenau, nach Spezifikation.',
      ctaPrimary: 'Angebot anfragen',
      ctaSecondary: 'Kontakt aufnehmen',
      chips: ['Laserschneiden', 'Blechbiegen', 'Schweißen', 'CNC-Bearbeitung', 'Montage'],
      stats: [
        { value: '30+', label: 'Jahre Erfahrung in der Metallbearbeitung' },
        { value: '3,5 Mio.', label: 'gefertigte Teile für Kunden' },
        { value: '50+', label: 'Blechsorten auf Lager' },
        { value: 'ISO 9001', label: 'zertifiziertes QM-System seit 2015' },
      ],
    },
    about: {
      eyebrow: 'Über uns',
      title: 'Ein Fertigungspartner, nicht nur ein Zulieferer',
      p1: 'Hinter Precimet stehen über 30 Jahre Erfahrung in der Metallbearbeitung. Wir realisieren Lohnfertigung und Produktions-Outsourcing für Industriekunden in Polen und Europa — wir liefern nach Deutschland und in die Schweiz, und Ihr Ansprechpartner spricht Deutsch. Wir fertigen nach Ihrer Dokumentation — oder unterstützen bei deren Erstellung — vom Einzelprototyp bis zur wiederholgenauen Serienproduktion.',
      p2: 'Bis heute haben wir über 3,5 Millionen Teile gefertigt. Unser Lager umfasst mehr als 50 Blechsorten — das verkürzt Lieferzeiten und macht Ihren Zeitplan unabhängig von Materiallieferungen. Wir arbeiten mit den F&E-Abteilungen unserer Kunden zusammen und bieten Rapid Prototyping vor dem Serienstart.',
      p3: 'Seit 2015 arbeiten wir mit einem zertifizierten Qualitätsmanagementsystem nach ISO 9001:2015. Jeder Auftrag durchläuft die Qualitätskontrolle, der Fertigungsprozess ist dokumentiert und reproduzierbar.',
      facts: [
        { value: '30+', label: 'Jahre Erfahrung' },
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
          img: STOCK.locksmith,
          imgAlt: 'Zuschnitt von Stahlprofilen auf einer CNC-Maschine',
        },
        {
          id: 'profile-cutting',
          title: 'CNC-Profilzuschnitt',
          desc: 'Zuschnitt von Profilen, Rohren und Formstahl auf CNC-Maschinen — exakte Längen und Winkel für Schweißkonstruktionen und Maschinenrahmen.',
          img: STOCK.tubes,
          imgAlt: 'Gebogene Stahlrohre an einem Fertigungsplatz',
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
          desc: 'Über 30 Jahre Erfahrung in der Fertigung nach Kundendokumentation. Wir kennen die OEM-Realität: Revisionsänderungen, Audits, Lieferpläne.',
        },
      ],
      machineNote:
        'Als Partner übernehmen wir die Verantwortung für den gesamten Umfang der uns anvertrauten Fertigung.',
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
          a: 'Rostfreie und Baustähle, Aluminium — über 50 Blechgüten auf Lager.',
        },
        {
          q: 'Wie lange dauern Angebot und Fertigung?',
          a: 'Angebote erhalten Sie in der Regel innerhalb von 1–2 Werktagen. Die Fertigungszeit hängt von der Komplexität des Bauteils und der Maschinenauslastung ab — wir bestätigen sie im Angebot und halten sie ein.',
        },
        {
          q: 'Sind Sie zertifiziert?',
          a: 'Ja — seit 2015 unterhalten wir ein zertifiziertes Qualitätsmanagementsystem nach ISO 9001:2015. Qualitätsdokumentation stellen wir auf Wunsch bereit.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Senden Sie uns eine Zeichnung — wir melden uns mit einem Angebot',
      pageTitle: 'Angebotsanfrage — Laserschneiden, Biegen und CNC-Bearbeitung',
      lead: 'Sie haben eine Dokumentation, ein 3D-Modell oder nur eine Skizze? Schreiben Sie uns. Wir kalkulieren schnell und konkret.',
      rfq: {
        title: 'So bereiten Sie Ihre Anfrage vor',
        lead: 'Mit einer vollständigen Anfrage erhalten Sie unser Angebot innerhalb von 1–2 Werktagen. Bitte senden Sie:',
        items: [
          'Eine 2D-Zeichnung oder ein 3D-Modell des Teils',
          'Werkstoffgüte und Materialstärke',
          'Stückzahl — Einzellos oder Serienprognose',
          'Gewünschten Liefertermin',
          'Qualitätsanforderungen, z. B. Dokumentation oder Materialzeugnisse',
        ],
        formatsLabel: 'Akzeptierte Formate',
        formats: 'STEP, STP, IGES, IGS, DXF, DWG, PDF',
        noModel: 'Kein 3D-Modell? Senden Sie eine Skizze oder ein Musterteil — wir helfen, die Dokumentation zu vervollständigen.',
      },
      form: {
        name: 'Vor- und Nachname *',
        company: 'Firma',
        email: 'E-Mail-Adresse *',
        phone: 'Telefon',
        message: 'Ihre Anfrage *',
        messagePlaceholder:
          'Beschreiben Sie das Bauteil, Stückzahlen und den gewünschten Termin. Sie können auch einen Link zur Dokumentation einfügen.',
        file: 'Dateien anhängen (DXF, STEP, PDF…)',
        fileHint: 'Mehrere Dateien möglich. Max. 15 MB/Datei, 25 MB gesamt. Größere Dateien bitte per Link in der Nachricht.',
        consent: 'Ich stimme der Verarbeitung meiner Daten zur Beantwortung dieser Anfrage zu. *',
        submit: 'Anfrage senden',
        note: 'Mit * gekennzeichnete Felder sind Pflichtfelder.',
        error: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an: +48 422 080 402.',
      },
      info: {
        title: 'Kontaktdaten',
        addressLabel: 'Adresse',
        address: 'PRECIMET H.C.E. Sp. z o.o.\nul. Pomorska 555\n92-735 Łódź, Polen',
        phoneLabel: 'Telefon',
        phone: 'Büro:\n+48 42 672 57 10\n+48 422 080 400\n\nLaserschneiden, Metallbearbeitung:\n+48 422 080 402\n+48 422 080 419\n+48 422 080 413\n+48 422 080 418',
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
    notFound: {
      badge: 'Fehler 404',
      title: 'Seite nicht gefunden',
      lead: 'Entschuldigung, die gesuchte Seite existiert nicht, wurde gelöscht oder die URL hat sich geändert.',
      homeCta: 'Zurück zur Startseite',
      contactCta: 'Kontakt aufnehmen',
      shortcutsTitle: 'Nützliche Bereiche',
      links: {
        services: 'Leistungen & Technologien',
        machines: 'Maschinenpark',
        about: 'Über Precimet',
        blog: 'Wissensblog & DFM',
        contact: 'Preisanfrage & Kontakt',
      },
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
    servicePages: {
      laser: {
        path: '/laserschneiden',
        title: 'Laserschneiden in Polen — Precimet OEM, Łódź',
        description: 'Laserschneiden von Blech in Polen: 4-kW-Faserlaser, Tafeln bis 3000 × 1500 mm, Stahl bis 20 mm, Aluminium bis 10 mm. Angebot in 1–2 Arbeitstagen.',
        serviceType: 'Laserschneiden von Blech',
        eyebrow: 'Leistungen · Laserschneiden',
        h1: 'Laserschneiden von Blech in Polen',
        lead: 'Wir schneiden Baustahl, Edelstahl, säurebeständigen Stahl und Aluminium auf einer Mazak-Anlage mit 4-kW-Faserlaser. Vom einzelnen Prototyp bis zur Serie — aus Material aus dem eigenen Lager und mit Angebot in 1–2 Arbeitstagen.',
        imgAlt: 'Laserschneidanlage beim Schneiden von Stahlblech',
        machineNames: ['NEXUS OPTIPLEX 2D'],
        specsTitle: 'Leistungsdaten Laserschneiden',
        sections: [
          {
            title: 'Laserzuschnitte vom Prototyp bis zur Serie',
            paragraphs: [
              'Laserschneiden ist der erste Schritt der meisten Aufträge, die wir für Maschinenbauer, Automatisierungsintegratoren und Unternehmen mit eigenen Produkten fertigen. Wir schneiden Flachteile und Abwicklungen, die anschließend gekantet, geschweißt, CNC-bearbeitet oder montiert werden — bei uns oder bei Ihnen.',
              'Es gibt keine Mindestbestellmenge. Ein einzelner Prototyp läuft auf derselben Maschine, mit demselben Programm und derselben Qualitätskontrolle wie die Serie, sodass der Übergang in die Serienfertigung reibungslos gelingt.',
            ],
          },
          {
            title: 'Welche Werkstoffe wir lasern',
            paragraphs: [
              'Wir halten mehr als 50 Blechsorten auf Lager. Das Laserschneiden startet daher meist ohne Wartezeit auf Material — die häufigste Ursache für Verzögerungen in der Lohnfertigung entfällt. Auf Wunsch schneiden wir auch beigestelltes Material.',
            ],
            bullets: [
              'Baustahl bis 20 mm',
              'Edelstahl und säurebeständiger Stahl bis 20 mm',
              'Aluminium bis 10 mm',
              'Buntmetalle: Messing und Kupfer',
            ],
          },
          {
            title: 'Laserschneiden als Teil der gesamten Fertigung',
            paragraphs: [
              'Die Zuschnitte müssen nicht zum nächsten Lieferanten. Im selben Werk kanten wir sie auf einer servoelektrischen Safan-Abkantpresse (bis 3000 mm, 160 t), schweißen sie manuell (MIG/MAG und WIG) oder mit einem OTC-Daihen-Roboter, bearbeiten sie auf CNC-Zentren und montieren sie zu fertigen Baugruppen.',
              'Auch die Technologie übernehmen wir: fertigungsgerechte Dokumentation, Blechabwicklungen und CAM-Programme. Kein 3D-Modell? Eine Skizze oder ein Musterteil genügt — wir helfen, die Dokumentation zu vervollständigen.',
            ],
          },
          {
            title: 'Qualität und Dokumentation',
            paragraphs: [
              'Wir arbeiten mit einem Qualitätsmanagementsystem nach ISO 9001:2015, zertifiziert seit 2015. Material wird beim Wareneingang geprüft, Teile während der Fertigung und vor dem Versand. Vereinbarte Qualitätsdokumentation und Materialzeugnisse liefern wir auf Wunsch mit.',
            ],
          },
          {
            title: 'Ihr Fertigungspartner für Laserzuschnitte in Polen',
            paragraphs: [
              'Unser Werk befindet sich in Łódź (ul. Pomorska 555) in Zentralpolen. Hinter dem Unternehmen stehen mehr als 30 Jahre Erfahrung in der Metallbearbeitung und über 3,5 Millionen gefertigte Teile. Wir beliefern Kunden in Polen und ganz Europa, auch in Deutschland und der Schweiz, mit deutschsprachigem Ansprechpartner — unter anderem aus Maschinen- und Anlagenbau, Automatisierung und Robotik, Lebensmittelindustrie, Energie, Transport und Logistik, Bauwesen sowie Metallmöbelbau.',
            ],
          },
        ],
        processTitle: 'So läuft ein Auftrag zum Laserschneiden ab',
        process: [
          { title: 'Unterlagen senden', desc: '2D-Zeichnung oder 3D-Modell (STEP, STP, IGES, IGS, DXF, DWG, PDF), Werkstoff und Blechdicke, Stückzahl und Wunschtermin.' },
          { title: 'Angebot in 1–2 Arbeitstagen', desc: 'Wir prüfen die Machbarkeit und senden ein Angebot mit bestätigtem Liefertermin.' },
          { title: 'Technologie', desc: 'Wir erstellen das CAM-Programm und die Schachtelung auf der Tafel, bei Bedarf auch die Blechabwicklungen.' },
          { title: 'Schneiden und weitere Bearbeitung', desc: 'Wir lasern und — wenn der Auftrag es erfordert — kanten, schweißen, bearbeiten CNC und montieren.' },
          { title: 'Prüfung und Versand', desc: 'Endprüfung, Dokumentation auf Wunsch und Lieferung zum vereinbarten Termin.' },
        ],
        faqTitle: 'Laserschneiden — Fragen und Antworten',
        faq: [
          { q: 'Bis zu welcher Blechdicke schneiden Sie mit dem Laser?', a: 'Baustahl sowie Edelstahl und säurebeständigen Stahl bis 20 mm, Aluminium bis 10 mm. Außerdem schneiden wir Messing und Kupfer. Das maximale Tafelformat beträgt 3000 × 1500 mm.' },
          { q: 'Schneiden Sie auch Einzelteile?', a: 'Ja. Es gibt keine Mindestbestellmenge — wir fertigen Prototypen und Einzelteile ebenso wie große Serien.' },
          { q: 'Schneiden Sie auch beigestelltes Material?', a: 'Ja. Wir schneiden aus unserem Lager (mehr als 50 Blechsorten) oder aus Material, das Sie beistellen — geben Sie es einfach in Ihrer Anfrage an.' },
          { q: 'In welchen Formaten kann ich Dateien senden?', a: 'STEP, STP, IGES, IGS, DXF, DWG oder PDF. Kein 3D-Modell? Senden Sie eine Skizze oder ein Muster — wir helfen bei der Dokumentation.' },
          { q: 'Wie lange dauert ein Angebot für Laserschneiden?', a: 'Das Angebot erhalten Sie in der Regel innerhalb von 1–2 Arbeitstagen. Die Lieferzeit hängt vom Teil und der Maschinenauslastung ab und wird im Angebot bestätigt.' },
          { q: 'Können Sie die Teile nach dem Schneiden auch kanten und schweißen?', a: 'Ja. Wir kanten, schweißen (manuell und robotergestützt), bearbeiten CNC und montieren in einem Werk — das ganze Teil oder die Baugruppe kommt von einem Lieferanten.' },
        ],
        cta: {
          title: 'Sie benötigen Laserzuschnitte?',
          text: 'Senden Sie eine Zeichnung oder ein Modell — Ihr Angebot erhalten Sie innerhalb von 1–2 Arbeitstagen.',
          button: 'Angebot anfordern',
        },
      },
    },
  },
};

export function t(locale: Locale): Dict {
  return ui[locale];
}
