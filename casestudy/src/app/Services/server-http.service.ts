import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Customer} from '../model/Customer';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
      // Authorization: 'Basic ' + btoa('username:password'),
    }),
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  constructor(private httpClient: HttpClient) { }
  public getCustomer() {
    const url = `${this.REST_API_SERVER}/customer`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addCustomer(data: Customer) {
    const url = `${this.REST_API_SERVER}/customer`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
