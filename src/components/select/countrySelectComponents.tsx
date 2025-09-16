import { components } from "react-select";
import type { GroupBase, OptionProps, SingleValueProps } from "react-select";
import { getFlagEmoji } from "../../utils/getFlagEmoji";

/**
 * OptionComponent zeigt eine Länderoption mit Flagge im Dropdown.
 * @param {OptionProps} props - Die Props für die Option
 * @returns {JSX.Element} Die Option mit Flagge
 */
export const OptionComponent = (props: OptionProps<{ value: string; label: string }, false, GroupBase<{ value: string; label: string }>>) => {
  const code = props.data.value;
  return (
    <components.Option {...props}>
      <span className="mr-2">{getFlagEmoji(code)}</span>
      {props.data.label}
    </components.Option>
  );
};

/**
 * SingleValueComponent zeigt die ausgewählte Länderoption mit Flagge.
 * @param {SingleValueProps} props - Die Props für die SingleValue-Komponente
 * @returns {JSX.Element} Die ausgewählte Option mit Flagge
 */
export const SingleValueComponent = (props: SingleValueProps<{ value: string; label: string }, false, GroupBase<{ value: string; label: string }>>) => {
  const code = props.data.value;
  return (
    <components.SingleValue {...props}>
      <span className="mr-2">{getFlagEmoji(code)}</span>
      {props.data.label}
    </components.SingleValue>
  );
};
