const Point = ({
  step,
  title,
  body,
  imgSrc,
}: {
  step: string;
  title: string;
  body: string;
  imgSrc: string;
}) => (
  <div className="w-full flex flex-col gap-2">
    <p className="text-gray-dark-1/40 text-[4rem] font-bold">{step}</p>
    <h2 className="text-3xl font-semibold text-gray-dark-1">{title}</h2>
    <p className="text-gray-dark-1 flex-grow">{body}</p>
    <div className="w-100 aspect-video bg-slate-300 rounded-2xl shadow-2xl overflow-clip mt-7">
      <img src={imgSrc} className="w-100 aspect-video object-cover" />
    </div>
  </div>
);

const HowItWorks = () => (
  <section id="section-1">
    <div className="flex flex-col py-[60px] gap-12">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
          Effortless Booking
        </h2>
        <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
          Designed and crafted to make it easy for both your business and your
          customers to book
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5">
        <Point
          step="1"
          title="Chat to Book, Magically Easy ✨"
          body="Customers tap your HaffiCal link and schedule in a snap, right in WhatsApp"
          imgSrc="/whatsapp-convo.jpg"
        />
        <Point
          step="2"
          title="Calendars Sync, You Relax"
          body="Appointments flow seamlessly into your calendar. No manual work, no missed dates."
          imgSrc="/calendar-notification.jpg"
        />
        <Point
          step="3"
          title="Get Updated, Zero Worries"
          body="Get instant confirmations and reminders, keeping you and your clients on track.."
          imgSrc="/whatsapp-notification.jpg"
        />
      </div>
    </div>
  </section>
);

export default HowItWorks;
