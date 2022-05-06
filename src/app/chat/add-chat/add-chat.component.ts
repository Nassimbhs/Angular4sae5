import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/modal/ChatMessageDto';
import { WebSocketService } from 'src/app/service/WebSocketService';


@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.css']
})
export class AddChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) { this.webSocketService; }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
   
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
    console.log("this is user: " + sendForm.value.user);
    console.log("this is message : " + sendForm.value.message);
    setTimeout(function () {
    }.bind(this), 20);
  
  }


}
