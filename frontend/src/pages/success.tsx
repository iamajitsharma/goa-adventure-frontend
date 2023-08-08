import React, { useState, useEffect } from "react";

export default function PaymentSuccess() {
  const [isGrowing, setIsGrowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGrowing((prevIsGrowing) => !prevIsGrowing);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const size = isGrowing ? "100px" : "120px";

  return (
    <div className="flex flex-col items-center justify-center mt-10 pt-28">
      <div
        className="image-container"
        style={{
          width: size,
          height: size,
          transition: "width 1s ease, height 1s ease",
        }}
      >
        <img src={"success-tick.png"} className="image" alt="Success Logo" />
      </div>
      <h2 className="text-3xl font-bold text-green-600 mt-8">
        Payment Successful!
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        Thank you for your payment. Your transaction has been successfully
        processed.
      </p>
      <button className=" text-white font-bold py-2 px-4 rounded mt-8">
        {/* <Link to="/AdminPage/dashboard" className="btn btn-primary ">
          Go to Dashboard
        </Link> */}
      </button>
    </div>
  );
}
