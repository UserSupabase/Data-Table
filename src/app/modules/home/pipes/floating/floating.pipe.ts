import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floating'
})
export class FloatingPipe implements PipeTransform {

  transform(amount: string): number {
    const res = parseFloat(amount) * 2 * Math.random();
    return res;
  }

}
