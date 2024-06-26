import ApartmentsHeader from "./Header";
import ApartmentsSearch from "./Search";
import { useActiveUser } from "../../store";

const ApartmentsContainer = () => {
  const { user } = useActiveUser();
  return (
    <section className="w-full h-full">
      <ApartmentsHeader />
      <ApartmentsSearch />
      <section className="w-full h-full mt-4">
        <div className="w-full h-full mt-20">
          <div className="flex items-center justify-between w-full px-4 lg:px-[6.5rem]">
            <div>
              <h3 className="text-3xl font-semibold text-black">
                Fall into travel
              </h3>
              <p className="text-blackishGreen/75 font-base mt-4 max-w-[53rem]">
                Going somewhere to celebrate this season? Whether you&apos;re
                going home or somewhere to roam, we&apos;ve got the travel tools
                to get you to your destination.
              </p>
            </div>
            <button className="hidden sm:block px-4 py-3 text-sm text-blackishGreen border border-mintGreen hover:bg-mintGreen transition-colors">
              See all
            </button>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-center mt-10">
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightMelbour">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    Melbourne
                  </h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 700</h5>
              </div>
            </div>
            <button className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen">
              Book a Hotel
            </button>
          </div>
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightParis">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">Paris</h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 600</h5>
              </div>
            </div>
            <button className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen">
              Book a Hotel
            </button>
          </div>
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightLondon">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">Londod</h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 350</h5>
              </div>
            </div>
            <button className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen">
              Book a Hotel
            </button>
          </div>
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightColumbia">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    Columbia
                  </h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 700</h5>
              </div>
              <button className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen">
                Book a Hotel
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ApartmentsContainer;
