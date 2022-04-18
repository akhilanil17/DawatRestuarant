import {HashRouter as Router, Routes, Route} from "react-router-dom";
import DashBoard from "./DashBoard";
import Topbar from "./Topbar";
import Success from "./Success";

const App = () => {
    return (
        <>
        <Router>
        <div>
        <Topbar />
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </div>
        </Router>
        </>
    )
}
export default App;