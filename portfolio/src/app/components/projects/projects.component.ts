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
}
