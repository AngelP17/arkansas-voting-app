import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Menu, MessageCircle, Home, BookOpen, Phone, Info, HelpCircle, MapPin, Calendar, Clock, FileText, Users, Award, CheckCircle, ArrowRight, ExternalLink, Sun, Moon, Languages } from 'lucide-react';

// Import all Card Components
import {
  BasicInfoCard,
  CTACard,
  StatCard,
  FeatureCard,
  ResourceCard,
  IssueSolutionCard,
  TimelineCard,
  FAQCard,
  TestimonialCard,
  TeamMemberCard,
  ProgressCard,
  CountyInfoCard,
  AnimatedStatCard,
  AnimatedPieChart,
  AnimatedBarChart
} from './CardComponents';

// Arkansas color palette
const ARKANSAS_COLORS = {
  light: {
    primary: 'bg-blue-700',
    accent: 'bg-red-600',
    nav: 'bg-white',
    text: 'text-blue-700',
    card: 'bg-white',
    border: 'border-blue-700',
    button: 'bg-blue-600 text-white',
    buttonAlt: 'bg-red-600 text-white',
    background: 'bg-gray-50',
  },
  dark: {
    primary: 'bg-blue-900',
    accent: 'bg-red-800',
    nav: 'bg-blue-950',
    text: 'text-white',
    card: 'bg-blue-950',
    border: 'border-blue-400',
    button: 'bg-blue-800 text-white',
    buttonAlt: 'bg-red-800 text-white',
    background: 'bg-blue-950',
  }
};

