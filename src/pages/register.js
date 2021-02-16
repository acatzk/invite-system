import Head from 'next/head'
import Link from 'next/link'

const Register = () => {
  return ( 
    <>
      <Head>
        <title>Register | Grace Wealthness</title>
      </Head>
      <div className="flex min-h-screen">
        <div className="container m-auto max-w-none sm:max-w-md h-screen sm:h-auto px-6 bg-white rounded-none sm:rounded-lg shadow">
          <form className="py-8 space-y-4">
            <div className="space-y-2">
              {/* Full name */}
              <div className="space-y-2">
                <div className="relative">
                  <label className="text-sm text-gray-600">Full Name</label>
                  <input  className="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 pr-7 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                          type="text" />
                </div>
              </div>
              {/* Gender */}
              <div className="space-y-2">
                <div className="relative">
                  <label className="text-sm text-gray-600">Gender</label>
                  <select className="text-sm w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 transition ease-in-out duration-200 bg-white focus:border-gray-100">
                    <option value="Male">Male</option>
                    <option value="Male">Female</option>
                  </select>
                </div>
              </div>
              {/* Country */}
              <div className="space-y-2">
                <div className="relative">
                  <label className="text-sm text-gray-600">Country</label>
                  <select className="text-sm w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 transition ease-in-out duration-200 bg-white focus:border-gray-100">
                    <option>Country</option>
                  </select>
                </div>
              </div>
              {/* Contact number  */}
              <div className="space-y-2">
                <div className="relative">
                  <label className="text-sm text-gray-600">Contact Number</label>
                  <input  className="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                          type="text" />
                </div>
              </div>
              {/* Email */}
              <div className="space-y-2">
                <div className="relative">
                  <label className="text-sm text-gray-600">Your Email </label>
                  <input  className="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                          type="email" />
                </div>
              </div>
              {/* Username */}
              <div className="space-y-2">
                <div className="relative">
                  <label className="text-sm text-gray-600">Username</label>
                  <input  className="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                          type="text" />
                </div>
              </div>
              {/* Password */}
              <div className="space-y-2">
                <div className="relative">
                  <label className="text-sm text-gray-600">Password</label>
                  <input  className="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                          type="password" />
                </div>
              </div>
              {/* Confirm Password */}
              <div className="space-y-1">
                <div className="relative">
                  <label className="text-sm text-gray-600">Confirm Password</label>
                  <input  className="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 pr-8 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" />
                  <button className="absolute right-2 top-8 text-gray-400 flex items-center focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <button className="flex items-center justify-center text-sm font-medium w-full bg-green-500 py-2 border-none text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase on ease-in-out duration-200">
                Create Account
              </button>
              <Link href="/">
                <a className="block text-center text-sm font-medium w-full border border-green-500 py-2 text-green-500 rounded focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">Back</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
 
export default Register