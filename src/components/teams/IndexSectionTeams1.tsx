import React from 'react';

const IndexSectionTeams1: React.FC = () => {
    return (
        <section className="relative pt-28 pb-36 bg-black overflow-hidden">
  <div className="container mx-auto px-4">
    <p className="mb-6 max-w-max mx-auto text-center text-transparent bg-clip-text bg-gradient-cyan2 font-heading text-xs uppercase font-semibold tracking-px">The team that made us successful</p>
    <h2 className="mb-20 font-heading font-semibold text-center text-6xl sm:text-7xl text-white">Expert Team Members</h2>
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10"><img className="mx-auto w-full" src="gradia-assets/images/teams/avatar-xl.png" alt="" />
          <div className="absolute bottom-0 left-0 w-full p-2.5">
            <div className="p-5 w-full bg-white rounded-md">
              <h2 className="font-heading font-bold text-lg text-gray-900">Cody Fisher</h2>
              <p className="text-sm text-gray-600">Co-Founder, CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10"><img className="mx-auto w-full" src="gradia-assets/images/teams/avatar-xl2.png" alt="" />
          <div className="absolute bottom-0 left-0 w-full p-2.5">
            <div className="p-5 w-full bg-white rounded-md">
              <h2 className="font-heading font-bold text-lg text-gray-900">Eleanor Pena</h2>
              <p className="text-sm text-gray-600">Co-Founder, CTO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10"><img className="mx-auto w-full" src="gradia-assets/images/teams/avatar-xl3.png" alt="" />
          <div className="absolute bottom-0 left-0 w-full p-2.5">
            <div className="p-5 w-full bg-white rounded-md">
              <h2 className="font-heading font-bold text-lg text-gray-900">Devon Lane</h2>
              <p className="text-sm text-gray-600">Chief Marketing Officer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10"><img className="mx-auto w-full" src="gradia-assets/images/teams/avatar-xl4.png" alt="" />
          <div className="absolute bottom-0 left-0 w-full p-2.5">
            <div className="p-5 w-full bg-white rounded-md">
              <h2 className="font-heading font-bold text-lg text-gray-900">Robert Fox</h2>
              <p className="text-sm text-gray-600">Senior Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionTeams1;