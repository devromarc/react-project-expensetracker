import bgImg from '../assets/bgImage.jpeg';
import { FiArrowUpRight } from 'react-icons/fi';
const HomePage = () => {
  return (
    <div className="bg-black font-questrial p-5 text-white h-screen">
      <header className="mb-[60px] md:mb-[96px]">
        <div className=" flex gap-2 items-center justify-center w-full">
          <div>
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5698 11.3809C18.5174 11.2404 13.8749 2.00221 13.8051 1.86171C13.5607 1.26456 13.1244 0.755229 12.5484 0.403966C11.0998 -0.439063 9.24979 0.0527039 8.41204 1.51044C7.83608 2.51154 7.87099 3.68827 8.42949 4.61911C8.48185 4.74206 12.9149 13.5939 13.0022 13.7344C13.0546 13.8749 13.1244 13.9978 13.1942 14.1383C13.4385 14.7355 13.8749 15.2448 14.4508 15.5961C15.8994 16.4391 17.7495 15.9649 18.5872 14.5071C19.1806 13.5061 19.1283 12.3118 18.5698 11.3809Z"
                fill="#0EF387"
              />
              <path
                d="M13.212 5.12843C13.7182 4.58397 14.0323 3.84632 14.0323 3.03842C14.0323 1.36992 12.6884 0 11.0129 0C9.98319 0 9.07563 0.50933 8.53458 1.29967C8.42986 1.40505 0.907563 10.7486 0.820297 10.8716C0.314156 11.416 0 12.1537 0 12.9616C0 14.6476 1.36134 16 3.01939 16C4.04913 16 4.95669 15.4907 5.49774 14.7003C5.60246 14.5774 13.1422 5.25137 13.212 5.12843Z"
                fill="#FAFAFA"
              />
              <path
                d="M26.1797 5.12843C26.6858 4.58397 27 3.84632 27 3.03842C27 1.35236 25.6386 0 23.9806 0C22.9508 0 22.0433 0.50933 21.5022 1.29967C21.3975 1.40505 13.8578 10.7486 13.7705 10.8716C13.2644 11.416 12.9502 12.1537 12.9502 12.9616C12.9502 14.6476 14.3115 16 15.9696 16C16.9993 16 17.9069 15.4907 18.4479 14.7003C18.5701 14.5774 26.0924 5.25137 26.1797 5.12843Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
          <div>
            <p className="uppercase font-bold text-xl text-white">
              expensetracker
            </p>
          </div>
        </div>
      </header>
      <section className=" text-left">
        <h3 className="font-normal text-sm leading-[16.21px] text-[#FAFAFA66] uppercase tracking-[2px] mb-[10px]">
          Expense log
        </h3>
        <h1 className="text-3xl font-normal leading-8">
          Manage Your{' '}
          <span className="text-green-500 underline underline-offset-[8px]">
            Finances
          </span>{' '}
          Masterfully!
        </h1>
        <p className="mt-3 text-[#FAFAFA66]">
          ExpenseTracker effortlessly empowers you to take control of your
          finances! With intuitive features, it simplifies the process of
          tracking and managing expenses, allowing for a stress-free mastery
          over your financial world.
        </p>

        <div className="mt-8 space-x-4">
          <button className="bg-[#0EF387] text-black px-6 py-2 rounded-full  hover:bg-[#0EBB69] font-normal">
            Sign Up
          </button>
          <button className="bg-transparent border-2 border-gray-600 px-6 py-2 rounded-full font-normal hover:border-[#0EF387]">
            Sign In
          </button>
        </div>
      </section>

      <section className="mt-10">
        <div className="relative">
          <img
            src={bgImg}
            alt="People managing finances"
            className="rounded-2xl object-contain"
          />
          <div className="absolute bottom-4 left-[-8px] bg-white text-black p-5 rounded-lg shadow-lg w-64 flex items-end gap-3 md:w-[303px]">
            <div className="bg-[#0EF387] p-2  w-9 h-9 rounded-xl flex items-center justify-center">
              <FiArrowUpRight style={{ fontSize: '50px' }} />
            </div>
            <div className="flex items-end justify-center gap-2">
              <div>
                <p className="text-xs text-[#11101C80]">Your balance</p>
                <p className="text-[18px] font-bold">$632.000</p>
              </div>
              <p className="border-1 border-[#02B15A26] bg-[#02B15A26] rounded-xl p-1 text-xs text-[#02B15A]">
                +1.29%
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
