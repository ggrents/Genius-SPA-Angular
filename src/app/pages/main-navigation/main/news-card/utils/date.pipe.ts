import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  transform(dateString: string): string {
    const date = new Date(dateString);
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

    const day = date.getDate().toString().padStart(2, '0');
    const month = monthAbbreviations[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);

    return `${month} ${day} ${year}`;
  }
}
