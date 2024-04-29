import axios from "axios";

const fetch=axios.create({
    baseURL:'http://localhost:5555',
    headers:{
        'Content-Type':'application/json'
    }
})
export default fetch