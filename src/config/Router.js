import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Dashboard from "../views/Dashboard";
import Products from "../views/Products";
import Detail from "../views/Detail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: "dashboard/:id",
                element: <Products/>
            },


        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return <div>
        <Dashboard />
        <Outlet />
    </div>
}

export default Router
