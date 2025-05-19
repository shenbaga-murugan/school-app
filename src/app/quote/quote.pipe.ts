import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quote',
  standalone: false
})
export class QuotePipe implements PipeTransform {

  transform(quote: string, ...args: unknown[]): string {
    let quoteText: string = quote.substring(0, quote.lastIndexOf('-'));
    let author: string = quote.substring(quote.lastIndexOf('-'), quote.length);
    return `${quoteText} <i><b>${author}</b></i>`;
  }

}
