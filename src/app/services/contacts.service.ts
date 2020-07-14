import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Observable ,of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Contact } from '../interfaces/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private baseURL = 'api/contacts';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed: ${error.message}`); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http:HttpClient) { }
     getRecentContacts():Observable<any>{
       return this.http.get('../../assets/recent-contact.json');
     }


     getAllContacts():Observable<Contact[]>{
       return this.http.get<Contact[]>(this.baseURL).pipe(
         tap(_=>console.log('fetched contacts')),
        catchError(this.handleError<Contact[]>('getHeroes', []))
       )
     }
     //add new contact
     addNewContact(contact):Observable<any>{
       return this.http.post<Contact>('api/contacts',contact,this.httpOptions)
       .pipe(
        tap((newContact: Contact) => console.log(`added contact w/ name=${newContact.firstName}`)),
         catchError(this.handleError('addContact')));
     }
     //search in contacts
     searchContacts(term: string): Observable<Contact[]> {
      if (!term.trim()) {
        // if not search term, return empty contacts array.
        return of([]);
      }
      return this.http.get<Contact[]>(`${this.baseURL}/?name=${term}`).pipe(
        tap(x => x.length ?
           console.log(`found contacts matching "${term}"`) :
           console.log(`no contacts matching "${term}"`)),
        catchError(this.handleError<Contact[]>('searchContacts', []))
      );
    }
}
