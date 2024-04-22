import { createBrowserRouter } from "react-router-dom";

// Auth Routing Components 
import Page404 from "@pages/Page404";
import Test from "./pages/test";

const router = createBrowserRouter([

    {
        element: <Test />,
        path: "/",
        // children: [
        //     {
        //         element: 'test',
        //         errorElement: 'test',
        //         index: true,
        //     },
        
        // ]
    },
    // {
    //     element: <IdentityLayout />,
    //     children: [
    //         {
    //             path: "login",
    //             element: <Login />,
    //             errorElement: <LoginMain />,
    //             action : loginAction ,
    //         },
    //     ]
    // },
    {
        path: '*' ,
        element: <Page404 />,
    }
]);

export default router