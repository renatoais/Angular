import { Product } from './products.model';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackbar: MatSnackBar , private http: HttpClient ) { }

  showMessage(msg: string , isError: boolean = false ): void{
    this.snackbar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  
  
    }
    create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.baseUrl,product).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    errorHandler(e: any): Observable<any>{
      this.showMessage('Ocorreu um Erro',true);
      return EMPTY;
    }
    

    read(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl)

    }

    readById(id:number): Observable<Product>{
      const url=`${this.baseUrl}/${id}`
      return this.http.get<Product>(url)

    }

    update(product: Product): Observable<Product> {
      const url = `${this.baseUrl}/${product.id}`;
      return this.http.put<Product>(url, product).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e)))
      }

      delete(id:number): Observable<Product>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<Product>(url).pipe(
          map((obj) => obj),
          catchError(e => this.errorHandler(e)))

      }

}
