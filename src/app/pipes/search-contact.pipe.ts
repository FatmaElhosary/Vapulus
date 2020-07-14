import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'searchContact',
})
export class SearchContactPipe implements PipeTransform {
  transform(contacts, term: string): any {
    term=term.trim();
    if (!term) {
      return [];
    }
    if (contacts.length) {
      return contacts.filter((item) =>
        item.firstName.toLowerCase().includes(term.toLowerCase())||item.lastName.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
