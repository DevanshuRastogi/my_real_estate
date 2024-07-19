import React from 'react';
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
import BuyPage from './screens/buy';
import SingleProp from './screens/singleprop';
import Contact from './screens/contact';
import AboutUs from './screens/about';
import Seller from './screens/seller';
import axios from 'axios';

const singleBlogLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`http://localhost:5000/blogs`);
    const allBlogs = response.data;
    
    const blog = allBlogs.find(blog => blog.id === parseInt(id));
    
    if (!blog) {
      throw new Error('Blog not found');
    }
    
    return blog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

const singlePropLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`http://localhost:5000/buy`);
    const allProperties = response.data;
    const property = allProperties.find(prop => prop.prop_id === parseInt(id));
   
    if (!property) {
      throw new Error('Property not found');
    }
   
    return property;
  } catch (error) {
    console.error('Error fetching property:', error);
    throw error;
  }
};

const router = createBrowserRouter([
  { path: '/homepage', element: <HomePage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/changepass', element: <ChangePass /> },
  { path: '/resetpass', element: <ResetPass /> },
  { path: '/blogpage', element: <Blogs /> },
  { path: '/about', element: <AboutUs /> },
  { path: '/contact', element: <Contact /> },
  { path: '/seller', element: <Seller /> },
  { path: '/buy', element: <BuyPage /> },
  {
    path: '/blogs/:id',
    element: <SingleBlog />,
    loader: singleBlogLoader,
    errorElement: <div>Error loading blog</div>,
  },
  {
    path: '/buy/:id',
    element: <SingleProp />,
    loader: singlePropLoader,
    errorElement: <div>Error loading property</div>,
  },
  { path: '*', element: <Navigate to="/homepage" /> },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App; 