import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { Observable } from 'rxjs';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
//Rooms:AngularFireList<any[]>;
Rooms:Observable<any>;
Room:any;
  constructor(db:AngularFireDatabase) { 
this.Rooms=db.object('/Rooms').valueChanges();
this.Rooms.subscribe(rooms=>{
  this.Room=rooms;
  console.log(this.Room);
})


  }

  ngOnInit() {
  }

}
