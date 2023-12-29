import Image from "next/image";

const Page = () => (
  <>
    <header>
      <div className="flex flex-col-reverse md:flex-row py-[60px] md:pt-[110px] gap-10">
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

    <section id="section-1">
      <div className="flex flex-col py-[60px] gap-12">
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
            <div className="w-full bg-green-1 rounded-3xl p-8 text-left">
              <Image
                alt="WhatsApp Icon"
                src="whatsapp.svg"
                width={120}
                height={120}
                className="inline"
              />
              <p className="text-white text-[20px] md:text-[22px] mt-5 font-semibold">
                Customers booking using WhatsApp interactive features
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
              <p className="text-white text-[20px] md:text-[22px] mt-5 font-semibold">
                You will continue to uses the tools that you love
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-2">
      <div className="flex flex-col-reverse gap-10 py-[60px]">
        <div className="w-full flex flex-col gap-2 justify-center">
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            Imagine the time you&apos;ve wasted just, Texting...
          </p>
          <h1 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            No more back and forth on WhatsApp
          </h1>
        </div>

        <div className="mx-auto max-w-[450px] flex-shrink-0">
          <div className="border-[8px] border-green-1 rounded-[35px] overflow-hidden shadow-2xl">
            <div className="w-full pt-8 pb-3.5 px-3.5 bg-green-1 flex flex-row items-center">
              <Image
                alt="Profile Image"
                src="/profile-image.png"
                width={45}
                height={45}
                className="bg-white rounded-full"
              />
              <div className="ml-3">
                <p className="text-xl font-semibold text-white leading-5">
                  HAFFI
                </p>
                <p className="text-white leading-5 text-sm opacity-80">
                  Online
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 py-5 px-2">
              <div className="w-full flex flex-row justify-end">
                <div className="text-lg py-3.5 px-5 bg-[#EADFDF] rounded-3xl inline-block">
                  <p>Really?</p>
                </div>
              </div>

              <div className="w-full flex flex-row justify-start">
                <div className="text-lg py-3.5 px-5 bg-green-1 rounded-3xl inline-block">
                  <p>Yes</p>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="text-lg py-3.5 px-5 bg-green-1 rounded-3xl inline-block">
                  <p>And We made it easy for you to get started ✨</p>
                </div>
              </div>
              <div className="w-full flex flex-row justify-end">
                <p className="text-[90px] leading-[90px]">🤩</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Page;
