import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'replace'})
export class Replace implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\./g, '').replace(/\-/g, '');
  }
}