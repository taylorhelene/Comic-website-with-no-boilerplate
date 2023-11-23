import React from "react";
import { ApolloProvider } from "@apollo/client";
import Home from "./Home";
import client from "../middleware/apollo-client";
import styles from "./../page.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage=()=>{
    return (
        <main className={styles.main}>
            <ApolloProvider client={client}>
                <Home/>
            </ApolloProvider>
        </main>
    )
}
export default HomePage;