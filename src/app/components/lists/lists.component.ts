import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  /*** RETRIEVING VALUE FROM APP COMPONENT***/
  @Input() movieList:string[];

  /*** INITIALIZING VARIABLES ***/
  public  selectedMovieDescription : object = {};
  public showLoader : boolean = false;

  constructor() { }

  /**** FUNCTION DEFINATION TO GET MOVIE DETAILS ****/
  getSelectedMovieDetails = (param : object) => {
    this.showLoader = true;
    console.log(param)
    this.selectedMovieDescription = param;
    this.showLoader = false
  }
  
  ngOnInit() {
    
  }

}
