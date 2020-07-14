import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestContactsComponent } from './components/latest-contacts/latest-contacts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';


const routes: Routes = [
 {path:'',redirectTo: 'contacts', pathMatch: 'full' },
 {path:'contacts',component:ContactsComponent},
 {path:'add-contact',component:AddContactComponent},
 {path:'latest-contacts',component:LatestContactsComponent},
 {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
