import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[] =[] ;
  alphabets:string[]=[];
  result=[];
  public contactList=[];
  constructor(private _ContactsService:ContactsService) {

    this._ContactsService.getAllContacts().subscribe(contact=>{
      this.contacts=contact;
      this.contactList=contact;
     this.result= this.getSeparatedGroupList(this.contactList);
    });
   }

  ngOnInit(): void {
  this.fillAlphbets();
  }
getSeparatedGroupList(contactList:Contact[]){
  if(contactList){

    const sorted = contactList.sort((a, b) => a.firstName > b.firstName ? 1 : -1);
    const grouped = sorted.reduce((groups, contact) => {
      const letter =contact.firstName? contact.firstName.charAt(0).toUpperCase():'';
      groups[letter] = groups[letter] || [];
      letter?groups[letter].push(contact):'';
      return groups;
    }, {});
     this.result = Object.keys(grouped).map(key => ({key, contacts: grouped[key]}));
    console.log(this.result);
    return this.result;
  }

}

  do($event){
    console.log($event);
    $event.preventDefault()
  }
  //fill alphabets array
  fillAlphbets(){
    for (let i = 0; i < 26; i++) {
      let chr = String.fromCharCode(65 + i);
      this.alphabets.push(chr);
      }
  }
  //////////////////////

 /*  objectKeys(result) {
    return Object.keys(result);
} */
}
