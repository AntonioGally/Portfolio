import { getDictionary } from "@/dictionaries/dictionaries"
import Header from "./components/header/header";

export default async function Home({ params }: { params: { language: string } }) {
  const dict = await getDictionary(params.language);

  return (
    <div>
      <Header />
      Oi {dict.products.cart}
    </div>
  )
}
