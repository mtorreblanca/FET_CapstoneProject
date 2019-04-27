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

  testfind: any;
  resultFind: any;
  itemFound: any;
  constructor(private data: ShoppingDataService) { }

  ngOnInit() {
    this.showSlides(this.slideIndex, false);
    this.data.getItems()
      .subscribe(items => {
        this.items$ = items;
        this.testfind = items[0].subcategories[0].items;
        this.resultFind = this.testfind.find(t => t.name === 'Bib');
        console.log(this.resultFind);
        items.forEach( res => {
          res.subcategories.forEach( res1 => {
            const find = res1.items.find(t => t.name === 'Avocado');
            if (find) {
              this.itemFound = find;
              console.log(this.itemFound);
            }
          });
        });
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
