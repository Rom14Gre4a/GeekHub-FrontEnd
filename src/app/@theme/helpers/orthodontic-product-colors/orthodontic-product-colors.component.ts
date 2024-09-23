import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-orthodontic-product-colors',
  templateUrl: './orthodontic-product-colors.component.html',
  styleUrls: ['./orthodontic-product-colors.component.scss'],
})

export class OrthodonticProductColorsComponent {
  @Input() colorsAmount: number;
  @Input() arch: any;
  @Input() color1: string | undefined;
  @Input() color2: string | undefined;
  @Input() color3: string | undefined;
  @Input() color4: string | undefined;
  @Input() color5: string | undefined;
}
