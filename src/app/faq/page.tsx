const QuestionAndAnswer = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div>
    <p className="text-2xl font-medium text-gray-dark-1 mb-3">{question}</p>
    <p className="text-gray-dark-2">{answer}</p>
  </div>
);

const Page = () => (
  <>
    <header id="section-1">
      <div className="flex flex-col gap-10 py-[60px]">
        <div className="w-full flex flex-col gap-2 justify-center">
          <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-dark-2 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
            Curious about Haffi? We&apos;ve got you covered!
          </p>
        </div>
      </div>
    </header>

    <section id="section-1">
      <div className="flex flex-col pb-[60px]">
        <div className="flex flex-col gap-6">
          <QuestionAndAnswer
            question="What is Haffi?"
            answer="Haffi is a specialized solution designed to streamline the booking
              process for businesses using WhatsApp for Business. It simplifies
              appointment scheduling, making it easier for businesses to manage
              bookings and communicate with customers."
          />
          <QuestionAndAnswer
            question="How does Haffi work?"
            answer=" When a customer messages your WhatsApp Business number, Haffi takes over! They'll receive a friendly welcome message with options to book appointments directly through WhatsApp. No more endless texting back and forth to schedule!"
          />
          <QuestionAndAnswer
            question="How will I know when a customer books with me?"
            answer="Once they choose a time slot, Haffi automatically adds it to your calendar and sends both you and the customer confirmation and reminder notifications, ensuring everyone stays on schedule. No more missed appointments or wasted time!"
          />
          <QuestionAndAnswer
            question="What makes Haffi unique?"
            answer="WhatsApp business solutions from other services require you to loose your WhatsApp conversation history. Haffi just an additional tool that you can use on WhatsApp. This allows us to focus on a very specific and niche problem that can make a big difference in your business."
          />
          <QuestionAndAnswer
            question="How can businesses benefit from Haffi?"
            answer="Haffi simplifies the booking process, reduces the risk of double-bookings through calendar integration, and enhances customer communication. Businesses can customize their booking workflows and receive notifications via email or WhatsApp about analytics and milestones."
          />
          <QuestionAndAnswer
            question="Is Haffi free?"
            answer="Yes, Haffi is free for businesses that join before March 2024. Take advantage of this limited-time offer to optimize your booking process without any cost."
          />
          <QuestionAndAnswer
            question="Is my information secure on the waitlist?"
            answer="Absolutely. We prioritize your privacy and security. You can trust that your information is handled securely. If you wish to delete your information, you have the option to do so by contacting us at support@haffi.one."
          />
        </div>
      </div>
    </section>
  </>
);

export default Page;
