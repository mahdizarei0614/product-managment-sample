import {Component, Input, OnInit} from '@angular/core';
import {UrlAddress} from '../../../core/http/lib';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products-grid-view',
  templateUrl: './products-grid-view.component.html',
  styleUrls: ['./products-grid-view.component.scss']
})
export class ProductsGridViewComponent implements OnInit {

  @Input() products: any;

  constructor(private url: UrlAddress,
              private http: HttpClient) {
  }

  ngOnInit(): void {
  }
}
