import { APP_ID, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomNumber: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(room: string) {
    this.roomNumber = room;
    console.log("The user entered room number: " + this.roomNumber);
  }

}
