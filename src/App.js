import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import SharedLayout from 'components/SharedLayout';
import RegisterPage from 'pages/RegisterPage';
import SigninPage from 'pages/SigninPage';
import VerifyPage from 'pages/VerifyPage';
import { lazy, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/authOperation';
import { selectAuthIsRefreshUser } from 'redux/auth/authSelectors';
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
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(selectAuthIsRefreshUser);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      dispatch(refreshUser());
      isFirstLoad.current = false;
    }
  }, [dispatch, isFirstLoad]);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      {isRefreshUser ? (
        <LoaderSuspense />
      ) : (
        <Routes>
          <Route
            path="/verification-token/:verificationToken"
            element={
              <PublicRoute component={<VerifyPage />} redirectTo="/main" />
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
              path="/main"
              index
              element={
                <PrivateRoute component={<MainPage />} redirectTo="/signin" />
              }
            />
            <Route
              path="/categories"
              element={
                <PrivateRoute
                  component={<CategoriesPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/search"
              element={
                <PrivateRoute component={<SearchPage />} redirectTo="/signin" />
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute
                  component={<AddRecipesPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/my"
              element={
                <PrivateRoute
                  component={<MyRecipesPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/favorite"
              element={
                <PrivateRoute
                  component={<FavoriteRecipesPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/shopping-list"
              element={
                <PrivateRoute
                  component={<ShoppingListPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={
                <PrivateRoute
                  component={<RecipiesPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="*"
              element={
                <PrivateRoute
                  component={<NotFoundPage />}
                  redirectTo="/signin"
                />
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
