import NavbarLayout from "@/layouts/NavbarLayout";
import HeroLayout from "@/layouts/HeroLayout";
import LoaderComponent from "@/components/LoaderComponent";
import AboutLayout from "@/layouts/AboutLayout";
export default function Home() {
  return (
    <main>
      <NavbarLayout />
      <HeroLayout />
      <AboutLayout/>
    </main>
  );
}
