import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Leftbar from "./components/leftbar/Leftbar";

function App() {
    const currentUser = true
    const Layout = () => {
        return (
            <>
                <Navbar />
                <div style={{ display: 'flex' }}>
                    <Leftbar />
                    <Outlet />
                    <Rightbar />
                </div>
            </>
        )
    }
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to={'/login'} />
        }
        return children
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile/:id",
                    element: <Profile />,
                },
            ]
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
