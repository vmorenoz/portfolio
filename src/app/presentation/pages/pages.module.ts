import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {HomeComponent} from './home/home.component';
import {AtomsModule} from "../atoms/atoms.module";
import {Github, Instagram, Linkedin, LucideAngularModule, Mail, Phone} from "lucide-angular";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AtomsModule,
    LucideAngularModule.pick({
      Github, Linkedin, Instagram,
      Phone, Mail
    })
  ]
})
export class PagesModule {
}
