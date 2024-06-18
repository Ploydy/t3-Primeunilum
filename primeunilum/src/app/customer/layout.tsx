import Filter from "../ui/customers/filter";
import Header from "../ui/customers/header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-mono flex h-screen my-24 flex-col md:flex-row md:overflow-hidden bg-slate-100">
      <div className="my-2">
        <Header />
      </div>
      <div className="w-full flex-none mt-40 ml-20 mr-8 rounded md:w-64">
        <Filter />
      </div>
      <div className="flex-grow rounded mx-0.5 mt-40 md:overflow-y-auto overflow-hidden bg-slate-100 mr-20  ">
        {children}
      </div>
    </div>
  );
}