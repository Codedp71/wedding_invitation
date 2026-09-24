// Wedding Data Configuration
// All wedding content in one place for easy reuse

const weddingData = {
  couple: {
    groom: 'Pankaj',
    bride: 'Manpreet',
    tagline: 'Two hearts, one beautiful journey.',
    groomBio: 'An aerospace engineer by profession, a drone enthusiast by passion, and now a full-time husband under the supervision of Manpreet! He spent years making drones follow his commands, only to discover that in marriage, he is the one receiving the commands. From flying machines to flying together through life, Pankaj has finally found his perfect co-pilot.',
    brideBio: 'She works with surgeons and doctors at Intuitive, where precision is everything and mistakes are not an option. So naturally, when she met Pankaj, she thought, “Finally, a project I can manage.” She didn’t just say “Yes” to Pankaj; she basically signed up for a lifetime maintenance contract — no warranty, no replacement, and definitely no refund. Ladies and gentlemen, meet the woman who finally grounded the drone guy.',
    groomPhoto: '/photos/Groom.jpeg',
    bridePhoto: '/photos/bride.jpeg',
    groomObjectPosition: 'center 15%',
    brideObjectPosition: 'center 20%',
  },

  weddingDate: '2026-11-10T11:30:00',

  events: [
    {
      id: 'shagun',
      title: 'Shagun Ceremony',
      date: '07 November 2026',
      time: '11:00 AM',
      extra: '',
      venue: 'MJ Resort, Toki, Chak Naglian, Himachal Pradesh',
      icon: 'kalash',
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      date: '10 November 2026',
      time: '11:30 AM',
      extra: '',
      venue: 'The Royal Castle Resort, Una (H.P)',
      icon: 'mandap',
    },
  ],

  story: [
    {
      chapter: 'Chapter 1',
      title: 'The First Glance ☕❤️',
      text: `It all began in a café in Gurugram.

Two strangers, one table, and a moment neither of us knew would change everything.

I kept looking into her eyes… while she couldn’t quite maintain eye contact with me. 😄

Of course, we had to discuss that later on WhatsApp — because sometimes the conversations after the meeting say what the eyes couldn't. ❤️`,
      photo: '/photos/moments.jpeg',
      fit: 'cover',
      objectPosition: 'top center',
    },
    {
      chapter: 'Chapter 2',
      title: 'Taking a Chance ✨',
      text: `We decided to take a chance on each other.

And then came the first real step… Manpreet came to Ahmedabad to meet me. ❤️

And somewhere during that meeting, she gave me my first little surprise — a kiss on my cheek. 🥰

A small moment, but one I’ll never forget.`,
      photo: '/photos/chapter-2.jpeg',
      fit: 'cover',
      objectPosition: 'center',
    },
    {
      chapter: 'Chapter 3',
      title: 'Miles Apart, Hearts Closer ❤️',
      text: `Soon after, I travelled to Gurugram to see her.

Distance never really felt like distance anymore.

With every meeting, every conversation, every late-night chat, and every little moment, we were slowly becoming “us.”`,
      photo: '/photos/chapter-3.jpeg',
      fit: 'cover',
      objectPosition: 'center',
    },
    {
      chapter: 'Chapter 4',
      title: 'The Question 💍',
      text: `After our second meeting, I gathered the courage to ask her… “Will you be mine?”

I had my answer ready in my heart. She, however, decided to take her time. 😂❤️

And then, while we were together in Leela Gandhinagar and I wrote a letter for her to ask that question, she finally said those words I had been waiting for… “YES.” ❤️

And honestly, that one word changed everything.`,
      photo: '/photos/chapter-4.jpeg',
      fit: 'cover',
      objectPosition: 'center 20%',
    },
    {
      chapter: 'Chapter 5',
      title: 'Choosing Forever 🥹❤️',
      text: `As our relationship grew, we realised something beautiful — we weren’t just in love, we were aligned.

Our dreams, our values, our understanding of life, and most importantly, our vision for the future felt right together.

So we decided… why just build a life together someday? Why not start planning it now? ❤️

We spoke to our parents, and with their blessings, our love story took its next beautiful step.`,
      photo: '/photos/chapter-5.jpeg',
      fit: 'cover',
      objectPosition: 'center 90%',
    },
    {
      chapter: 'Chapter 6',
      title: 'Roka — 19 October 2025 💍✨',
      text: `On 19th October 2025, our families came together and we made it official.

We ROKAFIED! ❤️

Two people who once met as strangers in a Gurugram café were now officially promised to each other.

From that first glance to a forever commitment… what a journey it had already been.`,
      photo: '/photos/chapter-6.jpeg',
      fit: 'cover',
      objectPosition: 'center 15%',
    },
  ],

  epilogue: {
    title: 'And Now… Forever Begins 💍❤️',
    photo: '/photos/combination.jpeg',
    text: `What started with a café, a little eye contact, a WhatsApp conversation, and one unexpected kiss… became a love story filled with courage, patience, laughter, family blessings, and countless beautiful memories.

From Gurugram to Ahmedabad, from “let’s take a chance” to “let’s spend our lives together”…

Our story is still being written. And the best chapter is yet to come. ❤️`,
    signature: 'Pankaj ❤️ Manpreet',
  },

  gallery: [
    { src: '/photos/moments.jpeg', caption: 'Just us being weirdos 🤪' },
    { src: '/photos/moment 5.jpeg', caption: 'Making memories 🌹' },
    { src: '/photos/combination.jpeg', caption: 'Perfect combination (chaos & calm) 🤣' },
    { src: '/photos/moment 3.jpeg', caption: 'Eye contact practice going well 👀' },
    { src: '/photos/moments2.jpeg', caption: 'Cherished moments together 💕' },
    { src: '/photos/proposal.jpeg', caption: 'The final surrender! 🙋‍♂️💍' },
  ],

  venue: {
    name: 'The Royal Castle Resort',
    address: 'Una, Himachal Pradesh',
    mapUrl: 'https://maps.google.com/?q=The+Royal+Castle+Resort+Una+HP',
  },
};

export default weddingData;
