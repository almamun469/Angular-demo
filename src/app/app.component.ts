import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneService } from './one.service';
import { TwoService } from './two.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  constructor(private twoService: TwoService) {}

  sendData() {
    this.twoService.updateData('Hello from AppComponent');
  }

  receiveData() {
    const data = this.twoService.fetchData();
    
  }
}
