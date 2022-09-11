import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


export class Table{
  constructor(
  public regno: string,
  public fname: string,
  public mname: string,
  public lname: string,
  public gender: string,
  public cat: string,
  public mob: number,
  public admdate: Date,
  //public tno: number,
  ){

  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables: any;
  constructor(
    private httpClient: HttpClient 
  ) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(){
    this.httpClient.get<any>('https://es-school-service-dev-zm5xloquaa-em.a.run.app/public/getStudent').subscribe(
      response => {
        console.log(Object.values(response.list));
        this.tables = Object.values(response.list);
      }
    );
  }
}
 /*pipe(map(response => ({
      regno: response.list.registrationNumber,
      fname: response.list.firstName,
      mname: response.list.middleName,
      lname: response.list.lasttName,
      gender: response.list.firstName,
      cat: response.list.gender,
      mob: response.list.category,
      admdate: response.list.admissionDate,
      //tno: response.list.transportInfo.using,
  } as Table)))
  .subscribe(response => console.log(response));*/

  