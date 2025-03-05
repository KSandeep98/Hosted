const Home = () => {
    return (
      <div>
        <header
          className="relative bg-cover bg-center text-white h-screen flex items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/intro-bg.jpg')",
          }}
        >
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to HostedMinds
              <span className="block text-blue-400">Explore the Possibilities</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Discover amazing features and unlock new opportunities with us.
            </p>
            <a
              href="#features"
              className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </header>
      </div>
    );
  };
  
  export default Home;
  