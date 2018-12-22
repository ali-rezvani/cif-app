import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { CifSharedLibsModule, CifSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [CifSharedLibsModule, CifSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [CifSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CifSharedModule {
    static forRoot() {
        return {
            ngModule: CifSharedModule
        };
    }
}
