import { Component, OnInit } from '@angular/core';
import type { Container, Engine } from '@tsparticles/engine';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { loadAll } from '@tsparticles/all';
import { particlesConfig } from '../../../assets/particles';

@Component({
  selector: 'app-congrats',
  imports: [NgxParticlesModule],
  templateUrl: './congrats.html',
  styleUrl: './congrats.scss',
})
export class Congrats implements OnInit {
  id = 'tsparticles';

  /* or the classic JavaScript object */
  particlesOptions = particlesConfig;

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: Engine) => {
      console.log(engine);
      await loadAll(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
