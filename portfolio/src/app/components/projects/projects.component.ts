import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ViewChild('sliderContainer', { static: true }) sliderContainerRef!: ElementRef<HTMLElement>;
  
  projects: { img: string, title: string }[] = [
    { img: "'../../../assets/oands_page.jpg'", title: "O and S animation" },
    { img: "'../../../assets/simon_game.jpg'", title: "Simon Game" },
    { img: "'../../../assets/dice_game.jpg'", title: "Dice Game" },
    { img: "'../../../assets/simon_game.jpg'", title: "Drum Music Kit" },
  ]

  dots: number = 0;

  activeDotIndex: number = 0;

  nCards: number = 3;

  // public for template dots if you show them
  dotsArray: any[] = [];

  // internal state
  cardsPerView = 3;

  currentGap = 40; // px

  // keep the handler so we can remove it
  private resizeHandler = () => this.updateGap();

  private resizeTimeout: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.dots = Math.round(this.projects.length / this.nCards) + 1;
    this.dotsArray = Array(this.dots);
  }

  ngAfterViewInit(): void {
    // do an initial calculation shortly after view rendered (images/backgrounds may need a tick)
    setTimeout(() => this.updateGap(), 60);

    // listen to resize
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.updateGap();
      }, 100); // wait 500ms after resizing stops
    });

    // if you have images inside cards, re-run when they finish loading
    const container = this.sliderContainerRef.nativeElement;
    const imgs = container.querySelectorAll('img');
    imgs.forEach((img: HTMLImageElement) => {
      img.addEventListener('load', this.resizeHandler);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeTimeout);
  }

  private updateGap(): void {
    const container = this.sliderContainerRef.nativeElement;
    if (!container) return;

    const cardEls = Array.from(container.querySelectorAll('.projectContentSvg')) as HTMLElement[];
    if (!cardEls.length) return;

    // measure
    const containerWidth = Math.floor(container.clientWidth);
    const cardWidth = Math.floor(cardEls[0].getBoundingClientRect().width);

    // decide cardsPerView by breakpoints (customize breakpoints if you want)
    let n = 3;
    if (containerWidth <= 660) n = 1;       // mobile
    else if (containerWidth <= 992) n = 2;  // tablet
    else n = 3;                             // desktop
    this.cardsPerView = n;

    let gap = 16; // fallback minimal gap

    // Reset margin-left for safety
    cardEls.forEach(el => (el.style.marginLeft = '0'));
    cardEls[cardEls.length - 1].style.marginRight = `0`;

    if (n > 1) {
      // g = (W - n*c) / (n - 1)
      const raw = (containerWidth - n * cardWidth) / (n - 1);
      gap = Math.max(8, Math.floor(raw)); // enforce minimum gap = 8px
      container.style.left = `0px`; // reset any left shift
    } else {
      // n = 1 → center the card
      gap = 0; // no need for inter-card gap

      // center the first card by shifting the container
      const leftShift = Math.max(0, (containerWidth - cardWidth) / 2);
      container.style.left = `${leftShift}px`;

      // give the second card (and the rest) margin-left so they can't sneak in
      for (let i = 1; i < cardEls.length; i++) {
        cardEls[i].style.marginLeft = `${containerWidth}px`;
      }

      cardEls[cardEls.length - 1].style.marginRight = `${containerWidth}px`;
    }

    container.scrollTo({ left: 0 });

    this.currentGap = gap;

    // Write CSS variable to container
    container.style.setProperty('--card-gap', `${gap}px`);

    // update dots (pages)
    const total = cardEls.length;
    const pages = Math.max(1, Math.ceil(total / this.cardsPerView));
    this.dotsArray = new Array(pages);
    this.activeDotIndex = 0;
    console.log(containerWidth)
  }

  // dot click: go to page i (0-based)
  onDotClick(index: number): void {
    const container = this.sliderContainerRef.nativeElement;
    if (!container) return;
  
    const cardEls = Array.from(container.querySelectorAll('.projectContentSvg')) as HTMLElement[];
    if (!cardEls.length) return;
  
    const cardWidth = cardEls[0].getBoundingClientRect().width;
  
    if (this.cardsPerView === 1) {
      // one dot per card
      const targetCard = cardEls[index];
      if (!targetCard) return;
  
      // scroll so this card is in view (starting position)
      const offsetLeft = targetCard.offsetLeft;
      container.scrollTo({ left: offsetLeft, behavior: 'smooth' });
    } else {
      // multiple cards per page
      const pageWidth = (cardWidth + this.currentGap) * this.cardsPerView;
      const left = Math.round(index * pageWidth);
      container.scrollTo({ left, behavior: 'smooth' });
    }

    this.activeDotIndex = index;
  }
}
