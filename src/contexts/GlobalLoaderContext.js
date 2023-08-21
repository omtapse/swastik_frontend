'use client'

// contexts/GlobalLoaderContext.js
import React, { createContext, useContext, useState } from 'react';
import { Spin } from 'antd';
import styles from "./GlobalLoaderContext.module.css"

const GlobalLoaderContext = createContext();

export const GlobalLoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [blurBackground, setBlurBackground] = useState(false);


    const showLoader = () => {
        console.log("here true..................................................");
        setLoading(true);
        setBlurBackground(true);
    };

    const hideLoader = () => {
        console.log("here false .............")
        setLoading(false);
        setBlurBackground(false);
    };

    return (
        <GlobalLoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
            {children}
            {loading && (
                <div className={`${styles.loaderContainer} ${styles.blur}`}>

                    <Spin size="large" />
                </div>
            )}
        </GlobalLoaderContext.Provider>
    );
};

export const useGlobalLoader = () => useContext(GlobalLoaderContext);
