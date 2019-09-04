import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    
  }
  
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    
  
    const headers = new HttpHeaders({
      Authorization:
      "Bearer "
    });
    
    return this.http.get(url, { headers });
  }
  
  
    
    
  }
  