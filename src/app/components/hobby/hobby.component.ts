import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hobbys } from '../../class/interfazHobby';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  form: FormGroup;
  hobbys: Hobbys = {};
  hobbs: any = [];
  paises: any = [];
  ciudades: any = [];
  numTelefono: any= [];
  
  constructor(private formBuilder: FormBuilder, private http: HttpService) {
    this.paises = this.http.selectPais();
    this.hobbs = this.http.selectHobby();
    this.numTelefono= this.http.seleTelefo();
  }

  ngOnInit() {
    this.initF();
    this.desTelefono();
    this.desPais();
    this.desCiudad();
    this.desHobby();
  }

  initF() {
    this.form = this.formBuilder.group({
      'id': [this.hobbys.id],
      'nombre': [this.hobbys.nombre, [Validators.required]],
      'apellido': [this.hobbys.apellido, [Validators.required]],
      'edad': [this.hobbys.edad, [Validators.required, Validators.maxLength(2)]],
      'fecha': [this.hobbys.fecha, [Validators.required]],
      'telefono': [this.hobbys.telefono, [Validators.required]],
      'numTelefono': [this.hobbys.numTelefono, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'numFijo': [this.hobbys.numFijo, [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
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
  getErrorField(field: Array<string |number| string>){
    return this.form.get(field).hasError('required') ? 'El campo es requerido': '';

  }
  numTel(field: Array<string |number| string>){
    return this.form.get(field).hasError('required') ? 'El campo es requerido son 10 numeros': '';

  }
  numFij(field: Array<string |number| string>){
    return this.form.get(field).hasError('required') ? 'El campo es requerido son 7 numeros': '';

  }

  selectCiudad(value) {
    this.ciudades = this.http.selectCiudad(value);
  }

  guardar() {
    if (this.form.invalid) {
      console.log('formulario Invalido');
      return;
    }
    this.http.crearHobby(this.form.value)
      .subscribe(resp => {
        console.log(resp);
      })
  }

  //desactivar telefonos
  desTelefono(){
    this.form.get('telefono').valueChanges
    .subscribe(select => {
      if(select=== 'celular'){
        this.form.get('numTelefono').enable();
        this.form.get('numTelefono').reset();
        this.form.get('numFijo').disable();
        this.form.get('numFijo').reset();
      } else if(select === 'fijo'){
        this.form.get('numTelefono').disable();
        this.form.get('numTelefono').reset();
        this.form.get('numFijo').enable();
        this.form.get('numFijo').reset();
      } else if(select === 'ambos'){
        this.form.get('numTelefono').enable();
        this.form.get('numTelefono').reset();
        this.form.get('numFijo').enable();
        this.form.get('numFijo').reset();
      } else if(select === 'no'){
        this.form.get('numTelefono').disable();
        this.form.get('numTelefono').reset();
        this.form.get('numFijo').disable();
        this.form.get('numFijo').reset();
      } 
    });
  }

  desPais(){
    this.form.get('pais').valueChanges
    .subscribe(select => {
      if (select !=='otr'){
        this.form.get('ciudad').enable();
        this.form.get('ciudad').reset();
        this.form.get('otoPais').disable();
        this.form.get('otoPais').reset();
        this.form.get('otraCiudad').disable();
        this.form.get('otraCiudad').reset();
      } else if (select ==='otr'){
        this.form.get('ciudad').disable();
        this.form.get('ciudad').reset();
        this.form.get('otoPais').enable();
        this.form.get('otoPais').reset();
        this.form.get('otraCiudad').enable();
        this.form.get('otraCiudad').reset();
      }
    });
  }

  desCiudad(){
    this.form.get('ciudad').valueChanges
    .subscribe(select=>{
      if(select !== 'otr' ){
        this.form.get('otraCiudad').disable();
        this.form.get('otraCiudad').reset();
      }else if (select === 'otr' ){
        this.form.get('otraCiudad').enable();
        this.form.get('otraCiudad').reset();
      }
    });
  }
  
  desHobby(){
    this.form.get('hobby').valueChanges
    .subscribe(select =>{
      if ( select !== 'otr'){
      this.form.get('pregunta1').enable();
      this.form.get('pregunta1').reset();
      this.form.get('pregunta2').enable();
      this.form.get('pregunta2').reset();
      this.form.get('pregunta3').enable();
      this.form.get('pregunta3').reset();
      } else if(select === 'otr'){
        this.form.get('pregunta1').enable();
        this.form.get('pregunta1').reset();
        this.form.get('pregunta2').disable();
        this.form.get('pregunta2').reset();
        this.form.get('pregunta3').disable();
        this.form.get('pregunta3').reset();
      }
    });
  } 

}