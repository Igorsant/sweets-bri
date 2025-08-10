import Image from "next/image";

export default function Home() {
  return (
    <section className="relative bg-cover bg-center bg-gradient-to-r from-[#964EA0] to-[#823666] text-white pb-60">
      <Image
        className="object-cover z-0"
        src="/image 8.png"
        fill
        alt="background image"
      />
      <Image
        className="absolute bottom-0 right-0 z-10"
        src="/image 11.png"
        width={700}
        height={700}
        alt="background brigadeiro"
      />
      <div className="relative z-20">
        <h1 className="text-7xl font-semibold pt-15 mx-10 max-w-300">
          Bringing the amazing
          <br /> brigadeiros to Indianapolis
        </h1>
        <p className="max-w-120 mx-10 mt-5">
          That’s right, Brigadeiros! I know, it is hard to read and say that out
          loud. Can we just call them Sweets Bri? Of course! Sweets Bri are
          candies originally from Brazil and are making their way to the US.
          Let's make a sweeter country together!
        </p>
        <div className="flex gap-x-5 mt-10 mx-10">
          <a className="bg-teal-500 rounded-lg py-2 px-7 font-bold text-2xl flex items-center">
            Explore our Flavors
          </a>
          <a className="border-3 border-teal-200 text-teal-200 rounded-lg py-2 px-7 font-bold text-2xl flex items-center">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
