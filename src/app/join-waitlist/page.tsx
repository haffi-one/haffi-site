import { EmailInput, WhatsAppNumberInput } from "@/components/Inputs";
import Option from "@/components/Option";

const Page = () => (
  <>
    <header id="section-1">
      <div className="flex flex-col gap-10 py-[60px]">
        <div className="w-full flex flex-col gap-2 justify-center">
          <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            We&apos;re excited to have you on the Haffi waitlist
          </h2>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            Join to stay ahead of the curve and unlock the future of WhatsApp
            Business.
          </p>
        </div>

        {/* <div className="flex flex-row gap-3 md:gap-8 max-w-[500px] mx-auto">
          <div className="w-full border-[4px] md:border-[6px] border-green-1 rounded-[20px] md:rounded-[35px] overflow-hidden ">
           
            <img
              alt="WhatsApp Workflow Animations"
              src="/wa-workflow-1.png"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="w-full border-[4px] md:border-[6px] border-green-1 rounded-[20px] md:rounded-[35px] overflow-hidden ">
           
            <img
              alt="WhatsApp Workflow Animations"
              src="/wa-workflow-2.png"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div> */}
      </div>
    </header>

    <section id="section-1">
      <div className="flex flex-col  gap-6 pb-[60px]">
        <div className="gap-5 w-full flex flex-col md:flex-row">
          <Option
            name="whatsapp"
            imgSrc="/whatsapp.svg"
            title="Join using WhatsApp Business"
            description="Connect instantly and secure your waitlist spot"
          >
            <WhatsAppNumberInput />
          </Option>
          <Option
            name="email"
            imgSrc="/email.svg"
            title="Join using Email"
            description="Connect instantly and secure your waitlist spot"
          >
            <EmailInput />
          </Option>
        </div>
        <button className="border-2 border-gray-dark-1 bg-green-1 text-gray-dark-1 text-lg font-semibold py-3 px-7 rounded-full hover:bg-green-2">
          Join
        </button>
      </div>
    </section>
  </>
);

export default Page;
