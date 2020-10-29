import React from "react"
import { Route , Redirect  } from "react-router-dom";
import { AuthContext } from "./components/Authentication/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const {currentUser} = userContext(AuthContext);
    return(
        <Route
            {...rest}
            render={routeProps => 
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                
                ) : (
                    <Redirect to="/Auth" />
                )    
            }
            />
    );
};
export default PrivateRoute