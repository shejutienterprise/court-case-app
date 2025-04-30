import React from 'react'

const RegisterPage = () => {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl mb-2">Advocate Diary</h1>
      <p className="mb-4">Register Diary</p>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Firm Name:
        <input type="text" className="grow w-72" placeholder="Enter law firm name" />
      </label>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Lawyer Name:
        <input type="text" className="grow w-72" placeholder="Enter lawyer name" />
      </label>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Phone No:
        <input type="number" className="grow w-72" placeholder="Enter Phone Number" />
      </label>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Email:
        <input type="email" className="grow w-72" placeholder="Enter email address" />
      </label>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Firm Address:
        <input type="text" className="grow w-72" placeholder="Enter firm address" />
      </label>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Password:
        <input type="password" className="grow w-72" placeholder="Enter password" />
      </label>
      <h3>Have a diary? <Link href="/">Login</Link></h3>
    </div>
  )
}

export default RegisterPage