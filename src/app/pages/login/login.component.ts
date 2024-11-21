import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/service/http/http.service';
import { Login } from 'src/app/interfaces/Login';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	hide = signal(true);
	clickEvent(event: MouseEvent) {
		this.hide.set(!this.hide());
		event.stopPropagation();
	}

	userForm: FormGroup;
	observable$ = Observable<any>

	constructor(
		private fb: FormBuilder,
		private http: HttpService,
		private dialog: MatDialog,
		private router: Router
	) {
		this.userForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
		});
	}

	onSubmit() {
		const login: Login = this.userForm.value;
		const component    = this.dialog;
		const redirect     = this.router;
		this.http.post(`usuarios/v1`, login).subscribe({
			next(e) {
				localStorage.setItem('token-compraoq',e.token)
				setTimeout(()=>redirect.navigateByUrl('/'),200);
			},
			error(e) {
				var message = 'Aconteceu um erro na requisição';
				if (e.status == 504) {
					message = 'Aconteceu um erro de conexão';
				}
				component.open(DialogComponent, {
					data: { message, title: 'ATENÇÃO !!!' },
				});
			},
		});
	}

}
