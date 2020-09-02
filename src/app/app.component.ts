import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie-details';
  /*** INITAILIZING VARIABLES ***/
  public  getMovieListFromSearchQuery:string[] = []
  constructor() { }

  /*** LISTNER DEFINATION FOR GETING MOVIE LIST FROM SEARCH COMPONENT'S QUERY ****/
  passedMovieList = (passedValueFromSearchComponent : string[]) => {
    
    this.getMovieListFromSearchQuery = passedValueFromSearchComponent
   
  }
  




  ngOnInit() {
    
  }
  
}
