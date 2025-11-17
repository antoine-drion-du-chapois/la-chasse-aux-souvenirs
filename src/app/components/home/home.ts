import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, NgxParticlesModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  currentIndex = 0;
  userAnswer = '';
  isCorrect = false;
  finished = false;
  indice = false;

  questions: any[] = [
    {
      question: "L'endroit où on s'est rencontrés pour la première fois",
      answer: 'réception',
    },
    {
      question: 'Le nom de la princesse dans le film de Miyazaki',
      answer: 'momonoké',
    },
    {
      question: 'Mon animal totem',
      answer: 'dik-dik',
    },
    {
      question: 'Le numéro de ma chambre',
      answer: '106',
    },
    {
      question: "Trouve le code caché dans l'ascenceur",
      answer: '2580',
    },
    {
      question: "Trouve l'animal caché dans la tv room",
      answer: 'kangourou',
    },
    {
      question: 'Le nom du magasin où on a pris un café dégue',
      answer: 'machi machi',
    },
    {
      question: 'Le nombre de machine à sous dans le magasin de gacha',
      answer: '99',
    },
    {
      question: 'Le highscore au jeux de basket toutes machines confondues',
      answer: '999',
    },
    {
      question:
        'Trouve le code dans le livre sur le realisteur connu pour sa symétrie',
      answer: 'XYZ123',
    },
    {
      question: 'Dernière question : le meilleur hostel du monde',
      answer: 'summerhouse',
    },
  ];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const savedIndex = localStorage.getItem('currentIndex');
    if (savedIndex !== null) {
      this.currentIndex = parseInt(savedIndex, 10);
    }
  }

  checkAnswer() {
    const current = this.questions[this.currentIndex];
    this.isCorrect =
      this.userAnswer.trim().toLowerCase() === current.answer.toLowerCase();

    if (this.isCorrect) {
      this.userAnswer = '';
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.isCorrect = false;
        this.indice = false;
        localStorage.setItem('currentIndex', this.currentIndex.toString());
      } else {
        this.finished = true;
        localStorage.removeItem('currentIndex');
        this.router.navigate(['congrats']);
      }
    }
  }

  showIndice() {
    this.indice = !this.indice;
  }
}
