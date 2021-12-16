import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent implements OnInit {
@Input() data = '';
@Output() copied = new EventEmitter();
  constructor() { }

  onCopy(){
    this.copied.next();
  }

  ngOnInit(): void {
  }

}
