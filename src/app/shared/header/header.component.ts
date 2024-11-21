import {  Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	showFilter: boolean = false;
	show: boolean = true;

	showSidenav() {
		this.show = !this.show;
	}
}
