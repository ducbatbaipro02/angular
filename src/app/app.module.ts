import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.component';

import { FormsModule } from '@angular/forms';
import { ComponentComponent } from './component/component.component';
import { TreeViewComponent } from './component/treeview/treeview.component';
import { ChartComponent } from './chart/chart.component';
import { ChartistComponent } from './chart/chartist/chartist.component';
import { UIFeatureComponent } from './uifeature/uifeature.component';
import { FormEmplementComponent } from './form-emplement/form-emplement.component';
import { FormInputsComponent } from './form-emplement/forminputs/form-inputs.component';
import { FormLayoutsComponent } from './form-emplement/formlayouts/form-layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComponentComponent,
    TreeViewComponent,
    ChartComponent,
    ChartistComponent,
    UIFeatureComponent,
    FormEmplementComponent,
    FormLayoutsComponent,
    FormInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    FormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  exports: [
    TreeViewComponent,
    ChartistComponent,
    FormLayoutsComponent,
    FormInputsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
