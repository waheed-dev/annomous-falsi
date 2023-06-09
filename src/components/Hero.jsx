

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-5 text-white">
              Welcome to my Website
            </h1>
            <p className="text-xl lg:text-2xl text-white font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              elit, tristique placerat feugiat ac, facilisis vitae arcu.
            </p>
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 mt-8 rounded-md hover:bg-indigo-600 hover:text-white">
              Get Started
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src='https://anonymous.falci.me/static/media/demo.gif' alt="hero" className="rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Hero