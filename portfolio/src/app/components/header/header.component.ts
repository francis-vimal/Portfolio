import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

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
    
    // 👇 dynamically get the block width instead of assuming
    const blockWidth = this.animationBlock.nativeElement.offsetWidth;
    
    // ✅ Center the animationBlock properly
    this.animationBlock.nativeElement.style.left = `${offset - blockWidth / 2}px`;
    this.animationBlock.nativeElement.style.transition =
      `all 0.5s cubic-bezier(0.33, -0.32, 0.5, 1.23)`;
    
  }

  removeIndicator(left:string = "-70px") {
    this.animationBlock.nativeElement.style.left = left
    this.animationBlock.nativeElement.style.transition = `all 1s cubic-bezier(0.33, -0.32, 0.5, 1.23)`;
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: Event) {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 600) {
      this.removeIndicator("-50px");
      // 👇 Do something when screen width is 600px or less
      console.log('Mobile view active');
      // e.g. this.isMobile = true;
    } else {
      // 👇 For larger screens
      console.log('Desktop view active');
      // e.g. this.isMobile = false;
    }
  }
}
