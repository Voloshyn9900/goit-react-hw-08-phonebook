import { useSelector } from "react-redux"
import { selectIsLogin, selectIsRefreshing } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRouts = ({component:Component, redirectTo="/"})=> {
    const isLogin = useSelector(selectIsLogin);
    const isRefreshing = useSelector(selectIsRefreshing);

    const shouldRedirect = !isLogin && !isRefreshing;
//////////////////////////////
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}