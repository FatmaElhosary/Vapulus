import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'searchContact',
})
export class SearchContactPipe implements PipeTransform {
  transform(contacts, term: string): any {

    if (!term.trim()) {
      return [];
    }
    //||item.lastName.toLowerCase().includes(term.toLowerCase())
    if (contacts.length) {
      return contacts.filter((item) =>
      item.firstName? item.firstName.toLowerCase().includes(term.toLowerCase()):[]
      );
    }
  }
}
