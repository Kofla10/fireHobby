import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hobbys } from '../../class/interfazHobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  form: FormGroup;
  hobbys: Hobbys = {};


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initF();
  }

  initF(){
    this.form = this.formBuilder.group({
      'nombre': [this.hobbys.nombre, [Validators.required]],
      'apellido': [this.hobbys.apellido, [Validators.required]],
      'edad': [this.hobbys.edad, [Validators.required]],
      'fecha': [this.hobbys.fecha, [Validators.required]],
      'telefono': [this.hobbys.telefono, [Validators.required]],
      'numTelefono': [this.hobbys.numTelefono, [Validators.required]],
      'numFijo': [this.hobbys.numFijo, [Validators.required]],
      'pais': [this.hobbys.pais, [Validators.required]],
      'ciudad': [this.hobbys.ciudad, [Validators.required]],
      'otoPais': [this.hobbys.otroPais, [Validators.required]],
      'otraCiudad': [this.hobbys.otraCiudad, [Validators.required]],
      'hobby': [this.hobbys.hobby, [Validators.required]],
      'pregunta1': [this.hobbys.pregunta1, [Validators.required]],
      'pregunta2': [this.hobbys.pregunta2, [Validators.required]],
      'pregunta3': [this.hobbys.pregunta3, [Validators.required]]
    });
  }





}
