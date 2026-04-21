import App from "./App";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:categoryName", element: <CategoryPage /> }
    ]
  }
];

export default routes;