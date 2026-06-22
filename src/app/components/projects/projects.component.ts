import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'webtickets',
      description: 'Aplicación web para la gestión y venta de tickets online. Interfaz intuitiva con flujo completo de compra.',
      url: 'https://github.com/Ceci0405/webtickets',
      language: 'Python (Flask) & Angular',
      topics: ['Interfaz', 'Jira', 'Full Stack']
    },
    {
      name: 'Formulario',
      description: 'Formulario web con validaciones, manejo de estados y buenas prácticas de UX en la captura de datos.',
      url: 'https://github.com/Ceci0405/Formulario',
      language: 'Node.js & BatchFile',
      topics: ['formulario', 'validación', 'Full Stack']
    },
    {
      name: 'ciberseguridad-proyecto-final',
      description: 'Proyecto final de análisis en ciberseguridad: identificación de vulnerabilidades y aplicación de medidas de protección.',
      url: 'https://github.com/Ceci0405/ciberseguridad-proyecto-final',
      language: 'Wazuh, ISO27001, OWASP',
      topics: ['ciberseguridad', 'pentesting', 'seguridad']
    }
  ];

  langColor(lang: string): string {
    const map: Record<string, string> = {
      TypeScript: '#3178c6', JavaScript: '#f7df1e',
      Python: '#3776ab', HTML: '#e34c26', CSS: '#563d7c',
      SCSS: '#c6538c', Java: '#b07219', 'C#': '#178600'
    };
    return map[lang] || 'var(--color-accent)';
  }
}
