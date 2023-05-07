import axios from 'axios'

const instance = axios.create({
    baseURL: "https://directus.embery.io"
})

export default instance
