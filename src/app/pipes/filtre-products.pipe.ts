import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../domain/produit';

@Pipe({
  name: 'filtreProducts'
})
export class FiltreProductsPipe implements PipeTransform {

  transform(value: Produit[], filterBy: string): Produit[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : '';
    return null;
    // return filterBy ? value.filter();
  }

}
