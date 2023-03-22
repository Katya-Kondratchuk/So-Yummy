import SharedLayout from 'components/SharedLayout';
import ConfirmEmailPage from 'pages/ConfirmEmailPage/ConfirmEmailPage';
import RegisterPage from 'pages/RegisterPage';
import ResetPasswordPage from 'pages/ResetPasswordPage/ResetPasswordPage';
import SigninPage from 'pages/SigninPage';
import VerifyPage from 'pages/VerifyPage';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import PublicRoute from 'routes/PublicRoute/PublicRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';

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
  useEffect(() => {
    const handleStorageChange = e => {
      if (e.key === 'persist:refresh-user-token' && e.newValue !== e.oldValue) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      <Routes>
        <Route
          path="/verification-token/:verificationToken"
          element={
            <PublicRoute component={<VerifyPage />} redirectTo="/main" />
          }
        />
        <Route
          path="/password-reset-token/"
          element={
            <PublicRoute component={<ConfirmEmailPage />} redirectTo="/main" />
          }
        />
        <Route
          path="/password-reset-token/:resetEmailToken"
          element={
            <PublicRoute
              component={<ResetPasswordPage />}
              redirectTo="/signin"
            />
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute component={<WelcomePage />} redirectTo="/main" />
          }
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
            path="main"
            index
            element={<PrivateRoute component={<MainPage />} />}
          />
          <Route
            path="categories"
            element={<PrivateRoute component={<CategoriesPage />} />}
          />
          <Route
            path="categories/:categoryName"
            element={<PrivateRoute component={<CategoriesPage />} />}
          />
          <Route
            path="search"
            element={<PrivateRoute component={<SearchPage />} />}
          />
          <Route
            path="add"
            element={<PrivateRoute component={<AddRecipesPage />} />}
          />
          <Route
            path="my"
            element={<PrivateRoute component={<MyRecipesPage />} />}
          />
          <Route
            path="favorite"
            element={<PrivateRoute component={<FavoriteRecipesPage />} />}
          />
          <Route
            path="shopping-list"
            element={<PrivateRoute component={<ShoppingListPage />} />}
          />
          <Route
            path="recipe/:recipeId"
            element={<PrivateRoute component={<RecipiesPage />} />}
          />
          <Route
            path="*"
            element={<PrivateRoute component={<NotFoundPage />} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
