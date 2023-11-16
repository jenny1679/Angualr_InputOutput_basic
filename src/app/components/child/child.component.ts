import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() name : any
  @Input() obj : any

  @Output() dataEvent = new EventEmitter<string>()

  addUser(value:any){
    this.dataEvent.emit(value)
  }
}
