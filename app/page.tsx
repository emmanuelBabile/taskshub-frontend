// app/page.tsx
"use client"; // Nécessaire pour utiliser les hooks

import { useEffect } from "react";
import { useRouter } from "next/navigation";  // Utiliser `next/navigation` ici

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");  
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 m-4">
        <img
          src="/5.png"
          alt="TasksHub Logo"
          className="w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] max-w-[150px] h-auto"
        />
      </div>

      <div className="flex items-center justify-center min-h-screen flex-col">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
          Welcome to TasksHub
        </p>

        <img
          src="/8.png"
          alt="Another Logo"
          className="mt-6 w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] max-w-[200px] h-auto"
        />
      </div>
    </div>
  );
}
