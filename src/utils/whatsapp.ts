export const sendWhatsAppMessage = (tier: string, price: number) => {
  const message = `Hello! I'm interested in pre-ordering the TechPro Workstation - ${tier} Edition ($${price}). Please provide more information.`;
  const phoneNumber = '1234567890'; // Replace with your actual WhatsApp business number
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};