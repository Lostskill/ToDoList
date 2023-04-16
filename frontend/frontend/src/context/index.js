import {create} from 'zustand'


export const AuthContext = create((set) => ({
    auth: false,
    setIsAuth: (res) => set(() => (
        {
            auth:res
        }
    ) )
}));