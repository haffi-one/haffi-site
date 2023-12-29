import Image from "next/image";

const Page = () => (
  <>
    <header>
      <div className="flex flex-col-reverse md:flex-row py-[60px] md:py-[110px] gap-10">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-left md:text-[55px] md:leading-[70px]">
            Ever just wish it was easier to book customers?
          </h1>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-left md:text-[22px] md:leading-[30px]">
            We made booking with your customers through WhatsApp easier. And we
            really mean it.
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

    <section>
      <div className="flex flex-col py-[60px] md:py-[110px] gap-12">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            Easy for <b>YOU</b> and your <b>CUSTOMERS</b>
          </h1>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            We know how hard it is to use new things.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <div className="w-full bg-gradient-to-br from-green-1 to-green-2 rounded-3xl p-8 text-left">
              <Image
                alt="WhatsApp Icon"
                src="whatsapp.svg"
                width={120}
                height={120}
                className="inline"
              />
              <p className="text-white text-[20px] md:text-[22px] mt-5 font-semibold">
                Customers will still book through WhatsApp
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full bg-gradient-to-br from-green-1 to-green-2 rounded-3xl p-8">
              <Image
                alt="Calendar App Icons"
                src="tools.svg"
                width={120}
                height={120}
                className="inline"
              />
              <p className="text-white text-[20px] md:text-[22px] mt-5 font-semibold">
                You will continue to uses the tools that you love
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Page;
