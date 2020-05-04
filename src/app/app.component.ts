import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){}
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required])
  });

  onSubmit(){
    if(this.profileForm.valid)
    this.http.post('http://localhost:1100/appendData', this.profileForm.value ).subscribe(res=>{
      this.profileForm.reset();
    },(err)=>{
      console.log(err);
    })
  }
}
