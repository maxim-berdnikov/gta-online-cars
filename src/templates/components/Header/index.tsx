import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";

import styles from "./Header.module.scss";

export const Header = () => (
	<header className={styles.header}>
		<Logo className={styles.logo} />
		<p>Welcome to RTS-Template.</p>
	</header>
);
