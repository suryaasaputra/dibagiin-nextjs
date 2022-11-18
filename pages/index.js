import Image from 'next/image'
import heroImage from '../public/images/heros/hero-image.png'
import aboutImage from '../public/images/about-img.png'
import faqImage from '../public/images/faq.png'
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
                  <a className="btn-style outer-shadow inner-shadow hover-in-shadow" href="#">Mulai</a>
                  <a className="detail" href="#about">Detail</a>
              </div>
          </div>

         <div className="col-md-6">
              <div className="img-home">
              <Image
              src={heroImage}
              alt="Hero Image"
              className='img-fluid'
              >
              </Image>
              </div>
          </div>

        </div>    
      </section>
    </div>
 

    <div className="container">
    <section className="about" id="about">
      <h2 className="text-center">Tentang <span className='title-green'>DiBagi.in</span></h2>
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
                  <p>DiBagi.in merupakan suatu platform berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui platform dibagi.in, Platform ini sebagai perantara atau penghubung antara donatur dengan para korban bencana.<br/>
                  Cara kerja aplikasi ini sangat sederhana, Donatur cukup memotret barang layak pakai mereka di platform dibagi.in kemudian pada korban bencana yang membutuhkan barang cukup klik ambil pada dashboard dibagi.in </p>
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
      <h2 className="text-center">Yang Sering <span className='title-green' >Ditanyakan</span></h2>
      <div className="row">
          <div className="col-md-6">
              <div className="img-about">
               <Image
              src={faqImage}
              className='img-fluid'
              alt="FAQ Image"
              >
              </Image>
                  {/* <img src="./images/faq.png" alt="about img"> */}
              </div>
          </div>
          <div className="col-md-6 info-about">
              <div className="text-about">
             
              <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span className='title-green'>Apa itu DiBagi.in?</span>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item&apos;s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span className='title-green'>Bagaimana cara memberikan donasi?</span>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span className='title-green'>Bagaimana cara menerima donasi?</span>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
           
              </div>
          </div>
        </div>               
    </section>
  </div>
   </>
  )
}
