export const linkFallback = (paymentRequest: string): void => {
  const src = `lightning:${paymentRequest}`;
  const link = document.createElement('a');
  link.href = src;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
