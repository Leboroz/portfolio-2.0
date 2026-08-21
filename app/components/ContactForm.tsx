import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  className: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_ID);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={` ${className}`}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
