import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Intro from './pages/Intro'
import AboutMe from './pages/AboutMe'
import Services from './pages/Services'
import MyWork from './pages/MyWork'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Intro />} />
                    <Route path="aboutme" element={<AboutMe />} />
                    <Route path="services" element={<Services />} />
                    <Route path="mywork" element={<MyWork />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}