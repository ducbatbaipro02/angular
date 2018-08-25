import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ComponentComponent } from './component/component.component';
import { TreeViewComponent } from './component/treeview/treeview.component';
import { ChartistComponent } from './chart/chartist/chartist.component';
import { ChartComponent } from './chart/chart.component';
import { FormInputsComponent } from './form-emplement/forminputs/form-inputs.component';
import { FormEmplementComponent } from './form-emplement/form-emplement.component';
import { FormLayoutsComponent } from './form-emplement/formlayouts/form-layouts.component';


const routes: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMath: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'component', component: ComponentComponent },
    { path: 'component/treeview', component: TreeViewComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'chart/chartist', component: ChartistComponent },
    { path: 'formemplement', component: FormEmplementComponent },
    { path: 'formemplement/forminputs', component: FormInputsComponent },
    { path: 'formemplement/formlayouts', component: FormLayoutsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
