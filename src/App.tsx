import React from "react";
import "./App.scss";
import { List } from "./templates/components";

export const App = (): JSX.Element => {
	return (
		<div className="App">
			<h1>Транспорт GTA Online</h1>
			<List />
		</div>
	);
};
