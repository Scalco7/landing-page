import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public scroll(element: any) {
    document.getElementsByName(element)[0].scrollIntoView({behavior: "smooth", block: "center"});
  }
}
