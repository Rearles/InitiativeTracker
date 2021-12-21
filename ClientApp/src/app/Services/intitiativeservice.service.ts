import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Initiative } from '../Interface/initiative';

@Injectable({
  providedIn: 'root'
})
export class IntitiativeserviceService {

  constructor(http: HttpClient) { }


  addinitiative(initiative: Initiative) {

  }
  removeinitiative(initiative: Initiative) {

  }
  getallinitiative() {

  }
}

