import type { AGBProperties } from "../models/AGBProperties";
import { validationRules } from "../utils/validation";

export default function AGB({ register, errors }: AGBProperties) {
  return (
    <>
      <label className="flex flex-col gap-1 mt-2 text-black">
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("terms", validationRules.terms)} />
          <span>
            Ich akzeptiere die
            <a href="/agb" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">AGB</a>
            <span className="text-red-600 ml-1">*</span>
          </span>
        </div>
      </label>
      {errors.terms && (
        <p className="text-red-600 text-sm mt-1">
          {errors.terms.message} <br />
          <span className="text-xs">
            Mehr Infos: 
            <a href="/agb" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">AGB</a>
          </span>
        </p>
      )}
    </>
  );
}