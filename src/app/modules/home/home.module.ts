import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { TableCategoryComponent } from './components/table-category/table-category.component';
import { FloatingPipe } from './pipes/floating/floating.pipe';

const materialModules = [
  MatButtonToggleModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    HomePageComponent,
    TableCategoryComponent,
    FloatingPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [],
})
export class HomeModule {}
