import PreOrderBtn from "./PreOrderBtn";

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
          question="What is HaffiCal?"
          answer="HaffiCal is a tool designed to streamline the booking
              process for businesses using WhatsApp for Business. It simplifies
              appointment scheduling, making it easier for businesses to manage
              bookings and communicate with customers."
        />

        <QuestionAndAnswer
          question="Can I use my existing WhatsApp number"
          answer="Yes, HaffiCal integrates seamlessly into your existing WhatsApp business."
        />
        <QuestionAndAnswer
          question="How does HaffiCal work?"
          answer="When a customer messages your WhatsApp Business number, HaffiCal takes over, offering a simplified booking process."
        />
        <QuestionAndAnswer
          question="How will I know when a customer books with me?"
          answer="HaffiCal automatically adds bookings to your calendar, sending both you and the customer confirmations and reminders."
        />
        <QuestionAndAnswer
          question="Does HaffiCal support online payments for bookings?"
          answer="While HaffiCal doesn't directly process online payments yet, it simplifies offline payment verification for your customers. They can upload a screenshot of their bank transfer confirmation, and HaffiCal's smart technology will check its validity, ensuring seamless booking confirmations for both you and your customers."
        />
        <QuestionAndAnswer
          question="What makes HaffiCal unique?"
          answer="WhatsApp business solutions from other services require you to change your WhatsApp number. HaffiCal just an additional tool that you can use on WhatsApp. This allows us to focus on a very specific and niche problem that can make a big difference in your business."
        />
        <QuestionAndAnswer
          question="Does HaffiCal access my personal WhatsApp information or chats?"
          answer="No, HaffiCal does not access any of your personal WhatsApp information or chats. We operate by providing a secure link that businesses can expose for their customers to book appointments. Your privacy and the confidentiality of your messages are of utmost importance to us. HaffiCal focuses solely on streamlining the appointment booking process, ensuring a seamless experience without compromising your personal data."
        />
        <QuestionAndAnswer
          question="How do you connect to my WhatsApp number?"
          answer="HaffiCal doesn't connect directly to your WhatsApp number. We provide a secure link for customer bookings without accessing your personal number."
        />
      </div>
      <div className="text-center">
        <PreOrderBtn eventName="faq_section.pre_order_btn_click" />
      </div>
    </div>
  </section>
);

export default Faq;
