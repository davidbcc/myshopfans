// import { Injectable } from 'angular2/core';
// import { IUser }    from '../models/IUser';
// import { User}    from '../models/User.model';
// import { Http, Response, Headers, RequestOptions } from 'angular2/http';
// import { Router } from 'angular2/Router';
// import { Observable } from 'rxjs/Observable';
// import{contentHeaders} from  '../common/headers';
// @Injectable()
// export class LoginServiceComponent {
//     constructor(private _http: Http,private _router:Router) { }
// private _apiUserLoginUrl = 'http://localhost:3030/api/login';
//     login(username: string, password: string) {
//         event.preventDefault();
//         let body = JSON.stringify({ username, password });
//         this._http.post(this._apiUserLoginUrl, body, { headers: contentHeaders })
//             .subscribe(
//             response => {
//                 localStorage.setItem('id_token', response.json().id_token);
//                 this._router.navigate(['/Landing']);
//             },
//             error => {
//                 alert(error.text());
//                 console.log(error.text());
//             }
//             );
//     }
//     private extractData(res: Response) {
//         let body = res.json();
//         return body.data || {};
//     }
//     private handleError(error: any) {
//         // In a real world app, we might use a remote logging infrastructure
//         // We'd also dig deeper into the error to get a better message
//         let errMsg = (error.message) ? error.message :
//             error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//         console.error(errMsg); // log to console instead
//         return Observable.throw(errMsg);
//     }
// } 
//# sourceMappingURL=loginService.component.js.map