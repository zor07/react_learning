const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let dialogsPage = {
    users: []
}

const usersReducer = (state = dialogsPage, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.followed = true;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.followed = false;
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAc = (userId) => ({ type: FOLLOW, userId: userId})
export const unfollowAc = (userId) => ({ type: UNFOLLOW, userId: userId})
export const setUsersAc = (users) => ({type:SET_USERS, users: users})
export default usersReducer;