import React from 'react';      

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fuchsia-800 to-sky-200 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About MyStore</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're more than an e-commerce platform—we're your gateway to seamless shopping experiences, delivering quality products with passion and precision.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2025, MyStore started as a small online marketplace with a simple vision: 
                to connect customers with exceptional products from around the world. Today, we serve 
                thousands of shoppers, offering a curated selection of electronics, fashion, and home essentials.
              </p>
              <p className="text-lg text-gray-600">
                Our journey is driven by innovation, customer trust, and a commitment to sustainability. 
                Every purchase supports ethical sourcing and eco-friendly practices.
              </p>
            </div>
            <div className="relative">
              <img
                src="gpt-team.png"
                alt="myStore Team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">We prioritize your satisfaction with fast delivery, secure payments, and 24/7 support.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Committed to green practices, from recyclable packaging to partnering with ethical brands.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Leveraging cutting-edge tech for personalized recommendations and effortless shopping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="gpt-CEO.png" 
                alt="CEO"
                className="rounded-full w-48 h-48 mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="gpt-cto.png" 
                alt="CTO"
                className="rounded-full w-48 h-48 mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img
                src="gpt-cmo.png" 
                alt="CMO"
                className="rounded-full w-48 h-48 mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
              <p className="text-gray-600">CMO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
