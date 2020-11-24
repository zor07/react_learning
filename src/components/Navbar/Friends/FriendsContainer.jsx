import React from "react";
import StoreContext from "../../../StoreContext";
import Friends from "./Friends";

const FriendsContainer = () => {

    return <StoreContext.Consumer>
            {
                (store) => {
                    debugger;
                       return <Friends state={store.getState().sidebar.friendList}/>
                }
            }
        </StoreContext.Consumer>
};

export default FriendsContainer;