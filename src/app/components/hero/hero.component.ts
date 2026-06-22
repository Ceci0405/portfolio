import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService, GithubUser } from '../../services/github.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  user: GithubUser | null = null;

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.getUser().subscribe({
      next: (u) => this.user = u,
      error: () => {}
    });
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
