import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

import { ProduitService } from './produit.service'
import { Produit } from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  // prod: Produit;

  produitForm: FormGroup;

  operation: String = "add";

  selectedProduit: Produit;


  constructor(private produitService: ProduitService, private fb: FormBuilder, private route: ActivatedRoute) {
  this.createForm();
   }

  ngOnInit() {
    // this.initProduit();
    // console.log(this.prod);
    // this.produits = this.produitService.getProduits();
    this.initProduit();
    //this.loadProduits(); On remplace par la ligne suivante (un resolve soit une promesse) soit on a le get soit une réponse précise
    this.produits = this.route.snapshot.data.produits;
  }

  createForm() {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    })
  }

  // initProduit(){
  //   this.prod = new Produit();
  //   this.prod.ref = 'aa';
  // }


  loadProduits(){
    this.produitService.getProduits().subscribe(
      data => (this.produits = data),
      error => (console.log("An error was occured", error)),
      () => {console.log("loading produits was done")}
    );
  }

  addProduit() {
    const p = this.produitForm.value;
    console.log("produit service ici ");
    console.log(this.produitService);
    this.produitService.addProduit(p).subscribe(
      res => {
        console.log("ici res "+res);
        console.log("ici loadproduit "+this.loadProduits)
        this.initProduit()
        //ici mon getter après avoir fait le post pour avoir mon dashboard mis à jour
        this.loadProduits();
      }
    );
  }
  //j'instancie un selectProduit de type Produit; dans mon formulaire en front je prend les valeur avec les ngModel
  initProduit(){
    this.selectedProduit = new Produit();
    this.createForm();
  }

  updateProduit() {
    console.log("je suis update")
    const p = this.selectedProduit;
    this.produitService.updateProduit(p).subscribe(
      res => {
        console.log("ici res "+res);
        console.log("ici loadproduit "+this.loadProduits)
        this.initProduit()
        //ici mon getter après avoir fait le post pour avoir mon dashboard mis à jour
        this.loadProduits();
      }
    );
  }

  deleteProduit(){
    console.log("je suis delete")
    const id = this.selectedProduit.id;
    console.log(id);
    this.produitService.deleteProduit(id).subscribe(
      res => {
        console.log("ici res "+res);
        console.log("ici loadproduit "+this.loadProduits)
        console.log("ici ref "+id)
        //je reset mon selectProduit
        this.selectedProduit = new Produit();
        //ici mon getter après avoir fait le post pour avoir mon dashboard mis à jour
        this.loadProduits();
      }
    );
  }
}
