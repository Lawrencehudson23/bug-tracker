import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _httpClient: HttpClient) {}

  getAllBugs() {
    return this._httpClient.get('/api/bugs');
  }

  deleteBug(id) {
    return this._httpClient.delete('/api/bugs/' + id);
  }

  createBug(bug) {
    return this._httpClient.post('/api/bugs', bug);
  }

  getBugById(id) {
    return this._httpClient.get('/api/bugs/' + id);
  }

  updateBug(id, newData) {
    return this._httpClient.put('/api/bugs/' + id, newData);
  }
}
