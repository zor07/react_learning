import React from "react";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            { store =>
                <Friends friends={store.getState().sidebar.friends} />
            }
        </StoreContext.Consumer>

    )
}

export default FriendsContainer;