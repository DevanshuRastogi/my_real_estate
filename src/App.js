import React from 'react';
import './App.css';
import './App.scss';
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
import Seller from './screens/seller/sellproperty';
import axios from 'axios';
import MyProperty from './screens/myproperty';
import SellerAccount from './screens/seller/selleraccount';
import SellerEditProfile from './screens/seller/sellereditprofile';
import SellerPass from './screens/seller/sellerpassword';
import { UserProvider } from './component/userdata';
import Response from './screens/response';
import Terms from './screens/terms';
import PrivacyPage from './screens/privacypolicy';
import Cookies from './screens/cookiepage';



const singleBlogLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`http://localhost:5001/blogs`);
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
  { path: '/liked', element: <MyProperty /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/changepass', element: <ChangePass /> },
  { path: '/resetpass', element: <ResetPass /> },
  { path: '/blogpage', element: <Blogs /> },
  { path: '/about', element: <AboutUs /> },
  { path: '/contact', element: <Contact /> },
  { path: '/seller', element: <Seller /> },
  { path: '/selleraccount', element: <SellerAccount /> },
  { path: '/buy', element: <BuyPage /> },
  { path: '/sellerprofile', element: <SellerEditProfile /> },
  { path: '/sellerpassword', element: <SellerPass /> },
  { path: '/terms', element: <Terms /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/cookie', element: <Cookies/> },

  { path: '/response', element: <Response /> },
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
    <UserProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </UserProvider>
  );
}
export default App;
