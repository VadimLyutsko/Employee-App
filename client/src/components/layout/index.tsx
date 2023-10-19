import React from 'react';
import {Layout as AntLayout} from "antd";
import styles from './index.module.css'
import {Header} from "../header";

type LayoutPropsType = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutPropsType> = ({children}) => {
    return (
        <div className={styles.main}>
            <Header/>
            <AntLayout style = {{height:"100%", backgroundColor:'#141414'}}>
                {children}
            </AntLayout>
        </div>
    );
};

export default Layout;