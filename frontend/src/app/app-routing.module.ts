import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  { path: 'map', component: MapComponent }
  , { path: 'room', component: RoomComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
