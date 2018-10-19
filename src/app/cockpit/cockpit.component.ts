import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>();
 // newServerName = '';
 // newServerContent = '';
 @ViewChild('serverContentInput') serverContentInput;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput : HTMLInputElement) {
   /* this.serverCreated.emit({
     serverName : this.newServerName,
     serverContent : this.newServerContent
   }); */
   this.serverCreated.emit({
    serverName : serverNameInput.value, // local reference
    serverContent : this.serverContentInput.nativeElement.value  
  });
  }

  onAddBlueprint(serverNameInput : HTMLInputElement) {
    /* this.blueprintCreated.emit({
     serverName : this.newServerName,
     serverContent : this.newServerContent
   }); */
   this.blueprintCreated.emit({
    serverName : serverNameInput.value, // local reference
    serverContent : this.serverContentInput.nativeElement.value
  });
  }
}
