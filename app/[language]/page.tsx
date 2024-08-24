import { getDictionary } from "@/dictionaries/dictionaries"
import Header from "./components/header/header";
import HomeProvider from "./home.context";

export default async function Home({ params }: { params: { language: string } }) {
  const dict = await getDictionary(params.language);

  return (
    <div>
      <HomeProvider dictionary={dict}>
        <Header />
        <div className="h-[100vh]">
          <span>oi</span>
        </div>
      </HomeProvider>
    </div>
  )
}
