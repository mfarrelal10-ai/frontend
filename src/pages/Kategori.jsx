import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { deleteCategories, getAllCategories } from "../services/KategoriServices";
import {Link} from 'react-router-dom'


function Kategori() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

//   FUNFSI BARU UNTUK MENGAMBIL DATA DARI ENDPOINT
const loadData = async()=>{
    try {
        setLoading(true);
        setError('');
        const response = await getAllCategories();
        console.log(response.data);
        setData(response.data);
        
    } catch (error) {
        console.log(error);
        setError(
            'Gagal Mengambil data kategori'
        );
    }finally{
        setLoading(false)
    }
}
useEffect(()=>{
    loadData();
},[]);

if (loading){
    return <Loading />
}

const handleDelete = async (id) => {
    const konfirmasi = window.confirm(
        'Apakah anda yakin ingin menghapus data ini?'
    );
    if (!konfirmasi) {
        return;
    }
    try {
        await deleteCategories(id);
        alert('Data berhasil dihapus');
        loadData()
    } catch (error) {
        console.error(error);
        alert('Gagal mengahapus data')
    }
}
  return (
    <section>
    <Link to="/kategori/tambah" className="btn btn-primary">
        Tambah Kategori
    </Link>
    <div className="card border-0 shadow sm">
        <div className="card-body">
            <div className="table table-responsive w-100">
                <table className="table table-bordered table-struped w-100">
                    <thead className="table-light"> 
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>DESKRIPSI</th>
                        {/* Tambahkan */}
                        <th>AKSI</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            {/* Tambahkan */}
                            <td>
                                <Link to={`/kategori/${item.id}`}
                                className="btn btn-sm btn-outline-warning"
                                title="Edit">
                                    <i className="bi bi-pencil"></i>
                                </Link>
                                <button
                                onClick={() => handleDelete (item.id)}
                                className="Hapus">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </section>
  )
}
export default Kategori;
