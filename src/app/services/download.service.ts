import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DownloadService {
  // Change this variable to your url
   PATH = "https://expressapi.bonuxx.repl.co/files";



  constructor(private http:HttpClient) { }



  
  public getAllFiles():Observable<any> {

    return this.http.get<any>(this.PATH);
  }



  public downloadFile(url){
    const headers = new HttpHeaders()
.append('Content-Type', 'application/json')
.append('Access-Control-Allow-Headers', 'Content-Type')
.append('Access-Control-Allow-Methods', 'GET')
.append('Access-Control-Allow-Origin', '*');
    return this.http.get(url,{responseType:"blob"});

}
}