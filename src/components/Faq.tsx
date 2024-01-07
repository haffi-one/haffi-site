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

const Faq = () => (
  <section id="section-3">
    <div className="flex flex-col gap-10 py-[60px]">
      <h2 className="text-gray-dark-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
        Frequently Asked Questions
      </h2>

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
          question="Does Haffi support online payments for bookings?"
          answer="While Haffi doesn't directly process online payments yet, it simplifies offline payment verification for your customers. They can upload a screenshot of their bank transfer confirmation, and Haffi's smart technology will check its validity, ensuring seamless booking confirmations for both you and your customers."
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
          question="Is my information secure on the waitlist?"
          answer="Absolutely. We prioritize your privacy and security. You can trust that your information is handled securely. If you wish to delete your information, you have the option to do so by contacting us at support@haffi.one."
        />
      </div>
    </div>
  </section>
);

export default Faq;
