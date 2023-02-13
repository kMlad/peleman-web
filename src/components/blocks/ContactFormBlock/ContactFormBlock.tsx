import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
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
  button,
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
    let data = { ...values };
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
          className=" bg-gray md:py-20 pt-16  relative text-black bg-cover bg-center bg-no-repeat block "
          ref={ref}
        >
          <section className="flex sm:container mx-auto justify-center items-center w-full">
            <div className="flex flex-col justify-center items-start">
              <div className="mx-auto md:mb-6">
                <p
                  className={` leading-[65px]  text-orange font-bold md:text-[48px] text-3xl relative ${
                    inView ? "fade-in-left" : ""
                  }`}
                >
                  {title}
                </p>

                <div className="mt-6 mb-16">
                  <div
                    className={`text-lg sm:px-0 flex flex-col gap-y-4 ${
                      inView ? "fade-in-bottom" : ""
                    }`}
                  >
                    <div className="flex flex-row gap-x-4 items-center">
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
                    <div className="flex flex-row gap-x-4 items-center">
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
                className={` leading-[65px] text-orange md:mb-4 font-bold md:text-[40px] text-2xl relative ${
                  inView ? "fade-in-left" : ""
                }`}
              >
                {cta}
              </p>
            </div>
          </section>
          <form onSubmit={formik.handleSubmit}>
            <div className=" text-sm  bg-white">
              <div className="pb-8 sm:pb-8 sm:px-12 max-w-[920px] container mx-auto">
                <div className=" flex flex-col">
                  <div className="flex flex-col items-center justify-between relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Вашето име"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className="bg-lightNavy border-2 border-darkNavy placeholder-white outline-orange placeholder-opacity-80 text-white  mt-2 ml-0 py-3 pl-4 w-full text-sm md:mb-1  mb-2 "
                    />
                    {formik.errors.name ? (
                      <p className="text-[#dc2626] mt-1 text-xs absolute -bottom-5 left-0">
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
                      className=" ml-0 py-3 w-full pl-4 mb-2 mt-10  text-sm bg-lightNavy border-2 border-darkNavy text-white placeholder-white placeholder-opacity-80 outline-orange "
                    />
                    {formik.errors.email ? (
                      <p className="text-[#dc2626] mt-1 text-xs absolute -bottom-4 left-0">
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
                      className="w-full pl-4  ml-0 p-3 bg-lightNavy border-2 border-darkNavy placeholder-white outline-orange placeholder-opacity-80 text-white  text-sm mb-2 mt-10"
                    />
                  </div>
                  {formik.errors.message ? (
                    <p className="text-[#dc2626] mt-1 text-xs">
                      {formik.errors.message}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="mt-10 cursor-pointer flex  py-2 px-16 text-red   w-full sm:w-auto sm:self-center justify-center shrink-0 text-2xl bg-darkNavy min-w-[180px] text-center text-white hover:bg-orange font-bold transition duration-200"
                  >
                    {button}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {showThankYou && (
        <div
          className=" bg-lightNavy pt-60 pb-80 relative text-white bg-cover bg-center bg-no-repeat block "
          ref={ref}
        >
          <div className="flex flex-col mx-auto container   pt-20  justify-center text-center items-center">
            <div className="  block  relative mt-20 bottom-24 shrink-0">
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
              className={`text-white font-bold text-[24px] relative mb-10  ${
                inView ? "fade-in-left" : ""
              }`}
              style={{ maxWidth: "60%" }}
            >
              Вашата порака е успешно испратена!{" "}
            </p>
            <div
              className={`  prose text-[16px] prose-p:text-white text-white prose-p:my-0 lg:prose-p:my-0 pl-4 sm:pl-0 pr-4 sm:pr-0 	 ${
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
