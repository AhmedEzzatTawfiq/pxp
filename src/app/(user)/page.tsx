import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Facilities from "../../components/Facilities";
import Products from "../../components/Products";
import About from "@/components/About";


export default function Home() {
  return ( 
    <Container className="py-10">
      <Banner />
      {/* <About /> */}
      <Facilities />
      <Products />
    </Container>
  );
}
