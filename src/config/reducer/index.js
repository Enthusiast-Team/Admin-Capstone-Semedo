// reducer,js
const initialState = {
    popup: false,
    isLogin: false,
    isLoading: false,
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return{
                ...state,
                users: action.value,
            };
        default:
            return state;
    }
}

export default reducer;