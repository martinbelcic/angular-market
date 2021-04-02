import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-market';

  items = ['nacho', 'tomi', 'nicolag'];

  constructor() { }

  ngOnInit(): void {
  }

  

  addItem() {
    this.items.push('Otra');
  }

}
