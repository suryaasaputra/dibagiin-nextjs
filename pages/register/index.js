import Link from "next/link";
export default function Register(){
    return (
    <>
        <div className="container mt-3">
    <div className="card register-form">             
        <div className="card-body">
          <h2 className="card-title text-center">Daftar</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">Email*</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="you@email.com" required></input>
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputusername1" className="form-label">Username*</label>
                <input type="username" className="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Username" required></input>
              </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password*</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****" required></input>
            </div>

            <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Jenis Kelamin*</label><br />
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Pria</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Wanita</label>
                  </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputWhatsApp1" className="form-label">No. WhatsApp*</label>
                <input type="text" className="form-control" id="exampleInputWhatsApp1" placeholder="08123468798" required />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputNamaLengkap1" className="form-label">Nama Lengkap*</label>
                <input type="text" className="form-control" id="exampleInputNamaLengkap1" placeholder="Jhon Doe" required />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputAlamat1" className="form-label">Alamat*</label>
                <input type="text" className="form-control" id="exampleInputAlamat1" placeholder="Jl. Garuda No. 76 Jakarta Selatan" required />
              </div>


            <div className="d-grid mt-5">
                <button type="submit" className="btn btn-register">Daftar</button>
            </div>

            <div className="mt-3">
                <label>Sudah punya akun ? <Link href="/login" className="link">Masuk</Link></label>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    );
}