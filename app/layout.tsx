import SigninButton from "./components/SigninButton";
import "./globals.css";

import Provider from './components/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="flex w-full max-w-full items-center justify-center">
              <ul className="flex items-center justify-between gap-10 text-xl">
                <li>Home</li>
                <li>Server </li>
                <li>Client </li>
                <SigninButton />
              </ul>
            </div>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
