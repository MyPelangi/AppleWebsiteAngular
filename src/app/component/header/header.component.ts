import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
  ngOnInit() {
    const hamburger = document.querySelector('.LiHamburger') as HTMLElement | null;
    const menu = document.querySelector('.DivListMenu') as HTMLElement | null;
  
    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
      });
    }
  }
}
