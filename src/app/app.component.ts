// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { name: string; iconClass: string; color: string; }
interface Project { title: string; year: string; description: string; technologies: string[]; github: string | null; }
interface StackCategory { title: string; colorClass: string; items: string[]; }
interface Concept { title: string; details: string[]; }
interface Methodology { title: string; details: string[]; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuOpen = false;

  // === Skills (sección original "Tecnologías") ===
  backendSkills: Skill[] = [
    { name: 'Java (Spring Boot)', iconClass: 'devicon-spring-plain colored', color: '' },
    { name: 'C# (.NET)',         iconClass: 'devicon-dot-net-plain colored', color: '' },
    { name: 'APIs REST',         iconClass: 'si si-code', color: '' },
    { name: 'JWT',               iconClass: 'si si-auth0', color: '' },
    { name: 'POO / Patrones',    iconClass: 'si si-uml', color: '' }
  ];

  databaseSkills: Skill[] = [
    { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored', color: '' },
    { name: 'MySQL',      iconClass: 'devicon-mysql-plain colored', color: '' },
    { name: 'MongoDB',    iconClass: 'devicon-mongodb-plain colored', color: '' },
    { name: 'Redis',      iconClass: 'devicon-redis-plain colored', color: '' }
  ];

  frontendSkills: Skill[] = [
    { name: 'Angular',     iconClass: 'devicon-angular-plain colored', color: '' },
    { name: 'TypeScript',  iconClass: 'devicon-typescript-plain colored', color: '' },
    { name: 'JavaScript',  iconClass: 'devicon-javascript-plain colored', color: '' },
    { name: 'HTML5',       iconClass: 'devicon-html5-plain colored', color: '' },
    { name: 'CSS3',        iconClass: 'devicon-css3-plain colored', color: '' },
    { name: 'RxJS',        iconClass: 'si si-reactivex', color: '' },
    { name: 'Git/GitHub',  iconClass: 'devicon-github-original', color: '' }
  ];

  // === Habilidades Técnicas Clave ===
  stackCategories: StackCategory[] = [
    {
      title: 'Backend',
      colorClass: 'text-blue-400',
      items: [
        'C# (.NET Core) · Java (Spring Boot)',
      'POO avanzada (herencia, polimorfismo, encapsulamiento)',
      'Patrones: Repository · Unit of Work · Singleton · Factory · Strategy · Observer',
      'Arquitectura en capas (Controller, Service, Repository)',
      'RESTful APIs (CRUD · DTOs · validaciones · manejo de errores)',
      'JWT Authentication · Inyección de Dependencias',
      'Entity Framework Core / Hibernate (ORM)',
      'Testing y documentación con Postman y Swagger'
      ]
    },
    {
      title: 'Frontend',
      colorClass: 'text-purple-400',
      items: [
       'Angular 17+ · TypeScript · JavaScript (ES6+)',
      'HTML5 · CSS3 · Bootstrap',
      'Arquitectura SPA (Single Page Application)',
      'Componentes modulares y comunicación con @Input / @Output / EventEmitter',
      'RxJS (Observables · Suscripciones · Asincronía)',
      'Formularios reactivos · Validaciones personalizadas',
      'Ruteo con Angular Router',
      'Integración de APIs REST desde el frontend'
      ]
    },
    {
      title: 'Bases de Datos',
      colorClass: 'text-cyan-400',
      items: [
         'SQL Server · MySQL (modelo relacional)',
      'Consultas avanzadas · Subconsultas · Joins · Funciones agregadas',
      'Procedimientos almacenados · Triggers · Transacciones',
      'Entity Framework Core (ORM) · ADO.NET',
      'MongoDB (documental) · Redis (clave-valor)',
      'Neo4j (grafos · Cypher) · Cassandra (columnar)',
      'Optimización de consultas y diseño de índices'
      ]
    },
    {
      title: 'Herramientas',
      colorClass: 'text-emerald-400',
      items: [
         'Git / GitHub (ramas, PRs, merges, versionado colaborativo)',
    'Docker · Postman · Swagger',
    'Visual Studio · VS Code · IntelliJ IDEA · SSMS',
    'Linux Terminal · PowerShell',
    'Jira · Trello · Notion (gestión ágil de proyectos)'
      ]
    }
  ];

  // === Programación y Arquitectura ===
  concepts: Concept[] = [
    {
      title: 'POO',
      details: [
        'Dominio de clases, herencia, polimorfismo, encapsulamiento en C# y Java.'
      ]
    },
    {
      title: 'Acceso a Datos',
      details: [
        'Patrón Repository · ADO.NET (conectado/desconectado) · EF Core (ORM).'
      ]
    },
    {
      title: 'Asincronía & Web API',
      details: [
        'async/await (C#) y RxJS (Observables) · modelo Cliente-Servidor · ciclo de vida REST.'
      ]
    }
  ];

// === Metodologías y Gestión de Proyectos ===
methodologies: Methodology[] = [
  {
    title: 'Metodologías Ágiles',
    details: [
      'Scrum: roles, eventos y artefactos · Kanban.',
      'Historias de Usuario (INVEST / BDD).',
      'Uso de métricas (velocidad, lead time) y mejora continua.'
    ]
  },
  {
    title: 'Gestión de Proyectos',
    details: [
      'PMBOK: alcance, tiempos, costos y riesgos.',
      'herramientas ágiles: Taiga, Jira, GitHub Projects.',
      'Automatización y documentación (CI/CD, Wiki técnica).'
    ]
  },
  {
    title: 'Control de Versiones',
    details: [
      'Git/GitHub avanzado: ramas, merges y resolución de conflictos.',
      'Flujos de trabajo: GitFlow / Feature Branch / Pull Request.'
    ]
  }
];
  // === Proyectos ===
  projects: Project[] = [
    {
      title: 'TEG Digital (Táctica y Estrategia de la Guerra)',
      year: '2025',
      description: 'Estrategia por turnos con tablero mundial (SVG), objetivos, continentes y ejércitos. Backend con eventos/instantáneas, API REST y persistencia relacional + NoSQL.',
      technologies: ['Java', 'Spring Boot', 'SQL Server', 'MongoDB', 'Angular'],
      github: 'https://github.com/<!-- TODO: tu usuario -->/<!-- TODO: repo-teg -->'
    },
    {
      title: 'Gestor de Recetas (MEAN + Spring)',
      year: '2025',
      description: 'ABM de recetas, ingredientes y pasos, JWT y diseño responsivo. Integración Angular + Spring Boot + MongoDB.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MongoDB'],
      github: 'https://github.com/<!-- TODO: tu usuario -->/<!-- TODO: repo-recetas -->'
    },
    {
      title: 'Truco (JS + Tailwind)',
      year: '2024',
      description: 'Lógica de mazo y partidas, puntaje y rondas. UI web con Tailwind, endpoints mock.',
      technologies: ['JavaScript', 'Tailwind'],
      github: 'https://github.com/<!-- TODO: tu usuario -->/<!-- TODO: repo-truco -->'
    },
    {
      title: 'Battleship (Java consola)',
      year: '2024',
      description: 'Batalla Naval por consola en Java con Player/Board/Ship, validaciones y tests.',
      technologies: ['Java'],
      github: 'https://github.com/<!-- TODO: tu usuario -->/<!-- TODO: repo-battleship -->'
    },
    {
      title: 'Escoba de 15 (Java, Maven, JUnit)',
      year: '2024',
      description: 'Reglas, rondas y conteo, con TDD parcial y build Maven.',
      technologies: ['Java'],
      github: 'https://github.com/<!-- TODO: tu usuario -->/<!-- TODO: repo-escoba -->'
    }
  ];

