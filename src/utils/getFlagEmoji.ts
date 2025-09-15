export const getFlagEmoji = (code: string) => 
{ 
    const cps = code.toUpperCase().split("").map(c => 127397 + c.charCodeAt(0)); 
    return String.fromCodePoint(...cps); 
};
