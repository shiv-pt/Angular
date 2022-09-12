import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Table } from 'src/app/Table';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/Service/api.service';
import { Root } from 'src/app/Interface/root';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'StudentData';
  root!: Root; 
  constructor(private apiService: APIService){}

  ngOnInit(): void {
    this.onGetData();
  }
  onGetData(): void {
    this.apiService.getData().subscribe(
      (response) => {
        console.log(response);
        console.log(response.list);
        this.root = response;
      }
    );
  }
}