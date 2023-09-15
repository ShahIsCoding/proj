import axios from "axios";

const userApi = axios.create({
    baseURL:'http://localhost:8085/user'
})

export const user_api = {
   getUser:(payload) => userApi.get(`/${payload.id}`),
   getAllUser:() => userApi.get("/all"),
   register:(paylaod) => userApi.post("/register",paylaod)
};