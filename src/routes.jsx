import App from "./App";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPages from "./pages/ProductPages"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:categoryName", element: <CategoryPage /> },
      { path: "product/:id", element: <ProductPages /> }
    ]
  }
];

export default routes;