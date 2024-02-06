import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  transform(_date: Date): string {
    const monthAbbreviations = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month = monthAbbreviations[_date.getMonth()];
    const year = _date.getFullYear().toString().slice(-2);
    const day = _date.getDate().toString().padStart(2, '0');

    return `${month} ${day} ${year}`;
  }
}
