import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PublicRoute from 'routes/PublicRoute/PublicRoute';
import WelcomePage from 'pages/WelcomePage';
import RegisterPage from 'pages/RegisterPage';
import SigninPage from 'pages/SigninPage';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import SharedLayout from 'components/SharedLayout';

const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const AddRecipesPage = lazy(() => import('pages/AddRecipesPage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const FavoriteRecipesPage = lazy(() => import('pages/FavoriteRecipesPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const RecipiesPage = lazy(() => import('pages/RecipiesPage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={<WelcomePage />} redirectTo="/" />}
        />
        <Route
          path="/register"
          element={
            <PublicRoute component={<RegisterPage />} redirectTo="/main" />
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute component={<SigninPage />} redirectTo="/main" />
          }
        />

        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/main"
            index
            element={<PrivateRoute component={<MainPage />} />}
          />
          <Route
            path="/categories"
            element={<PrivateRoute component={<CategoriesPage />} />}
          />
          <Route
            path="/search"
            element={<PrivateRoute component={<SearchPage />} />}
          />
          <Route
            path="/add"
            element={<PrivateRoute component={<AddRecipesPage />} />}
          />
          <Route
            path="/my"
            element={<PrivateRoute component={<MyRecipesPage />} />}
          />
          <Route
            path="/favorite"
            element={<PrivateRoute component={<FavoriteRecipesPage />} />}
          />
          <Route
            path="/shopping-list"
            element={<PrivateRoute component={<ShoppingListPage />} />}
          />
          <Route
            path="/recipe"
            element={<PrivateRoute component={<RecipiesPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
