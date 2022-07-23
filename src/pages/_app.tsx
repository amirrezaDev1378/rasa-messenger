import '../styles/globals.css'

import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache} from '@emotion/react';
import {ThemeProvider, CssBaseline, createTheme} from '@mui/material';
import createEmotionCache from '../utility/EmotionCache';
import store from '../app/store'
import React from "react";
import defaultTheme from "../theme/defaultTheme";
interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {

    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <CacheProvider value={emotionCache}>
                    <CssBaseline/>

                    <Component {...pageProps} />
                </CacheProvider>
            </ThemeProvider>

        </Provider>
    )
}

export default MyApp;