  // === Habilidades Blandas ===
  softSkills: string[] = [
    'Análisis lógico y resolución de problemas (debug y performance).',
    'Aprendizaje continuo y curiosidad por nuevas tecnologías.',
    'Trabajo colaborativo con documentación clara y herramientas de equipo.',
    'Atención al detalle en validación de datos y pruebas de código.'
  ];

  // Acciones UI
  copy(text: string) {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
  }

  // Íconos por tecnología usados en chips de Proyectos
  getTechIcon(tech: string): { iconClass: string; color: string } {
    const iconMap: { [k: string]: { iconClass: string; color: string } } = {
      'Java':         { iconClass: 'devicon-java-plain colored', color: '' },
      'Spring Boot':  { iconClass: 'devicon-spring-plain colored', color: '' },
      'C#':           { iconClass: 'devicon-csharp-plain colored', color: '' },
      '.NET':         { iconClass: 'devicon-dot-net-plain colored', color: '' },
      'SQL Server':   { iconClass: 'devicon-microsoftsqlserver-plain colored', color: '' },
      'MySQL':        { iconClass: 'devicon-mysql-plain colored', color: '' },
      'MongoDB':      { iconClass: 'devicon-mongodb-plain colored', color: '' },
      'Angular':      { iconClass: 'devicon-angular-plain colored', color: '' },
      'TypeScript':   { iconClass: 'devicon-typescript-plain colored', color: '' },
      'JavaScript':   { iconClass: 'devicon-javascript-plain colored', color: '' },
      'HTML5':        { iconClass: 'devicon-html5-plain colored', color: '' },
      'CSS3':         { iconClass: 'devicon-css3-plain colored', color: '' },
      'Tailwind':     { iconClass: 'devicon-tailwindcss-plain colored', color: '' },
      'Redis':        { iconClass: 'devicon-redis-plain colored', color: '' },
      'Docker':       { iconClass: 'devicon-docker-plain colored', color: '' },
      'Swagger':      { iconClass: 'si si-swagger', color: '' },
      'Postman':      { iconClass: 'devicon-postman-plain colored', color: '' },
      'RxJS':         { iconClass: 'si si-reactivex', color: '' },
      'APIs REST':    { iconClass: 'si si-code', color: '' }
    };
    return iconMap[tech] || { iconClass: 'si si-code', color: '' };
  }
}
