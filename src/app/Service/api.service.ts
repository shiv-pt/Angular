import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interface/root';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  getData(): Observable<Root> {
    console.log(this.http.get<any>('https://es-school-service-dev-zm5xloquaa-em.a.run.app/public/getStudent'));
    return this.http.get<Root>('https://es-school-service-dev-zm5xloquaa-em.a.run.app/public/getStudent');
  }
}
