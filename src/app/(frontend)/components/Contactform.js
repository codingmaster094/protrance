"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Fahne from "../../../../public/images/Fahne.webp";
import Key from "../../../../public/images/Key.webp";
import Tree from "../../../../public/images/Tree.webp";
import airoplain from "../../../../public/images/airoplain.svg";
import heart from "../../../../public/images/heart.svg";
import home from "../../../../public/images/home.svg";
import star from "../../../../public/images/star.svg";
import tea from "../../../../public/images/tea.svg";
import truck from "../../../../public/images/truck.svg";
import { motion } from 'framer-motion';
const iconData = [
  { value: "Herz", label: " den  Herz", image: heart },
  { value: "Tasse", label: " den  Tasse", image: tea },
  { value: "Stern", label: " den  Stern", image: star },
  { value: "LKW", label: " den  LKW", image: truck },
  { value: "Baum", label: " den  Baum", image: Tree },
  { value: "Schlüssel", label: " den  Schlüssel", image: Key },
  { value: "Haus", label: " den  Haus", image: home },
  { value: "Flugzeug", label: " den  Flugzeug", image: airoplain },
  { value: "Fahne", label: " den  Fahne", image: Fahne },
];

const getRandomItems = (array, count) => {
  let shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
const LoadingDots = () => {
  return (
    <section className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </section>
  );
};
const Contactform = ({ title, description, Form_title, MapImage }) => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [Success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const [correctAnswer, setcorrectAnswer] = useState(null);
  const [randomIcons, setRandomIcons] = useState([]);
  const [randomLabel, setRandomLabel] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedIcon: "",
  });

  useEffect(() => {
    const selectedIcons = getRandomItems(iconData, 3);
    setRandomIcons(selectedIcons);

    // Pick the label from one of the selected icons as the correct answer
    const randomLabelItem =
      selectedIcons[Math.floor(Math.random() * selectedIcons.length)];
    setRandomLabel(randomLabelItem.label);
    setcorrectAnswer(randomLabelItem.label);
    setLoading(false); // Store the correct answer
  }, []);

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // exactly 10 digits

    if (!formData.name.trim()) {
      formErrors.name = "Füll bitte dieses Feld aus.";
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Füll bitte dieses Feld aus.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      formErrors.phone =
        "Bitte gib eine gültige 10-stellige Telefonnummer ein.";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Füll bitte dieses Feld aus.";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    }

    if (formData.selectedIcon !== correctAnswer) {
      formErrors.selectedIcon = `Bitte wählen Sie das ${randomLabel} Symbol aus.`;
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const endpoint =
    process.env.NEXT_PUBLIC_SENDER_MAIL || "https://formspree.io/f/mnnjpeda";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Nachricht erfolgreich gesendet");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          selectedIcon: "",
        });
        setErrors({});
      } else {
        setErrorMessage(
          `Nachricht konnte nicht gesendet werden: ${result.message}`
        );
      }
    }
  };
  return (
    <section
      className=" contact"
      id="kontaktformular"
    >
       <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container">
        <div className="flex flex-col gap-6  mb-8 md:mb-10 lg:mb-20 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-[40%] gap-6 shadow-[0px_4.8px_24.4px_-6px_#1310221A] p-6 rounded-3xl">
            <h3
              className="p font-medium mb-6"
              dangerouslySetInnerHTML={{ __html: Form_title }}
            ></h3>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="name">
                  Vorname<span className="text-[#CD1A1A]">*</span>
                </label>
                <input
                  type="text"
                  className="outline-none  bg-background p-4 rounded-lg"
                  placeholder="Maxima "
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                ></input>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 ">{errors.name}</p>
                )}
              </div>
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="email">
                  E-mail<span className="text-[#CD1A1A]">*</span>
                </label>
                <input
                  type="E-mail"
                  className="outline-none  bg-background p-4 rounded-lg"
                  placeholder="muster@muster.de"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                ></input>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 ">{errors.email}</p>
                )}
              </div>
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="number">
                  Telefon<span className="text-[#CD1A1A]">*</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  className="outline-none  bg-background p-4 rounded-lg"
                  placeholder="muster@muster.de"
                  value={formData.phone}
                  onChange={handleInputChange}
                ></input>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2 ">{errors.phone}</p>
                )}
              </div>
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="number">Ihre Nachricht</label>
                <textarea
                  className="outline-none  bg-background p-4 rounded-lg resize-none"
                  placeholder="Ihre Nachricht"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <p>
                Informationen zum Datenschutz bzgl. Ihrer Anfrage finden Sie
                hier :
                <Link
                  href="/datenschutzerklarung"
                  aria-label="link"
                  className="text-secondary hover:text-primary transition-all"
                >
                  Datenschutzerklärung
                </Link>
              </p>
              <div className="mt-4">
                <p>
                  Bitte beweisen Sie, dass Sie ein Mensch sind und wählen Sie{" "}
                  <strong className="text-secondary">{randomLabel}</strong>.
                </p>
                <div className="flex gap-2 mt-2 item-center">
                  {loading ? ( // Check if loading
                    <LoadingDots /> // Show loading dots
                  ) : (
                    randomIcons.map((icon, i) => (
                      <label key={i} className="cursor-pointer">
                        <input
                          type="radio"
                          name="selectedIcon"
                          value={icon.label}
                          checked={formData.selectedIcon === icon.label}
                          onChange={handleInputChange}
                          className="hidden peer"
                        />
                        <div className="p-1 peer-checked:border-2 peer-checked:border-orange-500">
                          <Image
                            src={icon.image}
                            alt={icon.label}
                            width={22}
                            height={22}
                          />
                        </div>
                      </label>
                    ))
                  )}
                </div>
                {errors.selectedIcon && (
                  <p className="text-red-500 text-sm mt-2 ">
                    {errors.selectedIcon}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary-alt self-start"
                aria-label="link"
              >
                ABSENDEN
              </button>
              {Success && (
                <div className="success-message border-green-500">
                  <p className="text-green-700 py-4">
                    Ihre Nachricht wurde erfolgreich gesendet!
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className="border-red-500">
                  <p className="text-red-700 py-4">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
          <div className="w-full md:w-[50%] flex rounded-[32px] overflow-hidden">
            <Image
              src={MapImage}
              alt="mapimage"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contactform;
