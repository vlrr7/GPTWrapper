import Sidebar from './Sidebar';

// export default = main export file
// name of function has to start with capital
// children is when we call RootLayout like we do <p1>yes<p1> children = yes 
export default function RootLayout({
  children,
}: {

  // This component expects one prop: children, and it can be any valid React content.
  // Basically its a type initialisation like string, int
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 overflow-hidden">
        {children}
      </main>
    </div>
  );

  
  // return (
  //   <html lang="en">
      
  //     {/* className is how you add CSS classes in JSX */}
  //     {/* flex is a Tailwind CSS utility class. Makes the <body> a flex container (left-to-right layout by default) */}
  //     <body className="flex">
  //       <Sidebar />
  //       <main className="flex-1 p-6 bg-gray-100">
  //         {children}
  //       </main>
  //     </body>
  //   </html>
  // );
}