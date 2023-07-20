import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {IContentTranslation} from "../../../shared/interfaces/content.interface";
import {LanguageEnum} from "../../../shared/enums/language.enum";
import {FormBuilder, FormControl} from "@angular/forms";
import {ThemeEnum} from "../../../shared/enums/theme.enum";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  content!: IContentTranslation;
  languageControl!: FormControl;
  languageEnum = LanguageEnum;
  themeEnum = ThemeEnum;
  mode: ThemeEnum = ThemeEnum.LIGHT;

  constructor(private readonly dataService: DataService,
              private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.dataService.content
      .subscribe((content: IContentTranslation) => {
        this.content = content;
      });
    this.languageControl = this.formBuilder.control(this.dataService.currentLanguage);
    this.languageControl.valueChanges
      .subscribe((language: LanguageEnum) => {
        this.onSelectLanguage(language);
      });
  }

  toggleMode(): void {
    this.mode = this.mode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    const html = document.querySelector('html');
    if (!html) return;
    html.setAttribute('data-theme', this.mode);
  }

  onSelectLanguage(language: LanguageEnum): void {
    this.dataService.language = language;
  }

}
