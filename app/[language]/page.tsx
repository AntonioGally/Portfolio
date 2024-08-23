import { getDictionary } from "@/dictionaries/dictionaries"

export default async function Home({ params }: { params: { language: string } }) {
  const dict = await getDictionary(params.language);
  

  return (
    <div>
      Oi {dict.products.cart}
    </div>
  )
}
