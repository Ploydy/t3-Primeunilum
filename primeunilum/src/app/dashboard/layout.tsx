import SideNav from "../_components/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-mono flex h-screen flex-col p-0.5 md:flex-row md:overflow-hidden bg-slate-900 ">
      <div className="w-full flex-none rounded-lg md:w-64 bg-slate-500">
        <SideNav />
      </div>
      <div className="flex-grow rounded-lg m-0.5 md:overflow-y-auto md:p-12 bg-slate-500 ">
        {children}
      </div>
    </div>
  );
}