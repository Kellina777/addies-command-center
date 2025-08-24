import React from 'react';

const IndexSectionSignIn7: React.FC = () => {
    return (
        <section className="pt-20 pb-32 bg-black overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center -m-6">
      <div className="w-full md:w-1/2 p-6">
        <div className="bg-gradient-cyan2 p-1 mx-auto max-w-max overflow-hidden rounded-full"><img className="object-cover rounded-full" src="https://static.shuffle.dev/uploads/files/41/4147a7ac619a662879c5d4b73807ddf3990fc747/Untitled-design-4.jpg" alt="" /></div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <div className="md:max-w-md">
          <h2 className="mb-3 font-heading font-bold text-white text-6xl sm:text-7xl">DyeConverter.com</h2>
          <p className="mb-16 text-lg text-gray-500">Welcome! Sign in or sign up - it;s free to try!</p>
          <div className="flex flex-wrap -m-2 mb-6">
            <div className="w-full p-2">
              <p className="mb-2.5 font-medium text-base text-white">Email address</p>
              <div className="p-px bg-gradient-cyan rounded-lg">
                <input className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-black outline-none focus:ring-4 focus:ring-indigo-500 rounded-lg" type="text" placeholder="i.e. john@example.com" name="email" />
              </div>
            </div>
            <div className="w-full p-2">
              <p className="mb-2.5 font-medium text-base text-white">Password</p>
              <div className="p-px bg-gradient-cyan rounded-lg">
                <input className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-black outline-none focus:ring-4 focus:ring-indigo-500 rounded-lg" type="text" placeholder="********" name="password" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-1.5 mb-5">
            <div className="w-auto p-1.5">
              <input className="w-4 h-4" type="checkbox" />
            </div>
            <div className="flex-1 p-1.5">
              <p className="text-gray-500 text-sm">Remember me</p>
            </div>
          </div>
          <div className="group relative md:max-w-max mb-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-0 group-hover:opacity-50 rounded-full transition ease-out duration-300" />
            <button className="p-1 w-full font-heading font-semibold text-xs text-white uppercase tracking-px overflow-hidden rounded-full">
              <div className="relative py-5 px-14 bg-gradient-blue overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                <p className="relative z-10 group-hover:text-gray-900">Login</p>
              </div>
            </button>
          </div>
          <p className="text-gray-500 text-sm"><span>Don’t have an account? </span><a className="text-white hover:text-gray-200" href="#">Create free account</a></p>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionSignIn7;