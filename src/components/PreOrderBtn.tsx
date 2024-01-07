const PreOrderBtn = () => (
  <div className="mt-4">
    <a
      href="#"
      className="inline-block transition-all ease-in-out delay-150 border-2 border-green-1 bg-green-1 text-gray-dark-1 hover:border-green-1 hover:bg-green-1/70 font-bold px-4 py-4 rounded-full"
    >
      <span className="font-normal line-through mr-2">$240</span>
      <span>$49 Pre-order</span>
    </a>
    <div className="text-gray-dark-2 text-sm flex flex-col gap-2 mt-2">
      <p>Limited time offer for lifetime access to HaffiCal</p>
      <p>Significant savings compared to the $240 per year subscriptions</p>
    </div>
  </div>
);

export default PreOrderBtn;
