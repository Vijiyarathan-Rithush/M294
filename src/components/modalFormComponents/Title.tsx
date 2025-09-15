import type { TitleProperties } from "../../models/TitleProperties";

function Title({ label }: TitleProperties)
{
  return (<h2 className="text-2xl font-bold text-black">{label}</h2>);
}

export default Title;