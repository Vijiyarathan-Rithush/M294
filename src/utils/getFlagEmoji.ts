/**
 * Gibt das Emoji der Landesflagge für einen Ländercode zurück.
 *
 * @param {string} code - Der ISO-Ländercode (z.B. "DE")
 * @returns {string} Das Flaggen-Emoji
 */
export const getFlagEmoji = (code: string) =>
{
    const cps = code.toUpperCase().split("").map(c => 127397 + c.charCodeAt(0));
    return String.fromCodePoint(...cps);
}
