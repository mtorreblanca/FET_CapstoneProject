import { Component, OnInit } from '@angular/core';
import { ShoppingDataService } from 'src/app/services/shopping-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  slideIndex = 1;
  automatic = false;
  items$: any;
  itemsSlide1: any;
  itemsSlide2: any;
  itemsSlide3: any;
  constructor(private data: ShoppingDataService) { }

  ngOnInit() {
    this.showSlides(this.slideIndex, false);
    this.data.getItems()
      .subscribe(items => {
        this.items$ = items;
        console.log(this.items$);
        this.itemsSlide1 = items[0].subcategories[3].items;
        console.log(this.itemsSlide1);
        this.itemsSlide2 = items.find(t => t.subcategories[0].items[0].name === 'Bib');
        console.log(this.itemsSlide2);
      });
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n, false);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n, false);
  }

  showSlides(n, fromCheckBox) {
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
      if (fromCheckBox === true) {
        setTimeout(() => {
          this.automatic === true ? this.slideIndex++ : this.slideIndex = this.slideIndex;
          this.showSlides(this.slideIndex, true);
        }, 3000);
      } else {
        setTimeout(() => {
          fromCheckBox = true;
        }, 3000);
      }
    }

  }



}