// Simple translation object
const translations = {
  en: {
    home: 'Home',
    resources: 'Resources',
    contact: 'Contact Us',
    about: 'About',
    improvingVoting: 'Improving Voting in Arkansas',
    workingTogether: 'Working together for accessible, secure, and fair elections',
    registerToVote: 'Register to Vote',
    checkRegistration: 'Check your registration status or register to vote in Arkansas.',
    registerNow: 'Register Now',
    findPolling: 'Find Your Polling Place',
    findLocation: 'Locate where to vote based on your registered address.',
    findLocationBtn: 'Find Location',
    electionReminders: 'Election Reminders',
    getAlerts: 'Set up notifications for upcoming election dates.',
    getAlertsBtn: 'Get Alerts',
    challenges: 'Current Voting Challenges in Arkansas',
    voterID: 'Voter ID Requirements',
    voterIDChallenge: 'Arkansas has strict photo ID requirements that can create barriers for certain voters.',
    voterIDSolution: "We're working to ensure all eligible voters can easily obtain acceptable ID and promoting awareness of the provisional ballot option for those without ID.",
    ruralAccess: 'Rural Voting Access',
    ruralChallenge: 'Many rural communities have limited polling locations and transportation options.',
    ruralSolution: 'We advocate for more polling places in underserved areas and support expanded early voting and vote-by-mail options to increase accessibility.',
    statistics: 'Arkansas Voting Statistics',
    counties: 'Counties in Arkansas',
    earlyVoting: 'Early Voting Period',
    registrationDeadline: 'Registration Deadline',
    joinEffort: 'Join Our Effort',
    bePart: 'Be part of the solution to improve voting in Arkansas',
    getInvolved: 'Get Involved',
    votingResources: 'Voting Resources',
    voterGuide: 'Voter Registration Guide',
    voterGuideDesc: 'Complete guide to registering to vote in Arkansas, including eligibility requirements and deadlines.',
    viewGuide: 'View Registration Guide',
    voterIDInfo: 'Voter ID Information',
    voterIDInfoDesc: 'Learn what forms of identification are required to vote in Arkansas.',
    voterIDReq: 'Voter ID Requirements',
    importantDates: 'Important Election Dates',
    registrationDeadlineEvent: 'Voter Registration Deadline',
    registrationDeadlineDesc: 'Last day to register to vote for the November 5 general election.',
    earlyVotingBegins: 'Early Voting Begins',
    earlyVotingBeginsDesc: 'First day of early voting for the November 5 general election.',
    officialResources: 'Official Resources',
    arkansasSOS: 'Arkansas Secretary of State - Elections Division',
    sosDesc: 'Official state resource for all election information',
    arkansasSBEC: 'Arkansas State Board of Election Commissioners',
    sbecDesc: 'Oversees election procedures and training',
    faqs: 'Frequently Asked Questions',
    faq1q: 'How do I register to vote in Arkansas?',
    faq1a: "You can register to vote in Arkansas online through the Secretary of State's website, by mail using a voter registration application, or in person at your county clerk's office. You must register at least 30 days before an election to be eligible to vote in that election.",
    faq2q: 'What ID do I need to vote in Arkansas?',
    faq2a: 'Arkansas requires photo identification to vote. Acceptable forms include an Arkansas driver\'s license, passport, military ID, student ID from an Arkansas accredited school, or public assistance ID with a photo. If you don\'t have ID, you can cast a provisional ballot.',
    aboutInitiative: 'About Our Initiative',
    ourMission: 'Our Mission',
    missionDesc: 'We are dedicated to improving the voting process in Arkansas by advocating for policies that make voting more accessible, secure, and fair for all eligible citizens. We work to identify and address systemic barriers to voting while promoting civic engagement and voter education.',
    ourImpact: 'Our Impact',
    helped: 'Helped 10,000+ Arkansans register to vote in 2024',
    workshops: 'Conducted 75 voter education workshops across all Arkansas counties',
    trained: 'Trained 500+ volunteer poll workers and election observers',
    getInvolvedTitle: 'Get Involved',
    getInvolvedDesc: 'There are many ways you can help improve voting in Arkansas:',
    volunteer: 'Volunteer as a poll worker or election observer',
    ambassador: 'Become a voter education ambassador in your community',
    contactReps: 'Contact your representatives about voting rights legislation',
    ourTeam: 'Our Team',
    teamDesc: 'Our diverse team includes election experts, community organizers, data analysts, and dedicated volunteers from across Arkansas who are committed to protecting and expanding voting rights.',
    contactUs: 'Contact Us',
    sendMsg: 'Send Us a Message',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    selectSubject: 'Select a subject',
    registrationQ: 'Voter Registration Question',
    idQ: 'Voter ID Question',
    pollingQ: 'Polling Place Question',
    volunteerQ: 'Volunteer Information',
    other: 'Other',
    message: 'Message',
    sendMessage: 'Send Message',
    ourOffice: 'Our Office',
    phone: 'Phone',
    hours: 'Hours',
    countyOffices: 'County Election Offices',
    needLocal: 'Need local assistance? Contact your county clerk\'s office:',
    findClerk: 'Find Your County Clerk',
    countyInfo: 'Sample County Information',
    registrationDeadlineLabel: 'Registration Deadline',
    earlyVotingStarts: 'Early Voting Starts',
    pollingLocations: 'Polling Locations',
    countyClerk: 'County Clerk',
    dark: 'Dark',
    light: 'Light',
    translate: 'Translate',
    english: 'English',
    spanish: 'Español',
    toggleDark: 'Toggle dark mode',
    toggleLang: 'Toggle language',
  },
  es: {
    home: 'Inicio',
    resources: 'Recursos',
    contact: 'Contacto',
    about: 'Acerca de',
    improvingVoting: 'Mejorando la votación en Arkansas',
    workingTogether: 'Trabajando juntos por elecciones accesibles, seguras y justas',
    registerToVote: 'Registrarse para votar',
    checkRegistration: 'Verifique su estado de registro o regístrese para votar en Arkansas.',
    registerNow: 'Regístrate ahora',
    findPolling: 'Encuentra tu lugar de votación',
    findLocation: 'Ubique dónde votar según su dirección registrada.',
    findLocationBtn: 'Encontrar ubicación',
    electionReminders: 'Recordatorios de elecciones',
    getAlerts: 'Configure notificaciones para las próximas fechas de elecciones.',
    getAlertsBtn: 'Recibir alertas',
    challenges: 'Desafíos actuales de votación en Arkansas',
    voterID: 'Requisitos de identificación de votante',
    voterIDChallenge: 'Arkansas tiene requisitos estrictos de identificación con foto que pueden crear barreras para ciertos votantes.',
    voterIDSolution: 'Estamos trabajando para garantizar que todos los votantes elegibles puedan obtener una identificación aceptable y promoviendo la opción de boleta provisional para quienes no tengan identificación.',
    ruralAccess: 'Acceso rural a la votación',
    ruralChallenge: 'Muchas comunidades rurales tienen ubicaciones de votación y opciones de transporte limitadas.',
    ruralSolution: 'Abogamos por más lugares de votación en áreas desatendidas y apoyamos la votación anticipada y por correo para aumentar la accesibilidad.',
    statistics: 'Estadísticas de votación de Arkansas',
    counties: 'Condados en Arkansas',
    earlyVoting: 'Período de votación anticipada',
    registrationDeadline: 'Fecha límite de registro',
    joinEffort: 'Únete a nuestro esfuerzo',
    bePart: 'Sé parte de la solución para mejorar la votación en Arkansas',
    getInvolved: 'Involúcrate',
    votingResources: 'Recursos de votación',
    voterGuide: 'Guía de registro de votantes',
    voterGuideDesc: 'Guía completa para registrarse para votar en Arkansas, incluidos los requisitos de elegibilidad y fechas límite.',
    viewGuide: 'Ver guía de registro',
    voterIDInfo: 'Información de identificación de votante',
    voterIDInfoDesc: 'Aprenda qué formas de identificación se requieren para votar en Arkansas.',
    voterIDReq: 'Requisitos de identificación de votante',
    importantDates: 'Fechas importantes de elecciones',
    registrationDeadlineEvent: 'Fecha límite de registro de votantes',
    registrationDeadlineDesc: 'Último día para registrarse para votar en las elecciones generales del 5 de noviembre.',
    earlyVotingBegins: 'Comienza la votación anticipada',
    earlyVotingBeginsDesc: 'Primer día de votación anticipada para las elecciones generales del 5 de noviembre.',
    officialResources: 'Recursos oficiales',
    arkansasSOS: 'Secretario de Estado de Arkansas - División de Elecciones',
    sosDesc: 'Recurso estatal oficial para toda la información electoral',
    arkansasSBEC: 'Junta Estatal de Comisionados Electorales de Arkansas',
    sbecDesc: 'Supervisa los procedimientos y la capacitación electoral',
    faqs: 'Preguntas frecuentes',
    faq1q: '¿Cómo me registro para votar en Arkansas?',
    faq1a: 'Puede registrarse para votar en Arkansas en línea a través del sitio web del Secretario de Estado, por correo usando una solicitud de registro de votante o en persona en la oficina de su secretario del condado. Debe registrarse al menos 30 días antes de una elección para ser elegible para votar en esa elección.',
    faq2q: '¿Qué identificación necesito para votar en Arkansas?',
    faq2a: 'Arkansas requiere identificación con foto para votar. Las formas aceptables incluyen una licencia de conducir de Arkansas, pasaporte, identificación militar, identificación de estudiante de una escuela acreditada de Arkansas o identificación de asistencia pública con foto. Si no tiene identificación, puede emitir una boleta provisional.',
    aboutInitiative: 'Sobre nuestra iniciativa',
    ourMission: 'Nuestra misión',
    missionDesc: 'Estamos dedicados a mejorar el proceso de votación en Arkansas abogando por políticas que hagan que votar sea más accesible, seguro y justo para todos los ciudadanos elegibles. Trabajamos para identificar y abordar las barreras sistémicas a la votación mientras promovemos la participación cívica y la educación de los votantes.',
    ourImpact: 'Nuestro impacto',
    helped: 'Ayudamos a más de 10,000 habitantes de Arkansas a registrarse para votar en 2024',
    workshops: 'Realizamos 75 talleres de educación para votantes en todos los condados de Arkansas',
    trained: 'Capacitamos a más de 500 voluntarios como trabajadores electorales y observadores',
    getInvolvedTitle: 'Involúcrate',
    getInvolvedDesc: 'Hay muchas formas en que puedes ayudar a mejorar la votación en Arkansas:',
    volunteer: 'Sé voluntario como trabajador electoral u observador',
    ambassador: 'Conviértete en embajador de educación para votantes en tu comunidad',
    contactReps: 'Contacta a tus representantes sobre legislación de derechos de voto',
    ourTeam: 'Nuestro equipo',
    teamDesc: 'Nuestro diverso equipo incluye expertos electorales, organizadores comunitarios, analistas de datos y voluntarios dedicados de todo Arkansas comprometidos con la protección y expansión de los derechos de voto.',
    contactUs: 'Contáctanos',
    sendMsg: 'Envíanos un mensaje',
    name: 'Nombre',
    email: 'Correo electrónico',
    subject: 'Asunto',
    selectSubject: 'Selecciona un asunto',
    registrationQ: 'Pregunta sobre registro de votantes',
    idQ: 'Pregunta sobre identificación de votante',
    pollingQ: 'Pregunta sobre lugar de votación',
    volunteerQ: 'Información de voluntariado',
    other: 'Otro',
    message: 'Mensaje',
    sendMessage: 'Enviar mensaje',
    ourOffice: 'Nuestra oficina',
    phone: 'Teléfono',
    hours: 'Horario',
    countyOffices: 'Oficinas electorales del condado',
    needLocal: '¿Necesitas ayuda local? Contacta la oficina de tu secretario del condado:',
    findClerk: 'Encuentra tu secretario del condado',
    countyInfo: 'Información de muestra del condado',
    registrationDeadlineLabel: 'Fecha límite de registro',
    earlyVotingStarts: 'Comienza la votación anticipada',
    pollingLocations: 'Lugares de votación',
    countyClerk: 'Secretario del condado',
    dark: 'Oscuro',
    light: 'Claro',
    translate: 'Traducir',
    english: 'Inglés',
    spanish: 'Español',
    toggleDark: 'Cambiar modo oscuro',
    toggleLang: 'Cambiar idioma',
  }
};

