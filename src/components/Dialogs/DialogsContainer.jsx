import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage, updateNewMessageText})
)(Dialogs);