import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Service } from "../../utils/service";
import { PROJECTNAMEALIAS } from "../../utils/init";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /*** EMITING VALUE TO APP COMPONENT ***/
  @Output() movieListEmitter: EventEmitter<any> = new EventEmitter<any>();

  /*** INITIALIZING VARIABLES ****/
  public searchQuery : string;
  public searchList : string[] = [];
  public showLoader:boolean = false;

  constructor(public service:Service) { }

  /*** FUNCTION DEFINATION FOR GETTING SERACH QUERY ***/
  getSearchQwerty = (e) =>{
    e.preventDefault();
    this.showLoader = true;
    this.service.getMovieList(this.searchQuery).subscribe(data=>{
      this.searchList = data['results'];
      console.log(this.searchList)
      this.movieListEmitter.emit(this.searchList);
      this.showLoader = false;
     },error=>{
      this.showLoader = false;
      alert('Server Error')
     })
    
  }

  ngOnInit() {
  }

}
