import axios from "axios";
export default class TodoService {
    
    static async getTodo(token) {
        const response_TodoList = await axios.get('http://127.0.0.1:8000/api/todolist/', {
            headers: token
    });
        return response_TodoList.data;
    };
    
    static async getCategory() {
        const response_Category = await axios.get('http://127.0.0.1:8000/api/todolist/getcat/');
        return response_Category.data;
    };
    
    static async postTodo(data,token) {
        const res_post = await axios.post('http://127.0.0.1:8000/api/todolist/', data, {
            headers : token
        })
        return res_post.data;
    };
    
    static async deleteTodo(index,token) {
        const res_delete = await axios.delete(`http://127.0.0.1:8000/api/todolist/delete/${index}`, {
            headers: token
        });
        return res_delete;
    };

    static async putTodo(index,data,token) {
        const res_put = await axios.put(`http://127.0.0.1:8000/api/todolist/${index}`, data, {
            headers : token
        });
        return res_put;
    };

    static async registerUser(user) {
        const res_reg = await axios.post('http://127.0.0.1:8000/api/todolist/auth/users/', user);
        console.log(res_reg.data);
    };

    static async logUser(user) {
        const res_log = await axios.post('http://127.0.0.1:8000/auth/token/login/', user);
        return res_log.data;
    };    

    static async logout() {
        const res_logout = await axios.post('http://127.0.0.1:8000/auth/logout/');
        return res_logout.data;
    };

};