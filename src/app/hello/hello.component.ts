import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.sass'
})
export class HelloComponent {
  courseNmae: string = "Angualr";
}
