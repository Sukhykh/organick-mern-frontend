import { createHashRouter, RouterProvider } from 'react-router-dom';

import { AdminLayout, PagesLayout, RootLayout } from '../layouts/index.tsx';
import { Home } from './Home/Home.tsx';
import { About } from './About/About.tsx';
import { Service } from './Service/Service.tsx';
import { Quality } from './Quality/Quality.tsx';
import { Shop } from './Shop/Shop.tsx';
import { Projects } from './Projects/Projects.tsx';
import { Blog } from './Blog/Blog.tsx';
import { Cart } from './Cart/Cart.tsx';
import { Orders } from './Admin/Orders.tsx';
import { Products } from './Admin/Products.tsx';
import { AdminPanel } from './Admin/AdminPanel.tsx';
import { Subscription } from './Admin/Subscription.tsx';
import { Error } from './Error/Error.tsx';
import { Thanks } from './Thanks/Thanks.tsx';

const router = createHashRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> },
			{
				path: 'pages',
				element: <PagesLayout />,
				children: [
					{ path: 'service', element: <Service /> },
					{ path: 'quality', element: <Quality /> },
				],
			},
			{ path: 'shop', element: <Shop /> },
			{ path: 'projects', element: <Projects /> },
			{ path: 'news', element: <Blog /> },
			{ path: 'cart', element: <Cart /> },
			{ path: 'cart/thanks', element: <Thanks /> },
			{
				path: 'admin',
				element: <AdminLayout />,
				children: [
					{ path: 'orders', element: <Orders /> },
					{ path: 'allProducts', element: <Products /> },
					{ path: 'subscription', element: <Subscription /> },
					{ path: 'addProduct', element: <AdminPanel /> },
				],
			},
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
