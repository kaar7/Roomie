import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomComponent } from './Component/room/room.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
//Forms   

import{ FormsModule, ReactiveFormsModule } from'@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RentComponent } from './Component/rent/rent.component';
import { ChatComponent } from './Component/chat/chat.component';

//FireBase
import { AngularFireModule } from 'angularfire2'
import{AngularFireDatabaseModule} from 'angularfire2/database'
//Routing

import{Routes, RouterModule} from '@angular/router'
import { environment } from '../environments/environment';

const appRoutes:Routes=[
{path:"", component:RentComponent},
{path:"Room", component:RoomComponent},
{path:"Chat", component:ChatComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HeaderComponent,
    SidemenuComponent,
    RentComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
