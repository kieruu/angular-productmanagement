import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IProduct } from "./product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  // connected using json-server api
  private productURL = "http://localhost:5000/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productURL)
      .pipe(tap((data) => JSON.stringify(data)));
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find((p) => p.productId === id))
    );
  }
}
