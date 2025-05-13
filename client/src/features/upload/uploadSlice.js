import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uploadService from './uploadService';

const initialState = {
    loading: false,
    success: false,
    error: null,
    fileUrl: '',
};

export const uploadMedia = createAsyncThunk(
    'upload/media',
    async (formData, thunkAPI) => {
        try {
            return await uploadService.upload(formData);
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Upload failed');
        }
    }
);


const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(uploadMedia.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
                state.fileUrl = '';
            })
            .addCase(uploadMedia.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.fileUrl = action.payload.file.url;
            })
            .addCase(uploadMedia.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default uploadSlice.reducer;
