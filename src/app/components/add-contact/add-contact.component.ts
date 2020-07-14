import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})


export class AddContactComponent implements OnInit {
  phonePrefix:string[]=["+02","+44"];
  fileData: File = null;
  previewUrl:any = null;
  contacts:Contact[]=[];
  constructor(private _Router:Router, private _FormBuilder:FormBuilder,
    private _ContactsService:ContactsService){}

  userInformationForm =this._FormBuilder.group({
    'firstName': [null, [Validators.required,Validators.minLength(3)]],
    'lastName': [null, [Validators.required,Validators.minLength(3)]],
    'email':[null,[Validators.required,Validators.email]],
    'mobileNumber':[null,[Validators.required]],
    'image':[null,[]],
    });
  ngOnInit(): void {
  }
  goBack(){
    this._Router.navigateByUrl('/contacts');
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview
  let reader = new FileReader();
  reader.readAsDataURL(this.fileData);
  reader.onload = (_event) => {
    this.previewUrl = reader.result;
  }
}

addContact(){

     /* this.http.post('url/to/your/api', this.userInformationForm.value)
      .subscribe(res => {
        console.log(res);
        alert(this.userInformationForm.value);
      })  */
      let newContact :Contact;
      newContact=this.userInformationForm.value;
       this._ContactsService.addNewContact(newContact).subscribe((contact)=>{
         this.contacts.push(contact);
        this._Router.navigateByUrl('/contacts'),(err)=>console.log(err)
      }
      );
      console.log(this.userInformationForm.value);
      console.log(newContact);

}

}
