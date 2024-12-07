import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { LogincontainerComponent } from '../../Component/logincontainer/logincontainer.component';

@Component({
  selector: 'app-loginpage',
  imports: [HeaderComponent,LogincontainerComponent],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

}
