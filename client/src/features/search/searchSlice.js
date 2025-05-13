import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import searchService from './searchService';

const initialState = {
    searchResults: [],
    loading: false,
    error: null,
};

// Async action to handle searching for media
export const searchMedia = createAsyncThunk(
    'search/media',
    async (query, thunkAPI) => {
        try {
            const response = await searchService.search(query); // Ensure we get the correct response
            return response?.files;  // Return the files directly here
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Search failed');
        }
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchMedia.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchMedia.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload || []; // Store the search results (files array)
            })
            .addCase(searchMedia.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default searchSlice.reducer;
