import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { MAILJS_API } from '../../utils/api/apis';

const Schedule = () => {
  const form: any = useRef();

  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = async () => {
    setLoading(true);

    await emailjs
      .sendForm(
        'service_phnldni',
        'template_r4ujuxl',
        form.current,
        `${MAILJS_API}`,
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success(
              'Request Successfully sent, We will get back to you via email ',
              {
                duration: 3000,
                position: 'top-center',
                className: 'text-sm md:text-base',
              },
            );
            setLoading(false);
            setTimeout(() => window.location.reload(), 4000);
          }
        },
        (error) => {
          toast.error(`${error || 'Sorry, Something went wrong'}`, {
            duration: 4000,
            position: 'top-center',
          });
          setLoading(false);
        },
      );
  };

  return (
    <section>
      <div className="container py-5">
        <small className="secondary">GET IN TOUCH</small>
        <h1>Schedule quick session</h1>

        <form className="my-5" ref={form} onSubmit={handleSubmit(submitForm)}>
          <h2 className="fw-normal d-lg-flex d-md-block d-sm-block gap-3 align-items-center">
            <span className="col-lg-3 col-md-12 col-sm-12 w-auto">
              <div className="mb-3">Hey, my name is</div>
            </span>
            <span className="col-lg-3 col-md-12 col-sm-12 w-auto">
              <input
                className="form-control inputs mb-3 bg-transparent border-bottom-secondary-input"
                placeholder="Type here"
                name="name"
                {...(register('name'),
                { required: 'name is required, Thank you' })}
                required
              />
            </span>
            <span className="col-lg-3 col-md-12 col-sm-12 w-auto">
              <div className="mb-3">and I want to</div>
            </span>
            <select
              className="form-control inputs bg-transparent border-bottom-secondary-input"
              {...register('message')}
              required
            >
              <option>Make Inquiry</option>
              <option>I have question</option>
              <option>Talk Business</option>
            </select>
          </h2>
          <h2 className="fw-normal d-lg-flex d-md-block d-sm-block my-5 gap-3 align-items-center">
            <span className="col-lg-4 col-md-12 col-sm-12 w-auto">
              Get in touch with me at
            </span>
            <input
              className="col-lg-4 inputs col-md-12 col-sm-12 w-auto form-control bg-transparent border-bottom-secondary-input"
              name="email"
              placeholder="Type email here"
              {...(register('email'), { required: 'email is required' })}
              required
            />
          </h2>
          <button
            className="btn py-3 btn-primary d-flex flex-row-reverse "
            type="submit"
          >
            {loading ? <span className="mr-3 lds-dual-ring" /> : null}
            SCHEDULE SESSION
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Schedule;
