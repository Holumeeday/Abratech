import { Component, OnInit } from '@angular/core';
import { shop} from './shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  wears: shop[]= [
    new shop ('A test name', 'a better description', 'imad should be image'),
    new shop (' Male Shirt', 'a white shirt with coloar', 'image')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
