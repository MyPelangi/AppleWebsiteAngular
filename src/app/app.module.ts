import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { _headerComponent } from './component/header/header.component';
import { _bodyComponent } from './component/body/body.component';
import { _footerComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    _headerComponent,
    _bodyComponent,
    _footerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
