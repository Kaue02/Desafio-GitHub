import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import './App.css'
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Modal } from "./pages/Modal"
import { LoadingContextProvider } from "./context/LoadingContext"

function App() {

  return (
    <LoadingContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/:user" element={< Home />} />
          <Route path="/:user/:name" element={< Modal />} />
        </Routes>
      </BrowserRouter>
    </LoadingContextProvider>
  )
}

export default App
function isAuthenticated() {
  throw new Error("Function not implemented.")
}

