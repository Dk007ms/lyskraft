import React, { useState } from "react";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log("Email submitted:", email);
      // Here you would typically send the email to your backend
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h2 className="text-lg font-bold mb-2">SIGN UP FOR EMAIL</h2>
      <p className="text-gray-500 mb-4">
        Receive early access to new arrivals, sales, exclusive content, events
        and much more!
      </p>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          EMAIL ADDRESS*
        </label>
        <input
          type="email"
          id="email"
          className={`w-full px-3 py-2 border ${
            isValidEmail ? "border-gray-300" : "border-red-500"
          } rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {!isValidEmail && (
          <p className="text-red-500 text-sm mb-2">
            Please enter a valid email address.
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        By Signing up, you will receive Coyu offers, Promotions and other
        commerical messages. You are also agreeing to Coyu{" "}
        <a href="#" className="underline">
          Privacy policy
        </a>
        . You may unsubscribe any time.
      </p>
    </div>
  );
};

export default EmailSignupForm;
