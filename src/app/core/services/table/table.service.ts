import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/acount';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private readonly JSON_DB = 'assets/json/db.json';

  constructor(
    private http: HttpClient,
  ) {}

  public getAll(): Observable<User[]> {
    const requestUrl = this.JSON_DB;
    const res =
    this.http.get<User[]>(requestUrl);
    return res;
  }

}
