import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: { img: string, title: string }[] = [
    { img: "'../../../assets/oands_page.jpg'", title: "O and S animation" },
    { img: "'../../../assets/simon_game.jpg'", title: "Simon Game" },
    { img: "'../../../assets/dice_game.jpg'", title: "Dice Game" },
    { img: "'../../../assets/simon_game.jpg'", title: "Drum Music Kit" },
  ]

  dots: number = 0;

  dotsArray: number[] = Array(this.dots);

  nCards: number = 3;

  constructor() {}

  ngOnInit() {
    this.dots = Math.round(this.projects.length / this.nCards) + 1;
    console.log(this.dots);
    this.updateDotsArray();
  }

  updateDotsArray() {
    this.dotsArray = Array(this.dots);
    console.log(this.dotsArray);
  }

  onDotClick(index: number) {
    console.log(index);
    const card: HTMLElement | null = document.querySelector('.projectContentContainer');
    if(card) {
      console.log("inside: ", index);
      card.style.left = `${index * -443}px`;
    }
  }
}
