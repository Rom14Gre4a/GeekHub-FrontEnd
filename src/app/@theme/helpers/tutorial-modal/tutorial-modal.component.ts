import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tutorial-modal',
  templateUrl: './tutorial-modal.component.html',
  styleUrls: ['./tutorial-modal.component.scss']
})
export class TutorialModalComponent implements OnInit {
  @Input() tutorial: any;
  isLoader: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoader = false; 
    }, 1000);
  }

}
