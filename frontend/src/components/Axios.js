import axios from 'axios'

<<<<<<< HEAD
// const baseUrl = 'http://127.0.0.1:8000/'
=======
#const baseUrl = 'http://127.0.0.1:8000/'
>>>>>>> c1fc63dc6470aa4f4dbe56fd66b1437c0f180007
const baseUrl = 'http://3.17.144.153:8000/'

const AxiosInstance = axios.create({

    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }

})

export default AxiosInstance
