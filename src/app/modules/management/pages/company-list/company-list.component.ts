import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UrlAddress} from '../../../../core/http/lib';
import {HttpClient} from '@angular/common/http';
import {SerachService} from '../../../../core/services/serach.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Observable<any>;
  filteredCompanies;
  backupCompanies;

  constructor(private url: UrlAddress,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = this.http.get(this.url.abs('companies'));
    this.companies.subscribe(res => {
      this.filteredCompanies = res;
      this.backupCompanies = res;
    });
  }

  addNewCompany() {
    const form = document.getElementById('add-company-form');
    if (form.classList.contains('height-zero')) {
      form.classList.remove('height-zero');
    } else {
      this.http.post(this.url.abs('companies'), {
        // @ts-ignore
        title: document.getElementById('new-company-name').value,
        // @ts-ignore
        telephone: document.getElementById('new-company-tel').value,
        // @ts-ignore
        field: document.getElementById('new-company-food').checked ? 'Food Industry' :
          // @ts-ignore
          document.getElementById('new-company-home').checked ? 'Home Appliances' :
            // @ts-ignore
            document.getElementById('new-company-electronics').checked ? 'Electronics' : 'Unset',
        picture: 'assets/images/defaultCompanyPic.png'
      }).subscribe(res => {
        this.getCompanies();
      });
    }
  }

  filter() {
    // @ts-ignore
    this.filteredCompanies = SerachService.filter(this.backupCompanies, document.getElementById('search-bar').value);
  }


}
