import Content from "./(components)/content";
import Header from "./(components)/header";
import Part from "./(components)/part";
import Timetime from "./(components)/timetime";
import Ender from "./(components)/ender";
import Footer from "./(components)/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Part />
      <Timetime />
      <Ender />
      <Footer />
    </>
  );
}
