import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {Lightbulb, LightbulbOff, LucideAngularModule} from "lucide-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      Lightbulb, LightbulbOff
    }),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AtomsModule { }
