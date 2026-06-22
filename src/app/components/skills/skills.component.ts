import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  categories = ['Frontend', 'Ciberseguridad', 'Herramientas'];

  skills: Skill[] = [
    { name: 'Angular', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'HTML / CSS / SCSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'React', level: 65, category: 'Frontend' },
    { name: 'Análisis de Vulnerabilidades', level: 75, category: 'Ciberseguridad' },
    { name: 'Pentesting Web (OWASP)', level: 70, category: 'Ciberseguridad' },
    { name: 'Seguridad en APIs REST', level: 72, category: 'Ciberseguridad' },
    { name: 'Redes y Protocolos', level: 68, category: 'Ciberseguridad' },
    { name: 'Git / GitHub', level: 88, category: 'Herramientas' },
    { name: 'Figma / Diseño UI', level: 70, category: 'Herramientas' },
    { name: 'Docker (básico)', level: 55, category: 'Herramientas' },
  ];

  getByCategory(cat: string) {
    return this.skills.filter(s => s.category === cat);
  }
}
