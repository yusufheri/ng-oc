// tslint:disable-next-line: quotemark
import { Component, Input, OnInit } from "@angular/core";
import { AppareilService } from "../services/appareil.service";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./appareil.component.scss"]
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilIndex: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {}

  onSwitch() {
    if (this.appareilStatus === "En marche") {
      this.appareilService.switchOffOne(this.appareilIndex);
    } else if (this.appareilStatus === "éteint") {
      this.appareilService.switchOnOne(this.appareilIndex);
    }
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "éteint") {
      return "red";
    } else if (this.appareilStatus === "En marche") {
      return "green";
    } else {
      return "yellow";
    }
  }
}
