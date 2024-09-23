import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { log } from 'console';
import { OrderProductColorModel } from '../../../../shared/service-proxies/event-service-proxy';

export enum OrthodonticProduct {
  FixedRetainerBar = <any>"FixedRetainerBar",
  HardPressureFormedAcrylicSplint = <any>"HardPressureFormedAcrylicSplint",
  SoftSplint = <any>"SoftSplint",
  DualLaminateSplint = <any>"DualLaminateSplint",
  MouthguardsContactSports1Colour = <any>"MouthguardsContactSports1Colour",
  MouthguardsContactSportsMultipleColours = <any>"MouthguardsContactSportsMultipleColours",
  BleachingTrays = <any>"BleachingTrays",
  StudyModelsPrinted = <any>"StudyModelsPrinted",
}


export enum SportsColors {
  GlossClear = <any>"GlossClear",
  RoyalBlue = <any>"RoyalBlue",
  Black = <any>"Black",
  FluorescentGreen = <any>"FluorescentGreen",
  FluorescentRed = <any>"FluorescentRed",
  Silver = <any>"Silver",
  LightBlue = <any>"LightBlue",
  BabyPink = <any>"BabyPink",
  Lilac = <any>"Lilac",
  Red = <any>"Red",
  Yellow = <any>"Yellow",
  Orange = <any>"Orange",
  FluorescentOrange = <any>"FluorescentOrange",
  Maroon = <any>"Maroon",
  Gold = <any>"Gold",
  Sky = <any>"Sky",
  Lavender = <any>"Lavender",
  Brown = <any>"Brown",
  White = <any>"White",
  Green = <any>"Green",
  FluorescentPink = <any>"FluorescentPink",
  FluorescentYellow = <any>"FluorescentYellow",
  Purple = <any>"Purple",
  Navy = <any>"Navy",
  RacingGreen = <any>"RacingGreen",
  Turquoise = <any>"Turquoise",
  Apple = <any>"Apple",
}
@Component({
  selector: 'ngx-simple-order-select-orthodontic-colours',
  templateUrl: './simple-order-select-orthodontic-colours.component.html',
  styleUrls: ['./simple-order-select-orthodontic-colours.component.scss'],
})

export class SimpleOrderSelectOrthodonticColoursComponent implements OnInit, OnChanges {
  @Input() value: any;
  @Input() arch: any;
  @Input() product: any;
  @Input() disabled: any;

  @Output() valueChange = new EventEmitter<any>();
  @Input() submitted: boolean;
  orthodonticProduct = OrthodonticProduct;
  sportsColors = sportsColors;
  orderProductColorModel: OrderProductColorModel = new OrderProductColorModel();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product.orderProductColor?.id) {
      this.orderProductColorModel = this.product.orderProductColor;
    } else {
      this.orderProductColorModel.upperColorCount = this.product.orthoColours;
      this.orderProductColorModel.lowerColorCount = this.product.orthoColours;
    }
  }


  ngOnInit() {
    if (this.product.orderProductColor?.id) {
      this.orderProductColorModel = this.product.orderProductColor;
    } else {
      this.orderProductColorModel.upperColorCount = this.product.orthoColours;
      this.orderProductColorModel.lowerColorCount = this.product.orthoColours;
    }
 
  }
  
  getColor(num: number, type: any) {
    let value: SportsColors;
    switch (num) {
      case 1:
        value = this.orderProductColorModel[`${type}Color1`];
        break;

      case 2:
        value = this.orderProductColorModel[`${type}Color2`];
        break;

      case 3:
        value = this.orderProductColorModel[`${type}Color3`];
        break;

      case 4:
        value = this.orderProductColorModel[`${type}Color4`];
        break;

      case 5:
        value = this.orderProductColorModel[`${type}Color5`];
        break;
    }
    this.product.orderProductColor = this.orderProductColorModel;
    const selectedOption = sportsColors.find(i => i.value === value);
    return selectedOption ? selectedOption.color : null;
  }
}

export const sportsColors = [
  {
    label: 'Gloss Clear',
    value: SportsColors.GlossClear,
    color: '#f0fafc',
  },
  {
    label: 'Royal Blue',
    value: SportsColors.RoyalBlue,
    color: '#005DA2',
  },
  {
    label: 'Black',
    value: SportsColors.Black,
    color: '#040500',
  },
  {
    label: 'Fluorescent Green',
    value: SportsColors.FluorescentGreen,
    color: '#84CA74',
  },
  {
    label: 'Fluorescent Red',
    value: SportsColors.FluorescentRed,
    color: '#EC4C5E',
  },
  {
    label: 'Silver',
    value: SportsColors.Silver,
    color: '#AAAEAD',
  },
  {
    label: 'Light Blue',
    value: SportsColors.LightBlue,
    color: '#018DCB',
  },
  {
    label: 'Baby Pink',
    value: SportsColors.BabyPink,
    color: '#F583A4',
  },
  {
    label: 'Lilac',
    value: SportsColors.Lilac,
    color: '#5A3E95',
  },
  {
    label: 'Red',
    value: SportsColors.Red,
    color: '#D90134',
  },
  {
    label: 'Yellow',
    value: SportsColors.Yellow,
    color: '#FDDF3F',
  },
  {
    label: 'Orange',
    value: SportsColors.Orange,
    color: '#F37B25',
  },
  {
    label: 'Fluorescent Orange',
    value: SportsColors.FluorescentOrange,
    color: '#F38355',
  },
  {
    label: 'Maroon',
    value: SportsColors.Maroon,
    color: '#610036',
  },
  {
    label: 'Gold',
    value: SportsColors.Gold,
    color: '#A7915F',
  },
  {
    label: 'Sky',
    value: SportsColors.Sky,
    color: '#65D2F1',
  },
  {
    label: 'Lavender',
    value: SportsColors.Lavender,
    color: '#CAAFCE',
  },
  {
    label: 'Brown',
    value: SportsColors.Brown,
    color: '#461103',
  },
  {
    label: 'White',
    value: SportsColors.White,
    color: '#FFFFFF',
  },
  {
    label: 'Green',
    value: SportsColors.Green,
    color: '#18964D',
  },
  {
    label: 'Fluorescent Pink',
    value: SportsColors.FluorescentPink,
    color: '#F15996',
  },
  {
    label: 'Fluorescent Yellow',
    value: SportsColors.FluorescentYellow,
    color: '#F8EC5A',
  },
  {
    label: 'Purple',
    value: SportsColors.Purple,
    color: '#4A0F53',
  },
  {
    label: 'Navy',
    value: SportsColors.Navy,
    color: '#102361',
  },
  {
    label: 'Racing Green',
    value: SportsColors.RacingGreen,
    color: '#10503F',
  },
  {
    label: 'Turquoise',
    value: SportsColors.Turquoise,
    color: '#7CCDD0',
  },
  {
    label: 'Apple',
    value: SportsColors.Apple,
    color: '#99CD8D',
  },
];
