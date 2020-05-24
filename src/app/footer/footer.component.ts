import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  clipboardToolTip = 'Clip to copy my email address to clipboard';
  date = new Date();
  today = `  ${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`;
  personalData = {
    name: 'Dimakatso',
    surname: 'Bopape',
    cell: '0730914101',
    email: 'Dimalzela@gmail.com',
  };
  url = {
    github: 'https://github.com/Dimakzela',
    twitter: 'https://github.com/Dimakzela',
    facebook: 'https://www.facebook.com/dimakatso.piet/',
    linkedIn: 'https://www.linkedin.com/in/dimakatso-bopape-b8b403b6/',
  };

  copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.clipboardToolTip = 'Clip to copy my email address to clipboard!!!';
  }
}
