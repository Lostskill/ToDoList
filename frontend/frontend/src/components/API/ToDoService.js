import axios from "axios";
export default class TodoService {
    
    static async getTodo() {
    const response_TodoList = await axios.get('http://127.0.0.1:8000/api/todolist/');
    return response_TodoList.data 
    };
    
    static async getCategory() {
        const response_Category = await axios.get('http://127.0.0.1:8000/api/todolist/getcat/');
        return response_Category.data
    };
    
    static async postTodo(data) {
        const res_post = await axios.post('http://127.0.0.1:8000/api/todolist/',data)
        return res_post
    };
    
    static async deleteTodo(index) {
        const res_delete = await axios.delete(`http://127.0.0.1:8000/api/todolist/delete/${index}`)
        return res_delete;
    };

    static async putTodo(index,data) {
        const res_put = await axios.put(`http://127.0.0.1:8000/api/todolist/${index}`,data);
        return res_put;
    };

    static async registerUser(user) {
        const res_reg = await axios.post('http://127.0.0.1:8000/api/todolist/auth/users/', user)
        console.log(res_reg.data)
    };

    static async logUser(user) {
      const res_log = await axios.post('http://127.0.0.1:8000/auth/token/login/',user)  
      console.log(res_log.data)
    };    

};