/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import heroImage from '../public/images/heros/hero-image.png'
import aboutImage from '../public/images/about-img.png'
import faqImage from '../public/images/faq.png'
import arifImage from '../public/images/teams/arif.jpg'
import suryaImage from '../public/images/teams/surya.jpg'
import defaultImage from '../public/images/teams/default.png'
import yudaImage from '../public/images/teams/yuda.jpeg'
import Link from 'next/link'
export default function Home() {
  return (
    <>

      <div className="container">
        <section className="home" id="home">
          <div className="row">
            <div className="col info-home">
              <div className="text-home">
                <h4>Selamat Datang</h4>
                <h2>Ayo bagikan barang layak pakai kamu sekarang!</h2>
                <p>Kamu bingung ingin mendonasikan barang layak pakai kamu kemana? Tenaaang!, sekarang kamu bisa bagiin barang barang kamu di sini.</p>
                <Link className="btn-style outer-shadow inner-shadow hover-in-shadow" href="/registrasi">Mulai</Link>
                <a className="detail" href="#about">Detail</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-home">
                <Image
                  src={heroImage}
                  alt="Hero Image"
                  className='img-fluid'
                  loading='eager'
                  priority

                >
                </Image>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="about" id="about">
          <h2 style={{ fontWeight: 'bold' }} className="text-center">Tentang <span style={{ color: '#73a700' }} >DiBagi.in</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div className="img-about">
                <Image
                  src={aboutImage}
                  className='img-fluid'
                  alt="About Image"
                >
                </Image>
              </div>
            </div>
            <div className="col-md-6 info-about">
              <div className="text-about">
                <h3>Platform Berbagi Barang Layak Pakai</h3>
                <p>DiBagi.in merupakan suatu platform berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui platform dibagi.in, Platform ini sebagai perantara atau penghubung antara donatur dengan para korban bencana. <br /> Cara kerja aplikasi ini sangat sederhana, Donatur cukup memotret barang layak pakai mereka di platform dibagi.in kemudian pada korban bencana yang membutuhkan barang cukup klik ambil pada dashboard dibagi.in </p>
                <a className="btn-style outer-shadow inner-shadow hover-in-shadow" href="#">Mulai Sekarang!</a>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="share-box p-3 outer-shadow">
                <h3 className="text-center"><i className="fas fa-box"></i> Cara Memposting Barang Donasi</h3>
                <div className="share-food">
                  <ul>
                    <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                    <li>Pilih menu upload barang.</li>
                    <li>isi detail barang, lalu klik posting.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="share-box p-3 outer-shadow">
                <h3 className="text-center"><i className="fa-solid fa-hand-holding-heart"></i> Cara Mengambil Barang Donasi</h3>
                <div className="share-stuff">
                  <ul>
                    <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                    <li>Klik menu daftar barang.</li>
                    <li>Apabila sudah menemukan barang yang sesuai kemudian klik ambil.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div className="container">
        <section className="about" id="faq">
          <h2 style={{ fontWeight: 'bold' }} className="text-center">Yang Sering <span style={{ color: '#73a700' }} >Ditanyakan</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div className="img-about">
                <Image
                  src={faqImage}
                  className='img-fluid'
                  alt="FAQ Image"
                >
                </Image>
              </div>
            </div>
            <div className="col-md-6 info-about">
              <div className="text-about">

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span style={{ color: '#73a700' }} >Apa itu DiBagi.in?</span>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body"> DiBagi.in merupakan suatu platform berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui platform dibagi.in, Platform ini sebagai perantara atau penghubung antara donatur dengan para korban bencana. </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span style={{ color: '#73a700' }} >Bagaimana cara memberikan donasi?</span>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                          <li>Pilih menu upload barang.</li>
                          <li>isi detail barang seperti nama barang, foto barang, lalu klik posting.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span style={{ color: '#73a700' }} >Bagaimana cara menerima donasi?</span>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                          <li>Klik menu daftar barang.</li>
                          <li>Apabila sudah menemukan barang yang sesuai kemudian klik ambil.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mt-2">
        <section className="our-team" id="our-team">
          <h2 className="team-title text-center">Tim <span>Kami</span>
          </h2>
          <div className="row row-team mt-4">
            <div className="team-card">
              <div className="image">
                {/* <img title="yuda anugrah" src="/images/teams/yuda.jpeg" className='img-fluid' alt="yuda" /> */}
                <Image
                  src={yudaImage}
                  title="Yuda Anugrah"
                  className='img-fluid'
                  alt="Yuda"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Yuda Anugrah</h4>
                <p>Front-end Developer</p>
                <div className="sosmed">
                  <a href="https://www.linkedin.com/in/yuda-anugrah-6314bb24b/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Yyuud1" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://wa.me/6282289675042" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/yudagrh_/?hl=id" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="image">
                {/* <img title="surya saputra" className='img-fluid' src="/images/teams/surya.jpg" alt="surya" /> */}
                <Image
                  src={suryaImage}
                  title="Surya Maulana Saputra"
                  className='img-fluid'
                  alt="Surya"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Surya Saputra</h4>
                <p>Back-end Developer</p>
                <div className="sosmed">
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="image">
                {/* <img title="arif rizqi" className='img-fluid' src="/images/teams/arif.jpg" alt="arif" /> */}
                <Image
                  src={arifImage}
                  title="Arif Rizqi"
                  className='img-fluid'
                  alt="Arif"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Arif Rizqi</h4>
                <p>Front-end Developer</p>
                <div className="sosmed">
                  <a href="https://www.linkedin.com/in/arif-rizqi-58543221a/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/arifrizqi" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://wa.me/6205946362394" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/arif_rizqi27/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="image">
                {/* <img title="annas setiawan" className='img-fluid' src="./images/teams/default.png" alt="annas" /> */}
                <Image
                  src={defaultImage}
                  title="Annas Setiawan"
                  className='img-fluid'
                  alt="Annas"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Annas Setiawan</h4>
                <p>Back-end Developer</p>
                <div className="sosmed">
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >


    </>
  )
}
