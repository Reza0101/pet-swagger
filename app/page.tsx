import { Pet } from "@/types/api";
import Link from "next/link";
import React from "react";

async function fetchData() {
  const response = await fetch(
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
  );
  return response.json();
}

export default async function Home() {
  const data = await fetchData();


  return (
    <div>
      <div className="w-full bg-green-400 py-3 text-center">
        <button className="text-lg font-[500]">All pet😎</button>
      </div>

      <div className="flex flex-col items-center gap-5">
        {data.map((item: Pet) => (
          <Link href={`/pet/${item.id}`} className="bg-slate-300 cursor-pointer w-full text-center py-2" key={crypto.randomUUID()}>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
