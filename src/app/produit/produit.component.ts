import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produit.mock.service'
import { Produit } from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  // prod: Produit;
  constructor(private produitService: ProduitMockService) { }

  ngOnInit() {
    // this.initProduit();
    // console.log(this.prod);
    this.produits = this.produitService.getProduits();
  }

  // initProduit(){
  //   this.prod = new Produit();
  //   this.prod.ref = 'aa';
  // }
}
