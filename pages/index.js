import Head from "next/head";
import  Header from "../components/Header";
import Feed from "@/components/Feed";


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll  scrollbar-hide">
      <Head>
        <title> Y_Instagram</title>
        <link rel="icon" type="image/png" href="../favicon.png" />
      </Head>
    
      <Header />
      <Feed />  
      
    </div>
  );
}
