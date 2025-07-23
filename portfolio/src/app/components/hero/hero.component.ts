import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  imgList: { name: string; width: number; height: number }[] = [
    { name: "cloud", width: 120, height: 120 },
    { name: "flower-heart", width: 80, height: 80 },
    { name: "knot-line", width: 100, height: 100 },
    { name: "left-heart", width: 110, height: 110 },
    { name: "left-line-heart", width: 100, height: 100 },
    { name: "multi-hearts", width: 60, height: 60 },
    { name: "multi-stars", width: 150, height: 150 },
    { name: "paper-flew", width: 200, height: 200 },
    { name: "rain-cloud", width: 100, height: 100 },
    { name: "right-big-star", width: 100, height: 100 },
    { name: "right-heart", width: 120, height: 120 },
    { name: "saturn", width: 80, height: 80 },
    { name: "small-swirl1", width: 20, height: 20 },
    { name: "small-swirl2", width: 20, height: 20 },
    { name: "small-swirl3", width: 20, height: 20 },
    { name: "star1", width: 30, height: 30 },
    { name: "star2", width: 30, height: 30 },
    { name: "star3", width: 30, height: 30 },
    { name: "swirl", width: 100, height: 100 },
    { name: "zig-zack-line", width: 70, height: 70 }
  ];

  isImageHovered: boolean = false;
}
