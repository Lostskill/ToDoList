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
    }
}