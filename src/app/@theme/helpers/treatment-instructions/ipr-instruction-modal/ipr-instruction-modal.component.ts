import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-ipr-instruction-modal',
  templateUrl: './ipr-instruction-modal.component.html',
  styleUrls: ['./ipr-instruction-modal.component.scss']
})

export class IprInstructionModalComponent implements OnInit {
  @Input() data: any
 
  amount: any = 0.1;
  before: any = 4
  submitted: boolean = false;

  amountLabel: string = "Centered to face";
  beforeLabel: string = "Centered to face";
  loading = false;
  
  constructor(
      protected ref: NbDialogRef<IprInstructionModalComponent>,
      private toastrService: NbToastrService,
      private router: Router
    ) { }
  
    ngOnInit() {
    }
    
    cancel(){
      this.ref.close(false);
    }

    submit(form: NgForm) {
      // if (form.invalid) {
      //   return;
      // }
      this.submitted = true;
      this.loading = true;
      this.ref.close({result: true, amount: this.amount , beforeStep: this.before });
    }

    formatLabel(value: number) {
      if (value >= 1000) {
        return Math.round(value / 1000) + "k";
      }
      return Math.abs(value);
    }
  
    getSliderValue(event) {
     
      if (
        event.source._elementRef.nativeElement.classList.contains("amountLabel")
      ) {
        this.amountLabel = this.setLabel(event.value);
        this.amount = event.value;
      } else {
        this.beforeLabel = this.setLabel(event.value);
        this.before = event.value;
      }
    }
  
    changeSliderValue(event: any){
     
    }


  setLabel(value){
    let label = "";
    switch (true) {
      case value < 0:
        label = `Shifted left by ${Math.abs(value)} mm`;
        break;
      case value > 0:
        label = `Shifted right by ${Math.abs(value)} mm`;
        break;
      default:
        label = "Centered to face";
    }
    return label;
  }
  
    initSliderValue(value : any, type: string) {
      // if ( type =="lower") {
      //   this.lowerLabel = this.setLabel(value);
      // }
      // else {
      //   this.upperLabel = this.setLabel(value);
      // }
    }
  
    
    
  }