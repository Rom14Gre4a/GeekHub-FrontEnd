import { Component, Input } from '@angular/core';

@Component({
    selector: 'nb-dynamic-to-add',
    templateUrl: './dynamic.components.html',
    styleUrls: ['./dynamic.components.scss'],

})
export class DynamicToAddComponent {

    @Input()
    text: string = '';
}


