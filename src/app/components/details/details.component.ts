import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {WEBSERVICE,MOVIEDBAPIKEY,ADDR} from '../../utils/init'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /*** RETRIEVING VALUE FROM LIST COMPONENT ***/
  @Input() movieDescription:object;

  constructor() { }

  ngOnInit() {
  }

}
