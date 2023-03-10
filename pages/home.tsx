import { NextPage } from "next";
import { useRouter } from "next/router";
import Assets from "tauri/components/layouts/Assets";
import Layout from "../components/layouts/Layout";

const HomePage: NextPage = () => {
  const router = useRouter();
  let addedBalance = 0;
  let removeBalance = 0;

  if (typeof window !== "undefined") {
    addedBalance = Number(localStorage.balance || 0);
    removeBalance = Number(localStorage.sent || 0);
  }
  const currentBalance = 100+addedBalance-removeBalance;
  return (
    <Layout>
      <div className="container pt-6 px-3">
        <div className="min-h-screen mt-16">
          <h1 className="text-gray-900  text-2xl text-center">Personal</h1>
          <p className="text-gray-900 text-md text-center">01521330801</p>
          <h3 className="text-blue-900 text-center"> Balance: <span className="font-extrabold">{currentBalance}</span> FTM </h3>
          <div className="flex gap-3 my-3">
            <button
              onClick={() => router.push("/buy")}
              className="w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy
            </button>

            <button
              onClick={() => router.push("/send")}
              className="w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>

          <h2 className="text-gray-900 my-5 text-xl">Assets</h2>

          <Assets />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
