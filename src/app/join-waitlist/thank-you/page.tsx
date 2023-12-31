const Page = () => (
  <>
    <header id="section-1">
      <div className="flex flex-col gap-10 py-[60px]">
        <div className="w-full flex flex-col gap-2 justify-center">
          <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            You&apos;re on the list!
          </h2>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            Congrats, we are exciting to work with you. We will contact you with
            more details soon.
          </p>
        </div>
      </div>
    </header>

    <section>
      <div className="flex flex-col pb-[60px] gap-8">
        <div className="w-full flex flex-col gap-2">
          <p className="text-gray-dark-2 text-lg text-center">
            Spread the word with other businesses like yours
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 max-w-[400px] mx-auto">
          <a
            target="_blank"
            className="w-full py-4 bg-[#0a66c2] rounded-full text-white text-lg text-center cursor-pointer flex flex-row justify-center items-center gap-3"
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fhaffi.one"
          >
            <i className="bi bi-linkedin text-2xl"></i>
            <span>Share Haffi on LinkedIn</span>
          </a>
          <a
            target="_blank"
            className="w-full py-4 bg-black rounded-full text-white text-lg text-center cursor-pointer flex flex-row justify-center items-center gap-3"
            href="http://twitter.com/share?text=Just%20jumped%20on%20the%20Haffi%20waitlist%21%20Say%20goodbye%20to%20endless%20WhatsApp%20booking%20back-and-forth.%20This%20is%20gonna%20be%20a%20game-changer%20for%20my%20business%21&url=https%3A%2F%2Fhaffi.one&hashtags=whatsapp,whatsappforbusiness"
          >
            <i className="bi bi-twitter-x text-2xl"></i>
            <span>Share Haffi on X</span>
          </a>

          {/* facebook */}
          <div>
            <div id="fb-root"></div>
            <script
              async
              defer
              crossOrigin="anonymous"
              src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=2485973591555856"
              nonce="MKwCuCJn"
            ></script>

            <div
              className="fb-share-button w-full py-4 bg-[#4267B2] rounded-full text-white text-lg text-center cursor-pointer flex flex-row justify-center items-center gap-3"
              data-href="https://haffi.one"
              data-layout=""
              data-size=""
            >
              <i className="bi bi-facebook text-2xl"></i>
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhaffi.one%2F&amp;src=sdkpreparse"
                className="fb-xfbml-parse-ignore"
              >
                <span>Share Haffi on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Page;
