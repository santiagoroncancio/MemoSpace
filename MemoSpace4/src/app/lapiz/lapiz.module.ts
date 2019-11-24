import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LapizPageRoutingModule } from './lapiz-routing.module';

import { LapizPage } from './lapiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LapizPageRoutingModule
  ],
  declarations: [LapizPage]
})
export class LapizPageModule {}
