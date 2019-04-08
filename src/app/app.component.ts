import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  posts = [
    new Post(
      "Mon voyage à Idiofa",
      "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique."
    ),
    new Post(
      "Mon voyage à Niadi-Nkara",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    new Post(
      "Mon futur voyage au Nigéria",
      "Even though using lorem ipsum often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning. Where text is visible in a document, people tend to focus on the textual content rather than upon overall presentation, so publishers use lorem ipsum when displaying a typeface or design in order to direct the focus to presentation. Lorem ipsum also approximates a typical distribution of spaces in English."
    )
  ];

  isAuth = false;

  appareils = [
    {
      name: "Machine à laver",
      status: "éteint"
    },
    {
      name: "Frigo",
      status: "En marche"
    },
    {
      name: "ordinateur potable",
      status: "En marche"
    },
    {
      name: "Desktop",
      status: "En panne"
    }
  ];

  appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree = "Ordinateur";

  constructor() {}

  onAllumer() {
    console.log("On allume tout");
  }
}

class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
  dontloveIt: number;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.dontloveIt = 0;
    this.created_at = new Date();
  }
}
