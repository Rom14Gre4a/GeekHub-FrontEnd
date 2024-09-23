import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbInputModule,
  NbFormFieldModule,
  NbCardModule,
  NbPopoverModule,
  NbSpinnerModule,
  NbListModule,
  NbCheckboxModule,
  NbToggleModule,
  NbTabsetModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { NbSecurityModule } from '@nebular/security';
import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  FilterOrderTypePipe,
  SearchFilterPipe,
  FilterPipe,
  SafePipe,
  OrderByPipe,
  CutTextPipe,
  AddSpacePipe,
  FilterProductPipe
} from './pipes';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { MainLayoutComponent } from './layouts';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/auth.layout';
import { FieldErrorDisplayComponent } from './helpers/field-error-display/field-error-display.component';
import { DeleteModalApproveComponent } from './helpers/delete-modal-approve/delete-modal-approve.component';
import { OrderSumbitOrderModalComponent } from './helpers/order-sumbit-order-modal/order-sumbit-order-modal.component';
import { FormsModule } from '@angular/forms';
// import { NgSelectModule } from '@ng-select/ng-select';
import { FindOrderByBarcodeComponent } from './helpers/find-order-by-barcode/find-order-by-barcode.component';
import { GenericBarcodeComponent } from './helpers/generic-barcode/generic-barcode.component';
import { MultiselectTeethControlComponent } from './helpers/multiselect-teeth-control/multiselect-teeth-control.component';
import { UploadFilesComponent } from './helpers/upload-files/upload-files.component';
import { ChangeTagByOrderComponent } from './helpers/change-tag-by-order/change-tag-by-order.component';
import { DateRangePickerComponent } from './helpers/date-range-picker/date-range-picker.component';
// import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ConfettiAnimationComponent } from './helpers/confetti-animation/confetti-animation.component';
import { SeatchPipe } from './pipes/search.pipe';
import { DentistInstructionsComponent } from './helpers/dentist-instructions/dentist-instructions.component';
import { TreatmentInstructionsComponent } from './helpers/treatment-instructions/treatment-instructions.component';
import {
  FormsModule as ngFormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { NewStageModalComponent } from './helpers/new-stage-modal/new-stage-modal.component';
import { IprInstructionModalComponent } from './helpers/treatment-instructions/ipr-instruction-modal/ipr-instruction-modal.component';
import { TreatmentTeethWithPinsComponent } from './helpers/treatment-instructions/teeth-with-pins/teeth-with-pins.component';
import { TreatmentTeethWithoutPinsComponent } from './helpers/treatment-instructions/teeth-without-pins/teeth-without-pins.component';
import { VoiceRecorderComponent } from './helpers/voice-recorder/voice-recorder.component';
import { AudioRecordingService } from './helpers/voice-recorder/audio-recording.service';
import { QuantityControlComponent } from './helpers/quantity-control/quantity-control.component';
// import { ShippingLabelModalComponent } from './helpers/shipping-label-modal/shipping-label-modal.component';
import { StickerBarCodeComponent } from './helpers/sticker-bar-code/sticker-bar-code.component';
import { FileDragNDropDirective } from './directives/file-drag-n-drop/file-drag-n-drop.directive';
import { DoingBlinkingIconComponent } from './helpers/doing-blinking-icon/doing-blinking-icon.component';
import { ElapsedTimePipe } from './pipes/statistics-spent-time.pipe';
import { ElapsedTimeClockComponent } from './helpers/elapsed-time-clock/elapsed-time-clock.component';
import { FilterByCategoruesTurnOffPipe } from './pipes/filter-by-categorues-turn-off.pipe';
import {CopyToClipboardDirective} from './directives/copy-to-clipboard/copy-to-clipboard.derective'
import {DynamicToAddComponent} from './helpers/popover-dynamic/dynamic.components'
// import { NgxPaginationModule } from 'ngx-pagination';
import { TutorialModalComponent } from './helpers/tutorial-modal/tutorial-modal.component';
import { TeethControlComponent } from './helpers/teeth-control/teeth-control.component';
import { OrderSelectOrthodonticColoursComponent } from './helpers/order-select-orthodontic-colours/order-select-orthodontic-colours.component';
import { OrthodonticProductColorsComponent } from './helpers/orthodontic-product-colors/orthodontic-product-colors.component';
import { SimpleOrderSelectOrthodonticColoursComponent } from './helpers/simple-order-select-orthodontic-colours/simple-order-select-orthodontic-colours.component';
// import { DragDropModule } from '@angular/cdk/drag-drop';

const NB_MODULES = [
  RouterModule,
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  CommonModule ,
  NbSelectModule,  
  ngFormsModule,
  FormsModule,
  ReactiveFormsModule,
  NbIconModule,
  NbInputModule,
  NbToggleModule,
  NbFormFieldModule,
  NbCardModule,
  NbEvaIconsModule,
  FormsModule,
  NbListModule,
  NbSpinnerModule,
  // NgSelectModule,
  NbPopoverModule,

  // NgxDaterangepickerMd.forRoot(),
  NbCheckboxModule,
  NbTabsetModule,
  // NgxPaginationModule,
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  MainLayoutComponent,
  AuthLayoutComponent,
  DeleteModalApproveComponent,
  OrderSumbitOrderModalComponent,
  FieldErrorDisplayComponent,
  VoiceRecorderComponent,
  CopyToClipboardDirective,
  FileDragNDropDirective,
  TreatmentTeethWithoutPinsComponent,
  TreatmentTeethWithPinsComponent,
  IprInstructionModalComponent,
  DoingBlinkingIconComponent,
  ElapsedTimeClockComponent,
  DynamicToAddComponent,
  TutorialModalComponent,
  TeethControlComponent,
  OrderSelectOrthodonticColoursComponent,
  OrthodonticProductColorsComponent,
  SimpleOrderSelectOrthodonticColoursComponent,
];
const PIPES = [
  SeatchPipe,
  FilterPipe,
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  FilterOrderTypePipe,
  SearchFilterPipe,
  SafePipe,
  OrderByPipe,
  CutTextPipe,
  ElapsedTimePipe,
  FilterByCategoruesTurnOffPipe,
  FilterProductPipe,
  AddSpacePipe
];

@NgModule({
  providers: [AudioRecordingService],
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES]
})
export class ThemeModule {}