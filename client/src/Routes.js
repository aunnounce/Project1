import HomePage from './Pages/HomePage';
import ListPage from './Pages/ListPage';
import CreatePage from './Pages/CreatePage';
import EditPage from './Pages/EditPage';
import DetailPage from './Pages/DetailPage';

const Routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/blogs',
    component: ListPage,
  },
  {
    path: '/blogs/create',
    component: CreatePage,
  },
  {
    path: '/blogs/edit',
    component: EditPage,
  },
  {
    path: '/blogs/:id',
    component: DetailPage,
  },
];

export default Routes;