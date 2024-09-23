import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {
    transform(value: string): string {
        let timeSpanParts = value.split('.');
        let hours: number;
        let minutes: number;
        
        if (timeSpanParts.length == 3) {
            let timeParts = timeSpanParts[1].split(':');

            hours = parseInt(timeSpanParts[0]) * 24 + parseInt(timeParts[0]);
            minutes = parseInt(timeParts[1]);
        }
        else {
            let timeParts = timeSpanParts[0].split(':');
            

            hours = parseInt(timeParts[0]);
            minutes = parseInt(timeParts[1]);
        }



        let result = '';
        if (hours > 0) {
            result += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
        }

        if (minutes >= 0) {
            if (result !== '') {
                result += ', ';
            }
            result += `${minutes} min`;
        }

        return result;
    }
}