//dummy screen to show when trying to find the token from async storage

import React, {useEffect, useContext} from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext);

    //to get the token only once when we first open the application
    useEffect( () => {
        tryLocalSignin();
    }, []);

    return null;
}

export default ResolveAuthScreen;