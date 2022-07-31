import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import type {AppState, AppThunk} from '@/app/store'
import {store} from "@/app/store"
import {useLoadRecentMessages, useLoadRecentMessagesById} from "@/app/useLoadRecentMessages";
import {useGetUserInfoById} from "@/app/useGetUserInfo";


export interface PostsStates {
    messages: string | null
    status: 'idle' | 'loading' | 'failed'
    currentUser: any;
}

const initialState: PostsStates = {
    messages: null,
    status: 'loading',
    currentUser: null
}


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const changeCurrentChat = createAsyncThunk(
    'messages/changeCurrentChat',
    async (id: number) => {
        const response = useLoadRecentMessagesById(id);
        // The value we return becomes the `fulfilled` action payload
        return JSON.stringify(response);
    }
)
export const changeCurrentChatUser = createAsyncThunk(
    'messages/changeCurrentChatUser',
    async (id: number) => {
        const response = useGetUserInfoById(id);
        // The value we return becomes the `fulfilled` action payload
        return JSON.stringify(response);
    }
)

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        loadPostData: (state) => {
            // console.log(state)
        },
        // changeCurrentChat: (state, action) => {
        //     console.log("hey dude")
        //
        // }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(changeCurrentChat.pending, (state) => {
                state.status = 'loading'


            })
            .addCase(changeCurrentChat.fulfilled, (state, action) => {

                state.status = 'idle'
                state.messages = action.payload
            }).addCase(changeCurrentChat.rejected, (state) => {
            state.status = 'failed'
        }).addCase(changeCurrentChatUser.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(changeCurrentChatUser.fulfilled, (state, action) => {

                state.status = 'idle'
                state.currentUser = action.payload
            }).addCase(changeCurrentChatUser.rejected, (state) => {
            state.status = 'failed'
        });

    },
})


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state: AppState) => state.messages;


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export default messagesSlice.reducer;
