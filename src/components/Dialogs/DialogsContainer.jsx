import React from 'react';
import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const WithUrlDataContainerComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText}) (WithUrlDataContainerComponent);

export default DialogsContainer;