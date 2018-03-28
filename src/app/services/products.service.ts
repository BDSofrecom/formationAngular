import { Injectable } from '@angular/core';
import { Produit } from '../domain/produit';

@Injectable()
export class ProductsService {
  private data = [{code: 'P100', nom: 'Café', prixUnitaire: 1.222},
  {code: 'P200', nom: 'Jus', prixUnitaire: 2000},
  {code: 'P210', nom: 'Jus Orange', prixUnitaire: 3000},
  {code: 'P220', nom: 'Jus Citron', prixUnitaire: 3000},
  {code: 'P230', nom: 'Jus Pêche', prixUnitaire: 4000},
  {code: 'P240', nom: 'Jus Fraise', prixUnitaire: 3000},
  {code: 'P250', nom: 'Jus Banne', prixUnitaire: 3000},
  {code: 'P260', nom: 'Jus Banne/Fraise', prixUnitaire: 5000},
  {code: 'P300', nom: 'Thé', prixUnitaire: 0.520}];
  constructor() { }
  public getAllProduct(): Produit[] {
    return this.data;
  }
}
