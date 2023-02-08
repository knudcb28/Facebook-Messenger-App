import { getServerSession } from "next-auth";
import "../styles/globals.css";
import Header from "./Header";
import { Providers } from "./providers";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession();

  return (
    
    <html>
      <head />
      <body>
        {/* @ts-expect-error Server Component */}
        <Header />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
    
  );
}
