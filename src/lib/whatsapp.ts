export const WHATSAPP_PHONE = "5562982658713";

export function whatsappUrl(keyword: string = "Planos IPTV"): string {
  const message = `Olá, Gostaria de falar sobre o ${keyword}`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}
