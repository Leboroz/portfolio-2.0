import { useForm, ValidationError } from '@formspree/react';
import { PrimaryButton } from './PrimaryButton';

interface ContactFormProps {
  className: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_ID);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-surface rounded-2xl flex flex-col gap-5 p-5 ${className}`}>
      <label className='h3 text-terminal-green' htmlFor="email">
        NAME
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder='Your name :)'
        className='bg-atomic-black border border-terminal-line rounded-lg p-3'
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label className='h3 text-terminal-green' htmlFor="email">
        EMAIL
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder='you@company.com'
        className='bg-atomic-black border border-terminal-line rounded-lg p-3'
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label className='h3 text-terminal-green' htmlFor="message">
        MESSAGE
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Tell me what you're building..."
        className='bg-atomic-black border border-terminal-line rounded-lg p-3'
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <PrimaryButton
        text='Send message'
        type='submit'
        disabled={state.submitting}
        className='w-full flex justify-center'
      />
    </form>
  );
}
