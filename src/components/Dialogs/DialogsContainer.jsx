import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let updateNewMessageBody = (text) => {
                        store.dispatch(updateNewMessageBodyCreator(text));
                    };

                    let sendMessage = () => {
                        store.dispatch(sendMessageCreator());
                    };
                    return <Dialogs updateNewMessageBody={updateNewMessageBody}
                                    sendMessage={sendMessage}
                                    dialogsPage={state.dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
