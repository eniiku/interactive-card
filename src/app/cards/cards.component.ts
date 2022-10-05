import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  backOfCardImagePath: string;
  frontOfCardImagePath: string;

  constructor() {
    this.backOfCardImagePath = '/assets/images/bg-card-back.png';
    this.frontOfCardImagePath = '/assets/images/bg-card-front.png';
  }

  ngOnInit(): void {}
}
