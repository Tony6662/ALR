import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  confirmationMessage: string = "";
  roomNumber: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(room: string) {
    this.roomNumber = room;
    this.confirmationMessage = "Desea ir a la habitación " + this.roomNumber + "?";
  }

  submitRoute() {
    console.log("Talking with the API to confirm the room number: " + this.roomNumber);
    this.router.navigate(['/map']);
  }
}
