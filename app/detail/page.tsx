export default function LandingPage() {
  return (
    <main className="grow">
      <section className="grow flex justify-center items-center flex-col gap-2 m-3">
        <h1 className="font-bold text-4xl text-gray-800">Detail Page</h1>
        <p>Aqui vamos a redirigir a los usuarios que den clic sobre un vehiculo de su preferencia. Accediendo atraves de su ID. Exponiendo detalles del mismo, imagen, pecio, cantidad en stock, etc...</p>
        <img
          alt="Comming soon"
          loading="lazy"
          width="300"
          height="300"
          decoding="async"
          data-nimg="1"
          className="object-contain"
          src="https://img.freepik.com/free-vector/realistic-coming-soon-background_52683-59077.jpg?w=360"
          style={{ color: "transparent" }}
        />
      </section>
    </main>
  );
}
