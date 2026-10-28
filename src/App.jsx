import { Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Kategori from './pages/Kategori';
import TambahKategori from '../src/pages/TambahKategori';
// tambah untuk edit
import EditKategori from './pages/EditKategori'

function App(){
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path ="/" element = {<Beranda/>}/>
          <Route path ="/kategori" element = {<Kategori/>}/>
          <Route path ="/kategori/tambah" element = {<TambahKategori/>}/>
          //Tambahkan ini
          <Route path="/kategori/edit/:id" element ={<EditKategori/>}/>
          </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App;