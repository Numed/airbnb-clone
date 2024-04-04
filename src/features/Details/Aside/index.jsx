const AsideInfo = ({detailsInfo}) => {
    return (
        <aside className="bg-white rounded-xl p-4 sm:p-6 w-full mb-8 xl:ml-10 xl:mb-0">
        <div className="flex items-start justify-start flex-col sm:flex-row">
          <img
            className="w-[3rem] h-[3rem] mb-2 sm:w-[7.5rem] sm:h-[7.5rem] sm:mr-6 sm:mb-0"
            src={detailsInfo?.partnerLogo || detailsInfo?.hotelLogo}
            alt={detailsInfo?.partnerName || detailsInfo?.alt}
          />
          <div className="flex flex-col items-start justify-start">
            <h4 className="text-blackishGreen/75 text-base font-medium line-clamp-1">
              {detailsInfo?.airlineName || detailsInfo?.name}
            </h4>
            <h3 className="max-w-[16rem] font-semibold text-lg sm:text-xl text-blackishGreen mt-1">
              {detailsInfo?.planeName || detailsInfo?.roomName}
            </h3>
            <div className="hidden sm:block my-4">
              <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                {detailsInfo?.rating}
              </span>
            </div>
          </div>
        </div>
        <div className="border-y border-y-gray-400 py-2 sm:p-4">
          <h3 className="text-base text-blackishGreen font-medium">
            Your booking is protected by{" "}
            <span className="font-bold">golobe</span>
          </h3>
        </div>
        <div className="py-2 sm:p-4">
          <h4 className="text-blackishGreen text-base font-semibold mb-4">
            Price details
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-blackishGreen text-base font-medium">
                Base Fare
              </h5>
              <span className="text-blackishGreen text-base font-semibold">
                ${detailsInfo?.price}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-blackishGreen text-base font-medium">
                Discount
              </h5>
              <span className="text-blackishGreen text-base font-semibold">
                $0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-blackishGreen text-base font-medium">
                Taxes
              </h5>
              <span className="text-blackishGreen text-base font-semibold">
                $20
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-blackishGreen text-base font-medium">
                Service Fee
              </h5>
              <span className="text-blackishGreen text-base font-semibold">
                $5
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 pt-4 border-t border-t-gray-400">
          <h5 className="text-blackishGreen text-base font-medium">Total</h5>
          <span className="text-blackishGreen text-base font-semibold">
            ${detailsInfo?.price + 25}
          </span>
        </div>
      </aside>
    )
}

export default AsideInfo;