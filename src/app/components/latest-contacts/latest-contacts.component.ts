import { Component, OnInit } from '@angular/core';
import { Recentcontact } from 'src/app/interfaces/recentcontact';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-latest-contacts',
  templateUrl: './latest-contacts.component.html',
  styleUrls: ['./latest-contacts.component.scss']
})
export class LatestContactsComponent implements OnInit {
 contacts: Contact[]=[];
  constructor(private _ContactsService:ContactsService) {
     _ContactsService.getAllContacts().subscribe(contact=>this.contacts=contact.slice(1,5));

   }

  ngOnInit(): void {
  }

}
