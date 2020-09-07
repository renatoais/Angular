import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private headerService:HeaderService ) { 
    headerService.headerData ={
      title: 'Clientes',
      icon :'people_alt',
      routeUrl: '/customer'
    }
  }


  ngOnInit(): void {
  }

}
