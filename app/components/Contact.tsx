function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[80%] mx-auto py-10 lg:py-24 px-4 
    flex flex-col gap-4 item-center justify-center"
    >
      <p
        className="font-titleFont text-lg text-green-500 font-semibold 
      flex justify-center items-center tracking-wide"
      >
        What is next?
      </p>
      <h2 className="flex justify-center font-titleFont text-5xl font-semibold">
        Get in Touch
      </h2>
      <p className="max-w-[600px text-center text-gray-700]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
        harum nam ad libero ratione, neque expedita debitis ut reiciendis nobis!
        Ipsa eum facilis quam eligendi odit officia non hic.
      </p>
      <a href="" className="flex justify-center">
        <button
          className="w-40 h-14 border border-green-500 mt-6 font-titleFont
        text-sm text-green-500 tracking-wider rounded-md hover:bg-gray-700 duration-300"
        >
          Say Hello
        </button>
      </a>
    </section>
  );
}

export default Contact;
