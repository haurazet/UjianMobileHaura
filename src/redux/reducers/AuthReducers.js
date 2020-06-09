

const INITIAL_STATE = { 
    user: null,
    isLogin: false
};


export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'USER_LOGIN' :
            return { ...state, isLogin:true, user:action.payload }
        case 'USER_LOGOUT' :
        return { ...INITIAL_STATE }
        default:
            return state
    }
}