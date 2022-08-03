import React from "react";
import Logo from './logo.png'; 


function Home() {
  return (
 <>


<main className="container" class=" h-96 flex items-center px-6 lg:px-32 bg-purple-900 text-white relative">

  <section class="w-full md:w-9/12 xl:w-8/12">
    <span class="font-bold uppercase tracking-widest">Atomic</span>
    <h1 class="text-3xl lg:text-5xl font-bold text-pink-500">
      Tail<br/>Design
    </h1>
    <p class="font-bold mb-1">The Design is in the de Tail s...</p>
    <p>Lorem ipsum dolor sit amet...</p>
  </section>
  <footer class="absolute right-0 bottom-0 p-6 lg:p-32">
    <p class="font-bold mb-1">Yours Truly</p>
    <p>Chigozie Orunta (Full Stack Engineer)</p>
  </footer>
</main>
</>   

   
  );
}

export default Home;
