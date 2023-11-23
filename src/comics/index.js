import { ApolloProvider } from "@apollo/client";
import ComicList from "./ComicList";
import styles from "./../page.module.css";
import client from '../middleware/apollo-client';
import React from 'react';
const Comics=()=>{
    return(
        <main className={styles.main}>
             <ApolloProvider client={client}>
                <ComicList/>
             </ApolloProvider>
        </main>
    )

}

export default Comics;