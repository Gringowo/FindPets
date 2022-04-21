import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FooterloginComponent } from './footerlogin/footerlogin.component';
import { HeaderloginComponent } from './headerlogin/headerlogin.component';

@NgModule({
    declarations: [
        FooterloginComponent,
        HeaderloginComponent,
    ],
    exports: [
        FooterloginComponent,
        HeaderloginComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ]

})

export class ComponentsModule {}