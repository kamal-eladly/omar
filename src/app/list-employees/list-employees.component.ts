import { Component, OnInit } from '@angular/core';
import { ApiFunctionService } from '../api-function.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  allData :[];
  constructor(private serv:ApiFunctionService) {
    this.serv.get().subscribe((data:any)=>{
      this.allData=data;
    })
   }

  ngOnInit(): void {
  }

}
