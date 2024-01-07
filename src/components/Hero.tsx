import PreOrderBtn from "./PreOrderBtn";

const Hero = () => (
  <header>
    <div className="flex flex-col-reverse md:flex-row py-[60px] md:pt-[110px] gap-10">
      <div className="w-full flex flex-col gap-2 justify-center">
        <h1 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-left md:text-[55px] md:leading-[70px]">
          Double your bookings with half the hassle
        </h1>
        <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-left md:text-[22px] md:leading-[30px]">
          A booking tool designed for your WhatsApp Business, effortlessly
          managing appointments without adding complexity to your workflow
        </p>
        <PreOrderBtn />
      </div>

      <div className="mx-auto h-[30vh] md:h-[60vh] flex-shrink-0">
        <div className="border-[6px] md:border-[8px] border-green-1 rounded-[35px] overflow-hidden max-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="WhatsApp Workflow Animations"
            src="/whatsapp-workflow.gif"
            className="h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
