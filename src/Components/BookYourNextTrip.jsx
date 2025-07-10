import { BookingSteps } from "../constants";
import UpcomingTrip from "./UpcomingTrip";

const BookYourNextTrip = () => {
    return (
        <div
            id="bookings"
            className="flex md:flex-row flex-col max-md:gap-16 gap-4 md:mt-16 pt-16"
        >
            <div className="md:flex-1/2">
                <div>
                    <div className="text-gray uppercase font-medium max-md:text-center text-sm mb-2">
                        Easy and fast
                    </div>
                    <div className="text-large  font-bold font-volkhov md:text-5xl text-4xl max-md:text-center lagend-text">
                        Book Your next Trip
                        <br />
                        In 3 Easy steps.
                    </div>
                    {BookingSteps.map((step) => (
                        <Steps key={step.id} {...step} />
                    ))}
                </div>
            </div>
            <div className="md:flex-1/2 ">
                <UpcomingTrip />
            </div>
        </div>
    );
};

function Steps({ title, Icon, desc, className }) {
    return (
        <div className="flex mt-6 gap-6">
            <span
                className={`fill-white bg-theme-orange size-12 flex shrink-0 items-center justify-center rounded-2xl ${className}`}
            >
                <Icon />
            </span>
            <div className="pr-10 text-gray text-sm font-poppins">
                <div className="font-bold">{title}</div>
                <div>{desc}</div>
            </div>
        </div>
    );
}
export default BookYourNextTrip;
