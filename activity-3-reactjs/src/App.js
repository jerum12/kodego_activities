import Navbar from "./navbar"
import Counting from "./pages/Counting"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Route, Routes } from "react-router-dom"


function App () {
    return (
        <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counting" element={<Counting />} />
                <Route path="/Form" element={<Form />} />
            </Routes>
        </div>
        </>
    )
}


export default App