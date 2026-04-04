export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">Hi, I'm Rakshita Kumari</h1>

      <p className="mt-4 text-xl text-gray-600">MERN Stack Developer</p>

      <p className="mt-4 max-w-2xl text-gray-500">
        I am a Computer Science student passionate about building modern web
        applications using the MERN stack. I enjoy solving problems, creating
        intuitive user interfaces, and developing full-stack applications that
        deliver real value to users.
      </p>

      <div className="mt-6 space-x-4">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          View Projects
        </a>

        <a
          href="/webDeveloper.pdf"
          target="_blank"
          className="border px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Resume
        </a>
      </div>

      <div className="flex gap-4 mt-6">
        <a href="https://github.com/rakshita006">GitHub</a>
        <a href="https://www.linkedin.com/in/rakshita-kumari-590201291">LinkedIn</a>
      </div>
    </section>
  );
};
