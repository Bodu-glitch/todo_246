import {Component, ViewChild} from '@angular/core';
import {MaterialModule} from "../../shared/modules/material.module";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  boards = [
    {
      name: 'Work',
      background: '../../../assets/images/background1.jpg',
    },
    {
      name: 'Personal',
      background: 'url(https://t3.ftcdn.net/jpg/05/13/59/72/360_F_513597277_YYqrogAmgRR9ohwTUnOM784zS9eYUcSk.jpg)',
    },
  ];

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
