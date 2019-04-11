import { Component, OnInit } from "@angular/core";
import { AppareilService } from "./services/appareil.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isAuth = false;
  appareils: any[];

  appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree = "Ordinateur";

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm("Voulez-vous éteindre tous les appareils ?")) {
      this.appareilService.switchOffAll();
    } else {
      return;
    }
  }
}
