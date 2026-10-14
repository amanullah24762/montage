import BookingForm from './BookingForm';

const photo = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const gallery = [
  ['photo-1519167758481-83f550bb49b3', 'A softly illuminated reception hall with elegantly set tables', 'A grand beginning', 'THE CELEBRATION'],
  ['photo-1519741497674-611481863552', 'Romantic wedding setting surrounded by greenery', 'Made for your forever', 'THE MOMENTS'],
  ['photo-1478146896981-b80fe463b330', 'Thoughtfully arranged wedding flowers and reception details', 'Beauty in every detail', 'THE DETAILS'],
  ['photo-1511795409834-ef04bbd61622', 'An inviting event space prepared for a special occasion', 'An evening to remember', 'THE ATMOSPHERE'],
  ['photo-1464366400600-7168b8af9bc3', 'Elegant table styling for a wedding celebration', 'Gather beautifully', 'THE TABLE'],
  ['photo-1519225421980-715cb0215aed', 'A romantic floral arrangement for a wedding ceremony', 'A little touch of magic', 'THE ROMANCE'],
];
const facilities = [
  ['hall', 'Grand Hall', 'An elegant, spacious setting for your most cherished celebrations.'],
  ['room', 'Bridal Room', 'A private retreat to prepare, unwind and enjoy your special day.'],
  ['parking', 'Parking', 'Convenient parking to make every arrival feel effortless.'],
  ['food', 'Catering', 'Thoughtfully planned menus to bring your guests together.'],
  ['spark', 'Decor & Lighting', 'Beautiful styling and warm lighting to reflect your vision.'],
  ['sound', 'Stage & Sound', 'A statement stage and sound for every memorable moment.'],
];
function Icon({ kind, className = 'h-7 w-7' }) {
  const paths = {
    hall: 'M3 21h18M5 21V9h14v12M3 9l9-6 9 6M9 21v-7h6v7M8 10v2m8-2v2',
    room: 'M4 21V3h13v18M2 21h20M8 21V7h9M13 13h1',
    parking: 'M5 19h14a2 2 0 0 0 2-2v-5l-3-7H6l-3 7v5a2 2 0 0 0 2 2ZM3 12h18M7 15h1m8 0h1M6 19v2m12-2v2',
    food: 'M4 3v6a3 3 0 0 0 6 0V3M7 3v18M20 21V3c-5 3-5 10 0 10',
    spark: 'm12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4',
    sound: 'M4 10v4h4l5 4V6l-5 4H4Zm13-2a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14',
    chat: 'M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5ZM8 9c1 4 3 6 7 7l2-2-3-2-1 1-2-2 1-1-2-3-2 2Z',
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}
function Brand() {
  return <span className="flex flex-col items-center"><span className="font-display text-[30px] leading-none tracking-[0.04em]">Montage<span className="text-gold">.</span></span><span className="mt-2 text-[7px] uppercase tracking-[0.35em]">Event Complex</span></span>;
}

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:p-4">Skip to content</a>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 text-ivory backdrop-blur-md">
        <nav aria-label="Main navigation" className="wrap flex flex-wrap items-center justify-between gap-4 py-4">
          <a href="#home" aria-label="Montage home"><Brand /></a>
          <div className="order-3 flex w-full justify-center gap-7 text-[11px] text-ivory/75 sm:order-none sm:w-auto md:gap-10">{['Home', 'Gallery', 'Facilities', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-gold">{item}</a>)}</div>
          <a href="#booking" className="button !px-5 !py-3 !text-[10px]">Book Now <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section id="home" className="relative isolate flex min-h-[690px] items-center overflow-hidden bg-charcoal text-ivory md:min-h-[760px]">
          <img src={photo('photo-1519167758481-83f550bb49b3', 2400)} alt="An elegant reception hall filled with warm light" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          <div className="wrap pb-28 pt-20">
            <p className="eyebrow mb-7 flex items-center gap-4"><span className="h-px w-10 bg-gold" />Gulberg Greens · Islamabad</p>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">Where Your Perfect<br className="hidden md:block" /> Moments Come <span className="italic text-[#dfc583]">to Life</span></h1>
            <p className="mb-9 mt-7 max-w-md text-sm leading-7 text-white/75">A beautiful setting. Thoughtful details. Unforgettable celebrations. Let your next chapter begin at Montage.</p>
            <div className="flex flex-wrap gap-4"><a href="#booking" className="button">Inquire Now <span aria-hidden="true">↗</span></a><a href="#gallery" className="button !border-white/40 !bg-transparent !text-white hover:!border-gold hover:!text-gold">View Gallery <span aria-hidden="true">→</span></a></div>
          </div>
          <div className="absolute bottom-0 w-full border-t border-white/20"><div className="wrap flex items-center justify-between gap-4 py-6 text-[9px] uppercase tracking-[0.2em] text-white/65"><span>Weddings · Celebrations · Corporate Events</span><a href="#about" className="hidden items-center gap-4 sm:flex">Discover Montage <span className="text-lg text-gold" aria-hidden="true">↓</span></a></div></div>
        </section>

        <section id="about" className="wrap grid items-center gap-8 py-20 md:grid-cols-2 md:gap-20 md:py-24">
          <div><p className="eyebrow mb-4">Welcome to Montage</p><h2 className="heading">Every celebration<br />deserves an <em className="font-normal text-[#a58135]">extraordinary setting.</em></h2></div>
          <div><p className="text-sm leading-8 text-charcoal/65">In the heart of Gulberg Greens, Islamabad, Montage Event Complex brings together timeless elegance and the warmth of celebration. From wedding festivities to intimate gatherings and corporate occasions, imagine a space where your story takes centre stage and every detail feels personal.</p><a href="#booking" className="mt-6 inline-flex items-center gap-5 border-b border-gold pb-2 text-xs font-semibold">Let’s plan your occasion <span className="text-gold" aria-hidden="true">↗</span></a></div>
        </section>

        <section id="gallery" className="bg-[#eeece5] py-20 md:py-24">
          <div className="wrap"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow mb-4">A glimpse of the magic</p><h2 className="heading">Picture your <em className="font-normal">perfect day.</em></h2></div><p className="max-w-xs text-xs leading-6 text-charcoal/55">Spaces that inspire. Details that delight.<br />A little inspiration for your celebration.</p></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map(([id, alt, title, tag]) => <figure key={id} className="group relative aspect-[4/3] overflow-hidden bg-charcoal"><img src={photo(id)} alt={alt} loading="lazy" width="1000" height="750" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" /><figcaption className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="mb-2 text-[8px] tracking-[0.2em] text-[#e2c887]">{tag}</p><p className="font-display text-xl">{title}</p></figcaption></figure>)}</div>
            <p className="mt-5 text-[10px] text-charcoal/50">Demo gallery · Inspiration photography from Unsplash; not photographs of the venue.</p>
          </div>
        </section>

        <section id="facilities" className="bg-charcoal py-20 text-ivory md:py-24"><div className="wrap"><div className="mb-12 text-center"><p className="eyebrow mb-4">Thoughtfully considered</p><h2 className="heading">Everything for an <em className="font-normal text-[#dfc583]">unforgettable event.</em></h2><p className="mx-auto mt-5 max-w-lg text-xs leading-6 text-white/50">From the first arrival to the final farewell, discover the possibilities for your occasion.</p></div><div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{facilities.map(([kind, title, description]) => <article key={title} className="bg-charcoal p-8 transition duration-300 hover:bg-[#232720] md:p-10"><div className="mb-6 text-gold"><Icon kind={kind} /></div><h3 className="mb-3 font-display text-2xl">{title}</h3><p className="max-w-xs text-xs leading-6 text-white/50">{description}</p></article>)}</div><p className="mt-5 text-center text-[10px] text-white/40">Illustrative demo offerings. Please confirm facilities and arrangements with the venue.</p></div></section>

        <section id="booking" className="wrap grid gap-12 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:py-24">
          <div className="md:pt-8"><p className="eyebrow mb-5">Your story starts here</p><h2 className="heading">Let’s make it<br /><em className="font-normal text-[#a58135]">a day to remember.</em></h2><p className="mt-6 max-w-sm text-sm leading-7 text-charcoal/60">Tell us what you have in mind. Share your date, your occasion and your vision, and start a conversation with our team.</p><div className="my-8 h-px max-w-sm bg-charcoal/10" /><p className="mb-3 text-[10px] uppercase tracking-[0.15em] text-charcoal/50">Prefer a personal conversation?</p><a href="tel:+923044581940" className="font-display text-2xl">+92 304 4581940</a><p className="mt-3 text-xs text-charcoal/50">We’d love to hear about your celebration.</p><div className="mt-10 max-w-sm border-l-2 border-gold pl-5 font-display text-xl italic leading-relaxed text-charcoal/65">“Beautiful beginnings.<br />Lasting memories.”</div></div>
          <div className="border border-charcoal/10 bg-[#eeece5]/50 p-6 sm:p-9"><h3 className="mb-2 font-display text-2xl">Booking inquiry</h3><p className="mb-7 text-xs text-charcoal/55">A few details are all it takes to begin.</p><BookingForm /></div>
        </section>

        <section id="contact" className="border-t border-charcoal/10 bg-[#eeece5] py-16"><div className="wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow mb-4">Come find us</p><h2 className="heading">A beautiful place<br />to <em className="font-normal">come together.</em></h2><address className="mt-7 space-y-5 text-sm not-italic text-charcoal/65"><p><span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal">Our location</span>Gulberg Greens, Islamabad</p><p><span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal">Call or WhatsApp</span><a href="tel:+923044581940" className="hover:text-[#a58135]">+92 304 4581940</a></p></address><a href="https://www.google.com/maps/search/?api=1&query=Gulberg+Greens+Islamabad" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex gap-5 border-b border-gold pb-2 text-xs font-semibold">Explore the location <span aria-hidden="true">↗</span></a></div><div><iframe title="Map of Gulberg Greens, Islamabad" src="https://maps.google.com/maps?q=Gulberg%20Greens%20Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[330px] w-full border-0 bg-charcoal/5" allowFullScreen /><p className="mt-3 text-[10px] text-charcoal/50">Map shows the Gulberg Greens area. Contact the venue for the exact entrance.</p></div></div></section>
      </main>
      <footer className="bg-charcoal py-10 pb-24 text-ivory sm:pb-10"><div className="wrap flex flex-col items-center justify-between gap-8 md:flex-row"><a href="#home" aria-label="Montage home"><Brand /></a><p className="text-center text-[10px] leading-6 text-white/40">© {new Date().getFullYear()} Montage Event Complex. All rights reserved.<br />Demo website · Celebrating life’s most beautiful moments.</p><a href="#home" className="text-[10px] uppercase tracking-[0.15em] text-white/65">Back to top <span className="ml-3 text-gold" aria-hidden="true">↑</span></a></div></footer>
      <a href="https://wa.me/923044581940" target="_blank" rel="noopener noreferrer" aria-label="Chat with Montage on WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#267d53] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#206c47]"><Icon kind="chat" className="h-7 w-7" /></a>
    </>
  );
}
