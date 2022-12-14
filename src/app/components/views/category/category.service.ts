import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Category[]> {
    const url = `${this.baseUrl}/categories`
    return this.http.get<Category[]>(url)
  }

  create(category: Category): Observable<Category>{
    const url = `${this.baseUrl}/categories`
    return this.http.post<Category>(url, category)
  }

  message(string: String): void {
    this.snack.open(`${string}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }
}
