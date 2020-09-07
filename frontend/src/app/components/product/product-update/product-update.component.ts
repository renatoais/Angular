import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private ProductService: ProductService,
              private router:Router , 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product => {
      this.product = product;

    });

  }

  updateProduct():void{
    this.ProductService.update(this.product).subscribe(()=> {
      this.ProductService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products']);
    })
  }

  cancel():void{
    this.router.navigate(['/products']);
  }


}
