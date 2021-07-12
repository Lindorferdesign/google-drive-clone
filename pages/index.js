import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <section className="bg-[#f8f9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl"></Icon>
            </Button>
          </div>

          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 bg-white transition-all transition-duration:300ms mb-3">
            <img 
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2 hover:shadow-lg"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGKLAIFaQeV0w/profile-displayphoto-shrink_100_100/0/1584210740494?e=1631145600&v=beta&t=2saQ62DcZDwfjqci9zzgBlOAgkQFlxHZjSQNqiOTHtU"
                alt="account-img"
            ></img>              
            </div>
            <p>Blank</p>
          </div>


        </div>
      </section>
    </div>
  );
}
