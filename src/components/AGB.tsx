import type { AGBProperties } from "../models/AGBProperties";
import { validationRules } from "../utils/validation";

export default function AGB({ register, errors }: AGBProperties) {
  return (
    <>
      <label className="flex items-center gap-2 mt-2 text-black">
        <input type="checkbox" {...register("terms", validationRules.terms)} />
        <span>
          Ich akzeptiere die
          <a href="/agb" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">AGB</a>
          <span className="text-red-600 ml-1">*</span>
        </span>
      </label>
      {errors.terms && <p className="text-red-600 text-sm">{errors.terms.message}</p>}
    </>
  );
}