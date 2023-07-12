export default function LandingPage() {
  return (
    <main className="grow">
      <section className="grow flex justify-center items-center flex-col gap-2 m-3">
        <h1 className="font-bold text-4xl text-gray-800">Login Page</h1>
        <p className="w-10">Aqui vamos a redirigir a los usuarios, que visitan nuestra app, por lo general no tienen permiso de entrar a ciertas rutas y si estos desean pasar del Landing Page a otras rutas, deberan registrarse o iniciar sesion y de esta forma otorgales los permisos necesarios...</p>
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
