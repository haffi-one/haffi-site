import PreOrderBtn from "./PreOrderBtn";

const BulletItem = ({ content }: { content: string }) => (
  <div className="inline-block bg-gray-dark-1 rounded-2xl py-2 px-4 text-green-1 mr-4 last:mr-0 my-2">
    {content}
  </div>
);

const CtaSection = () => (
  <section id="section-3">
    <div className="flex flex-col gap-10 py-[60px] px-3 bg-slate-100 rounded-[3rem] min-h-96">
      <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
        Focus on your passion, leave the scheduling to HaffiCal
      </h2>
      <div className="w-full text-center">
        <BulletItem content="Schedule appointments & send reminders 24/7" />
        <BulletItem content="Verify payments instantly with screenshots" />
        <BulletItem content="Manage bookings & customers all in one place" />
        <BulletItem content="Interactive WhatsApp Experience" />
      </div>
      <div className="text-center">
        <PreOrderBtn />
      </div>
    </div>
  </section>
);

export default CtaSection;
