import React from "react";

import "./App.scss";
import { List } from "./templates/components/List";

export function App() {
	return (
		<div className="App">
			<h1>Транспорт GTA Online</h1>
			<List />
		</div>
	);
}
