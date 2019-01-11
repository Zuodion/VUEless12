import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vue-vuex-features.firebaseio.com'
})
/*Пользовательская среда использования axios(по сути используется так же как и axios)*/
instance.defaults.headers.common['InstanceHeader'] = 'Hi, this is instance header'

export default instance