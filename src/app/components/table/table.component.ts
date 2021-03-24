import { Component } from '@angular/core';
import { Person } from '../../person';
import { TableService } from '../../service/table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  lista: Person[] = [];

  constructor(public service:TableService) {

    this.getPersons();
  }


  getPersons(){
   this.service.getPersonas().subscribe(d=> {
      this.lista = d;
   })
  }



}




