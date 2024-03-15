// src/features/auth/tokenSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo trạng thái ban đầu
const initialState: {
    token?: string | null
} = {
    token: null, // Giả sử token ban đầu là null
};

// Tạo slice
const tokenSlice = createSlice({
    name: 'token', // Tên của slice
    initialState,
    reducers: {
        // Action để set token
        setToken: (state, action) => {
            state.token = action.payload;
        },
        // Action để xóa token
        clearToken: (state) => {
            state.token = null;
        },
    },
});

// Export các actions
export const { setToken, clearToken } = tokenSlice.actions;

// Export reducer
export default tokenSlice.reducer;
