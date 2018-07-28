import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'geneReplace' })

export class GeneReplacePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\./g, '').replace(/\-/g, '');
  }
}