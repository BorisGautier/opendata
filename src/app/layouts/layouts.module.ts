import { NgModule } from "@angular/core";
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { RouterModule } from "@angular/router";
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { MapComponent } from './sidebar-layout/map/map.component';

@NgModule({
    imports: [
        RouterModule
    ],
    exports : [],
    declarations: [
      BaseLayoutComponent,
      SidebarLayoutComponent,
      MapComponent
    ]
})
export class LayoutsModule {}
