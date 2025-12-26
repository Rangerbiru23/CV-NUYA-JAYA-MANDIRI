'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Building, Wrench, Users, Award, ChevronRight, Shield, Clock, DollarSign } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="CV NUYA JAYA MANDIRI" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV NUYA JAYA MANDIRI</h1>
                <p className="text-xs text-gray-600">Konstruksi Gedung Lainnya</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Kontak</a>
              <a href="#privacy" className="text-gray-700 hover:text-blue-600 transition">Privacy</a>
              <a href="#terms" className="text-gray-700 hover:text-blue-600 transition">Terms</a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Kontak</a>
              <a href="#privacy" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Privacy</a>
              <a href="#terms" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Terms</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Konstruksi Gedung Terpercaya di Padang
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              CV NUYA JAYA MANDIRI - Solusi terbaik untuk kebutuhan konstruksi gedung Anda. 
              Profesional, berkualitas, dan berpengalaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang CV NUYA JAYA MANDIRI</h2>
              <p className="text-gray-600 mb-6">
                CV NUYA JAYA MANDIRI adalah perusahaan konstruksi yang berfokus pada pembangunan gedung-gedung 
                komersial dan residensial di wilayah Padang dan sekitarnya. Dengan pengalaman bertahun-tahun, 
                kami telah membangun reputasi sebagai mitra konstruksi yang andal dan profesional.
              </p>
              <p className="text-gray-600 mb-6">
                Kami berkomitmen untuk memberikan hasil kerja berkualitas tinggi dengan mematuhi standar keselamatan, 
                menggunakan material terbaik, dan didukung oleh tim profesional yang berpengalaman di bidang konstruksi.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">50+</div>
                  <div className="text-gray-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">100%</div>
                  <div className="text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="text-blue-900 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Konstruksi Gedung</h3>
                    <p className="text-gray-600 text-sm">Bangunan komersial, perkantoran, dan fasilitas umum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wrench className="text-blue-900 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Renovasi & Maintenance</h3>
                    <p className="text-gray-600 text-sm">Perbaikan dan pemeliharaan bangunan existing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="text-blue-900 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Konsultasi Konstruksi</h3>
                    <p className="text-gray-600 text-sm">Perencanaan dan desain bangunan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi untuk memenuhi kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Building className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Konstruksi Baru</h3>
              <p className="text-gray-600 mb-4">
                Pembangunan gedung baru dari ground up dengan desain custom sesuai kebutuhan klien.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Gedung Kantor</li>
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Bangunan Komersial</li>
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Fasilitas Umum</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Renovasi</h3>
              <p className="text-gray-600 mb-4">
                Transformasi bangunan lama menjadi ruang modern yang fungsional dan estetis.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Renovasi Total</li>
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Perbaikan Struktur</li>
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Upgrade Interior</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Konsultasi</h3>
              <p className="text-gray-600 mb-4">
                Layanan konsultasi profesional untuk perencanaan dan manajemen proyek konstruksi.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Desain & Perencanaan</li>
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Manajemen Proyek</li>
                <li className="flex items-center"><ChevronRight size={16} className="mr-2 text-blue-900" /> Supervisi Konstruksi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami memberikan nilai tambah untuk setiap proyek dengan komitmen terhadap kualitas dan kepuasan klien
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-900" size={40} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bergaransi</h3>
              <p className="text-gray-600 text-sm">Setiap pekerjaan kami berikan garansi kepuasan</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-900" size={40} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tepat Waktu</h3>
              <p className="text-gray-600 text-sm">Proyek selesai sesuai timeline yang disepakati</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-blue-900" size={40} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Harga Kompetitif</h3>
              <p className="text-gray-600 text-sm">Penawaran harga yang transparan dan kompetitif</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-900" size={40} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tim Profesional</h3>
              <p className="text-gray-600 text-sm">Didukung tenaga ahli berpengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Siap untuk memulai proyek konstruksi Anda? Hubungi kami hari ini untuk konsultasi gratis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Building className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">CV NUYA JAYA MANDIRI</p>
                    <p className="text-gray-600 text-sm">Konstruksi Gedung Lainnya</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600 text-sm">
                      Jl Balai Baru, Desa/Kelurahan Gunung Sarik<br />
                      Kec. Kuranji, Kota Padang<br />
                      Provinsi Sumatera Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-600 text-sm">082382466172</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm">info@nuyajayamandiri.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Jelaskan kebutuhan proyek Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              <strong>CV NUYA JAYA MANDIRI</strong> ("kami") sangat memperhatikan privasi dan keamanan data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Informasi yang Kami Kumpulkan</h3>
            <p className="mb-4">
              Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara langsung, seperti:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nama dan informasi kontak (nomor telepon, email)</li>
              <li>Alamat perusahaan atau rumah</li>
              <li>Informasi proyek dan kebutuhan konstruksi</li>
              <li>Informasi pembayaran dan faktur</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Penggunaan Informasi</h3>
            <p className="mb-4">
              Informasi yang kami kumpulkan digunakan untuk:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Menyediakan layanan konstruksi yang Anda minta</li>
              <li>Mengkomunikasikan detail proyek dan perkembangannya</li>
              <li>Mengirim penawaran dan faktur</li>
              <li>Meningkatkan layanan kami</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Perlindungan Data</h3>
            <p className="mb-4">
              Kami melindungi data pribadi Anda dengan:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Enkripsi data transmisi</li>
              <li>Akses terbatas ke informasi pribadi</li>
              <li>Keamanan fisik dan digital</li>
              <li>Tidak membagikan data tanpa izin</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Hak Anda</h3>
            <p className="mb-4">
              Anda memiliki hak untuk:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Mengakses data pribadi Anda</li>
              <li>Memperbarui informasi yang tidak akurat</li>
              <li>Menghapus data pribadi Anda</li>
              <li>Menolak pemasaran dari kami</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Kontak</h3>
            <p className="mb-4">
              Untuk pertanyaan tentang Kebijakan Privasi ini, hubungi kami:
            </p>
            <p className="mb-4">
              Email: privacy@nuyajayamandiri.com<br />
              Telepon: 082382466172<br />
              Alamat: Jl Balai Baru, Desa/Kelurahan Gunung Sarik, Kec. Kuranji, Kota Padang, Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="terms" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Selamat datang di website CV NUYA JAYA MANDIRI. Dengan mengakses dan menggunakan website ini, 
              Anda setuju untuk mematuhi Syarat dan Ketentuan berikut.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Definisi</h3>
            <p className="mb-4">
              <strong>"CV NUYA JAYA MANDIRI"</strong> adalah perusahaan konstruksi yang menyediakan jasa pembangunan gedung.<br />
              <strong>"Website"</strong> adalah platform online ini yang menyediakan informasi tentang layanan kami.<br />
              <strong>"Pengguna"</strong> adalah individu atau entitas yang mengakses website ini.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Penggunaan Website</h3>
            <p className="mb-4">
              Anda setuju untuk:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Menggunakan website hanya untuk tujuan yang sah</li>
              <li>Tidak melakukan aktivitas yang melanggar hukum</li>
              <li>Tidak merusak atau mengganggu fungsi website</li>
              <li>Memberikan informasi yang akurat</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Layanan Konstruksi</h3>
            <p className="mb-4">
              Layanan konstruksi kami mencakup:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pembangunan gedung baru</li>
              <li>Renovasi bangunan existing</li>
              <li>Konsultasi desain dan perencanaan</li>
              <li>Supervisi proyek</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Persyaratan Proyek</h3>
            <p className="mb-4">
              Untuk memulai proyek, klien harus:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Menyediakan dokumen perizinan yang valid</li>
              <li>Memberikan informasi detail tentang kebutuhan proyek</li>
              <li>Menyetujui penawaran harga dan timeline</li>
              <li>Melakukan pembayaran sesuai kesepakatan</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Pembayaran</h3>
            <p className="mb-4">
              Syarat pembayaran:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>DP minimal 30% dari total kontrak</li>
              <li>Pembayaran bertahap sesuai milestone</li>
              <li>Pelunasan sebelum serah terima</li>
              <li>Biaya tambahan untuk perubahan desain</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Garansi</h3>
            <p className="mb-4">
              Kami memberikan garansi:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Struktur bangunan: 1 tahun</li>
              <li>Kebocoran atap: 6 bulan</li>
              <li>Kualitas material sesuai spesifikasi</li>
              <li>Tidak mencakup kerusakan akibat bencana alam</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Pembatalan Proyek</h3>
            <p className="mb-4">
              Kebijakan pembatalan:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pembatalan oleh klien: DP hangus</li>
              <li>Pembatalan oleh kami: DP dikembalikan penuh</li>
              <li>Force majeure: dinegosiasikan bersama</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Hak Kekayaan Intelektual</h3>
            <p className="mb-4">
              Semua konten website (teks, gambar, desain) adalah milik CV NUYA JAYA MANDIRI dan dilindungi oleh hukum hak cipta.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Batasan Tanggung Jawab</h3>
            <p className="mb-4">
              CV NUYA JAYA MANDIRI tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Keterlambatan akibat cuaca ekstrem</li>
              <li>Keterlambatan izin dari pemerintah</li>
              <li>Kenaikan harga material di luar kendali</li>
              <li>Kerusakan akibat kelalaian klien</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Penyelesaian Sengketa</h3>
            <p className="mb-4">
              Sengketa akan diselesaikan melalui:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Musyawarah mufakat terlebih dahulu</li>
              <li>Mediasi dengan pihak ketiga</li>
              <li>Pengadilan negeri Padang sebagai yurisdiksi</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Perubahan Syarat dan Ketentuan</h3>
            <p className="mb-4">
              Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif setelah dipublikasikan di website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Kontak</h3>
            <p className="mb-4">
              Untuk pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami:
            </p>
            <p className="mb-4">
              Email: legal@nuyajayamandiri.com<br />
              Telepon: 082382466172<br />
              Alamat: Jl Balai Baru, Desa/Kelurahan Gunung Sarik, Kec. Kuranji, Kota Padang, Provinsi Sumatera Barat
            </p>

            <p className="mb-4">
              <strong>Tanggal berlaku:</strong> 1 Januari 2024<br />
              <strong>Terakhir diperbarui:</strong> 1 Januari 2024
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="CV NUYA JAYA MANDIRI" className="h-10 w-10 object-contain" />
                <h3 className="text-lg font-bold">CV NUYA JAYA MANDIRI</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Perusahaan konstruksi terpercaya di Padang untuk kebutuhan pembangunan gedung Anda.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Konstruksi Gedung</a></li>
                <li><a href="#" className="hover:text-white transition">Renovasi Bangunan</a></li>
                <li><a href="#" className="hover:text-white transition">Konsultasi Desain</a></li>
                <li><a href="#" className="hover:text-white transition">Supervisi Proyek</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#services" className="hover:text-white transition">Layanan</a></li>
                <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  082382466172
                </p>
                <p className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@nuyajayamandiri.com
                </p>
                <p className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-1" />
                  Jl Balai Baru, Gunung Sarik<br />
                  Kuranji, Padang
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CV NUYA JAYA MANDIRI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}