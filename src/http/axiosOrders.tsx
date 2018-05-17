import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-burger-app-a8ca5.firebaseio.com/'
});

export default instance;