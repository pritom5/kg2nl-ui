import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { version } from '../../package.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title       = 'app';
  output_data = ""
  ver  = version;
  exampleForm = new FormGroup ({
    input: new FormControl(),
  });

  formSubmit() {
    console.log(this.exampleForm.controls.input.value);
    this.output_data = "Loading...";
    
    setTimeout(() => 
    {
      (async () => {
        const url        = new URL('http://dummy.restapiexample.com/api/v1/employees');
        const response   = await fetch( url.toString());
        const data       = await response.json();
        console.log(data.data[0]);
        this.output_data = data.data[0].id;
      })()
    },
    2000);
  }
}