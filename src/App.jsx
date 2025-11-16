import { RouterProvider } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp";
import route from "./routes/route.jsx";

function App() {
  return (<RouterProvider router={route} />);
}

export default App;
