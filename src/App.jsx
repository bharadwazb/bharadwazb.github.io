import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import JobDetail from './pages/JobDetail'
import Education from './pages/Education'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/experience/:id" element={<JobDetail />} />
                <Route path="/education" element={<Education />} />
            </Routes>
            <Footer />
        </>
    )
}
