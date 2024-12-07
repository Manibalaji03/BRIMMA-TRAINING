import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstName: string ="Mani balaji";
  Age: number=18;
  genderMale: boolean=true;
  currentDate: Date=new Date();
  
}
