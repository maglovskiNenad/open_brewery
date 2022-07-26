import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchBrewary } from '../model/SearchBrewery.model';
import { SingleBrewery } from '../model/SingleBrewery.model';

const baseUrl = 'https://api.openbrewerydb.org/breweries';

@Injectable({
  providedIn: 'root',
})
export class OpenBreweryService {
  constructor(private http: HttpClient) {}

  getSingleBrewery(): Observable<SingleBrewery> {
    return this.http.get(`${baseUrl}/madtree-brewing-cincinnati`).pipe(
      map((data: any) => {
        return new SingleBrewery(data);
      })
    );
  }

  getListOfBreweries(): Observable<SingleBrewery[]> {
    return this.http.get(`${baseUrl}?per_page=100`).pipe(
      map((data: any) => {
        return data && data.map((element: any) => new SingleBrewery(element));
      })
    );
  }

  getSearchListForBrewary(name: string): Observable<SearchBrewary[]> {
    return this.http.get(`${baseUrl}/autocomplete?query=${name}`).pipe(
      map((data: any) => {
        return data && data.map((element: any) => new SearchBrewary(element));
      })
    );
  }
}
