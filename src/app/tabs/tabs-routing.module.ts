// Core component
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tabs page
import { TabsPage } from './tabs.page';

// Routes
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
  }
];

/**
 * Tabs page routing module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
