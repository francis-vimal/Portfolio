import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('animationBlock', { static: true }) animationBlock!: ElementRef;

  moveIndicator(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const parentRect = target.parentElement!.getBoundingClientRect();
    const parentStyle = getComputedStyle(target.parentElement!);
    
    // Get numeric gap value (e.g. "10px" → 10)
    const gap = parseFloat(parentStyle.gap) || 0;
    const offset = rect.left - parentRect.left + rect.width / 2;
    console.log("target:", rect.left, "react", rect.left, "parentRect", parentRect.left, "gap", rect.width / 2);
    console.log("offset: ", offset);
    this.animationBlock.nativeElement.style.left = `${offset - gap}px`; // 50 = half of animationBlock width
    console.log("left: ", offset - gap);
    this.animationBlock.nativeElement.style.transition = `all 0.5s cubic-bezier(0.33, -0.32, 0.5, 1.23)`;
  }

  removeIndicator() {
    this.animationBlock.nativeElement.style.left = `-70px`;
    this.animationBlock.nativeElement.style.transition = `all 1s cubic-bezier(0.33, -0.32, 0.5, 1.23)`;
  }
}
