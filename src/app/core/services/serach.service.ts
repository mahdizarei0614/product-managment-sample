import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerachService {

  constructor() { }

  static filter(list, keyword: string) {
    const filteredItems = [];
    for (const i of list) {
      if (JSON.stringify(i).toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        filteredItems.push(i);
      }
    }
    return filteredItems;
  }
}
