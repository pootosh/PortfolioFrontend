import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

  appLogo = 'src\app\feature\files\images\Aditya Singh.svg';

}
