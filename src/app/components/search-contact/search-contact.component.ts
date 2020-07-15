import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.scss'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition(':enter,:leave',[
       animate(1000)
      ])

    ])
  ]
})
export class SearchContactComponent implements OnInit {
  // contacts$:Observable<Contact[]>;
   contacts=[];
   term:string;
  private searchTerms = new Subject<string>();
  //term:string;
  constructor(private _ContactsService:ContactsService) {
    this._ContactsService.getAllContacts().subscribe(contact=>{
      this.contacts=contact;

    })
  }
// Push a search term into the observable stream.
search(term: string): void {
  this.searchTerms.next(term);
}
  ngOnInit(): void {
   /* this.contacts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this._ContactsService.searchContacts(term)),
    );*/
  }

}
