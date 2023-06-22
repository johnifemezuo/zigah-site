import React from "react";
import Button from "../../../Global/UI/Button/Button";

function HeroInput() {
   const [email, setEmail] = React.useState<string>('');

  const handleGetStarted = () => {
    if (!email) {
      return;
    }
    window.location.replace(`https://app.zigah.co/auth/sign-up?email=${email}`);
  };

  return (
    <div className=" lg:w-[500px] bg-white/60">
      <div className="border-gray-light border flex p-1.5 lg:p-2 w-full  rounded-md shadow-2xl ">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="w-full bg-white/60 lg:py-4 h-full text-gray-dark outline-none  px-3 py-2 lg:px-5 bg- rounded-md mr-4"
        />

        <Button
          onClick={() => handleGetStarted()}
          isLoading={false}
          className="btn w-[185px] lg:w-[200px] btn-primary  rounded-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroInput;
