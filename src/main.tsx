import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import theme from "./theme";

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<BrowserRouter>
			<React.StrictMode>
				<Provider store={store}>
					<App />
				</Provider>
			</React.StrictMode>
		</BrowserRouter>
	</ChakraProvider>,
	document.getElementById("root")
);
