import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  const password = watch("password");

  return (
    <section className="h-screen w-full flex justify-center items-center bg-gray-200 px-2">
      <div className="bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Top section with image */}
        <div className="w-full h-62">
          <img
            src="/authImage.png"
            alt="Register illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Bottom section with form */}
        <div className="p-8 flex flex-col justify-center items-center">
          <h2 className="mb-3 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Register
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-xs flex flex-col gap-y-5"
          >
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs animate-fadeIn" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long.",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs animate-fadeIn" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password!",
                  validate: (value) =>
                    value === password || "Passwords do not match.",
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs animate-fadeIn" role="alert">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3 mt-3 font-semibold rounded-lg text-white transition duration-300 ${
                isValid
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
