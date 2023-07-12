import Header from "@/components/header/Header";

export default function LandingPage() {
  return (
    <main className="grow">
      <Header />
      <section className="grow flex justify-center items-center flex-col gap-2 m-3">
        <h1 className="font-bold text-4xl">Landing Page</h1>
        <img
          alt="Comming soon"
          loading="lazy"
          width="300"
          height="300"
          decoding="async"
          data-nimg="1"
          className="object-contain"
          src="https://dhi-app.vercel.app/_next/image?url=%2Fassets%2Fcoming-soon.png&w=640&q=75"
          style={{ color: "transparent" }}
        />
      </section>
    </main>
  );
}
