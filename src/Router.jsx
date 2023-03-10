import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Accommodation, NotFound } from './pages';
import { Header } from './components';
import { Layout } from './layout';

export function Router() {
    return (
        <Layout>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/accommodation" element={<Accommodation />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}