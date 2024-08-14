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
        path: "/bapendamalut-web/",
        element: <App />,
        children: [
            {
                path: "/bapendamalut-web/",
                element: <HomePage />
            },
            {
                path: "/bapendamalut-web/visimisi",
                element: <VisimisiPage />
            },
            {
                path: "/bapendamalut-web/maklumat",
                element: <MaklumatPage />
            },
            {
                path: "/bapendamalut-web/layanan-pengaduan",
                element: <LayananPengaduan />
            },
            {
                path: "/bapendamalut-web/kewajiban-pelayanan",
                element: <KewajibanLayanan />
            },
            {
                path: "/bapendamalut-web/jenis-pelayanan",
                element: <JenisPelayanan />
            },
            {
                path: "/bapendamalut-web/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/bapendamalut-web/analisis-esamsat",
                element: <AnalisisEsamsat />
            },
            {
                path: "/bapendamalut-web/analisis-non-esamsat",
                element: <AnalisisNonesamsat />
            },
            {
                path: "/bapendamalut-web/jam-pelayanan",
                element: <JamPelayanan />
            },
            {
                path: "/bapendamalut-web/sarana-prasarana",
                element: <SaranaPrasarana />
            },
            {
                path: "/bapendamalut-web/profil-samsat",
                element: <ProfilSamsat />
            },
            {
                path: "/bapendamalut-web/mekanisme-penanganan",
                element: <MekanismePenanganan />
            },
            {
                path: "/bapendamalut-web/all-post",
                element: <AllpostPage />
            },
            {
                path: "/bapendamalut-web/simulasi-target-pendapatan-2023",
                element: <SimulasiTarget2023 />
            },
            {
                path: "/bapendamalut-web/simulasi-target-pendapatan-2024",
                element: <SimulasiTarget2024 />
            },
            {
                path: "/bapendamalut-web/ini-target-bapenda-maluku-utara-dalam-meraup-pendapatan-daerah-tahun-2023",
                element: <BlogPage1 />
            },
            {
                path: "/bapendamalut-web/forum-rkpd-malut-tahun-2024-telah-digelar",
                element: <BlogPage2 />
            },
            {
                path: "/bapendamalut-web/sekprov-malut-tutup-pelatihan-kepemimpinan-asn",
                element: <BlogPage3 />
            },
            {
                path: "/bapendamalut-web/sekprov-malut-luncurkan-platform-pemberdayaan-digital",
                element: <BlogPage4 />
            },
            {
                path: "/bapendamalut-web/bapenda-malut-akan-garap-dua-objek-sektor-pajak-baru",
                element: <BlogPage5 />
            },
            {
                path: "/bapendamalut-web/kontak",
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
