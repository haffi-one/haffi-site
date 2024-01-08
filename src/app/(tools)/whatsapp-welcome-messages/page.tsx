import CtaSection from "@/components/CtaSection";
import Form from "./components/Form";

const Page = () => (
  <>
    <header>
      <div className="flex flex-col-reverse md:flex-row py-[60px] md:pt-[110px] gap-10">
        <div className="w-full flex flex-col gap-2 justify-center text-center md:text-left">
          <h1 className="text-gray-dark-1 font-bold text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            WhatsApp Welcome Message Generator
          </h1>
          <p className="text-gray-dark-2 text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            Welcome messages on WhatsApp are your business&apos;s first
            impression with your customers
          </p>
          <div className="mt-10">
            <Form />
          </div>
          <div className="mt-10">
            <p className="text-2xl font-semibold text-gray-dark-1">
              How to Set a greeting message
            </p>
            <ol className="list-decimal mt-5 leading-[30px] text-gray-dark-1 text-left pl-10">
              <li>Tap more options</li>
              <li>
                Tap <strong>Business tools</strong> and then tap{" "}
                <strong>Greeting message</strong>.
              </li>
              <li>
                Turn on <strong>Send greeting message</strong>.
              </li>
              <li>
                Tap <strong>Greeting message</strong> to edit your greeting
                message, then tap <strong>OK</strong>.
              </li>
              <li>
                Tap <strong>Recipients</strong> and select one of the following
                options:
                <ol className="list-disc">
                  <li>
                    <strong>Everyone</strong>: send to everyone who messages
                    you.
                  </li>
                  <li>
                    <strong>Everyone not in address book</strong>: send to
                    customers who aren&apos;t in your address book.
                  </li>
                  <li>
                    <strong>Everyone except…</strong>: send to all customers
                    except those you select.
                  </li>
                  <li>
                    <strong>Only send to…</strong>: send only to select
                    customers.
                  </li>
                </ol>
              </li>
              <li>
                Then Tap <strong>Save</strong>
              </li>
            </ol>
            <p className="text-gray-dark-2 mt-3">
              <strong>Note</strong>: Your device must have an active internet
              connection in order to send greeting messages.
            </p>
          </div>
        </div>
      </div>
    </header>
    <div className="mb-10">
      <CtaSection />
    </div>
  </>
);

export default Page;
