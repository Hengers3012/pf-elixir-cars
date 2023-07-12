export default function HomePage() {
  return (
    <main className="grow">
      <section className="grow flex justify-center items-center flex-col gap-2 m-3">
        <h1 className="font-bold text-4xl">User home page</h1>
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
