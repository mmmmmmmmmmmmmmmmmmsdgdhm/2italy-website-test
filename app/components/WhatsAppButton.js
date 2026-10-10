const PHONE = '971581808979';
const MESSAGE = 'مرحباً، أريد الاستفسار عن الدراسة في إيطاليا';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C8.3 7 7.5 7.8 7.5 9.4c0 1.6 1.2 3.2 1.3 3.4.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.5.2-.7.2-1.4.1-1.5-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.4A10 10 0 1 0 12 2z" />
      </svg>
    </a>
  );
}
