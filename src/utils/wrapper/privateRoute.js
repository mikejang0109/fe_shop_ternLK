import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";

import { get } from "../sessionStorage";

export const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();

	const localToken = useSelector((state) => state.auth.token);
	const sessionToken = get("raz");

	React.useEffect(() => {
		if (!localToken && !sessionToken) navigate("/auth");
	});

	return <>{children}</>;
};

export const IsLogin = ({ children }) => {
	const navigate = useNavigate();

	const localToken = useSelector((state) => state.auth.token);
	const sessionToken = get("raz");
	// const { role } = jwtDecode(sessionToken || localToken)
	// console.log(role);
	

	React.useEffect(() => {
		if (localToken || sessionToken) navigate("/");
	});

	return <>{children}</>;
};
