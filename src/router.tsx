import { 
  Link,
  Outlet,
  RouterProvider, 
  createRootRoute, 
  createRoute,
  createRouter 
} from '@tanstack/react-router';

import App from './App';
import { AboutPage } from '@/pages/AboutPage/AboutPage';
import { ContactPage } from '@/pages/ContactPage/ContactPage';
import { ModeToggle } from './components/mode-toggle';

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <div className="container mx-auto py-4">
        <nav className="mb-6 p-6 px-12 flex justify-between bg-accent rounded-md">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Главная</Link></li>
            <li><Link to="/about" className="hover:underline">О нас</Link></li>
            <li><Link to="/contact" className="hover:underline">Контакты</Link></li>
          </ul>
          <ModeToggle />
        </nav>
        <Outlet />
      </div>
    </div>
  ),
});


const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

export function RouterConfig() {
  return <RouterProvider router={router} />;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}