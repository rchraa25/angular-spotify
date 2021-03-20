import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { WebLayoutModule } from '@angular-spotify/web/layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducers, rootEffects } from '@angular-spotify/web/shared/data-access/store';
import { IconModule } from '@angular-spotify/web/shared/ui/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    WebLayoutModule,
    IconModule,
    RouterModule.forRoot(webShellRoutes),
    StoreModule.forRoot(rootReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot(rootEffects)
  ],
  exports: [RouterModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  declarations: []
})
export class WebShellModule {}
