import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  title=""
  rate=""
  description=""
  image=""
  sellername=""
  qunatity=""
  
  eventAdd=()=>
  {
    let data:any={
      "title":this.title,
      "rate":this.rate,
      "description":this.description,
      "image":this.image,
      "sellername":this.sellername,
      "qunatity":this.qunatity
      
    }
    console.log(data)
  }

  
}
