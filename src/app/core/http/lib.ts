export class UrlAddress {
  urls = {
    root: 'http://localhost:3000/',
    companies: 'companies',
  };

  constructor() {
  }

  get messages() {
    return this.urls.root + this.urls;
  }

  abs(relative) {
    if (relative === 'root') {
      return this.urls.root;
    } else if (this.urls[relative]) {
      return this.urls.root + this.urls[relative];
    } else {
      return this.urls.root + relative;
    }
  }
}
