const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-accent">02. Experience</h2>
        <div className="space-y-12 max-w-3xl">
          <div className="border-l-2 border-white/10 pl-8 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold">Software Developer Intern</h3>
            <p className="text-accent font-mono mb-2">Lightweight Solutions • Dec. 2025 - Feb. 2026</p>
            <p className="text-gray-400 mb-2">Designed the backend architecture of Dental IDP using Node.js + Express, Prisma, and Postgresql.</p>
            <p className="text-gray-400">Contributed to the development of Eveia, a web application for managing AI agents using React, Typescript, Fastapi, and Postgresql. </p>
          </div>
          <div className="border-l-2 border-white/10 pl-8 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold">Web Developer Freelance</h3>
            <p className="text-accent font-mono mb-2">Freelance • Jan. 2023 - June. 2025</p>
            <p className="text-gray-400 mb-2">Developed multiple web application projects using HTML, CSS, and Javascript.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
