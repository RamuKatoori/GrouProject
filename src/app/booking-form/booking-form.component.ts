import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  packageTitle: string = '';
  fromCity: string = '';
  toCity: string = '';
  startDate: string = '';
  returnDate: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the package title from the route params
    this.packageTitle = this.route.snapshot.paramMap.get('packageTitle') || '';
  }

  onSubmit(): void {
    // Check if required fields are filled
    if (this.fromCity && this.startDate && this.returnDate && this.packageTitle) {
      // Display success message
      alert('Form submitted successfully!');
      console.log('From City:', this.fromCity);
      console.log('To City:', this.fromCity);
      console.log('Start Date:', this.startDate);
      console.log('Return Date:', this.returnDate);
      console.log('Package Title:', this.packageTitle);
      
      // Optionally navigate to a confirmation page or send the data to a service
      // this.router.navigate(['/confirmation']);
    } else {
      // Display error message if any field is missing
      alert('Please fill all the required details.');
    }
  }

  onCancel(): void {
    // Handle the cancel button action, possibly navigating back
    this.router.navigate(['/']);
  }
}
