import { Component } from '@angular/core';
import { MenuItem, SchoolMenuService } from './school-menu.service';

@Component({
  selector: 'school-menu',
  standalone: false,
  templateUrl: './school-menu.component.html',
  styleUrl: './school-menu.component.css'
})
export class SchoolMenuComponent {
  activeMenuItem = 'admission';
  constructor(private schoolMenuService: SchoolMenuService) {
  }
  getSchoolMenu(): MenuItem[] {
    return this.schoolMenuService.getMenuItems();
  }
}
