import Filter from "../ui/customers/filter";
import Header from "../ui/customers/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-mono flex h-screen my-24 flex-col md:flex-row md:overflow-hidden bg-slate-100">
      <div className="my-2">
        <Header />
      </div>
      <div className="w-full flex-none my-20 rounded md:w-64">
        <Filter />
      </div>
      <div className="flex-grow rounded mx-0.5 my-20 md:overflow-y-auto bg-slate-100 ">
        {children}
      </div>
    </div>
  );
}