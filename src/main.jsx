import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import VisimisiPage from './pages/VisimisiPage.jsx';
import MaklumatPage from './pages/MaklumatPage.jsx';
import LayananPengaduan from './pages/LayananPengaduan.jsx';
import JenisPelayanan from './pages/JenisPelayanan.jsx';
import KewajibanLayanan from './pages/KewajibanLayanan.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import AnalisisEsamsat from './pages/AnalisisEsamsat.jsx';
import AnalisisNonesamsat from './pages/AnalisisNonesamsat.jsx';
import JamPelayanan from './pages/JamPelayanan.jsx';
import SaranaPrasarana from './pages/SaranaPrasarana.jsx';
import ProfilSamsat from './pages/ProfilSamsat.jsx';
import MekanismePenanganan from './pages/MekanismePenanganan.jsx';
import AllpostPage from './pages/AllpostPage.jsx';
import SimulasiTarget2023 from './pages/SimulasiTarget2023.jsx';
import SimulasiTarget2024 from './pages/SimulasiTarget2024.jsx';
import BlogPage1 from './blog/BlogPage1.jsx';
import BlogPage2 from './blog/BlogPage2.jsx';
import BlogPage3 from './blog/BlogPage3.jsx';
import BlogPage4 from './blog/BlogPage4.jsx';
import BlogPage5 from './blog/BlogPage5.jsx';
import Contact from './component/Contact.jsx';

const router = createBrowserRouter([
    {
        path: "/bapenda-malut-web/",
        element: <App />,
        children: [
            {
                path: "/bapenda-malut-web/",
                element: <HomePage />
            },
            {
                path: "/bapenda-malut-web/visimisi",
                element: <VisimisiPage />
            },
            {
                path: "/bapenda-malut-web/maklumat",
                element: <MaklumatPage />
            },
            {
                path: "/bapenda-malut-web/layanan-pengaduan",
                element: <LayananPengaduan />
            },
            {
                path: "/bapenda-malut-web/kewajiban-pelayanan",
                element: <KewajibanLayanan />
            },
            {
                path: "/bapenda-malut-web/jenis-pelayanan",
                element: <JenisPelayanan />
            },
            {
                path: "/bapenda-malut-web/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/bapenda-malut-web/analisis-esamsat",
                element: <AnalisisEsamsat />
            },
            {
                path: "/bapenda-malut-web/analisis-non-esamsat",
                element: <AnalisisNonesamsat />
            },
            {
                path: "/bapenda-malut-web/jam-pelayanan",
                element: <JamPelayanan />
            },
            {
                path: "/bapenda-malut-web/sarana-prasarana",
                element: <SaranaPrasarana />
            },
            {
                path: "/bapenda-malut-web/profil-samsat",
                element: <ProfilSamsat />
            },
            {
                path: "/bapenda-malut-web/mekanisme-penanganan",
                element: <MekanismePenanganan />
            },
            {
                path: "/bapenda-malut-web/all-post",
                element: <AllpostPage />
            },
            {
                path: "/bapenda-malut-web/simulasi-target-pendapatan-2023",
                element: <SimulasiTarget2023 />
            },
            {
                path: "/bapenda-malut-web/simulasi-target-pendapatan-2024",
                element: <SimulasiTarget2024 />
            },
            {
                path: "/bapenda-malut-web/ini-target-bapenda-maluku-utara-dalam-meraup-pendapatan-daerah-tahun-2023",
                element: <BlogPage1 />
            },
            {
                path: "/bapenda-malut-web/forum-rkpd-malut-tahun-2024-telah-digelar",
                element: <BlogPage2 />
            },
            {
                path: "/bapenda-malut-web/sekprov-malut-tutup-pelatihan-kepemimpinan-asn",
                element: <BlogPage3 />
            },
            {
                path: "/bapenda-malut-web/sekprov-malut-luncurkan-platform-pemberdayaan-digital",
                element: <BlogPage4 />
            },
            {
                path: "/bapenda-malut-web/bapenda-malut-akan-garap-dua-objek-sektor-pajak-baru",
                element: <BlogPage5 />
            },
            {
                path: "/bapenda-malut-web/kontak",
                element: <Contact />
            },

        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
