import Axios from 'axios'

export const getListPost = () => {
    return async(dispatch)=>{
        try {
            // const Token = await AsyncStorage.getItem('usertoken')
            const options = {
                headers : {
                    'x-api-key': '156f584f-58c7-4912-b01a-28c3df295cc7'
                }
            }
            // dispatch({type:HOME_REFRESHING})
            const res = await Axios.get(`https://api.thecatapi.com/v1/images/search?limit=20`, options)
            // console.log('berhasil get data')
            // console.log(res.data)
            dispatch({
                type:'FILL_POST_LIST',
                payload:res.data
            })
        } catch (error){
            console.log(error)
        }
    }
}

export const selectProfilePost = ( post ) => {
    return {
        type: 'SELECT_POST_PROFILE',
        payload: post
    }
}