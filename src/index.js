import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from "./routes/Root";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/Sign-In";
import User from "./pages/User";
//import ErrorPage from "./pages/ErrorPage";
import { Provider } from 'react-redux';
import store from './utils/store';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    //errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/profile',
        element: <User/>,
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
