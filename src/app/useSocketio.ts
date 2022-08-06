import io, {Socket} from "socket.io-client";
import Axios from "axios";
import * as http from "http";

export const socketInstance: Socket = io("http://localhost:3000");


export const useSocketIo = () => {
    Axios.get(
        "http://localhost:3000/sessionCheck",
        {
            withCredentials:true,
            httpAgent: new http.Agent({ keepAlive: true }),
        }
    ).then(
        (data) => {
            socketInstance.emit("/root/new_socket_connected");
        }
    )
}


export const useSendMessage = (msg, onMessageFn) => {
    const msgStatus = socketInstance.emit('/root/new_message', {message: msg, sender: "client"});
    if (msgStatus) {
        onMessageFn({message: msg, sender: "client"})
        return true;
    } else {
        console.error("error sending message!", msgStatus)
        return false;
    }
}

export const useAddMessageUpdater = (fn) => {

  socketInstance.on("/root/update_chat" , (data)=>{
      fn(data)
  })
}
