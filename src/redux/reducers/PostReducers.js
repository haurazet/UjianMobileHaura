const INITIAL_STATE = {
    postList: [],
    selectedPostDetailProfile: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business2community.com%2Fsocial-media%2Fimportance-profile-picture-career-01899604&psig=AOvVaw0F2VISno9ugu55RlPWn6GW&ust=1591783531196000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiK2vC99OkCFQAAAAAdAAAAABAD',
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'FILL_POST_LIST' :
            return { ...state, postList: action.payload}
        case 'SELECT_POST_PROFILE':
            return {...state,selectedPostDetailProfile:action.payload}
        default :
            return state;
    }
}