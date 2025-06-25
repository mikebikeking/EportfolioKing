import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { Analytics } from "@vercel/analytics/next"

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // <React.StrictMode>
  // </React.StrictMode>,
)
