import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild(ModalDirective) modal: ModalDirective;

	timeInput = new FormControl();
	subjectInput = new FormControl();
	locationInput = new FormControl();
	descriptionInput = new FormControl();

	events: Array<any> = 
	[{time: "07:00AM", subject: "Dance with bears", location: "Meadow", description: "The bears are buds"},
	{time: "08:00AM", subject: "Coffee for One", location: "One Line Koffee", description: "Sour Coffee for sour boy"},
	{time: "10:00AM", subject: "Stare at Jupiter", location: "The Grand Telescope", description: "If you look closely, you'll see the aliens"},
	{time: "12:00PM", subject: "Cry"}];

	deleteEvent(event: any) {
		const itemIndex = this.events.findIndex(ev => ev === event);
		this.events.splice(itemIndex, 1);
	}

	addNewEvent() {
		const newEvent: any = {
			time: this.timeInput.value,
			subject: this.subjectInput.value,
			location: this.locationInput.value,
			description: this.descriptionInput.value
		};

		this.events.push(newEvent);

		this.timeInput.setValue('');
		this.subjectInput.setValue('');
		this.locationInput.setValue('');
		this.descriptionInput.setValue('');

		this.modal.hide();
	}
}
