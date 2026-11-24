/**
 * Brazilian number in the format wa.me expects: country code 55, area code,
 * then 8 (landline) or 9 (mobile) digits. Digits only.
 * Mirrored as a string in `.pages.yml`, which validates it in the CMS form.
 */
export const WHATSAPP_PATTERN = /^55\d{10,11}$/;

export function buildWhatsAppUrl(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, '');
  if (!WHATSAPP_PATTERN.test(digits)) {
    throw new Error(
      `Invalid WhatsApp number "${phone}": expected 55 + area code + number, e.g. 5585999998888.`,
    );
  }
  const base = `https://wa.me/${digits}`;
  // encodeURIComponent turns spaces into %20; URLSearchParams would use "+",
  // which not every WhatsApp client decodes back into a space.
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
