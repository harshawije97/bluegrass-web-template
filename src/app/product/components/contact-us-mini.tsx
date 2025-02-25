import { PhoneCall } from "lucide-react";
import React from "react";

function ContactUs() {
  return (
    <div className="px-4 py-4 flex flex-row justify-start gap-3 items-center">
      <PhoneCall className="w-6 h-6 text-gray-500" strokeWidth={1} />
      <span className="flex flex-col">
        <p className="text-base font-semibold text-gray-500">Contact us</p>
        <p className="text-sm font-light text-gray-400">
          For further information, please contact us
        </p>
      </span>
    </div>
  );
}

export default ContactUs;
