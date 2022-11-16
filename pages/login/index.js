import Link from "next/link";
export default function Login(){
    return (
    <>
       <div className="container mt-3">
    <div className="card login-form">             
        <div className="card-body">
          <h2 className="card-title text-center">Masuk</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">Email*</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="you@email.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password*</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****" required />
            </div>

            <div className="d-flex justify-content-between">
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Ingat saya</label>
                </div>

                <div>
                    <Link href="#" className="link">Lupa Password ?</Link>
                </div>
            </div>

            <div className="d-grid mt-5">
                <button type="submit" className="btn btn-login">Masuk</button>
            </div>

            <div className="mt-3">
                <label>Belum Punya Akun ? <Link href="/register" className="link">Daftar</Link></label>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    );
}