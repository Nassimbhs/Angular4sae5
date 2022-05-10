import { ChatService } from './../../service/ChatService';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatMessageDto } from 'src/app/modal/ChatMessageDto';
import { WebSocketService } from 'src/app/service/WebSocketService';
import { Chat } from 'src/app/modal/chat';


@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.css']
})
export class AddChatComponent implements OnInit, OnDestroy {

  constructor
    (
      public webSocketService: WebSocketService,
      private ChatService: ChatService
    ) { this.webSocketService; }

  chat: Chat = new Chat();
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  addChat(){    
    this.ChatService.addChat(this.chat).subscribe(
      (res)=>{
        console.log("the message is  "+res.message)
      }
      );
  }

  sendMessage(sendForm: NgForm) {

    this.addChat();
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);

    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
    console.log("this is user: " + sendForm.value.user);
    console.log("this is message : " + sendForm.value.message);
    setTimeout(function () {
    }.bind(this), 20);

  }


}
