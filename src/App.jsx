import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";

import HomePage from "./pages/HomePage";
import VisimisiPage from "./pages/VisimisiPage";
import MaklumatPage from "./pages/MaklumatPage";
import LayananPengaduan from "./pages/LayananPengaduan";
import KewajibanLayanan from "./pages/KewajibanLayanan";
import JenisPelayanan from "./pages/JenisPelayanan";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AnalisisEsamsat from "./pages/AnalisisEsamsat";
import AnalisisNonesamsat from "./pages/AnalisisNonesamsat";
import JamPelayanan from "./pages/JamPelayanan";
import SaranaPrasarana from "./pages/SaranaPrasarana";
import ProfilSamsat from "./pages/ProfilSamsat";
import MekanismePenanganan from "./pages/MekanismePenanganan";
import AllpostPage from "./pages/AllpostPage";
import SimulasiTarget2023 from "./pages/SimulasiTarget2023";
import SimulasiTarget2024 from "./pages/SimulasiTarget2024";

// Blog Page
import BlogPage1 from "./blog/BlogPage1";
import BlogPage2 from "./blog/BlogPage2";
import BlogPage3 from "./blog/BlogPage3";
import BlogPage4 from "./blog/BlogPage4";
import BlogPage5 from "./blog/BlogPage5"; 
import NotFound from "./component/NotFound";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/visimisi" element={<VisimisiPage />} />
          <Route path="/maklumat" element={<MaklumatPage />} />
          <Route path="/layanan-pengaduan" element={<LayananPengaduan />} />
          <Route path="/kewajiban-layanan" element={<KewajibanLayanan />} />
          <Route path="/jenis-pelayanan" element={<JenisPelayanan />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/analisis-esamsat" element={<AnalisisEsamsat />} />
          <Route path="/analisis-non-esamsat" element={<AnalisisNonesamsat />} />
          <Route path="/jam-pelayanan" element={<JamPelayanan />} />
          <Route path="/sarana-prasarana" element={<SaranaPrasarana />} />
          <Route path="/profil-samsat" element={<ProfilSamsat />} />
          <Route path="/mekanisme-penanganan" element={<MekanismePenanganan />} />
          <Route path="/lihat-semua-post" element={<AllpostPage />} />
          <Route path="/simulasi-target-pendapatan-2023" element={<SimulasiTarget2023 />} />
          <Route path="/simulasi-target-pendapatan-2024" element={<SimulasiTarget2024 />} />

          {/* Blog Page */}
          <Route path="/ini-target-bapenda-maluku-utara-dalam-meraup-pendapatan-daerah-tahun-2023" element={<BlogPage1 />} />
          <Route path="/forum-rkpd-malut-tahun-2024-telah-digelar" element={<BlogPage2 />} />
          <Route path="/sekprov-malut-tutup-pelatihan-kepemimpinan-asn" element={<BlogPage3 />} />
          <Route path="/sekprov-malut-luncurkan-platform-pemberdayaan-digital" element={<BlogPage4 />} />
          <Route path="/bapenda-malut-akan-garap-dua-objek-sektor-pajak-baru" element={<BlogPage5 />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <FooterComponent />
      </div>
    </>
  );
}

export default App;
