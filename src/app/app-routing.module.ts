import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'admin', loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule) },
{ path: '', loadChildren: () => import('./modulos/website/website.module').then(m => m.WebsiteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