const ArkansasVotingApp = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "Hi there! I'm VoteBot. How can I help you with voting in Arkansas today?" }
  ]);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('arkansasDarkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [language, setLanguage] = useState(() => localStorage.getItem('arkansasLang') || 'en');

  // Set dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('arkansasDarkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('arkansasLang', language);
  }, [language]);

  const t = (key) => translations[language][key] || key;

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setChatMessages([...chatMessages, { sender: 'user', text: message }]);
    setTimeout(() => {
      let botResponse = "I'm sorry, I don't have information about that specific topic. Would you like to check our resources section?";
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes('register') || lowerMsg.includes('registration')) {
        botResponse = "In Arkansas, you can register to vote online, by mail, or in person at your county clerk's office. You need to be registered at least 30 days before an election. Would you like me to direct you to the official registration page?";
      } else if (lowerMsg.includes('id') || lowerMsg.includes('identification')) {
        botResponse = "Arkansas requires photo ID to vote. Acceptable forms include Arkansas driver's license, passport, military ID, student ID from Arkansas accredited school, or public assistance ID. If you don't have ID, you can cast a provisional ballot.";
      } else if (lowerMsg.includes('early voting') || lowerMsg.includes('early')) {
        botResponse = "Arkansas offers early voting starting 15 days before Election Day for most elections. Hours typically run Monday-Friday 8am-6pm and Saturday 10am-4pm, but may vary by county. No reason is needed to vote early.";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
    setMessage('');
  };

  // Helper for transition classes
  const transition = 'transition-all-custom';

  // Collapsible section component
  const Collapsible = ({ title, children }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className={`my-6 border rounded-lg p-4 ${open ? 'bg-blue-50 dark:bg-blue-900' : 'bg-white dark:bg-blue-950'} transition-bg transition-all-custom`}>
        <button onClick={() => setOpen(o => !o)} className="font-bold text-blue-700 dark:text-white flex items-center mb-2">
          <span>{title}</span>
          <ChevronDown className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && <div className="mt-2 transition-all-custom">{children}</div>}
      </div>
    );
  };

  // HomeSection
  const HomeSection = () => {
    // Animated stats data
    const stats = [
      { number: 75, label: t('counties'), icon: <MapPin />, color: 'bg-blue-600' },
      { number: '15', label: t('earlyVoting'), icon: <Calendar />, color: 'bg-green-600' },
      { number: '30', label: t('registrationDeadline'), icon: <Clock />, color: 'bg-red-600' },
    ];
    // Pie chart sample data
    const turnoutData = [
      { name: '18-29', value: 18 },
      { name: '30-44', value: 25 },
      { name: '45-64', value: 32 },
      { name: '65+', value: 25 },
    ];
    const turnoutColors = ['#2563eb', '#dc2626', '#16a34a', '#f59e42'];
    // Bar chart sample data
    const regData = [
      { year: '2016', percent: 60 },
      { year: '2018', percent: 63 },
      { year: '2020', percent: 68 },
      { year: '2022', percent: 70 },
    ];
    const regColors = ['#2563eb'];
    return (
      <div className={`animate-fade-in ${transition}`}>
        {/* Logo and Header */}
        <div className={`flex flex-col items-center ${darkMode ? 'bg-blue-900' : 'bg-blue-700'} text-white p-6 rounded-lg shadow-lg mb-8 transition-bg transition-color ${transition}`}>
          <img src="/arkansas_voting_logo.png" alt="Arkansas Voting Initiative Logo" className="w-24 h-24 mb-2" />
          <h1 className="text-3xl font-bold mb-2">{t('improvingVoting')}</h1>
          <p className="text-xl mb-2">{t('workingTogether')}</p>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <CTACard title={t('registerToVote')} description={t('checkRegistration')} buttonText={t('registerNow')} icon={<CheckCircle />} primary={true} />
          <CTACard title={t('findPolling')} description={t('findLocation')} buttonText={t('findLocationBtn')} icon={<MapPin />} primary={false} />
          <CTACard title={t('electionReminders')} description={t('getAlerts')} buttonText={t('getAlertsBtn')} icon={<Calendar />} primary={true} />
        </div>
        {/* Challenges */}
        <div className={`bg-gray-100 dark:bg-blue-950 p-6 rounded-lg mb-8 transition-bg ${transition}`}>
          <h2 className="text-2xl font-bold mb-4">{t('challenges')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IssueSolutionCard title={t('voterID')} challenge={t('voterIDChallenge')} solution={t('voterIDSolution')} />
            <IssueSolutionCard title={t('ruralAccess')} challenge={t('ruralChallenge')} solution={t('ruralSolution')} />
          </div>
        </div>
        {/* Animated Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('statistics')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <AnimatedStatCard key={i} {...s} />
            ))}
          </div>
        </div>
        {/* Animated Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AnimatedPieChart data={turnoutData} colors={turnoutColors} label="Voter Turnout by Demographic" />
          <AnimatedBarChart data={regData} xKey="year" barKey="percent" colors={regColors} label="Registration Modernization Status" />
        </div>
        {/* Collapsible: Introduction/Thesis */}
        <Collapsible title="Introduction: The Imperative of Accessible and Secure Elections in Arkansas">
          <p className="text-gray-800 dark:text-gray-100 text-sm">The right to vote stands as the bedrock of democratic governance... (full intro and summary here, truncated for brevity)</p>
        </Collapsible>
      </div>
    );
  };

  // ResourcesSection
  const ResourcesSection = () => (
    <div className={`animate-fade-in ${transition}`}>
      <h1 className="text-3xl font-bold mb-6">Voting Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ResourceCard icon={<FileText />} title="Voter Registration Guide" description="Eligibility & deadlines." linkText="View Guide" linkUrl="#" />
        <ResourceCard icon={<HelpCircle />} title="Voter ID Information" description="Acceptable IDs overview." linkText="View ID Info" linkUrl="#" />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Election Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TimelineCard date="October 14, 2024" event="Registration Deadline" status="upcoming" description="Last day to register for the Nov 5 election." />
          <TimelineCard date="October 21, 2024" event="Early Voting Begins" status="upcoming" description="First day of early voting for the Nov 5 election." />
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8 transition-bg ${transition}">
        <h2 className="text-2xl font-bold mb-4">Official Resources</h2>
        <ul className="space-y-4">
          <li className="flex"><div className="mr-4 text-blue-600"><FileText size={24} /></div><div><a href="https://www.sos.arkansas.gov/elections/" className="font-bold hover:text-blue-600 transition duration-200">Arkansas Secretary of State – Elections Division</a></div></li>
          <li className="flex"><div className="mr-4 text-blue-600"><FileText size={24} /></div><div><a href="https://www.arkansas.gov/sbec/" className="font-bold hover:text-blue-600 transition duration-200">Arkansas State Board of Election Commissioners</a></div></li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <FAQCard question="How do I register to vote in Arkansas?" answer="You can register online, by mail, or in person at your county clerk's office. Register at least 30 days before an election." />
        <FAQCard question="What ID do I need to vote in Arkansas?" answer="Arkansas requires photo ID. Acceptable forms: driver's license, passport, military/student ID, or public assistance ID with photo." />
      </div>
      {/* Chart */}
      <div className="flex flex-col items-center mb-8">
        <img src="/registration_status.png" alt="Registration Modernization Status" className="w-full max-w-md rounded-lg shadow transition-all-custom" />
        <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">Registration Modernization Status</span>
      </div>
      {/* Collapsible: Pathways to Reform */}
      <Collapsible title="Pathways to Reform: Enhancing Voter Access and Election Integrity in Arkansas">
        <p className="text-gray-800 dark:text-gray-100 text-sm">(Insert full reform section here, truncated for brevity)</p>
      </Collapsible>
    </div>
  );

  // ContactSection
  const ContactSection = () => (
    <div className={`animate-fade-in ${transition}`}>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md transition-bg ${transition}">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label><input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" placeholder="Your name" /></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label><input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your email" /></div>
            <div><label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Subject</label><select id="subject" className="w-full px-4 py-2 border rounded-lg"><option value="">Select a subject</option><option value="registration">Voter Registration Question</option><option value="id">Voter ID Question</option><option value="polling">Polling Place Question</option><option value="volunteer">Volunteer Information</option><option value="other">Other</option></select></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label><textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg" placeholder="Your message"></textarea></div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </div>
        <div>
          <div className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md mb-6 transition-bg ${transition}">
            <h2 className="text-xl font-bold mb-4">Our Office</h2>
            <p className="mb-4">Little Rock, Arkansas</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> (501) 555-1234</p>
            <p className="mb-2"><span className="font-semibold">Email:</span> info@arvoterproject.org</p>
            <p><span className="font-semibold">Hours:</span> Monday-Friday, 9am-5pm CT</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-md transition-bg ${transition}">
            <h2 className="text-xl font-bold mb-4">County Election Offices</h2>
            <p className="mb-4">Need local assistance? Contact your county clerk's office:</p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mb-4">Find Your County Clerk</button>
            <p className="text-sm">Arkansas has 75 counties, each with its own election administration office that can help with specific local voting questions.</p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sample County Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CountyInfoCard county="Pulaski" registrationDeadline="October 14, 2024" earlyVotingStarts="October 21, 2024" pollingLocations="12 locations available" contactPhone="(501) 340-8336" />
          <CountyInfoCard county="Benton" registrationDeadline="October 14, 2024" earlyVotingStarts="October 21, 2024" pollingLocations="8 locations available" contactPhone="(479) 271-1013" />
        </div>
      </div>
    </div>
  );

  // AboutSection
  const AboutSection = () => {
    // Pie chart sample data
    const turnoutData = [
      { name: '18-29', value: 18 },
      { name: '30-44', value: 25 },
      { name: '45-64', value: 32 },
      { name: '65+', value: 25 },
    ];
    const turnoutColors = ['#2563eb', '#dc2626', '#16a34a', '#f59e42'];
    // Bar chart sample data
    const regData = [
      { year: '2016', percent: 60 },
      { year: '2018', percent: 63 },
      { year: '2020', percent: 68 },
      { year: '2022', percent: 70 },
    ];
    const regColors = ['#2563eb'];
    return (
      <div className={`animate-fade-in ${transition}`}>
        <div className="flex flex-col items-center mb-6">
          <img src="/arkansas_voting_logo.png" alt="Arkansas Voting Initiative Logo" className="w-24 h-24 mb-2" />
          <h1 className="text-3xl font-bold mb-2">{t('aboutInitiative')}</h1>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8 transition-bg ${transition}">
          <h2 className="text-2xl font-bold mb-4">{t('ourMission')}</h2>
          <p className="text-lg">{t('missionDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg transition-bg ${transition}">
            <h2 className="text-xl font-bold mb-4">{t('ourImpact')}</h2>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} /><span>{t('helped')}</span></li>
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} /><span>{t('workshops')}</span></li>
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} /><span>{t('trained')}</span></li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg transition-bg ${transition}">
            <h2 className="text-xl font-bold mb-4">{t('getInvolvedTitle')}</h2>
            <ul className="space-y-3">
              <li className="flex items-start"><Users className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={18} /><span>{t('volunteer')}</span></li>
              <li className="flex items-start"><Award className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={18} /><span>{t('ambassador')}</span></li>
              <li className="flex items-start"><MessageCircle className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={18} /><span>{t('contactReps')}</span></li>
            </ul>
          </div>
        </div>
        <div className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md transition-bg ${transition}">
          <h2 className="text-2xl font-bold mb-4">{t('ourTeam')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <TeamMemberCard name="Dr. Sarah Johnson" role="Executive Director" bio="15 yrs election admin expertise" />
            <TeamMemberCard name="Marcus Williams" role="Community Outreach Director" bio="Rural engagement" />
            <TeamMemberCard name="Elena Fuentes" role="Voting Rights Attorney" bio="Accessibility specialist" />
          </div>
        </div>
        {/* Animated Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <AnimatedPieChart data={turnoutData} colors={turnoutColors} label="Voter Turnout by Demographic" />
          <AnimatedBarChart data={regData} xKey="year" barKey="percent" colors={regColors} label="Registration Modernization Status" />
        </div>
        {/* Collapsible: Full Report */}
        <Collapsible title="Full Report: Navigating the Vote – Challenges and Pathways to Reform in Arkansas's Electoral System">
          <p className="text-gray-800 dark:text-gray-100 text-sm">(Insert full thesis/report here, truncated for brevity)</p>
        </Collapsible>
      </div>
    );
  };

  // Navigation component
  const Navigation = () => (
    <nav className={`shadow-md sticky top-0 z-10 ${darkMode ? 'bg-blue-950' : 'bg-white'} transition-bg transition-color ${transition}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className={`flex-shrink-0 font-bold text-xl ${darkMode ? 'text-blue-100' : 'text-blue-700'} transition-color ${transition}`}>Arkansas Vote Project</div>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink icon={<Home size={18} />} title={t('home')} section="home" current={currentSection} onClick={() => setCurrentSection('home')} />
            <NavLink icon={<BookOpen size={18} />} title={t('resources')} section="resources" current={currentSection} onClick={() => setCurrentSection('resources')} />
            <NavLink icon={<Phone size={18} />} title={t('contact')} section="contact" current={currentSection} onClick={() => setCurrentSection('contact')} />
            <NavLink icon={<Info size={18} />} title={t('about')} section="about" current={currentSection} onClick={() => setCurrentSection('about')} />
            {/* Dark/Light mode toggle */}
            <button
              aria-label={t('toggleDark')}
              onClick={() => setDarkMode((d) => !d)}
              className={`ml-2 p-2 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-bg transition-color ${transition}`}
            >
              {darkMode ? <Sun size={18} className="text-yellow-400 transition-color" /> : <Moon size={18} className="text-blue-700 transition-color" />}
            </button>
            {/* Language toggle */}
            <button
              aria-label={t('toggleLang')}
              onClick={() => setLanguage((l) => (l === 'en' ? 'es' : 'en'))}
              className={`ml-2 p-2 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-bg transition-color ${transition}`}
            >
              <Languages size={18} className="text-blue-700 dark:text-blue-100 transition-color" />
              <span className="ml-1 text-xs font-semibold transition-color">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-gray-600 dark:text-blue-100 hover:text-blue-600 focus:outline-none transition-color ${transition}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden bg-white dark:bg-blue-950 shadow-lg animate-slide-down transition-bg ${transition}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink title={t('home')} icon={<Home size={18} />} onClick={() => { setCurrentSection('home'); setIsMobileMenuOpen(false); }} />
            <MobileNavLink title={t('resources')} icon={<BookOpen size={18} />} onClick={() => { setCurrentSection('resources'); setIsMobileMenuOpen(false); }} />
            <MobileNavLink title={t('contact')} icon={<Phone size={18} />} onClick={() => { setCurrentSection('contact'); setIsMobileMenuOpen(false); }} />
            <MobileNavLink title={t('about')} icon={<Info size={18} />} onClick={() => { setCurrentSection('about'); setIsMobileMenuOpen(false); }} />
            <div className="flex space-x-2 mt-2">
              <button
                aria-label={t('toggleDark')}
                onClick={() => setDarkMode((d) => !d)}
                className={`p-2 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-bg transition-color ${transition}`}
              >
                {darkMode ? <Sun size={18} className="text-yellow-400 transition-color" /> : <Moon size={18} className="text-blue-700 transition-color" />}
              </button>
              <button
                aria-label={t('toggleLang')}
                onClick={() => setLanguage((l) => (l === 'en' ? 'es' : 'en'))}
                className={`p-2 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-bg transition-color ${transition}`}
              >
                <Languages size={18} className="text-blue-700 dark:text-blue-100 transition-color" />
                <span className="ml-1 text-xs font-semibold transition-color">{language === 'en' ? 'ES' : 'EN'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  const NavLink = ({ icon, title, section, current, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        current === section
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
      } transition duration-300`}
    >
      <span className="mr-2">{icon}</span>
      {title}
    </button>
  );

  const MobileNavLink = ({ icon, title, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    >
      <span className="mr-3">{icon}</span>
      {title}
    </button>
  );

  // Chat component
  const Chat = () => (
    <div className={`fixed bottom-4 right-4 z-20 transition-all duration-300 ${isChatOpen ? 'w-80 h-96' : 'w-16 h-16'}`}>
      {isChatOpen ? (
        <div className="bg-white dark:bg-blue-950 rounded-lg shadow-xl flex flex-col h-full border border-blue-200 dark:border-blue-800 animate-fade-in">
          <div className="bg-blue-700 dark:bg-blue-900 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <span className="font-medium">VoteBot Assistant</span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-blue-900">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`$ {
                  msg.sender === 'bot'
                    ? 'bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded-lg p-3 rounded-bl-none'
                    : 'bg-gray-100 dark:bg-blue-700 text-gray-900 dark:text-blue-100 rounded-lg p-3 ml-auto rounded-br-none'
                } max-w-[80%] ${msg.sender === 'user' ? 'ml-auto' : ''}`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="border-t border-blue-200 dark:border-blue-800 p-3 bg-white dark:bg-blue-950">
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 border border-blue-300 dark:border-blue-700 rounded-l-lg px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-blue-900 text-gray-900 dark:text-blue-100"
              />
              <button
                type="submit"
                className="bg-blue-700 dark:bg-blue-800 text-white px-4 py-2 rounded-r-lg hover:bg-blue-800 dark:hover:bg-blue-900 transition duration-300"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-full h-full bg-blue-700 dark:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 dark:hover:bg-blue-800 transition duration-300"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );

  // Apply transition classes to main containers
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-blue-950' : 'bg-gray-50'} transition-bg ${transition}`}>
      <Navigation />
      <main className={`max-w-6xl mx-auto px-4 py-8 transition-bg ${transition}`}>
        {currentSection === 'home' && <HomeSection />}
        {currentSection === 'resources' && <ResourcesSection />}
        {currentSection === 'contact' && <ContactSection />}
        {currentSection === 'about' && <AboutSection />}
      </main>
      <Chat />
    </div>
  );
};

export default ArkansasVotingApp; 