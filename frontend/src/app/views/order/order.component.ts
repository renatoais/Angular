import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router ,private headerService:HeaderService ) { 
    headerService.headerData ={
      title: 'Pedidos',
      icon :'shopping_cart',
      routeUrl: '/order'
    }
  }

  ngOnInit(): void {
  }


  navigateToProductCreate():void{
    this.router.navigate(['/order/create'])
  }
}
