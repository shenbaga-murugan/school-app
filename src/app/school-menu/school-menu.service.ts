import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolMenuService {
  getMenuItems() : MenuItem[] {
    return [{menuText: 'Admission', menuKey: 'admission'},
      {menuText: 'About Us', menuKey: 'about-us'},
      {menuText: 'Contact Us', menuKey: 'contact-us'}
    ];
  }
}

export interface MenuItem {
  menuText: string,
  menuKey: string
}
