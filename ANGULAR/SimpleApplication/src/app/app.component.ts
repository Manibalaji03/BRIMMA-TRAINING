import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { ParentComponent } from './Component/counter/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginpageComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpleApplication';
}
