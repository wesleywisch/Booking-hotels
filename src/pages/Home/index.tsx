import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Featured } from "../../components/Featured";
import { PropertyList } from "../../components/PropertyList";
import { FeaturedProperties } from "../../components/FeaturedProperties";
import { MailList } from "../../components/MailList";
import { Footer } from "../../components/Footer";

import { MainContainer, SubTitle, SectionContainer } from './styles'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header type="home" />

      <MainContainer>
        <Featured />

        <SectionContainer>
          <SubTitle>
            Navegue por tipo de imóvel
          </SubTitle>

          <PropertyList />
        </SectionContainer>

        <SectionContainer>
          <SubTitle>
            Casas que os hóspedes adoraram
          </SubTitle>

          <FeaturedProperties />
          <MailList />
        </SectionContainer>
      </MainContainer>

      <Footer />
    </>
  )
}
