import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 display: string = '';

  pressKey(key: string) {
    if (key === 'AC') {
      this.display = '';
    } else if (key === '⌫') {
      this.display = this.display.slice(0, -1);
    } else if (key === '=') {
      try {
        this.display = eval(this.display.replace(/×/g, '*').replace(/÷/g, '/')).toString();
      } catch {
        this.display = this.display;
      }
    } else {
      this.display += key;
    }
  }
}