import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: { name: string, img: string }[] = [
    { name: 'Angular', img: "../../../assets/angular.png" },
    { name: 'ReactJS', img: "../../../assets/react.png" },
    { name: 'NodeJs', img: "../../../assets/nodeJS.png" },
    { name: 'Express', img: "../../../assets/express.png" },
    { name: 'HTML', img: "../../../assets/html.png" },
    { name: 'CSS', img: "../../../assets/css.png" },
    { name: 'JavaScript', img: "../../../assets/js.png" },
    { name: 'TypeScript', img: "../../../assets/typescript.png" },
    { name: 'JQuery', img: "../../../assets/jQuery.png" },
    { name: 'EJS', img: "../../../assets/ejs.png" }
  ];
}
