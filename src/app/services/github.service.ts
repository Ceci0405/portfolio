import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GithubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com';
  private username = 'Ceci0405';

  constructor(private http: HttpClient) {}

  getUser(): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.baseUrl}/users/${this.username}`);
  }

  getRepos(): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(
      `${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=20`
    );
  }
}
