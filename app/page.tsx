import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      <div>
        <h1>
          <div className='z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text'>
            Join the waitlist for my
          </div>
          <div className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white bg-gradient-to-r from-purple-300 to-purple-800 cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text animate-fade-in-3">
            Newsletter
          </div>
        </h1>
      </div>
      {/* <NewsletterForm /> */}
      {/* <Socials /> */}
    </main>
  )
}
