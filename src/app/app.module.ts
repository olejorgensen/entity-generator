import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DapperOutputComponent } from './dapper-output/dapper-output.component';
import { ServiceOutputComponent } from './service-output/service-output.component';
import { SqlOutputComponent } from './sql-output/sql-output.component';
import { ViewModelOutputComponent } from './view-model-output/view-model-output.component';
import { ViewOutputComponent } from './view-output/view-output.component';

@NgModule({
  declarations: [
    AppComponent,
    DapperOutputComponent,
    ServiceOutputComponent,
    SqlOutputComponent,
    ViewModelOutputComponent,
    ViewOutputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
