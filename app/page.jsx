import DescriptionGrid from "@/components/DescriptionGrid";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <div class="bg-gradient flex min-h-full flex-col items-center pb-44 pt-32 md:pb-64">
        <div>
          <div class="relative">
            <div class="mb-[calc(5svh+2rem)] text-center text-[75px] leading-[90px] tracking-tighter text-black mix-blend-overlay">
              Arthur Laroya
            </div>
            <div
              class="absolute left-0 right-0 top-0 mb-[calc(5svh+2rem)] text-center text-[75px] leading-[90px] tracking-tighter text-black opacity-20 mix-blend-overlay"
              aria-hidden="true"
            >
              Arthur Laroya
            </div>
          </div>
          {/* <div class="bg-transparent h-[400px] overflow-hidden hidden">
            <video
              aria-label="A hand holds the beautiful Atlas Card — the super-mirror finish surface reflects the light"
              autoPlay
              class="bg-transparent h-[350px] object-cover translate-x-5"
              disableRemotePlayback
              muted
              playsInline
              poster="/assets/images/atlas-card-poster.webp"
            >
              <source
                src="/assets/videos/atlas-card.mp4"
                type="video/mp4; codecs=hvc1"
              />
              <source src="/assets/videos/atlas-card.webm" type="video/webm" />
            </video>
          </div> */}
          <div class="h-[400px] overflow-hidden bg-transparent lg:mb-[calc(5svh+2rem)] lg:h-auto">
            <img
              alt="A hand holds the beautiful Atlas Card - the super-mirror finish surface reflects the light"
              class="h-[350px] -translate-x-[18px] bg-transparent object-cover lg:h-auto lg:w-full"
              src="https://atlascard.com/assets/images/atlas-card-poster-end.webp"
            />
          </div>
        </div>
        <div class="relative mx-8 max-w-[640px] text-center text-[27px] font-medium leading-[120%] tracking-tight md:max-w-[928px]">
          <div class="mix-blend-overlay">
            Meet Arthur, a maestro of the digital realm, whose fingertips dance
            across the keyboard, weaving intricate lines of code into the fabric
            of the web. As a seasoned web developer, Arthur stands at the
            forefront of innovation, navigating the ever-evolving landscape of
            technology with an insatiable curiosity and a relentless passion for
            crafting extraordinary online experiences
          </div>
          <div
            class="absolute left-0 top-0 opacity-50 mix-blend-overlay"
            aria-hidden="true"
          >
            Meet Arthur, a maestro of the digital realm, whose fingertips dance
            across the keyboard, weaving intricate lines of code into the fabric
            of the web. As a seasoned web developer, Arthur stands at the
            forefront of innovation, navigating the ever-evolving landscape of
            technology with an insatiable curiosity and a relentless passion for
            crafting extraordinary online experiences
          </div>
          <div class="font-medium text-black" id="statement">
            Hello, I'm Arthur.
          </div>
        </div>
      </div>

      {/* About section */}
      <div
        className="bg-[#141414] px-6 py-24 md:pb-[232px] md:pt-64"
        id="about"
      >
        <div className="wrapper">
          {/* Text */}
          <div className="mb-24 text-center md:mb-44">
            <div className="title-text mb-24 text-neutral-100 md:mb-[104px]">
              About me
              <br className="sm:hidden" />
            </div>
            <div className="title-paragraph font-medium text-neutral-100">
              Meet Arthur Laroya.
            </div>
            <div className="title-paragraph text-neutral-400">
              With a mind wired for problem-solving and an artistic flair for
              design, Arthur brings a unique blend of creativity and precision
              to his work. His journey in the world of web development began as
              a humble exploration of HTML and CSS, blossoming into a full-stack
              expertise that spans front-end elegance and back-end robustness.
            </div>
          </div>
          {/* Image */}
          <div className="mb-20 md:mb-44">
            <div className="mb-4 flex justify-center rounded-[20px] bg-[#141414]">
              <img
                src="/assets/sticker7.png"
                alt="horse"
                loading="lazy"
                className="h-[478px] rounded-[20px] object-cover"
              />
            </div>
            <div className="text-center text-sm uppercase text-neutral-700 sm:hidden">
              Supper club reservations, inside Atlas App.
            </div>
          </div>

          {/* Description grid */}
          <div className="mb-24 grid grid-cols-2 items-center gap-y-12 md:mb-[88px]">
            {/* Section 1 */}
            <div className="col-span-2 h-[1px] w-full bg-[hsla(0,0%,100%,.2)]" />
            <div className="text-[21px] leading-[120%] text-neutral-100">
              Fullstack Developer
            </div>
            <div className="text-[16px] leading-[140%] text-neutral-400">
              ...
            </div>
            {/* Section 2 */}
            <div className="col-span-2 h-[1px] w-full bg-[hsla(0,0%,100%,.2)]" />
            <div className="text-[21px] leading-[120%] text-neutral-100">
              Frontend Developer
            </div>
            <div className="text-[16px] leading-[140%] text-neutral-400">
              ...
            </div>
            {/* Section 3 */}
            <div className="col-span-2 h-[1px] w-full bg-[hsla(0,0%,100%,.2)]" />
            <div className="text-[21px] leading-[120%] text-neutral-100">
              Backend Developer
            </div>
            <div className="text-[16px] leading-[140%] text-neutral-400">
              ...
            </div>
            <div className="col-span-2 h-[1px] w-full bg-[hsla(0,0%,100%,.2)]" />
          </div>

          {/* Image grid */}
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-[1fr_1fr] grid-rows-[calc(478px+3rem)_calc(228px+3rem)] sm:grid-rows-[auto_auto] gap-x-8 gap-y-4">
              <div className="col-span-2">
                <img
                  alt="fullstack"
                  className="grid-image"
                  loading="lazy"
                  src="/assets/holo1.jpg"
                />
                <div className="grid-caption">
                  Fullstack
                </div>
              </div>
              <div className="animate">
                <img
                  alt="Felix Trattoria dining room view"
                  className="grid-image"
                  loading="lazy"
                  src="/assets/holo2.jpg"
                />
                <div className="grid-caption">Frontend</div>
              </div>
              <div className="animate">
                <img
                  alt="Felix Trattoria dining room view"
                  className="grid-image"
                  loading="lazy"
                  src="/assets/holo3.jpg"
                />
                <div className="grid-caption">Backend</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume section */}
      <div className="bg-neutral-100 px-6 py-24 md:pb-44 md:pt-64" id="resume">
        <div className="wrapper">
          <div className="text-center">
            <div className="title-text mb-24 text-neutral-900 md:mb-[104px]">
              My Resume
            </div>
            <div className="text-[23px] leading-[140%] tracking-tight">
              <div className="title-paragraph font-medium text-black">
                My web development experience
              </div>
              <div className="title-paragraph">
                No matter where your next grand tour takes you, Atlas is there
                as your co-pilot, with bespoke flight benefits for when you're
                ready to go on the spur of the moment.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 px-6 md:px-0">
        <div>
          <div className="mx-auto mb-4 flex max-w-[640px] justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f5eaeb] to-[#fdf3f4]">
            <img
              src="https://atlascard.com/assets/images/travel.webp"
              alt="travel"
            />
          </div>
          <div className="subtitle">
            <div>Bespoke flight benefits, inside Atlas app.</div>
          </div>
        </div>
      </div>

      {/* Description grid */}
      <div className="bg-neutral-100 px-6 pb-12 pt-20 md:pb-[88px] md:pt-[152px]">
        <div className="wrapper">
          <div className="grid grid-cols-2 items-center gap-y-12">
            {/* Section 1 */}
            <div className="divider" />
            <div className="description-title">Fullstack Developer</div>
            <div className="description-body">
              ...
            </div>
            {/* Section 2 */}
            <div className="divider" />
            <div className="description-title">Frontend Developer</div>
            <div className="description-body">
              ...
            </div>
            {/* Section 3 */}
            <div className="divider" />
            <div className="description-title">Backend Developer</div>
            <div className="description-body">
              ...
            </div>

            <div className="divider" />

            {/* Action section */}
            <div className="col-span-2 text-center">
              <div className="mb-7 text-2xl font-medium tracking-tight text-neutral-900 md:mb-14">
                +
                <br />
                Visa Infinite Benefits
              </div>
              <div className="mb-6 text-xl text-[rgba(0,0,0,.5)] md:mb-12">
                Priority Pass, Luxury Hotel Collection,
                <br />
                no foreign transaction fees, and more.
              </div>
              <a
                href="#"
                className="inline-flex h-[30px] items-center justify-center rounded-[4rem] border-2 border-[rgba(0,0,0,.12)] px-4"
              >
                <div className="text-xl font-medium">Discover</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Video section */}
      <div className="bg-neutral-100 px-6 py-24 md:py-44" id="card">
        <div className="mx-auto max-w-[928px]">
          <div className="mb-24 flex flex-col items-center md:mb-[232px]">
            <div className="mb-4 inline-block max-h-[740px] min-h-[478px] w-full overflow-hidden rounded-[20px] bg-black">
              <video aria-label="sample vid" autoPlay muted playsInline>
                <source src="/assets/videos/atlas-woman.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="subtitle">
              The world in your hand, with atlas card.
            </div>
          </div>
          <div className="text-center">
            <div className="title-text mb-24 md:mb-[104px]">
              Head
              <br className="sm:hidden" /> Turner
            </div>
            <div className="text-2xl">
              <div className="title-paragraph font-medium text-black">
                Designed to shatter the norm.
              </div>
              <div className="title-paragraph">
                Atlas is crafted to mirror our uncommon obsession with every
                single detail, always in pursuit of elevating you above the
                crowd, while also enhancing your privacy.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual panel section */}
      <div className="bg-neutral-100 px-6 md:px-0">
        <div>
          <div className="mx-auto mb-4 flex max-w-[640px] justify-center overflow-hidden rounded-[20px] lg:max-w-full lg:items-center lg:rounded-none">
            <div className="grid w-full grid-cols-1 justify-center md:grid-cols-2">
              <div className="flex max-h-[740px] w-full justify-center bg-neutral-300 px-0 py-10 lg:px-8 lg:py-[12rem]">
                <img
                  alt="Front of the Atlas Card"
                  className="max-w-[275px] rounded-[10px] shadow-lg lg:w-full lg:max-w-[540px] lg:rounded-[20px]"
                  src="https://atlascard.com/assets/images/front.png"
                />
              </div>
              <div className="flex max-h-[740px] w-full justify-center bg-neutral-500 px-0 py-10 lg:px-8 lg:py-[12rem]">
                <img
                  alt="Back of the Atlas Card"
                  className="max-w-[275px] rounded-[10px] shadow-lg lg:w-full lg:max-w-[540px] lg:rounded-[20px]"
                  src="https://atlascard.com/assets/images/back.png"
                />
              </div>
            </div>
          </div>
          <div className="subtitle">
            <div>Designed and engineered, front to back.</div>
          </div>
        </div>
      </div>

      {/* Description grid */}
      <div className="bg-neutral-100 px-6 pb-24 pt-20 md:pb-[232px] md:pt-[152px]">
        <div className="wrapper">
          <div className="description-grid">
            <div className="divider" />
            <div className="description-title">
              Advanced
              <br />
              construction
            </div>
            <div className="description-body">
              Made from 21 grams of high density steel, CNC-milled and engraved,
              then polished to a brilliant mirror finish that is unlike any
              card.
            </div>
            <div className="divider" />
            <div className="description-title">
              Enhanced
              <br />
              privacy
            </div>
            <div className="description-body">
              With no visible card number on its surface, Atlas keeps your
              privacy where it belongs, in your own hands.⁷
            </div>
            <div className="divider" />
            <div className="description-title">
              Personalized
              <br />
              for you
            </div>
            <div className="description-body">
              Designed front to back, Atlas card features tone-on-tone graphics
              and a personal icon of your choice by your name.
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Power text section */}
      <div className="bg-neutral-100 px-6 py-24 md:pb-44 md:pt-64" id="app">
        <div className="wrapper lg:max-w-[928px]">
          <div className="text-center">
            <div className="title-text mb-[104px] md:mb-[104px]">
              Power
              <br className="sm:hidden" /> Couple
            </div>
            <div>
              <div className="title-paragraph font-medium text-black">
                A dynamic duo of card + app.
              </div>
              <div className="title-paragraph">
                Each conceived from the same first principles, Atlas shines with
                a true native app that raises the bar, from magical rewards to
                unlimited cards, and everything in between.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sole image section */}
      <div className="bg-neutral-100 px-6 md:px-0">
        <div>
          <div className="mx-auto mb-4 flex max-w-[640px] justify-center overflow-hidden rounded-[20px] bg-[#dadee6] lg:mx-0 lg:h-[848px] lg:max-w-full lg:items-end lg:rounded-none">
            <img
              alt="The beautiful Atlas Card app"
              src="https://atlascard.com/assets/images/phone-in-hand.webp"
              className="max-h-[478px] translate-x-[40px] translate-y-[40px]"
            />
          </div>
          <div className="subtitle">
            <div>Far above the typical app experience.</div>
          </div>
        </div>
      </div>

      {/* Description grid */}
      <div className="bg-neutral-100 px-6 pb-24 pt-20 md:pb-[232px] md:pt-[152px]">
        <div className="wrapper">
          <div className="description-grid">
            <div className="divider" />
            <div className="description-title">
              Dynamic
              <br />
              rewards⁸
            </div>
            <div className="description-body">
              Get automatically upgraded to 3x points where you spend the most,
              plus 1x points on every purchase. Because there's more to a
              rewarding life than chasing points.
            </div>
            <div className="divider" />
            <div className="description-title">
              Unlimited
              <br />
              virtual cards⁹
            </div>
            <div className="description-body">
              Create a unique card for your next trip, or one to share with your
              assistant, or to go online shopping, or ... you get the idea.
            </div>
            <div className="divider" />
            <div className="description-title">
              Intuitively
              <br />
              powerful
            </div>
            <div className="description-body">
              Buttery-smooth performance, support for features like Dark Mode,
              and endless details make an app that's a pleasure to use, day in,
              night out.
            </div>
            <div className="divider" />
          </div>

          {/* Grid gallery */}
          <div className=" hidden w-full grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-x-8 gap-y-4 sm:grid">
            <div className="col-span-2">
              <img
                alt="A Moment in the Atlas app"
                className="grid-image mb-4"
                loading="lazy"
                src="https://atlascard.com/assets/images/moment.jpg"
              />
              <div className="grid-caption">
                Your purchases, reimagined as moments.
              </div>
            </div>
            <div>
              <img
                alt="Virtual cards in the Atlas app"
                className="grid-image mb-4"
                loading="lazy"
                src="https://atlascard.com/assets/images/virtual-cards.jpg"
              />
              <div className="grid-caption">
                Create and manage
                <br className="sm:hidden" /> virtual cards.
              </div>
            </div>
            <div>
              <img
                alt="Transaction detail view in Atlas Card app"
                className="grid-image mb-4"
                loading="lazy"
                src="https://atlascard.com/assets/images/rewards.jpg"
              />
              <div className="grid-caption">
                Points upgrades,
                <br className="sm:hidden" /> with dynamic rewards.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Power text section */}
      <div
        className="bg-neutral-100 px-6 py-24 md:pb-44 md:pt-64"
        id="concierge"
      >
        <div className="wrapper">
          <div className="text-center">
            <div className="title-text mb-[104px]">
              Truly
              <br className="sm:hidden" /> Personal
            </div>
            <div>
              <div className="title-paragraph font-medium text-black">
                At your beck and call (or text).
              </div>
              <div className="title-paragraph">
                Experience handcrafted support, with your own dedicated personal
                advisor who is on hand to fulfill any request, from last-minute
                dinner plans to deep dive sessions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sole image section */}
      <div className="bg-neutral-100 px-6 md:px-0">
        <div>
          <div className="mx-auto mb-4 flex max-w-[640px] justify-center overflow-hidden rounded-[20px] bg-[#e6e6e6] lg:mx-0 lg:h-[848px] lg:max-w-full lg:items-center lg:rounded-none">
            <picture>
              <source
                srcset="https://atlascard.com/assets/images/support-chat-desktop.jpg"
                media="(min-width: 990px)"
              />
              <img
                alt="Support interface in the Atlas app"
                className="h-[478px] object-cover lg:h-[600px]"
                loading="lazy"
                src="https://atlascard.com/assets/images/support-chat.jpg"
              />
            </picture>
          </div>
          <div className="subtitle">
            <div>Your personal advisor, now in iMessage.</div>
          </div>
        </div>
      </div>

      {/* Description grid */}
      <div className="bg-neutral-100 px-6 pb-24 pt-20 md:pb-[232px] md:pt-[152px]">
        <div className="wrapper">
          <div className="description-grid mb-[88px]">
            <div className="divider" />
            <div className="description-title">
              Personal
              <br />
              advisor
            </div>
            <div className="description-body">
              Going to exceptional lengths to know your preferences and tastes,
              your advisor is here to provide truly personal support.
            </div>
            <div className="divider" />
            <div className="description-title">
              1 on 1<br />
              sessions
            </div>
            <div className="description-body">
              For those times when it takes more than a text or a phone call,
              your personal advisor is just a quick booking away for a video
              call.
            </div>
            <div className="divider" />
            <div className="description-title">
              Experiences
              <br />
              concierge¹⁰
            </div>
            <div className="description-body">
              From last-minute table reservations, to sold out events, your
              personal advisor is on hand to help you have a lifetime
              experience.
            </div>
            <div className="divider" />
          </div>

          {/* Image section */}
          <div>
            <div className="mb-4 flex justify-center overflow-hidden rounded-[20px]">
              <picture>
                <source
                  srcset="https://atlascard.com/assets/images/wallet-desktop.jpg"
                  media="(min-width: 990px)"
                />
                <img
                  alt="Atlas card fitting in a wallet"
                  loading="lazy"
                  src="https://atlascard.com/assets/images/wallet.jpg"
                  className="min-h-[420px] w-full scale-[1.1] object-cover lg:transform-none"
                />
              </picture>
            </div>
            <div className="subtitle">
              your companion through every adventure.
            </div>
          </div>
        </div>
      </div>

      {/* Dark table section */}
      <div className="bg-neutral-900 px-6 py-24 md:py-64" id="benefits">
        <div className="wrapper">
          <div className="mb-24 text-center md:mb-44">
            <div className="title-text mb-[104px] text-neutral-100">
              Executive,
              <br className="sm:hidden" /> brief.
            </div>
            <div>
              <div className="title-paragraph font-medium text-neutral-100">
                Your next journey begins here.
              </div>
              <div className="title-paragraph text-neutral-500">
                With all the essentials you need out in the world, and nothing
                to limit your possibilities, here is everything Atlas has to
                offer.
              </div>
            </div>
          </div>

          {/* Table */}
          <div>
            <div className="divider mb-12 bg-[hsla(0,0%,100%,.56)]" />
            <div className="mb-12 grid grid-cols-2 gap-x-6 gap-y-16 text-[hsla(0,0%,100%,.56)] md:gap-x-24 md:gap-y-32">
              <div className="max-w-[280px]">
                <div className="mb-12 text-[18px] lg:text-[28px] font-medium leading-[110%] text-neutral-100 md:mb-16">
                  Dining
                </div>
                <div className="lg:text-[24px] text-[16px] leading-[110%]">
                  Exclusive reservations with Atlas Supper Club
                  <br />
                  <br />
                  Dedicated tables at partner restaurants
                  <br />
                  <br />
                  Last-minute bookings
                  <br />
                  <br />
                  Peak hours access
                </div>
              </div>
              <div className="max-w-[280px]">
                <div className="font-medium lg:text-[28px] md:mb-16 mb-12 text-[18px] leading-[110%] text-neutral-100">
                  Travel
                </div>
                <div className="lg:text-[24px] text-[16px] leading-[110%]">
                  5x points with BLADE on helicopter rides and flights
                  <br />
                  <br />
                  CLEAR Plus membership
                  <br />
                  <br />
                  Cancel flights
                  <br />
                  without fees
                </div>
              </div>
              <div className="max-w-[280px]">
                <div className="font-medium md:mb-16 mb-12 text-[18px] leading-[110%] text-neutral-100 lg:text-[28px]">
                  Rewards &amp; Benefits
                </div>
                <div className="lg:text-[24px] text-[16px] leading-[110%]">
                  3x upgrade on top spending category
                  <br />
                  <br />
                  1x points on every purchase
                  <br />
                  <br />
                  One Medical membership¹¹
                  <br />
                  <br />
                  Erewhon Cafe membership¹²
                  <br />
                  <br />
                  FUTURE fitness training membership¹³
                </div>
              </div>
              <div className="max-w-[280px]">
                <div className="font-medium lg:text-[28px] md:mb-16 mb-12 text-[18px] leading-[110%] text-neutral-100">
                  Personal Advisor
                </div>
                <div className="lg:text-[24px] text-[16px] leading-[110%]">
                  Advisor dedicated to your account
                  <br />
                  <br />
                  1 on 1 sessions with available video calls
                  <br />
                  <br />
                  Personalized dining and experiences concierge
                </div>
              </div>
              <div className="max-w-[280px]">
                <div className="font-medium lg:text-[28px] md:mb-16 mb-12 text-[18px] leading-[110%] text-neutral-100">
                  Card
                </div>
                <div className="lg:text-[24px] text-[16px] leading-[110%]">
                  Charge card with no pre-set spending limits¹⁴
                  <br />
                  <br />
                  21 gram steel alloy, milled, engraved, and polished to a
                  brilliant mirror shine
                  <br />
                  <br />
                  Tone-on-tone card back, with your personal icon, and no card
                  number
                  <br />
                  <br />
                  Visa Infinite
                  <br />
                  <br />
                  Handle with care, clean with a microfiber cloth
                </div>
              </div>
              <div className="max-w-[280px]">
                <div className="font-medium lg:text-[28px] md:mb-16 mb-12 text-[18px] leading-[110%] text-neutral-100">
                  App
                </div>
                <div className="lg:text-[24px] text-[16px] leading-[110%]">
                  True native iOS app with buttery-smooth performance
                  <br />
                  <br />
                  Dark Mode support
                  <br />
                  <br />
                  Instant purchase notifications
                  <br />
                  <br />
                  Unlimited virtual cards
                  <br />
                  <br />
                  Apple Pay
                </div>
              </div>
            </div>
          </div>

          <div className="divider bg-[hsla(0,0%,100%,.56)]" />

          <div className="mt-20 md:mt-32">
            <div className="text-center">
              <a
                href="/#"
                className="mb-6 inline-flex items-center justify-center rounded-[4rem] bg-rose-700 px-6 py-3 text-[23px] leading-[140%] text-neutral-100 lg:mb-[40px]"
              >
                Become a founding member
              </a>
              <div className="text-[18px] leading-[110%] text-[hsla(0,0%,100%,.56)]">
                $999/yr.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-neutral-100 px-6 py-16">
        <div className="mx-auto w-full">
          <footer className="@container">
            <div className="@md:hidden mb-8">
              <svg
                fill="none"
                height="14"
                viewBox="0 0 251 180"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="text-rose-700"
              >
                <path
                  d="M117.732 179.106H84.1283C38.4701 179.106 1.30636 142.737 0.0263672 97.3887H83.9246C95.7583 97.3887 101.675 97.3887 106.195 99.6917C110.171 101.717 113.403 104.95 115.429 108.926C117.732 113.445 117.732 119.362 117.732 131.196V179.106Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0.0224609 82.6236C1.23644 37.2157 38.427 0.778687 84.1279 0.778687H117.731V48.8164C117.731 60.65 117.731 66.5668 115.428 71.0867C113.403 75.0624 110.17 78.2948 106.194 80.3206C101.675 82.6236 95.7578 82.6236 83.9242 82.6236H0.0224609Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M132.505 179.106H166.108C211.766 179.106 248.93 142.737 250.21 97.3887H166.312C154.478 97.3887 148.561 97.3887 144.041 99.6917C140.066 101.717 136.833 104.95 134.808 108.926C132.505 113.445 132.505 119.362 132.505 131.196V179.106Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M250.214 82.6236C249 37.2157 211.809 0.778687 166.108 0.778687H132.505V48.8164C132.505 60.65 132.505 66.5668 134.808 71.0867C136.834 75.0624 140.066 78.2948 144.042 80.3206C148.562 82.6236 154.478 82.6236 166.312 82.6236H250.214Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="@md:flex @md:gap-16">
              <div className="subtitle mb-10 flex flex-col items-start gap-3 text-rose-700">
                <div className="text-neutral-700">Atlas</div>
                <a href="/#supper-club">Dining</a>
                <a href="/#travel">Travel</a>
                <a href="/#card">Card</a>
                <a href="/#app">App</a>
                <a href="/#concierge">Concierge</a>
              </div>
              <div className="subtitle mb-10 flex flex-col items-start gap-3 text-rose-700">
                <div className="text-neutral-700">Benefits</div>
                <a href="#benefits">Atlas Benefits</a>
                <a href="/visa-infinite">Visa Infinite</a>
              </div>
              <div className="subtitle mb-10 flex flex-col items-start gap-3 text-rose-700">
                <div className="text-neutral-700">Contact</div>
                <a
                  href="mailto:hello@atlascard.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Email
                </a>
                <a
                  href="https://twitter.com/atlascardhq"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com/atlascardhq"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
              <div className="subtitle mb-10 flex flex-col items-start gap-3 text-rose-700">
                <div className="text-neutral-700">Legal</div>
                <a
                  href="/legal/privacy"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Privacy Policy
                </a>
                <a
                  href="/legal/terms"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Terms of Use
                </a>
                <a
                  href="/legal/statement-disclosure"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Statement Disclosure
                </a>
              </div>
              <div className="subtitle mb-12 flex flex-col items-start gap-3 text-rose-700">
                <div className="text-neutral-700">About</div>
                <a
                  href="https://assets.atlascard.com/media/atlas_media_kit.zip"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Media Kit
                </a>
              </div>
              <div className="@md:flex hidden flex-grow justify-end text-rose-700">
                <svg
                  height="31"
                  width="134"
                  fill="none"
                  viewBox="0 0 774 180"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M444.769 175.185L378.566 4.53904H342.955L276.752 175.185H307.105L323.357 130.492H397.686L414.177 175.185H444.769ZM360.163 29.634H361.119L389.321 107.309H331.722L360.163 29.634Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M488.274 153.436C478.475 153.436 473.934 152.241 473.934 140.53V68.1131H501.18V48.9931H473.934V13.382H447.644V48.9931H427.09V68.1131H447.644V147.461C447.644 170.405 458.399 175.663 481.104 175.663C487.796 175.663 497.117 175.424 499.985 175.185V153.197C496.4 153.436 490.903 153.436 488.274 153.436Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M536.594 175.185V2.14905H510.065V175.185H536.594Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M660.082 175.185C656.975 169.449 656.736 162.279 656.736 148.417V84.843C656.736 63.333 642.874 46.125 605.829 46.125C578.105 46.125 557.073 59.748 551.337 82.453L575.476 87.711C580.017 73.371 592.206 66.918 604.873 66.918C623.515 66.918 630.446 74.327 630.446 85.082C630.446 92.969 624.232 97.0321 600.332 99.6611C566.394 103.007 546.557 113.045 546.557 140.291C546.557 163.713 565.916 178.053 589.099 178.053C604.634 178.053 622.559 172.317 630.685 159.65C630.685 166.82 632.597 173.034 634.509 175.185H660.082ZM630.446 125.473C630.446 148.895 610.131 157.977 594.118 157.977C581.451 157.977 573.325 151.763 573.325 140.052C573.325 126.668 585.753 120.454 598.659 118.781C612.282 117.108 626.383 114.957 630.446 110.894V125.473Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M770.7 81.9751C767.354 62.6161 746.322 46.125 718.359 46.125C688.962 46.125 667.691 61.6601 667.691 83.6481C667.691 109.938 688.245 116.63 708.082 119.976L720.988 122.127C736.045 124.756 746.8 128.341 746.8 139.335C746.8 151.524 735.567 158.933 719.793 158.933C702.346 158.933 689.918 151.285 686.094 133.838L661.955 138.618C666.257 161.801 686.811 178.053 719.315 178.053C750.146 178.053 773.568 164.669 773.568 138.379C773.568 111.372 752.775 104.441 730.787 100.617L718.359 98.705C704.975 96.554 694.22 93.925 694.22 83.17C694.22 71.698 704.019 65.4841 718.12 65.4841C731.265 65.4841 743.454 72.4151 746.8 86.7551L770.7 81.9751Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M117.732 179.106H84.1283C38.4701 179.106 1.30636 142.737 0.0263672 97.3887H83.9246C95.7583 97.3887 101.675 97.3887 106.195 99.6917C110.171 101.717 113.403 104.95 115.429 108.926C117.732 113.445 117.732 119.362 117.732 131.196V179.106Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M0.0224609 82.6236C1.23644 37.2157 38.427 0.778687 84.1279 0.778687H117.731V48.8164C117.731 60.65 117.731 66.5668 115.428 71.0867C113.403 75.0624 110.17 78.2948 106.194 80.3206C101.675 82.6236 95.7578 82.6236 83.9242 82.6236H0.0224609Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M132.505 179.106H166.108C211.766 179.106 248.93 142.737 250.21 97.3887H166.312C154.478 97.3887 148.561 97.3887 144.041 99.6917C140.066 101.717 136.833 104.95 134.808 108.926C132.505 113.445 132.505 119.362 132.505 131.196V179.106Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M250.214 82.6236C249 37.2157 211.809 0.778687 166.108 0.778687H132.505V48.8164C132.505 60.65 132.505 66.5668 134.808 71.0867C136.834 75.0624 140.066 78.2948 144.042 80.3206C148.562 82.6236 154.478 82.6236 166.312 82.6236H250.214Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="relative mb-8">
              <div className="absolute bottom-0 right-2 text-rose-700">
                <svg
                  fill="none"
                  height="116"
                  viewBox="0 0 133 116"
                  width="133"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3605 16.5494C22.7205 16.6994 23.6305 16.9394 24.1705 15.9194C24.2205 15.8294 24.1905 15.7094 24.0905 15.6594C23.7105 15.4494 22.7105 15.0594 22.2505 16.3094C22.2105 16.4094 22.2505 16.5094 22.3605 16.5494ZM130.85 104.089C131.09 103.729 131.26 103.329 131.37 102.899C131.65 101.839 131.5 100.739 130.94 99.7894L114.11 71.1494C112.96 69.2094 110.45 68.5494 108.5 69.6994L99.4205 75.0394L81.1305 43.9194C80.9305 42.5694 80.2305 40.8294 78.1305 39.7594C77.4105 39.3894 76.6005 39.1694 75.7305 39.0994L74.3305 38.9794C74.0105 38.9494 73.7105 38.9494 73.4205 38.9494C72.7905 38.9494 72.2405 38.9494 71.7605 38.6794L71.9205 38.3294C72.0905 37.9494 72.0005 37.5094 71.6905 37.2294C70.2605 35.9394 65.4005 31.6394 62.6505 30.2294C59.6605 28.7094 48.6705 24.8294 47.5505 24.4294C44.1505 22.0294 40.6705 22.8694 39.4305 23.2894C39.4305 23.2894 38.7905 21.7294 37.5405 21.4094C37.0605 21.2894 36.6005 21.2994 36.2005 21.3694C36.2705 21.3094 36.3205 21.2494 36.3705 21.1894C36.9005 20.5394 37.3905 19.8794 37.8405 19.2094C39.4605 19.4694 40.6805 19.5194 41.3505 19.5194H41.7405C41.9705 19.5094 42.1905 19.3894 42.3305 19.1994C42.4705 18.9994 42.5005 18.7594 42.4305 18.5294C41.5705 15.7694 40.6405 13.6394 40.3905 13.0994C40.6105 8.60939 39.4305 5.03939 39.3805 4.88939L39.3305 4.73939L39.2005 4.63939C33.4605 -0.160615 26.1405 1.14939 25.8305 1.20939H25.7305L25.6505 1.26939C24.0805 2.15939 22.6505 3.73939 21.4005 5.97939C20.6905 7.24939 20.2505 8.36939 20.0805 8.82939C18.6005 9.62938 17.2105 10.7794 16.3005 11.6194C15.9305 11.9494 15.8105 12.4694 15.9805 12.9294C16.1505 13.3894 16.5705 13.7094 17.0605 13.7294C17.9905 13.7694 19.0805 13.8294 20.1605 13.9394C20.0605 14.8094 20.1005 15.5494 20.1605 16.0494C20.2005 16.4094 20.1205 16.7594 19.9305 17.0594C19.9005 17.1094 19.8705 17.1594 19.8405 17.1994C19.3305 18.0694 19.2905 19.1294 19.7405 20.0394C20.7205 22.0194 21.6805 23.4694 22.6705 24.4394C23.4905 25.2494 24.7105 25.4794 25.7705 25.0394L27.9105 24.1494H27.9305C28.4105 24.6594 28.7305 25.3994 28.8905 25.7894C28.2405 26.6894 28.2605 27.6894 28.4605 28.3894C25.5705 30.5294 25.7205 34.3894 25.7505 34.8194C25.7005 36.4794 25.1405 40.9494 23.1705 42.1794C21.5205 43.2194 17.1605 42.7994 13.6405 42.0694C13.3305 41.9994 13.0205 42.0794 12.7905 42.2794C12.6505 42.3994 12.5405 42.5494 12.4905 42.7294C11.7205 42.6294 10.5205 42.4994 9.14046 42.4694C5.91046 42.3994 3.34046 42.8494 1.49046 43.8294C1.13046 44.0194 0.940456 44.4194 1.01046 44.8194C1.19046 45.7694 2.07046 48.8994 5.64046 49.5094C5.98046 49.5694 6.33046 49.5994 6.68046 49.5994C7.16046 49.5994 7.65046 49.5494 8.14046 49.4394L9.51046 49.1394C9.82046 49.0694 10.1105 48.9794 10.3905 48.8994C11.0205 48.7094 11.5505 48.5394 12.1205 48.6794C12.3005 48.7294 12.4605 48.7794 12.6205 48.8394L12.6605 50.1194C12.6805 50.5494 12.9705 50.9294 13.3905 51.0494C14.8305 51.4594 22.2105 53.5294 26.2505 53.7294C29.5705 53.8994 32.0305 52.0594 33.2305 50.8994L33.3905 51.8094C33.6505 53.3694 34.2105 54.2494 34.5605 54.6594L30.9405 67.2294C30.7905 67.7494 30.9005 68.2894 31.1405 68.7794C31.4605 69.4294 32.4705 69.7094 32.5005 69.7194C31.7105 71.9794 27.9805 82.7394 24.2605 96.9894C24.1605 97.3794 24.3205 97.7994 24.6705 98.0194C24.9105 98.1794 25.2705 98.3894 25.8205 98.6694C25.5205 99.5694 25.1805 100.439 24.7905 101.249C24.5705 101.709 24.3605 102.109 24.1705 102.439C23.4205 103.709 20.7105 103.739 18.3205 103.759C16.6205 103.769 15.0105 103.789 13.8205 104.179C11.2405 105.019 10.7705 107.379 10.6905 108.349C10.6405 108.869 10.9605 109.339 11.4505 109.499L28.8405 115.059C28.9805 115.109 29.1205 115.129 29.2605 115.129C29.4805 115.129 29.6905 115.079 29.8805 114.979C30.2005 114.809 30.4405 114.529 30.5505 114.179L34.6805 101.299C35.1605 101.339 35.5705 101.349 35.9005 101.349C36.1205 101.349 36.3105 101.349 36.4505 101.329C36.8305 101.309 37.1605 101.069 37.2905 100.719L48.6805 70.2794C49.0005 72.5394 49.6005 76.0094 50.5805 79.5494C51.3105 82.1894 53.3305 84.3794 56.1105 85.5594C58.1805 86.4294 63.1205 86.8494 71.5405 86.8494C72.7905 86.8494 74.1105 86.8494 75.5105 86.8194C75.8805 86.8194 76.1905 86.6494 76.3605 86.3694C76.4805 86.1694 76.6405 85.8894 76.8205 85.5494C77.8305 85.7094 78.8005 85.9294 79.7205 86.1994C80.2105 86.3394 80.6405 86.4794 80.9905 86.6294C82.3605 87.1694 82.8105 89.8394 83.2105 92.1894C83.4905 93.8694 83.7605 95.4494 84.3305 96.5594C85.4305 98.6794 87.4005 99.0194 88.5305 99.0194H88.5405C88.7005 99.0194 88.8305 99.0194 88.9405 99.0094C89.4605 98.9694 89.8805 98.5794 89.9605 98.0694L92.7105 80.0194C92.8305 79.2794 92.3205 78.5894 91.5805 78.4794L79.8005 76.6994C79.8205 76.5994 79.8205 76.4994 79.8305 76.3994C79.8605 75.9894 79.6105 75.6094 79.2105 75.4694C78.7605 75.2994 74.5205 73.8594 64.1905 72.7794L63.3405 63.2294C63.9905 62.9494 64.5005 62.7094 64.8605 62.5394C65.4905 62.2394 65.8005 61.5194 65.5905 60.8594C65.2405 59.7394 64.5805 57.5994 63.8805 55.3194C65.0105 52.9294 65.7705 50.4294 66.0105 48.1394C66.5805 42.7994 63.2205 41.8794 58.5705 40.6094H58.5505V39.0794C59.4905 39.2994 60.3405 39.4994 60.8405 39.6294C62.3605 40.0394 63.9005 41.6394 63.9105 41.6594L63.9405 41.6794L67.6805 44.7594C67.9105 44.9494 68.2105 45.0194 68.5005 44.9494C68.7905 44.8894 69.0305 44.6894 69.1505 44.4194L69.3005 44.0794C69.9705 44.3994 71.2105 44.9494 72.7205 45.4594C74.9405 46.1994 76.9205 46.5694 78.6205 46.5694C78.9005 46.5794 79.1805 46.5694 79.4405 46.5494L97.0305 76.4794C95.3605 77.6894 94.8505 80.0194 95.9205 81.8394L112.76 110.479C113.31 111.419 114.2 112.099 115.26 112.369C115.6 112.459 115.95 112.499 116.3 112.499C116.41 112.509 116.53 112.499 116.64 112.479C116.59 112.659 116.56 112.859 116.56 113.059C116.56 114.219 117.5 115.149 118.66 115.149C119.82 115.149 120.75 114.219 120.75 113.059C120.75 112.249 120.29 111.539 119.62 111.199L128.63 105.899C128.62 105.989 128.61 106.079 128.61 106.179C128.61 107.329 129.55 108.269 130.71 108.269C131.87 108.269 132.81 107.329 132.81 106.179C132.81 105.029 131.95 104.159 130.85 104.089ZM12.4005 47.5794C11.5205 47.3594 10.7805 47.5894 10.0605 47.8094C9.80046 47.8894 9.54046 47.9694 9.27046 48.0294L7.90046 48.3294C7.18046 48.4794 6.49046 48.4994 5.84046 48.3894C3.16046 47.9294 2.37046 45.6694 2.17046 44.7694C5.42046 43.1394 10.5505 43.6194 12.4605 43.8794L12.5805 47.6294C12.5205 47.6094 12.4605 47.5994 12.4005 47.5794ZM29.4705 113.839C29.4405 113.909 29.3905 113.949 29.3605 113.959C29.3305 113.979 29.2705 113.999 29.2005 113.979L11.8305 108.419C11.9105 107.489 12.3305 105.869 14.1805 105.259C15.2005 104.929 16.7205 104.909 18.3305 104.899C21.1505 104.869 24.0705 104.849 25.1505 103.019C25.3005 102.769 25.4505 102.479 25.6105 102.169L32.5005 104.369L29.4705 113.839ZM32.8405 103.289L26.1005 101.129C26.3905 100.489 26.6405 99.8294 26.8605 99.1394C27.6005 99.4694 28.5305 99.8294 29.6905 100.229C31.1405 100.719 32.4405 101.009 33.5205 101.169L32.8405 103.289ZM81.5805 78.1194L91.4105 79.5994C91.5205 79.6194 91.6105 79.7294 91.5905 79.8494L88.8405 97.8694C87.9005 97.9294 86.2405 97.7794 85.3505 96.0494C84.8505 95.0894 84.6005 93.5894 84.3305 92.0094C83.8705 89.2194 83.3805 86.3494 81.4105 85.5694C81.1405 85.4594 80.8405 85.3494 80.5005 85.2494L81.5805 78.1194ZM79.6605 77.8294L80.4505 77.9494L79.3905 84.9294C78.7405 84.7494 78.0605 84.6094 77.3705 84.4894C78.2105 82.7994 79.2405 80.3494 79.6605 77.8294ZM17.1105 12.5894C17.1105 12.5894 17.0605 12.5794 17.0505 12.5394C17.0305 12.4894 17.0605 12.4594 17.0705 12.4494C17.9105 11.6794 19.1705 10.6194 20.5105 9.88939C20.6105 9.82938 20.7005 9.77938 20.8005 9.72938L21.0005 9.62938L21.0805 9.40938C21.0805 9.40938 21.3305 8.68939 21.7905 7.70939C22.5905 6.02939 24.0405 3.51939 26.1205 2.30939C26.9605 2.17939 33.3705 1.34939 38.3405 5.39939C38.5105 5.93939 39.0605 7.91939 39.2205 10.5194C39.2805 11.3494 39.2905 12.2494 39.2405 13.1794V13.3194L39.2905 13.4494C39.2905 13.4594 39.5805 14.0694 39.9805 15.0694C40.3205 15.9294 40.7605 17.0794 41.1805 18.3794C40.6005 18.3694 39.6905 18.3294 38.5105 18.1694C37.3305 18.0094 35.9005 17.7294 34.2505 17.2494C32.9705 16.8694 31.5805 16.2694 30.1105 15.6294C28.0805 14.7494 25.9805 13.8394 23.7005 13.3094C23.2305 13.1994 22.7105 13.0994 22.1705 13.0194C21.9305 12.9894 21.6905 12.9594 21.4405 12.9294C21.0705 12.8794 20.6905 12.8394 20.3105 12.8094C19.1905 12.6894 18.0605 12.6294 17.1105 12.5894ZM28.7805 23.3794C28.4505 23.0094 27.9205 22.8994 27.4705 23.0994L25.3305 23.9894C24.6905 24.2594 23.9605 24.1194 23.4705 23.6294C23.1905 23.3594 22.9105 23.0394 22.6405 22.6694C23.2605 22.4094 23.3305 21.6994 23.3305 21.3594C23.3305 21.2494 23.2405 21.1494 23.1305 21.1494C22.5205 21.1494 22.1705 21.3794 21.9405 21.6594C21.5505 21.0494 21.1605 20.3394 20.7605 19.5394C20.4805 18.9694 20.5105 18.3194 20.8205 17.7894C20.8405 17.7494 20.8705 17.7194 20.8905 17.6794C21.2205 17.1594 21.3605 16.5394 21.3005 15.9294C21.2505 15.4794 21.2105 14.8194 21.3005 14.0594C22.0805 14.1494 22.8105 14.2694 23.4405 14.4194C24.6105 14.6894 25.7505 15.0794 26.8505 15.5094C26.9805 15.6894 27.0905 15.8794 27.1905 16.0794C27.5305 16.7694 27.8705 17.5294 28.2105 18.3094C28.9405 19.9894 30.7505 21.2494 32.1305 22.0094C32.6905 22.3094 33.3105 22.4594 33.9205 22.4194C32.7905 23.0794 31.0605 24.1094 29.8305 24.9094C29.8105 24.9194 29.7905 24.9394 29.7705 24.9494C29.5505 24.4794 29.2205 23.8694 28.7805 23.3794ZM64.8805 48.0194C64.6905 49.8194 64.1605 51.7694 63.3705 53.6694C62.6105 55.5194 61.5905 57.3394 60.4005 58.9594C58.0205 62.2094 55.2705 64.2094 53.0605 64.2994C51.4205 64.3594 49.5305 63.5194 47.4505 61.7794C45.9305 60.4194 44.5605 58.8694 43.3705 57.1994L42.5905 56.1094L27.0905 32.6794C27.2105 31.7994 27.5705 30.9694 28.1305 30.2894L41.5005 49.2494C41.9505 49.8194 42.7505 49.9994 43.4005 49.6694C46.1605 48.2694 52.7505 44.7294 54.3305 41.9594L54.4105 41.8294V38.9694L57.4105 39.5094V41.4794L58.2605 41.7094C62.8305 42.9594 65.3405 43.6494 64.8805 48.0194ZM80.0605 45.3194C76.3405 45.9394 71.3505 43.7894 69.7705 43.0494L71.2905 39.7194C72.0005 40.0894 72.7205 40.0894 73.4105 40.0894C73.6805 40.0894 73.9605 40.0894 74.2305 40.1094L75.6305 40.2294C76.3605 40.2894 77.0305 40.4794 77.6205 40.7794C80.0405 42.0094 80.1305 44.3994 80.0605 45.3194ZM80.6405 46.3494C80.8105 46.2694 80.9405 46.1494 81.0305 46.0094L98.4305 75.6194L98.0005 75.8794L80.6405 46.3494ZM117.79 110.949C117.11 111.349 116.31 111.459 115.55 111.269C114.78 111.069 114.14 110.579 113.74 109.899L96.9005 81.2694C96.0805 79.8594 96.5505 78.0394 97.9505 77.2194L99.1405 76.5194L118.97 110.259L117.79 110.949ZM119.95 109.679L100.12 75.9394L102.67 74.4494L122.5 108.179L119.95 109.679ZM123.48 107.609L103.65 73.8694L106.64 72.1194L126.47 105.849L123.48 107.609ZM130.27 102.609C130.07 103.369 129.59 104.009 128.91 104.419L127.45 105.279L107.62 71.5394L109.08 70.6794C109.54 70.3994 110.06 70.2694 110.57 70.2694C111.58 70.2694 112.57 70.7894 113.12 71.7294L129.96 100.369C130.36 101.049 130.47 101.839 130.27 102.609Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="divider bg-rose-700"></div>
            </div>
            <div className="my-4 ml-3 font-mono text-neutral-500">
              <div className="mb-4 text-sm uppercase">
                2024 © Arthur Laroya, Inc.
              </div>
              <div className="text-sm uppercase">
                Arthur Laroya, Inc is a technology company, not a bank. Atlas
                Card is issued by Lead Bank ("Issuer"). An application is
                required. Cardholders must be at least 18 years old and a
                citizen of the United States, or a permanent resident with a
                valid social security number (SSN) or ITIN. Financing is subject
                to Issuer's approval. Payment of account balance due in full
                monthly. Fees may be assessed on overdue amounts. An annual
                membership fee applies.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
