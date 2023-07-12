export default function LandingPage() {
  return (
    <main className="grow">
      <section className="grow flex justify-center items-center flex-col gap-2 m-3">
        <h1 className="font-bold text-4xl text-gray-800">About Page</h1>
        <p className="text-green-700">Te damos la bienvenida a Elixir Cars</p>
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
