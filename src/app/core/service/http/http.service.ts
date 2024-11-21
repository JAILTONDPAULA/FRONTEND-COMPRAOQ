import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class HttpService {

  	constructor(private http: HttpClient) { }

	post(api: string, playload: any): Observable<any>{
		return this.http.post(api,playload);
	}

}
