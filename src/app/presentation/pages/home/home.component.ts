import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {IContentTranslation} from "../../../shared/interfaces/content.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content!: IContentTranslation;

  fakeImg = "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI";
  projects = [];

  contactOptions = [];
  skills = [];

  constructor(private readonly dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.content
      .subscribe(content => {
        this.content = content;
        this.refreshContent();
      })
  }

  private refreshContent() {
    this.projects = [
      {
        title: this.content.landing.sections.work.projects.project1.title,
        description: this.content.landing.sections.work.projects.project1.description,
        button: this.content.landing.sections.work.projects.project1.button,
        img: this.fakeImg,
      },
      {
        title: this.content.landing.sections.work.projects.project2.title,
        description: this.content.landing.sections.work.projects.project2.description,
        button: this.content.landing.sections.work.projects.project2.button,
        img: this.fakeImg,
      },
      {
        title: this.content.landing.sections.work.projects.project3.title,
        description: this.content.landing.sections.work.projects.project3.description,
        button: this.content.landing.sections.work.projects.project3.button,
        img: this.fakeImg,
      },
    ];

    this.contactOptions = [
      {
        label: this.content.landing.sections.contact.contactOptions.phone.label,
        value: this.content.landing.sections.contact.contactOptions.phone.value,
      },
      {
        label: this.content.landing.sections.contact.contactOptions.email.label,
        value: this.content.landing.sections.contact.contactOptions.email.value,
      },
      {
        label: this.content.landing.sections.contact.contactOptions.website.label,
        value: this.content.landing.sections.contact.contactOptions.website.value,
      },
      {
        label: this.content.landing.sections.contact.contactOptions.address.label,
        value: this.content.landing.sections.contact.contactOptions.address.value,
      }
    ];
    this.skills = [
      {label: this.content.landing.sections.about.skills.design, icon: "fa-brands fa-figma"},
      {label: this.content.landing.sections.about.skills.angular, icon: "fa-brands fa-angular"},
      {label: this.content.landing.sections.about.skills.laravel, icon: "fa-brands fa-laravel"},
      {label: this.content.landing.sections.about.skills.spring, icon: "fa-brands fa-java"},
      {label: this.content.landing.sections.about.skills.node, icon: "fa-brands fa-node-js"},
    ];
  }

}
