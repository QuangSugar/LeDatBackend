import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {regionApi} from '../../api/region';
import addAxiosHeader from '../../utils/addAxiosHeader';

const initialState = {
    pending: false,
    success: false,
    failed: false,
    message: '',
    data: [],
};
const headers=addAxiosHeader();

export const getCategory = createAsyncThunk('Get Category', async () => {
    const res = await regionApi.getCategory({headers});
    return res.data.$values;
});
export const getVung = createAsyncThunk('Get Category', async () => {
    const res = await regionApi.getCategory({headers});
    return res.data.$values;
});

export const editCategory= createAsyncThunk('Edit Category', async (params) => {
    const res = await regionApi.editCategory(params,{headers});
    return res.data;
});

export const getCategoryById = createAsyncThunk('Get Category By Id', async (params) => {
    const res = await regionApi.getUserById(params);
    return res.data;
});
export const createCategory = createAsyncThunk('Create Category', async (params) => {
    const res = await regionApi.createCategory(params,{headers});

    return res.data;
});
export const deleteCategory = createAsyncThunk('Delete Category', async (params) => {
    const res = await regionApi.deleteCategory(params,{headers});
    return res.data;
});

const products = createSlice({
    name: 'category',
    initialState,
    extraReducers: {
        [getCategory.pending]: (state) => {
            state.pending = true;
            state.success = false;
            state.failed = false;
        },
        [getCategory.fulfilled]: (state, action) => {
            state.pending = false;
            state.success = true;
            state.data = action.payload;
        },
        [getCategory.rejected]: (state, action) => {
            state.pending = false;
            state.failed = true;
            state.message = action.error.message;
        },
    },
});

export default products.reducer;
