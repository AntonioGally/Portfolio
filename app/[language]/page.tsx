import { getDictionary } from "@/dictionaries/dictionaries"
import Header from "./components/header/header";
import HomeProvider from "./home.context";
import BannerSection from "./components/banner-section/banner-section";
import ProjectSection from "./components/project-section";
import AboutSection from "./components/about-section";
import Footer from "./components/footer";
import ContactSection from "./components/contact-section";

export default async function Home({ params }: { params: { language: string } }) {
  const dict = await getDictionary(params.language);

  return (
    <div className="max-w-[1920px] m-auto">
      <HomeProvider dictionary={dict}>
        <Header />
        <BannerSection />
        <ProjectSection language={params.language} />
        <AboutSection language={params.language} />
        <ContactSection language={params.language} />
        <Footer language={params.language} />
      </HomeProvider>
    </div>
  )
}
