import Image from "next/image";

const Page = () => (
  <>
    <header>
      <div className="flex flex-col-reverse md:flex-row py-[60px] md:pt-[110px] gap-10">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-left md:text-[55px] md:leading-[70px]">
            Struggling with missed appointments and chaotic booking?
          </h1>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-left md:text-[22px] md:leading-[30px]">
            From frantic messages to effortless bookings, doubling your
            appointments and saving you 2 hours per week.
          </p>
        </div>
        <div className="flex-shrink-0 text-center">
          <Image
            className="inline"
            alt="WhatsApp Business Icon with a lot of unread messages"
            src="/whatsapp-notifications.svg"
            width={222}
            height={212}
          />
        </div>
      </div>
    </header>

    <section id="section-1">
      <div className="flex flex-col py-[60px] gap-12">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            Effortless Booking for Everyone
          </h2>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            Designed and crafted to make it easy for both you and your customers
            to hit the ground running right away
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <div className="w-full bg-green-1 rounded-3xl p-8 text-left">
              <Image
                alt="WhatsApp Icon"
                src="whatsapp.svg"
                width={120}
                height={120}
                className="inline"
              />
              <p className="text-gray-dark-1 text-[20px] md:text-[22px] mt-5 font-semibold">
                Customers will experience new interactive features like
                appointment scheduling, reminders, and confirmations, all within
                WhatsApp.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full bg-green-1 rounded-3xl p-8">
              <Image
                alt="Calendar App Icons"
                src="tools.svg"
                width={120}
                height={120}
                className="inline"
              />
              <p className="text-gray-dark-1 text-[20px] md:text-[22px] mt-5 font-semibold">
                Businesses do not need to switch platforms! HAFFI.ONE integrates
                seamlessly with the tools you already love, like your calendar,
                CRM, or booking system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-3">
      <div className="flex flex-col gap-10 py-[60px]">
        <div className="w-full flex flex-col gap-2 justify-center">
          <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            Less texting, more action
          </h2>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            Imagine saving 20 hours per week from endless booking messages on
            WhatsApp.
          </p>
        </div>

        <div className="mx-auto max-w-[30vh] md:max-w-[390px] flex-shrink-0">
          <div className="border-[6px] md:border-[8px] border-green-1 rounded-[35px] overflow-hidden ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="WhatsApp Workflow Animations"
              src="/whatsapp-workflow.gif"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Page;
