// Angular component
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Tabs modules/pages
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';

/**
 * Tabs page module
 */
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
