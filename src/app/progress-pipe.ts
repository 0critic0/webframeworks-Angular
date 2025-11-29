import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progress',
  standalone: false
})
export class ProgressPipe implements PipeTransform {

  transform(status: string, pagesRead: number, totalPages: number): string {
  const _isNumeric = function (n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  if (status === 'Reading' && totalPages && _isNumeric(totalPages) && _isNumeric(pagesRead)) {
    let thisProgress = '0';
    let unit = '%';
    
    if (totalPages > 0) {
      const percentage = (pagesRead / totalPages) * 100;
      thisProgress = percentage.toFixed(1);
    } else {
      thisProgress = '0';
    }
    
    return thisProgress + unit;  // Shows actual calculated % (e.g., "42.5%")
  } else if (status === 'Complete') {
    return '100%';              // Fixed 100% for completed
  } else if (status === 'To Read') {
    return '0%';                // Fixed 0% for to-read
  } else {
    return '?';
  }
}

}
