import './App.css';
import "./App.scss";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './screens/auth/login';
import HomePage from './screens/homepage';
import SignUp from './screens/auth/signup';
import ChangePass from './screens/auth/chngpass';
import ResetPass from './screens/auth/resetpass';
import Blogs from './screens/blog';
import SingleBlog from './screens/singleblog';
import axios from 'axios';

// Define the loader for SingleBlog
const singleBlogLoader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`http://localhost:5000/blogs/${id}`);
  return response.data;
};

const router = createBrowserRouter([
  { path: '/homepage', element: <HomePage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/changepass', element: <ChangePass /> },
  { path: '/resetpass', element: <ResetPass /> },
  { path: '/blogpage', element: <Blogs /> },
  {
    path: '/blogs/:id',
    element: <SingleBlog />,
    loader: singleBlogLoader,
  },
  { path: '*', element: <Navigate to="/homepage" /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
