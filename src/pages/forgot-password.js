import Head from 'next/head'
import Link from 'next/link'

export default function ForgotPasswordPage () {
  return (
    <>
      <Head>
        <title>Forgot Password | Grace Wealthness</title>
      </Head>
      <div className="flex h-screen">
        <div className="container m-auto max-w-none sm:max-w-md h-screen sm:h-auto bg-white rounded-none sm:rounded-lg shadow">
          <div className="px-6 flex flex-col">
            <div className="mt-5 flex-shrink-0 flex justify-center">
              <img className="h-72" src="/images/logo.png" alt="avatar" />
            </div>
            <div className="pt-6 space-y-3 text-center">
              <h1 className="text-base font-medium text-gray-700">Trouble Logging in?</h1>
              <p className="font-light text-gray-500 text-sm">Enter your email and we'll send you a verification code to get back into your account.</p>
            </div>
            <form className="py-8 space-y-3">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Your Email</label>
                  <input  className="text-sm w-full py-2 border border-gray-300 rounded shadow-inner focus:outline-none pl-4 focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200 focus:border-gray-100" 
                          placeholder="Enter Email" 
                          type="text" />
                </div>
              </div>
              <div className="space-y-3">
                <button className="text-sm font-medium w-full bg-green-500 py-2 border-none text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 uppercase on ease-in-out duration-200">
                  Send Verification Code
                </button>
                <p className="text-center text-gray-500 text-sm">Or</p>
                <Link href="/register">
                  <a className="inline-block text-center text-sm font-medium w-full border border-green-500 py-2 text-green-500 rounded focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">Create account</a>
                </Link>
                <Link href="/">
                  <a className="mt-3 inline-block text-center text-sm font-medium w-full py-2 text-green-500 rounded uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">BACK TO LOGIN</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}