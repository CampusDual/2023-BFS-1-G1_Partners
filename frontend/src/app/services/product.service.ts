import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Product } from "../model/product";
import { formatDate, registerLocaleData } from "@angular/common";
import localerES from "@angular/common/locales/es";


@Injectable({providedIn: 'root'})
export class ProductService{

    private urlEndpoint: string = 'http://localhost:30030/products';
    private header = new HttpHeaders ({'Content-Type': 'application/json'});   

    constructor(private http: HttpClient, private router: Router){

    }

    getProducts(): Observable<Product[]>{
        
        return this.http.get(this.urlEndpoint.concat('/getAll')).pipe(
            tap(
                response => {
                    let productos = response as Product[];
                    productos.forEach(
                        producto => console.log(producto.name)
                    )
                }           
            ),
            map(
                response => {
                    let productos = response as Product[];
                    return productos.map(producto => {
                        registerLocaleData(localerES, 'es');
                        producto.date_added = formatDate(producto.date_added, 'EEEE dd, MMMM yyyy', 'es');
                        return producto;
                    })
                }           
            )
        )
    }
}


