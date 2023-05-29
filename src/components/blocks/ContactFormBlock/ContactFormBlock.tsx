import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";
import type { ComponentBlocksContactForm } from "@utils/types";
import telephoneIcon from "../../../assets/telephone.svg";
import emailIcon from "../../../assets/email.svg";

interface Values {
  name: string;
  email: string;
  message: string;
}

const ContactFormBlock = ({
  email,
  phoneNumber,
  buttonCta,
  cta,
  title
}: ComponentBlocksContactForm): JSX.Element => {
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const validationSchema = yup.object().shape({
    name: yup.string().required("Внесете го името"),
    email: yup
      .string()
      .email("Е-маил адресата не е валидна")
      .required("Внесете го вашиот е-маил"),
    message: yup.string(),
  });
  const handleSubmit = async (values: Values) => {
    const data = { ...values };
    console.log("handleSubmit");

    await validationSchema
      .validate(data)
      .then(() => {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          if (res.status === 200) {
            console.log("Response succeeded!");
            setIsSubmitted(true);
            setShowThankYou(true);
          }
        });
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: Values) => {
      handleSubmit(values);
    },
  });

  return (
    <div id="contact-me">
      {!showThankYou && (
        <div
          className=" relative block bg-white  bg-cover bg-center bg-no-repeat pt-16 text-black md:py-20 "
          ref={ref}
        >
          <section className="mx-auto flex w-full items-center justify-center sm:container">
            <div className="flex flex-col items-start justify-center">
              <div className="mx-auto md:mb-6">
                <p
                  className={` relative  text-3xl font-bold leading-[65px] text-orange md:text-[48px] ${
                    inView ? "fade-in-left" : ""
                  }`}
                >
                  {title}
                </p>

                <div className="mt-6 mb-16">
                  <div
                    className={`flex flex-col gap-y-4 text-lg sm:px-0 ${
                      inView ? "fade-in-bottom" : ""
                    }`}
                  >
                    <div className="flex flex-row items-center gap-x-4">
                      <Image
                        unoptimized
                        src={telephoneIcon.src}
                        alt=" logo"
                        width={38}
                        height={38}
                        className="cursor-pointer"
                      />
                      <p className="text-darkNavy">{phoneNumber}</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                      <Image
                        unoptimized
                        src={emailIcon.src}
                        alt=" logo"
                        width={38}
                        height={38}
                        className="cursor-pointer"
                      />
                      <p className="text-darkNavy">{email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className={` relative text-2xl font-bold leading-[65px] text-orange md:mb-4 md:text-[40px] ${
                  inView ? "fade-in-left" : ""
                }`}
              >
                {cta}
              </p>
            </div>
          </section>
          <form onSubmit={formik.handleSubmit}>
            <div className=" bg-white  text-sm">
              <div className="container mx-auto max-w-[920px] pb-8 sm:px-12 sm:pb-8">
                <div className=" flex flex-col">
                  <div className="relative flex flex-col items-center justify-between">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Вашето име"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className="my-2 ml-0 w-full rounded-md border-2 border-darkNavy bg-lightBlue py-3  pl-4 text-sm text-lightNavy outline-orange placeholder:text-lightNavy placeholder:text-opacity-80 md:mb-1"
                    />
                    {formik.errors.name ? (
                      <p className="absolute -bottom-5 left-0 mt-1 text-xs text-[#dc2626]">
                        {formik.errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Е-mail"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="ml-0 mb-2 mt-10 w-full rounded-md border-2 border-darkNavy  bg-lightBlue py-3 pl-4 text-sm text-lightNavy outline-orange placeholder:text-lightNavy placeholder:text-opacity-80 "
                    />
                    {formik.errors.email ? (
                      <p className="absolute -bottom-4 left-0 mt-1 text-xs text-[#dc2626]">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Вашата порака"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      cols={12}
                      rows={7}
                      className="ml-0 mb-2 mt-10  w-full rounded-md border-2 border-darkNavy bg-lightBlue p-3 pl-4 text-sm text-lightNavy  outline-orange placeholder:text-lightNavy placeholder:text-opacity-80"
                    />
                  </div>
                  {formik.errors.message ? (
                    <p className="mt-1 text-xs text-[#dc2626]">
                      {formik.errors.message}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="mt-10 flex w-full  min-w-[180px] shrink-0 cursor-pointer   justify-center rounded-md bg-darkNavy py-2 px-16 text-center text-2xl font-bold text-white transition duration-200 hover:bg-orange sm:w-auto sm:self-center"
                  >
                    {buttonCta}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {showThankYou && (
        <div
          className=" relative block bg-white bg-cover bg-center bg-no-repeat pt-60 pb-80 text-lightNavy "
          ref={ref}
        >
          <div className="container mx-auto flex flex-col   items-center  justify-center pt-20 text-center">
            <div className="  relative  bottom-24 mt-20 block shrink-0">
              {/* <Image
                quality={100}
                alt="image"
                src={Vector.src}
                height={151}
                width={151}
                unoptimized
                layout="fixed"
                objectFit="contain"
              /> */}
            </div>
            <p
              className={`relative mb-10 text-[24px] font-bold text-lightNavy  ${
                inView ? "fade-in-left" : ""
              }`}
              style={{ maxWidth: "60%" }}
            >
              Вашата порака е успешно испратена!{" "}
            </p>
            <div
              className={`  prose px-4 text-[16px] text-lightNavy prose-p:my-0 prose-p:text-lightNavy sm:px-0 lg:prose-p:my-0 	 ${
                inView ? "fade-in-bottom" : ""
              }`}
            >
              Ќе ве контактираме во најбрз можен рок. Имајте убав ден!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormBlock;
