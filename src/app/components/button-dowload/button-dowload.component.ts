import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'button-dowload',
  templateUrl: './button-dowload.component.html',
  styleUrls: ['./button-dowload.component.scss']
})
export class ButtonDowloadComponent implements OnInit {
  @Input() imgPath: any;

  constructor(){}

  ngOnInit(): void {
  }

}
