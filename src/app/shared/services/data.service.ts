import {Injectable} from '@angular/core';
import {LanguageEnum} from "../enums/language.enum";
import {BehaviorSubject} from "rxjs";
import {TRANSLATIONS} from "../const/content.const";
import {IContentTranslation} from "../interfaces/content.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentLanguage: LanguageEnum = LanguageEnum.EN;
  private currentContentSubject: BehaviorSubject<IContentTranslation> = new BehaviorSubject(TRANSLATIONS.english);

  constructor() {
  }

  set language(lang: LanguageEnum) {
    this.currentLanguage = lang;
    this.currentContentSubject.next(this.getContent(lang));
  }

  get content() {
    return this.currentContentSubject.asObservable();
  }

  private getContent(lang: LanguageEnum) {
    switch (lang) {
      case LanguageEnum.EN:
        return TRANSLATIONS.english;
      case LanguageEnum.ES:
        return TRANSLATIONS.spanish;
      default:
        return TRANSLATIONS.english;
    }
  }
}
