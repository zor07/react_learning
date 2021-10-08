import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer >
        {store => {
            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
                store.dispatch(updateNewMessageTextActionCreator(''));
            }

            let onNewMessageTextChange = (newMessageText) => {
                store.dispatch(updateNewMessageTextActionCreator(newMessageText));
            }
            return <Dialogs dialogsPage={store.getState().dialogsPage}
                                addMessage={addMessage}
                                onNewMessageTextChange={onNewMessageTextChange}/>;
        }}
    </StoreContext.Consumer>

}

export default DialogsContainer;