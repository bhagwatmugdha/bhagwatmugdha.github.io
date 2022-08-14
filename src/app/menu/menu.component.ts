import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  activeItem: MenuItem;

  constructor() {
    this.menuItems = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'], command: (event) => {
          this.activeItem = event.item;
        }
      },
      {
        label: 'Education', icon: 'pi pi-fw pi-book', routerLink: ['/education'], command: (event) => {
          this.activeItem = event.item;
        }
      },
      {
        label: 'Work Experience', icon: 'pi pi-fw pi-briefcase', routerLink: ['/workexperience'], command: (event) => {
          this.activeItem = event.item;
        }
      },
      {
        label: 'Research', icon: 'pi pi-fw pi-book', routerLink: ['/research'], command: (event) => {
          this.activeItem = event.item;
        }
      },
      // {
      //   label: 'Projects', icon: 'pi pi-fw pi-book', routerLink: ['/projects'], command: (event) => {
      //     this.activeItem = event.item;
      //   }
      // },
      // {
      //   label: 'Course Certificates', icon: 'pi pi-fw pi-book', routerLink: ['/coursecertificates'], command: (event) => {
      //     this.activeItem = event.item;
      //   }
      // },
      // {
      //   label: 'Volunteering', icon: 'pi pi-fw pi-briefcase', routerLink: ['/volunteering'], command: (event) => {
      //     this.activeItem = event.item;
      //   }
      // }
    ];

    this.activeItem = this.menuItems[0];
  }

  ngOnInit(): void { }

}
