import { ApolloProvider } from "@apollo/client";

import styles from './../page.module.css'
import client from "../middleware/apollo-client";
import GamesList from "./GameList";
import React from "react";
const Games=()=>{
    return(
        <main className={styles.main}>
             <ApolloProvider client={client}>
                <GamesList/>
             </ApolloProvider>
        </main>
    )

}

export default Games;