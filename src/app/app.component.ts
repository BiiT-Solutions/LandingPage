import {Component} from "@angular/core";
import {AvailableLangs, TranslocoService} from "@ngneat/transloco";
import {Router} from "@angular/router";
import {BiitIconService} from "biit-ui/icon";
import {completeIconSet} from "biit-icons-collection";
import {Environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly Environment = Environment;

  constructor(private translocoService: TranslocoService,
              private biitIconService: BiitIconService,
              protected router: Router) {
    biitIconService.registerIcons(completeIconSet);
    this.setLanguage();
  }

  private setLanguage(): void {
    const clientLanguages: ReadonlyArray<string>= navigator.languages;
    const languages: AvailableLangs = this.translocoService.getAvailableLangs();
    const language: string = clientLanguages.find(lang => languages.map(lang => lang.toString()).includes(lang));
    if (language) {
      this.translocoService.setActiveLang(language);
    }
  }

  goToPage(target: Environment) {
    window.open(new URL(`${target}`));
  }
}
