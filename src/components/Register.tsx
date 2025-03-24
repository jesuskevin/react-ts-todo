import { Link } from "react-router-dom";

export const Register: React.FC = () => {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
            >
              <div className="mb-10 text-center md:mb-16 font-bold text-2xl text-[#b83f45]">
                TODO APP
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="
                    border-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                  <div className="flex">
                    {/* <span className="text-red-400 text-sm m-2 p-2">error</span> */}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="
                    border-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                  <div className="flex">
                    {/* <span className="text-red-400 text-sm m-2 p-2">error</span> */}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="
                    border-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                  <div className="flex">
                    {/* <span className="text-red-400 text-sm m-2 p-2">error</span> */}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password confirmation"
                    className="
                    border-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                  <div className="flex">
                    {/* <span className="text-red-400 text-sm m-2 p-2">error</span> */}
                  </div>
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="text-base text-[#adadad]">
                Already a member?
                <Link
                  to="/login"
                  className="text-primary hover:underline ml-1"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
