'use client';

export default function BookingForm() {
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = ['Hello Montage! I would like to inquire about an event.', '', ...['Name', 'Phone', 'Event type', 'Date', 'Guests', 'Message'].map(key => `${key}: ${data.get(key) || 'Not specified'}`)].join('\n');
    window.open(`https://wa.me/923044581940?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-xs font-medium">Your name <span className="text-gold">*</span><input className="field" name="Name" autoComplete="name" placeholder="Full name" required maxLength={100} /></label>
      <label className="text-xs font-medium">Phone number <span className="text-gold">*</span><input className="field" name="Phone" type="tel" autoComplete="tel" placeholder="+92 300 1234567" required maxLength={30} /></label>
      <label className="text-xs font-medium">Event type <span className="text-gold">*</span><select className="field" name="Event type" defaultValue="" required><option value="" disabled>Select your occasion</option>{['Wedding', 'Mehndi', 'Barat', 'Walima', 'Corporate event', 'Other celebration'].map(type => <option key={type}>{type}</option>)}</select></label>
      <label className="text-xs font-medium">Preferred date <span className="text-gold">*</span><input className="field" type="date" name="Date" required /></label>
      <label className="text-xs font-medium sm:col-span-2">Estimated guests <span className="text-gold">*</span><input className="field" type="number" name="Guests" min="1" step="1" placeholder="Number of guests" required /></label>
      <label className="text-xs font-medium sm:col-span-2">Tell us a little more<textarea className="field resize-y" name="Message" rows={3} maxLength={1500} placeholder="Your vision, special requests, or anything we should know…" /></label>
      <div className="sm:col-span-2"><button type="submit" className="button w-full">Send inquiry on WhatsApp <span aria-hidden="true">↗</span></button><p className="mt-3 text-center text-[10px] leading-relaxed text-charcoal/50">Opens WhatsApp with your details. Send your message there to inquire.<br />Your booking is confirmed only after speaking with our team.</p></div>
    </form>
  );
}
