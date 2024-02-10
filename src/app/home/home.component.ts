import { Component, OnInit } from '@angular/core';
import { IPerson } from './person.interface';
import { CrudService } from '../core/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string ='Hello world.'
  student: IPerson;
  userInputName: string = ''
  constructor(private _service: CrudService) {
  this.student ={
      age: 23,
      id:7,
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_user_Icon.png',
      name: 'Giorgi',
      username: 'Muradashvili',
      email: 'muradashvili777@gmail.com',
      employed: true,
      salary: 2000,
      phone: '598109665',
      country: 'Georgia',
      company: {
        name:'IT',
        catchphrase:'Angular',
        bs:'Developer'
      }
  }
  }

  ngOnInit(): void {
    // console.log('Component Initialized');
    this._service.getPosts().subscribe(data => console.log(data));

    
  }
  
SetUserName(name: string){
  this.student.name = name
 }
}
