import { useForm, type SubmitHandler } from "react-hook-form";
import FooterCoin from "./footerCoin";
import ActionButton from "../buttons/actionButton";

import { toast } from "sonner";

interface FormInputs {
  email: string;
  message: string;
}

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const isDesktop = window.innerWidth >= 1024;

  const onSubmit: SubmitHandler<FormInputs> = () => {
    toast.success("succesfully sent", {
      position: isDesktop ? "bottom-right" : "bottom-center",
      style: {
        backgroundColor: "#fafafa",
      },
    });

    reset();
  };

  return (
    <div className="bg-[#222938] rounded-2xl flex flex-col items-center p-5">
      <div className="flex flex-col gap-4 items-center">
        <FooterCoin />
        <div className="text-2xl">Get Started</div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-[440px] w-full"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor={"email"} className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "can't be empty" })}
            className="bg-neutral-50 rounded-lg px-4 py-2 text-neutral-900 text-sm"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-sm text-red-400">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor={"message"} className="text-lg">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", {
              required: "can't be empty",
              minLength: {
                value: 20,
                message: "can't be less than 20 characters",
              },
            })}
            className="bg-neutral-50 rounded-lg px-4 py-2 text-neutral-900 text-sm"
            placeholder="What are you say ?"
          />
          {errors.message && (
            <span className="text-sm text-red-400">
              {errors.message.message}
            </span>
          )}
        </div>

        <ActionButton text="Request Demo" borderRadius={10} type="submit" />

        <div className="flex justify-end">
          <span className="text-xs">
            or{" "}
            <button className="font-semibold hover:underline cursor-pointer">
              Start Free Trial
            </button>
          </span>
        </div>

        <area />
      </form>
    </div>
  );
}
