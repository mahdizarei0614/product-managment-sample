import {Component, Input, OnInit} from '@angular/core';
import {UrlAddress} from '../../../core/http/lib';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-companies-grid-view',
  templateUrl: './companies-grid-view.component.html',
  styleUrls: ['./companies-grid-view.component.scss']
})
export class CompaniesGridViewComponent implements OnInit {

  @Input() companies: any;

  constructor(private url: UrlAddress,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  companyClick(id) {
    this.router.navigate(['company-list', id]);
  }
}
