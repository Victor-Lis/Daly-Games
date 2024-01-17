import { GameCard } from "@/components/GameCard";
import { Container } from "@/components/container";
import { Label } from "@/components/label";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { next: { revalidate: 60 } }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function getGameSorted() {
    try {

      const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: "no-store" })

      return res.json()

    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
  
export default async function Game({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: GameProps = await getData(id);
  const sortedGame: GameProps = await getGameSorted()

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          src={data.image_url}
          alt={data.title}
          priority={true}
          quality={100}
          fill={true}
          className="max-h-96 object-cover rounded-lg opacity-75"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>

        <div className="flex gap-2 flex-wrap">
          {data?.platforms.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>

        <div className="flex gap-2 flex-wrap">
          {data?.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb2">Data de lançamento <strong>{data.release}</strong></p>

        <h2 className="font-bold text-lg mt-7 mb-2">Jogo Recomendado</h2>
        <div className="mt-4 mx-auto w-10/12">
            <div>
                <GameCard data={sortedGame}/>
            </div>
        </div>
      </Container>
    </main>
  );
}
