import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'ngx-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {
  @Input() selectedDate?: any;
  selected: any;
  alwaysShowCalendars: boolean;
  @Output() changeDate: EventEmitter<any> = new EventEmitter<any>();
  selectedList: any;

  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  randeSelectArray: any[] = [
    {
      name: 'Today',
      date: {
        startDate: moment(),
        endDate: moment()
      }
    },
    {
      name: 'Yesterday',
      date: {
        startDate: moment().subtract(1, 'days'),
        endDate: moment().subtract(1, 'days')
      }
    },
    {
      name: 'Last 7 Days',
      date: {
        startDate: moment().subtract(6, 'days'),
        endDate: moment(),
      },
    },
    {
      name: 'Last 30 Days',
      date: {
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
      }
    },
    {
      name: 'This Month',
      date: {
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
      }
    },
    {
      name: 'Last Month',
      date: {

        startDate: moment().subtract(1, 'month').startOf('month'),
        endDate: moment().subtract(1, 'month').endOf('month'),

      }
    },
  ]

  ngOnInit(): void {
    this.selected = this.selectedDate? this.selectedDate : this.randeSelectArray[0].date;
  }
  selectedByList() {
    this.selected = this.ranges[`${this.selectedList}`]
  }
  

  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];
  
  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }
  ngModelChange(event: any) {
    this.changeDate.emit(this.selected)
  }
  constructor() {
    this.alwaysShowCalendars = true;
  }
}
