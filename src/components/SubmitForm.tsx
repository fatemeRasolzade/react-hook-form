import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const SubmitForm = () => {
  const form = useForm();
  const { register, control } = form;

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SubmitForm;
