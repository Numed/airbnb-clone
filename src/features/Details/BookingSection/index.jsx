import { Link } from "react-router-dom";
import { useActiveUser, useOpenModal } from "../../../store";

const BookingSection = () => {
  const { setOpenedModal } = useOpenModal();
  const { user } = useActiveUser();
  return (
    <section className="w-full h-full">
      {user === undefined ? (
        <div className="flex flex-col items-start justify-center bg-white rounded-md p-4">
          <h3 className="text-2xl text-blackishGreen font-semibold">
            You are not authorized
          </h3>
          <Link
            className="mt-3 bg-mintGreen/90 hover:bg-mintGreen w-full h-full px-3 py-4 text-center text-white transition-all"
            to="/sign-in"
          >
            Go to Login
          </Link>
          <h4 className="text-blackishGreen/60 text-lg mt-2 mb-0 mx-auto">
            Not register yet?
            <Link
              className="text-blue-300 font-medium text-base ml-3"
              to="/sign-up"
            >
              Register now
            </Link>
          </h4>
        </div>
      ) : (
        <button
          className="text-white text-xl bg-mintGreen hover:bg-mintGreen/70 text-center w-full py-4 transition-colors"
          onClick={() => setOpenedModal(true)}
        >
          Book now
        </button>
      )}
    </section>
  );
};

export default BookingSection;
