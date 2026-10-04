// All CV content lives here. Wrap text in **double asterisks** to make it bold.

export const header = {
  name: 'Sayed Musawer Hashimi',
  titles: ['Computer Scientist', 'Software Engineer', 'Researcher'],
  phone: '+93730520798',
  email: 'musawerhashimi09@gmail.com',
  linkedin: 'linkedin.com/in/musawer-hashimi',
  github: 'github.com/musawerhashimi',
  location: 'Kabul, Afghanistan',
}

export const summary =
  'Computer Scientist, Software Engineer, and University Lecturer with a Bachelor’s degree in Computer Science and a strong foundation in algorithms, software systems, artificial intelligence, and data-driven computing. Currently teaching Computer Science courses including programming, data structures and algorithms, web and mobile development, and ICPC training. Two-time ICPC Asia-Kabul Regional medalist, placing 3rd in 2023 and 2nd in 2024. Research interests center on Artificial Intelligence and Machine Learning, digital infrastructure governance, network resource optimization, data protection, and resilient digital public services. Experienced in both academic research and the development of full-stack, database-driven systems.'

export type Experience = {
  role: string
  company: string
  date: string
  location: string
  link?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'University Lecturer',
    company: 'Salam University',
    date: '03/2026 - Present',
    location: 'Kabul, Afghanistan',
    link: 'https://salam.edu.af/',
    bullets: [
      'Delivered undergraduate courses in Python, Web Programming, and Mobile Application Development.',
      'Designed practical programming assignments and projects to strengthen students’ hands-on development skills.',
      'Guided students in software development projects, debugging, and problem-solving.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Hadafe Bartar Technology Services Company',
    date: '01/2024 - Present',
    location: 'Kabul, Afghanistan',
    link: 'https://totargetsoft.com',
    bullets: [
      'Built and deployed full-stack web applications using React and Django',
      'Developed REST APIs and optimized database performance',
      'Implemented role-based authentication and secure systems',
      'Designed responsive UI with modern frontend tools',
      'Collaborated with team to deliver projects on time',
      'Improved system performance and reduced bugs',
    ],
  },
  {
    role: 'Web & Software Development Lecturer',
    company: 'Institute of Top Target Technology',
    date: '11/2024 - 07/2026',
    location: 'Kabul, Afghanistan',
    link: 'https://toptargettechnology.com/',
    bullets: [
      'Delivered training in HTML, CSS, JS, TS, React, Python, Dart, and Flutter',
      'Designed practical projects to improve students’ coding skills',
      'Mentored 50+ students in web and software development',
      'Prepared course materials and hands-on coding exercises',
    ],
  },
]

export const certifications = [
  { title: 'TOEFL iBT — 110/120', sub: 'ETS (Educational Testing Service) · March 2026' },
  { title: 'JavaScript Algorithms & Data Structures', sub: 'freeCodeCamp' },
  { title: 'Responsive Web Design', sub: 'freeCodeCamp' },
  { title: 'What Is Generative AI', sub: 'LinkedIn Learning' },
]

export const languages = [
  { name: 'Dari', level: 'Native', dots: 5 },
  { name: 'Pashto', level: 'Advanced', dots: 4 },
  { name: 'English', level: 'Proficient', dots: 4 },
]

export const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Kabul Polytechnic University',
    date: '04/2021 - 09/2025',
    location: 'Kabul, Afghanistan',
    gpa: { value: '3.54', max: '4.00' },
    bullets: [
      'Graduated with top-tier class ranking',
      'Mastered cutting-edge tech & coding',
      'Achieved academic excellence & awards',
    ],
  },
  {
    degree: 'High School Diploma',
    school: 'Esteqlal High School',
    date: '01/2016 - 01/2019',
    location: 'Kabul, Afghanistan',
    bullets: ['Graduated with High Honors in High School', 'Proven Record of Academic Success'],
  },
]

