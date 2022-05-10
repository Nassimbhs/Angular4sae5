import {Injectable} from "@angular/core";
import { reservationtravel } from 'src/app/modal/reservationtravel'; 
import { reservationService } from 'src/app/service/reservationService '; 

var SockJs = require("sockjs-client");
var Stomp = require("stompjs");

@Injectable()
export class WebSocket {

    constructor() { }

    connect() {
        let socket = new SockJs(`http://localhost:8089/SpringMVC/noti/notify`);

        let stompClient = Stomp.over(socket);

        return stompClient;
    }


}