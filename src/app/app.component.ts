import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

declare var particlesJS: any; // Declarar particlesJS

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles-config.js', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}