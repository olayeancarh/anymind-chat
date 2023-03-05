import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './root-reducer';
import { appEffects } from './root-effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: 'anymind-chat',
      logOnly: environment.production
    })
  ]
})
export class RootStoreModule { }
