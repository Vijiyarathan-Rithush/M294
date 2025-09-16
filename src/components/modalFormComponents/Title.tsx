import type { TitleProperties } from "../../models/TitleProperties";
/**
 * Zeigt eine Überschrift an.
 * Der Text wird als Titel angezeigt.
 *
 * @param {string} label - Der Text des Titels
 * @returns {JSX.Element} Die Überschrift
 */
function Title({ label }: TitleProperties)
{
  return (
    <h2 className="text-2xl font-bold text-black">{label}</h2>
  );
}

export default Title;