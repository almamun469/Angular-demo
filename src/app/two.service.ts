import { Injectable } from '@angular/core';
import { OneService } from './one.service';

@Injectable({
  providedIn: 'root'
})
export class TwoService {

  constructor(private oneService: OneService) {}

  updateData(newData: any) {
    this.oneService.setData(newData);
  }

  fetchData() {
    return this.oneService.getData();
  }
}



