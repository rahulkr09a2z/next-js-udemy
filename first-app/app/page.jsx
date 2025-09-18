import Image from "next/image";

export default function Home() {
  console.log("Executing Home Page.......");
  return (
      <main >
       <img src="/logo.jpg" alt="A server surrounded by magic sparkles." width="200"  height="200"/>
       <h1>Welcome to this NextJS Course!</h1>
       <p> Let&apos;s get started</p>
      </main>
  );
}
