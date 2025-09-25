import { Suspense } from "react";
import Loading from "./loading";

export default function UserLayout({ children }) {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10 px-10 xl:px-0">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}
