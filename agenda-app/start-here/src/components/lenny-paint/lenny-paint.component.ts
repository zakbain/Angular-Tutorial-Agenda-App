import {Component} from '@angular/core';

@Component({
	selector: 'lenny-paint',
	templateUrl: './lenny-paint.component.html'
})

export class LennyPaint {
	attempts = 0;
	cost =  0;

	private attemptToPaint(this) {
		this.attempts++;
		this.cost += 25;
	}

	public getAttempts() {
		return this.attempts;
	}

	public getCost() {
		return this.cost;
	}
}