const INITIAIL_STATE = {
    currentUser : null
}

const userReduce = (state = INITIAIL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser : action.payload
            }
        default:
            return state;
    }
}

export default userReduce;