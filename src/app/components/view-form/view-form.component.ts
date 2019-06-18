import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Hobbys } from '../../class/interfazHobby';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  hobby: Hobbys[]=[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getHobby();
  }

  getHobby(){
    this.http.mostrar()
    .subscribe((resp:any) => {
      console.log(resp);
      return this.hobby = resp;
    });
  }

}
