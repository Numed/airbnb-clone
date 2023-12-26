import { AiFillStar } from "react-icons/ai";

import { reviewsCards } from "../../Contants";

const IntroReviews = () => {
  return (
    <section className="w-full h-auto mt-20 flex items-center justify-center flex-col px-2 sm:p-8">
      <div className="flex items-center justify-between w-full mb-6">
        <div>
          <h3 className="text-3xl font-semibold text-black">Reviews</h3>
          <p className="text-blackishGreen/75 font-base mt-4">
            What people says about Golobe facilities
          </p>
        </div>
        <button className="px-4 py-3 text-sm text-blackishGreen border border-mintGreen hover:bg-mintGreen transition-colors">
          See All
        </button>
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row space-y-8 lg:space-x-12">
        {reviewsCards.map(
          ({ id, author, position, img, alt, title, description }) => (
            <div
              className="relative p-6 w-full lg:w-1/3 h-auto bg-white rounded-3xl after:bg-mintGreen/40 after:content-[''] after:translate-x-1 after:w-full after:h-full after:-z-10 after:absolute after:top-5 after:rounded-3xl after:p-6"
              key={id}
            >
              <h3 className="text-2xl text-blackishGreen font-bold">
                '{title}'
              </h3>
              <h4 className="text-sm text-blackishGreen/50 my-4">
                {description.length > 100
                  ? description.slice(0, 100) + "..."
                  : description}
              </h4>
              <span className="flex items-center mb-4">
                <AiFillStar size="1.5rem" className="text-yellow-300" />
                <AiFillStar size="1.5rem" className="text-yellow-300" />
                <AiFillStar size="1.5rem" className="text-yellow-300" />
                <AiFillStar size="1.5rem" className="text-yellow-300" />
                <AiFillStar size="1.5rem" className="text-yellow-300" />
              </span>
              <h5 className="text-sm text-blackishGreen mb-1 font-bold">
                {author}
              </h5>
              <h6 className="text-xs text-blackishGreen/50">{position}</h6>
              <img className="mt-8 w-full" src={img} alt={alt} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default IntroReviews;