export const skills = [
  { group: 'Programming', items: ['JavaScript', 'Dart', 'TypeScript', 'Python', 'Algorithms', 'Data Structures'] },
  {
    group: 'Frontend Development',
    items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React', 'Zustand', 'React Query', 'Flutter'],
  },
  { group: 'Backend & Databases', items: ['Django', 'RESTFULL API', 'SQLite', 'PostgreSQL'] },
  { group: 'Tools & Platforms', items: ['GitHub', 'Docker', 'Git'] },
  {
    group: 'Machine Learning & AI',
    items: ['ML', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Probability', 'Calculus'],
  },
]

export const awards = [
  { title: 'Invited Participant, ICPC Asia West Continent Final', sub: 'Topi, Pakistan (2024)' },
  { title: 'ICPC Asia Kabul Regional Contest, 2nd Place', sub: '2024' },
  { title: 'ICPC Asia Kabul Regional Contest, 3rd Place', sub: '2023' },
]

export type Project = {
  title: string
  date: string
  link: string
  description: string
  bullets: string[]
}

export const projects: Project[] = [
  {
    title: 'Visa Registration & Management System',
    date: '10/2026',
    link: 'https://ausbildungcampus.org/',
    description:
      'Developed a web-based platform integrating a public website, customer portal, and internal MIS for managing visa applications and customer services.',
    bullets: [
      'Implemented online customer registration, visa application and document management, and real-time application tracking and notifications.',
      'Built email communication with attachments and a CMS for managing public website content.',
      'Developed cash payment and receipt recording, user management, and operational reporting modules.',
    ],
  },
  {
    title: 'Conflict-Affected Legal Scholars Network (CALSN) – Academic Networking Platform',
    date: '05/2026 - 08/2026',
    link: 'https://www.calsnetwork.org/',
    description:
      'Developed and launched a bilingual international academic networking platform connecting legal scholars and researchers affected by armed conflict with academic institutions, researchers, and research opportunities.',
    bullets: [
      'Designed and developed the platform to support scholar profiles, academic networking, research collaboration, publications, and institutional engagement.',
      'Built a scalable web platform using Django, Django REST Framework, PostgreSQL, ReactJS, Tailwind CSS, and JavaScript.',
      'Implemented content management, dynamic academic profiles, responsive UI, and structured data management to support the network’s international academic activities.',
      'Deployed and configured the platform for production, including domain, hosting, database, API, security, and frontend/backend integration.',
    ],
  },
  {
    title: 'Sultanzoi Private High School – Public Website & MIS System',
    date: '11/2025 - 04/2026',
    link: 'https://www.sultanzoi-phs-edu.com/',
    description:
      'Developed a bilingual public website and Management Information System (MIS) for Sultanzoi Private High School, supporting student management, attendance, grades, finance, and reporting.',
    bullets: [
      'Developed RESTful APIs and role-based access control for teachers, administrators, and staff.',
      'Implemented student management, attendance tracking, grading, financial management, and reporting modules.',
      'Integrated WhatsApp API notifications and fingerprint-based authentication.',
      'Built a scalable and responsive platform using Django, Django REST Framework, PostgreSQL, ReactJS, and Tailwind CSS.',
    ],
  },
  {
    title: 'BartarBox – Accounting, Management & ERP System',
    date: '01/2025 - 03/2026',
    link: 'https://www.bartarbox.com/',
    description:
      'Developed a full-stack bilingual SaaS and ERP platform for accounting and business management, featuring real-time reporting, multi-currency support, and role-based access control.',
    bullets: [
      'Developed accounting, financial management, and real-time reporting modules.',
      'Implemented multi-currency support and bilingual operations in English, Dari, and Pashto.',
      'Built secure role-based access control and a scalable architecture using Django REST Framework, PostgreSQL, ReactJS, Tailwind CSS, Zustand, React Query, and Docker.',
    ],
  },
  {
    title: 'Diabetes Screening System',
    date: '10/2024',
    link: 'https://github.com/musawerhashimi/Diabetes-Prediction-Using-SVM',
    description:
      'Developed a bilingual (English/Dari) Django-based diabetes screening application using a **Support Vector Machine (SVM)** trained on the Pima Indians Diabetes Dataset. The system accepts eight clinical measurements, generates an immediate screening result, stores patient test records, and provides printable PDF reports.',
    bullets: [
      'Implemented an end-to-end machine learning screening system with **77.27% held-out test accuracy**, bilingual RTL support, persistent patient records, responsive interface, and PDF report generation. The project demonstrated the practical integration of **machine learning, web development, data management, and clinical screening workflows**.',
    ],
  },
]

export const publications = [
  {
    title:
      'Artificial Intelligence for Digital Infrastructure Governance: Network Resource Optimization and Resilience of Digital Public Services',
    venue: 'Manuscript in Preparation',
    authors: 'Sayed Musawer Hashimi, First Author',
    date: '2026',
    status: 'Recently Submitted',
    description:
      'Investigates the application of artificial intelligence to digital infrastructure governance, focusing on network resource optimization, infrastructure resilience, and the reliability of digital public services.',
  },
  {
    title:
      'Investigating Data Protection Practices in Web-Based Educational Services: A Case Study of Private Institutions in Kabul.',
    venue: 'Universitas Riau, Indonesia/Jurnal PAJAR (Pendidikan dan Pengajaran)',
    authors: 'Sayed Musawer Hashimi, Co-author',
    date: '2026',
    status: 'Accepted for Publication.',
    description:
      'A study of data protection and privacy practices in web-based educational services, focusing on private institutions in Kabul.',
  },
]

export const references = [
  { name: 'Prof. Salim Ahmadzai', email: 'cs.dean@salam.edu.af' },
  { name: 'Asst. Prof. Abdul Awal Quraishi', email: 'quraishi@kpu.edu.af' },
  { name: 'Asst. Prof. Sayed Shafiullah Sadat', email: 'S.s.sadat@kpu.edu.af' },
]
