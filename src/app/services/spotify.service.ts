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
      "Bearer BQCItPNevyVExFrIcz2Lu36MiTNW7A-6pmsZDcfD302RoQhiK97POPBWecTOu4B38DARuVmjJvBPZfI-Mvo"
    });
    
    return this.http.get(url, { headers });
  }
  
  
  // SBox
  
  getArtists(buscado: string) {
    return this.getQuery(`search?q=${buscado}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
      );
    }
    
    getArtist(id: string) {
      return this.getQuery(`artists/${id}`);
      // .pipe( map( data => data['artists'].items));
    }
    
    
  }
  