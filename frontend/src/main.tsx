import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const client = new ApolloClient({
    link: createHttpLink({ uri: "http://localhost:3000/graphql" }),
    cache: new InMemoryCache(),
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);
