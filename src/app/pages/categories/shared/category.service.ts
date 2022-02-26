import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import {Categories} from './categories.model'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private apiPath:string="api/categories";

  constructor(private http: HttpClient) { }


  getAll(): Observable<Categories[]>{
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }

  getById(id:number) : Observable<Categories>{
    const url=`${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  create(category: Categories) : Observable<Categories>{
    return this.http.post(this.apiPath, category).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  update(category:Categories) : Observable<Categories>{
    const url = `${this.apiPath}/${category.id}`;

    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(()=> category)
    )
  }

  delete(id:number ) :Observable<any>{
    const url=`${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(()=>null)
    )
  }

  //Private Methods
  private jsonDataToCategories(jsonData: any[]): Categories[]{
    const categories: Categories[]=[];
    jsonData.forEach(element=>categories.push((element as Categories)));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Categories{
    return jsonData as Categories;
  }
  private handleError(error:any): Observable<any>{
    console.log("Erro na Requisição =>", error);
    return throwError(error);
  }
}
