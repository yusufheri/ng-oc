// tslint:disable-next-line: quotemark
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./appareil.component.scss"]
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'éteint') {
      return 'red';
    } else if (this.appareilStatus === 'En marche') {
      return 'green';
    } else {
      return 'yellow';
    }
  }
}
