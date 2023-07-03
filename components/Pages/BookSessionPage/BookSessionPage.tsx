import emailjs from "@emailjs/browser";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Container from "../../../layout/Container";
import { StyledLongText } from "../../../styles/styled-components/Styled-component";
import FadIn from "../../../util/animation/FadIn";
import Aurora from "../../Global/Aurora/Aurora";
import Button from "../../Global/UI/Button/Button";
import { MAILJS_API } from "../../../base/constant/variables";

interface BookSessionPageI {
  fullName: string;
  service: string;
  email: string;
  message: string;
}

const BookSessionPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form: any = useRef();

  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookSessionPageI>({
    // resolver: yupResolver(bookSessionFormValidatorSchema),
  });

  const submitForm = async () => {
    setLoading(true);

    await emailjs
      .sendForm(
        "service_phnldni",
        "template_r4ujuxl",
        form.current,
        `${MAILJS_API}`,
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success(
              "Request Successfully sent, We will get back to you via email ",
              {
                duration: 3000,
                position: "top-center",
                className: "text-sm md:text-base",
              },
            );

            setTimeout(() => window.location.reload(), 2000);
          }
          setLoading(false);
        },
        (error) => {
          toast.error(`${error || "Sorry, Something went wrong"}`, {
            duration: 4000,
            position: "top-center",
          });
          setLoading(false);
        },
      );
  };
  return (
    <div className="lg:pt[10vh] mx-6 mt-12 lg:mt-20">
      <Container>
        <div className="md:grid space-y-28 relative md:items-center justify-between">
          <div className=" lg:flex--between w-full pt-[10vh] px-6 lg:px-0 relative z-10 lg:space-x-12 space-y-5 lg:text-left text-center">
            <FadIn var1={{ x: -80 }} var2={{ x: 0 }}>
              <h1 className="md:text-[6vh] lg:w-[30vw]  lg:text-left text-center text-4xl leading-snug lg:text-[5.9vh]  text-primary-blue font-extrabold">
                Schedula a Metting.
              </h1>
            </FadIn>
            <FadIn var1={{ x: 80 }} var2={{ x: 0 }} param="+=0.4">
              <StyledLongText>
                <span className="lg:w-[500px] inline-block">
                  Exchange and pay in your local currency, build financial
                  credibility, gain access to payment options and financial
                  intermediaries for free for yourbusin
                </span>
              </StyledLongText>
            </FadIn>
          </div>

          <Aurora />
        </div>

        <FadIn var1={{ y: 80 }} var2={{ y: 0 }} param="+=1">
          <div className="lg:px-[7vw] lg:py-[4vw] relative mb-20 lg:mb-44 lg:mt-[12vh] mt-12 rounded-xl bg-white  card-shadow-xl px-4 py-12  border-gray-light">
            <form
              onSubmit={handleSubmit(submitForm)}
              ref={form}
              id="resetForm"
              className="space-y-12">
              <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-8">
                <label className="lg:w-[700px] text-lg lg:text-2xl  font-medium">
                  Hey, my name is
                </label>
                <div className="w-full">
                  <p className="text-red capitalize text-sm md:text-sm text-left mb-2">
                    {errors.fullName?.message}
                  </p>
                  <input
                    {...register("fullName", {
                      required: "Please add a name",
                      minLength: 4,
                    })}
                    type="text"
                    placeholder="John Doe"
                    className="border rounded-xl active:border-primary-magenta w-full border-gray-light px-3 lg:px-5 py-3 text-sm lg:text-base lg:py-4"
                  />
                </div>
              </div>

              <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-8">
                <label className="lg:w-[700px] text-lg lg:text-2xl  font-medium">
                  And I want to
                </label>
                <div className="w-full">
                  <p className="text-red capitalize text-sm md:text-sm text-left mb-2">
                    {errors.service?.message}
                  </p>
                  <select
                    className="border rounded-xl w-full bg-white border-gray-light px-3 lg:px-5 py-3 text-sm lg:text-base lg:py-4"
                    {...register("service")}
                    required>
                    <option value="make Inquiry">Make Inquiry</option>
                    <option value="I have question">I have question</option>
                    <option value="talk business">Talk Business</option>
                  </select>
                </div>
              </div>

              <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-8">
                <label className="lg:w-[700px] text-lg lg:text-2xl  font-medium">
                  Give us ur Email
                </label>
                <div className="w-full">
                  <p className="text-red capitalize text-sm md:text-sm text-left mb-2">
                    {errors.email?.message}
                  </p>
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    type="email"
                    placeholder="example@me.com"
                    className="border rounded-xl w-full border-gray-light px-3 lg:px-5 py-3 text-sm lg:text-base lg:py-4"
                  />
                </div>
              </div>

              <div className="lg:flex space-y-3 lg:slg-y-0 lg:space-x-8">
                <label className="lg:w-[700px] text-lg lg:text-2xl  font-medium">
                  What is your message
                </label>
                <div className="w-full">
                  <p className="text-red capitalize text-sm md:text-sm text-left mb-2">
                    {errors.message?.message}
                  </p>
                  <textarea
                    {...register("message", {
                      required: "Leave a message, Thank you",
                    })}
                    placeholder="Message"
                    className="border rounded-xl w-full border-gray-light px-3 lg:px-5 py-3 text-sm lg:text-base lg:py-4"
                  />
                </div>
              </div>

              <Button
                isLoading={false}
                className="btn flex items-center btn-rounded-xl btn-primary" >
                {loading ? <span className="mr-3 lds-dual-ring" /> : null}
                SCHEDULE SESSION
              </Button>
            </form>
          </div>
        </FadIn>
      </Container>

      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #ff00bb",
            padding: "16px",
            color: "#273444",
            letterSpacing: "0.1rem",
          },
        }}
        gutter={24}
      />
    </div>
  );
};

export default BookSessionPage;
