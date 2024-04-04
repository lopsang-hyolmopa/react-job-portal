export const Hero = () => {
  const backgroundImageLink =
    "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <section
      className="py-20 bg-no-repeat bg-top bg-auto bg-blend-overlay bg-black/60"
      style={{ backgroundImage: `url(${backgroundImageLink})` }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Become a React Dev
          </h1>
          <p className="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <input
            type="text"
            id="search"
            name="search"
            className="rounded-md w-1/2 py-2 px-3 mr-2"
            placeholder="Search by Jobs, title, keywords"
          />
          <button className="text-white bg-rose-700 py-2 px-6 rounded-md hover:bg-rose-600">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero
