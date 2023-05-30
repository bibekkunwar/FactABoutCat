import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiUsingAxios';

  catData : any;



  private apiUrl = "https://catfact.ninja/fact";
  // private headers ={
  //   'X-RapidAPI-Key': '4950e9e092msh5d64036a2c0fb63p14c1d7jsna11a9211da4c',
  //   'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
  // };


  getFact() {
    axios.get(this.apiUrl)    // include after apiUrl if header present ,{ headers: this.headers }
      .then(response => {
        this.catData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
