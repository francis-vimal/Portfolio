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
    const offset = rect.left - parentRect.left + rect.width / 2;
  
    this.animationBlock.nativeElement.style.left = `${offset - 50}px`; // 50 = half of animationBlock width
    this.animationBlock.nativeElement.style.transition = `all 0.5s cubic-bezier(0.33, -0.32, 0.5, 1.23)`;
  }

  removeIndicator() {
    this.animationBlock.nativeElement.style.left = `-70px`;
    this.animationBlock.nativeElement.style.transition = `all 1s cubic-bezier(0.33, -0.32, 0.5, 1.23)`;
  }
}
