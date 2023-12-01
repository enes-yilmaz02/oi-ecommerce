import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsEndpoint = 'products';

  creoterOrdersEndPoint = 'orders';

  creoter = 'creoter';

  orders = 'orders';

  uploadEndPoint = 'upload';

  category= 'category';



  constructor(private commonService: CommonService) {}

  calculateTotalRevenue(orders: any[]): number {
    return orders.reduce((acc, current) => acc + current.totalAmount, 0);
  }

  // Ürün ekleme işlemi
  addProduct(product: any) {
    return this.commonService.post(`${this.productsEndpoint}`, product);
  }

  // orders ekleme işlemi
  addProductOrders(product: any) {
    return this.commonService.post(`${this.creoterOrdersEndPoint}`, product);
  }

  // get all orders  işlemi
  getAllProductOrders() {
    return this.commonService.get(`${this.creoterOrdersEndPoint}`);
  }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.commonService.post(
      `${this.productsEndpoint}/${this.uploadEndPoint}`,
      formData
    );
  }
  // Ürün güncelleme işlemi
  updateProduct(productId: any, body: any) {
    return this.commonService.put(
      `${this.productsEndpoint}/${productId}`,
      body
    );
  }

  // Ürün silme işlemi
  deleteProduct(id: string) {
    return this.commonService.delete(`${this.productsEndpoint}/${id}`);
  }

  // Tüm ürünleri getirme
  getProducts(): Observable<Product[]> {
    return this.commonService.get(this.productsEndpoint);
  }

   // Categorize edilmiş ürünleri getirme
   getProductsByFilter(category:any): Observable<Product[]> {
    return this.commonService.get(`${this.productsEndpoint}/${this.category}/${category}`);
  }

  // Tüm creoter ürünleri getirme
  getCreoterProducts(creoterId: string): Observable<Product[]> {
    return this.commonService.get(
      `${this.productsEndpoint}/${this.creoter}/${creoterId}`
    );
  }

  // Tüm creoter ürünleri getirme
  getAllCreoterOrders(): Observable<Product[]> {
    return this.commonService.get(`${this.orders}`);
  }

   // Tüm creoter ürünleri getirme
   getAllCreoterOrdersById(id:string): Observable<Product[]> {
    return this.commonService.get(`${this.orders}/${id}`);
  }

  // Tüm creoter ürünleri getirme
  getCreoterProduct(
    creoterId: string,
    productId: string
  ): Observable<Product[]> {
    return this.commonService.get(
      `${this.productsEndpoint}/${this.creoter}/${creoterId}/${productId}`
    );
  }

  // id göre creoter ürün silme
  deleteCreoterProduct(
    creoterId: string,
    productId: string
  ): Observable<Product[]> {
    return this.commonService.delete(
      `${this.productsEndpoint}/${this.creoter}/${creoterId}/${productId}`
    );
  }

  // Bir ürünü getirme
  patchProductById(id: any) {
    return this.commonService.get(`${this.productsEndpoint}/${id}`);
  }
}
