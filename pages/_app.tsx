import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ul>
        <li>
          <Link href="/test/">Test</Link>
        </li>
        <li>
          <Link href="/second/">Second</Link>
        </li>
        <li>
          <Link href="/first/">First</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
}
