import { components } from "react-select";
import { getFlagEmoji } from "../../utils/getFlagEmoji";

export const OptionComponent = (props: any) =>
{
  const code = props.data.value as string;
  return (
    <components.Option {...props}>
      <span className="mr-2">{getFlagEmoji(code)}</span>
      {props.data.label}
    </components.Option>
  );
};

export const SingleValueComponent = (props: any) =>
{
  const code = props.data.value as string;
  return (
    <components.SingleValue {...props}>
      <span className="mr-2">{getFlagEmoji(code)}</span>
      {props.data.label}
    </components.SingleValue>
  );
};
