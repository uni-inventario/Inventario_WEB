export function formatDateSecunds(isoString) {
  if (!isoString) return null;

  let s = isoString.trim();
  const isUTC = s.endsWith("Z");
  if (isUTC) s = s.slice(0, -1);

  if (s.includes(".")) {
    const [base, fracAndMaybeTZ] = s.split(".");
    const fracDigits = (fracAndMaybeTZ || "").match(/^\d+/)?.[0] ?? "";
    const milli = (fracDigits + "000").slice(0, 3); 
    s = `${base}.${milli}`;
  }

  if (isUTC) s = s + "Z";

  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

export function formatDateBr(isoString, withTime = true) {
  const d = formatDateSecunds(isoString);
  if (!d) return "";

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  if (withTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
    options.hour12 = false;
  }

  return d.toLocaleString("pt-BR", options);
}
