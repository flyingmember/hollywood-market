import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocationComponent } from './screens/location/location.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
