import Link from "next/link";
import API_ENDPOINT from '../../globals/api-endpoint'
export default function Login(){

   const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = API_ENDPOINT.login;

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result)
  }
    return (
    <>
      <div className="container mt-3">
        <div className="card login-form">             
        <div className="card-body">
          <h2 className="card-title text-center">Masuk</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email*</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="you@email.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password*</label>
              <input type="password" className="form-control" id="password" placeholder="*****" required />
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