import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCategories } from "../services/KategoriServices";

function TambahKategori() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    // Menyimpan perubahan pada input
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Menyimpan data ke API
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Data yang dikirim:', form);

            await createCategories(form);

            alert('Data berhasil ditambahkan');
            navigate('/kategori');
        } catch (error) {
            console.log('Error:', error.response?.data || error.message);
            alert('Gagal menambahkan data');
        }
    };

    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="fw-bold mb-4">
                                    Tambah Kategori
                                </h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Nama Kategori
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            className="form-control"
                                            placeholder="Masukkan nama"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Komentar Tamu
                                        </label>
                                        <textarea
                                            onChange={handleChange}
                                            name="description"
                                            value={form.description}
                                            className="form-control"
                                            rows="5"
                                            placeholder="Tuliskan deskripsi"
                                            required
                                        />
                                    </div>

                                    <div className="d-flex gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            <i className="bi bi-save me-2"></i>
                                            Simpan
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => navigate('/kategori')}
                                            className="btn btn-secondary"
                                        >
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TambahKategori;