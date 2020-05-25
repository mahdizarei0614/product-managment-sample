import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UrlAddress} from '../../../../core/http/lib';
import {HttpClient} from '@angular/common/http';
import {SerachService} from '../../../../core/services/serach.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-products-list',
  templateUrl: './company-products-list.component.html',
  styleUrls: ['./company-products-list.component.scss']
})
export class CompanyProductsListComponent implements OnInit {

  id: number;
  private sub: any;
  products: Observable<any>;
  filteredProducts;
  backupProducts;

  constructor(private url: UrlAddress,
              private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;

      this.products = this.http.get(this.url.abs('products?company_id=' + this.id));
      this.products.subscribe(res => {
        this.filteredProducts = res;
        this.backupProducts = res;
      });
    });
  }

  addNewCompany() {
    const form = document.getElementById('add-product-form');
    if (form.classList.contains('height-zero')) {
      form.classList.remove('height-zero');
    } else {
      const newItem = {
        // @ts-ignore
        title: document.getElementById('new-product-name').value,
        company_id: this.id,
        // @ts-ignore
        production_date: document.getElementById('new-product-production-date').value,
        // @ts-ignore
        stock: document.getElementById('new-product-available').checked ? 'Available' : 'Unavailable',
        picture: 'assets/images/defaultProductPic.png'
      };
      this.http.post(this.url.abs('products'), newItem).subscribe(res => {
        this.getProducts();
      });
    }
  }

  filter() {
    // @ts-ignore
    this.filteredProducts = SerachService.filter(this.backupProducts, document.getElementById('search-bar').value);
  }
}
