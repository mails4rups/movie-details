import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WEBSERVICE,MOVIEDBAPIKEY } from "../utils/init";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
  })
  export class Service {
    public serviceheaders : any = new HttpHeaders({ "Content-Type": "application/json" });

    constructor(private http: HttpClient) {}

    /*** service function defination for Get movie list***/
    getMovieList = (searchQuery) => {
        //searchQuery
        const response = this.http.get<any>(WEBSERVICE + "/search/movie?api_key="+MOVIEDBAPIKEY+"&query="+searchQuery, this.serviceheaders);
        return response;
    }

    


  
  }