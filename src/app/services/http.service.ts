import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hobbys } from '../class/interfazHobby';
import { map } from 'rxjs/operators';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  pais: any = [];
  hobby: any = [];
  numero: any = [];
  private url = 'https://crud-50f3c.firebaseio.com';

  constructor(private http: HttpClient) { }


  crearHobby(hobby: Hobbys) {
    return this.http.post(`${this.url}/hobby.json`, hobby)
      .pipe(map((resp: any) => {
        hobby.id = resp.name;
        return hobby;
      }));
  }
  mostrar() {
    return this.http.get(`${this.url}/hobby.json`)
    .pipe(map(resp => {
      return this.crearArreglo(resp);
    }))
  }

  crearArreglo(Obj: Object) {
    const hobbys: Hobbys[] = [];
    //hacemos el barrido de las llaves
    Object.keys(Obj).forEach(key => {
      const hobby: Hobbys = Obj[key];

      hobbys.push(hobby);
    });
    return hobbys;
  }

  selectPais() {
    this.pais = [
      { id: 'colombia', name: 'Colombia' },
      { id: 'brasil', name: 'Brasil' },
      { id: 'chile', name: 'Chile' },
      { id: 'argentina', name: 'Argentina' },
      { id: 'otr', name: 'Otro' }
    ];
    return this.pais;
  }

  seleTelefo() {
    this.numero = [
      { id: 'celular', name: 'Celular' },
      { id: 'fijo', name: 'Fijo' },
      { id: 'ambos', name: 'Celular/Fijo' },
      { id: 'no', name: 'No' },
    ];
    return this.numero;
  }


  selectCiudad(value) {

    let ciudad;

    if (value === 'colombia') {
      ciudad = [
        { id: 'cali', name: 'Cali' },
        { id: 'medellin', name: 'Medellin' },
        { id: 'palmira', name: 'Palmira' },
        { id: 'otr', name: 'Otra' }
      ];
    } else if (value === 'brasil') {
      ciudad = [
        { id: 'rio', name: 'Rio De Janeiro' },
        { id: 'por', name: 'Porto Alegre' },
        { id: 'mana', name: 'Manaos' },
        { id: 'otr', name: 'Otra' }
      ];
    } else if (value === 'chile') {
      ciudad = [
        { id: 'santiagoChile', name: 'Santiago De Chile' },
        { id: 'conceoción', name: 'Conceoción' },
        { id: 'Temuco', name: 'Temuco' },
        { id: 'otr', name: 'Otra' }
      ];
    } else if (value === 'argentina') {
      ciudad = [
        { id: 'buenosAires', name: 'Buenos Aires' },
        { id: 'portoAlegre', name: 'Porto Alegre' },
        { id: 'manaos', name: 'Manaos' },
        { id: 'otr', name: 'Otra' }
      ];
    }
    return ciudad;
  }

  selectHobby() {
    this.hobby = [
      { id: 'futbol', name: 'Futbol' },
      { id: 'cine', name: 'Cine' },
      { id: 'novelas', name: 'Novelas' },
      { id: 'programar', name: 'Programacion' },
      { id: 'otr', name: 'Otro' }
    ];
    return this.hobby;
  }

}
