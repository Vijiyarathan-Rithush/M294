import { components } from "react-select";
import type { GroupBase, OptionProps, SingleValueProps } from "react-select";
import { getFlagEmoji } from "../../utils/getFlagEmoji";

export const OptionComponent = (props: OptionProps<{ value: string; label: string }, false, GroupBase<{ value: string; label: string }>>) => {
  const code = props.data.value;
  return (
    <components.Option {...props}>
      <span className="mr-2">{getFlagEmoji(code)}</span>
      {props.data.label}
    </components.Option>
  );
};

export const SingleValueComponent = (props: SingleValueProps<{ value: string; label: string }, false, GroupBase<{ value: string; label: string }>>) => {
  const code = props.data.value;
  return (
    <components.SingleValue {...props}>
      <span className="mr-2">{getFlagEmoji(code)}</span>
      {props.data.label}
    </components.SingleValue>
  );
};
