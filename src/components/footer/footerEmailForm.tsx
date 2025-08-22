import { useForm, type SubmitHandler } from "react-hook-form";
import Logo from "../logo";
import FooterEmail from "./footerEmail";
import { toast } from "sonner";
export default function FooterEmailForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = () => {
    const isMobile = window.innerWidth < 1024;

    toast.success("succesfully subscribed", {
      position: isMobile ? "bottom-center" : "bottom-right",
      style: {
        backgroundColor: "#fafafa",
      },
    });
    reset();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Logo classes="text-4xl" />
      <div className="text-[#A6A6A6]">Get started now try our product</div>
      <FooterEmail register={register} submited={isSubmitSuccessful} />
      {errors.email && (
        <span className="text-red-500 text-xs">{errors.email.message}</span>
      )}
    </form>
  );
}
