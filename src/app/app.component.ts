import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public signature: object;
  public active: boolean = false;
  private signatureModel: object = {
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    phone: '',
    skype: '',
    skypeURL: '',
    bannerEnabled: false,
    bannerURL: '',
    bannerLink: '',
  };

  public ReFuelBoxConfig = {
    linkedin: 'https://www.linkedin.com/company/refuelbox',
    twitter: 'https://twitter.com/refuelbox',
    facebook: 'https://www.facebook.com/refuelbox',
    color: 'rgb(39, 39, 39)',
    //address: '76, rue Faubourg Saint-Denis 75010 Paris',
    companyName: 'ReFuel Box',
    companyWebsite: 'http://www.refuelbox.com',
    logo: 'https://refuelbox.com/wp-content/uploads/2019/01/Email-signature-512x512_09.png',
    logoLink: 'http://www.refuelbox.com'
  };

  constructor() { }

  public ngOnInit():void {
    this.reset();
    const bannerLink = this.getParameterByName('bannerLink', '');
    const bannerURL = this.getParameterByName('bannerURL', '');
    if (bannerURL) {
      this.signature['bannerEnabled'] = true;
      this.signature['bannerLink'] = bannerLink;
      this.signature['bannerURL'] = bannerURL;
    }
  }

  public reset():void {
    this.signature = Object.assign({}, this.signatureModel);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
