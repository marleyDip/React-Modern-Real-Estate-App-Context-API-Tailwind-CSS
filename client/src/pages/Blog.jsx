import { blogs } from "../assets/data";

const Blog = () => {
  return (
    <>
      <style>{`
          @keyframes shine {
              0% {
                  background-position: 0% 50%;
              }
      
              50% {
                  background-position: 100% 50%;
              }
      
              100% {
                  background-position: 0% 50%;
              }
          }
      
          .button-bg {
              background: conic-gradient(from 0deg, #00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF);
              background-size: 300% 300%;
              animation: shine 4s ease-out infinite;
          }
      `}</style>

      <div className="bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28">
        <div className="max-padd-container">
          {/* container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-12">
            {blogs.map((blog, index) => (
              <div key={index} className="relative">
                <div className="bg-secondary/10 p-4 rounded-2xl">
                  <img
                    src={blog.image}
                    alt="blogImage"
                    className="shadow-xl shadow-slate-900/20 rounded-xl"
                  />
                </div>

                {/* info */}
                <p className="medium-14 mt-6 px-2 py-0.5 rounded-full shadow-sm bg-secondary/10 border border-slate-900/30 inline-block mb-1">
                  {blog.category}
                </p>

                <h5 className="h5 pr-4 mb-2 line-clamp-1">{blog.title}</h5>

                <p className="line-clamp-2 text-justify mb-4 font-medium">
                  {blog.description}
                </p>

                <div className="button-bg rounded-full inline-block p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                  <button className="px-4 text-sm py-2 text-black rounded-full font-medium bg-white">
                    Continue Reading
                  </button>
                </div>

                {/* info */}
              </div>
            ))}
          </div>
          {/* container */}
        </div>
      </div>
    </>
  );
};

export default Blog;
