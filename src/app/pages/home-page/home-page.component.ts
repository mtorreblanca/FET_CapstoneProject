import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  slideIndex = 1;
  automatic = false;
  constructor() { }

  ngOnInit() {
    this.showSlides(this.slideIndex, false);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n, false);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n, false);
  }

  showSlides(n, fromCheck) {
    let i;
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';

    if (this.automatic === true) {
      if (fromCheck === true) {
        setTimeout(() => {
          this.automatic === true ? this.slideIndex++ : this.slideIndex = this.slideIndex;
          this.showSlides(this.slideIndex, true);
        }, 3000);
      } else {
        setTimeout(() => {
          fromCheck = true;
        }, 3000);
      }
    }

  }



}
