import icon1 from "../../public/assest/hr360e/Financial_Planning.svg";
import icon2 from "../../public/assest/hr360e/Expense.svg";
import icon3 from "../../public/assest/hr360e/Real - time_Financia.svg";
import Image from "next/image";
import monitor from "../../public/assest/hr360e/monitor.png"

export const StockMarket = () => {
  const tiles = [
    {
      icons: icon1,
      p: "Customized Financial Planning Tools",
    },
    {
      icons: icon2,
      p: "Expense Monitoring and Classification",
    },
    {
      icons: icon3,
      p: "Real - time Financial Analytics",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-[#74EBD5] to-[#ACB6E5] h-full 2xl:h-[450px] relative">
        <div className="absolute max-sm:-top-16 sm:-top-32 left-1/2 -translate-x-1/2">
            <Image src={monitor} alt="Montior not found" width={500} height={500} className=" max-sm:min-w-[200px] max-sm:w-full" />
        </div>
      <div className="grid lg:grid-cols-3 justify-items-center sm:px-2 sm:grid-cols-2 grid-cols-1 flex-wrap gap-5 pt-32 md:pt-64 pb-5 w-full mx-auto max-w-screen-2xl">
        {tiles.map((val,idx) => {
          return (
            <div key={idx} className="border-l-3 px-1 sm:px-5 py-3 max-md:w-[90%]  border-[#D9D9D9] flex gap-5 items-center ">
              <div className="bg-white rounded-full flex justify-center items-center">
                <Image src={val.icons} alt="icon 1 not found" className="max-sm:w-[80px] max-sm:p-2 md:p-3 p-1" />
              </div>
              <p >{val.p}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
};
