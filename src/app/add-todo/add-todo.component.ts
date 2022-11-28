import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
uid=""
id=""
title=""
cs=""
add=()=>{
  let data:any={
    "uid":this.uid,"id":this.id,"title":this.title,"cs":this.cs
  }
  console.log(data)
}
}
