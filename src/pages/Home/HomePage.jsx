import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/Hero"));
const FeaturedProducts = lazy(() => import("./components/FeaturedProducts"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Faq = lazy(() => import("./components/Faq"));
// const Quans = lazy(() => import("./components/Quans"));

const LoadingFallback = () => <p>Loading...</p>;

export const HomePage = () => {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      {/* </Suspense> */}
      {/* <Suspense fallback={<LoadingFallback />}> */}
        <FeaturedProducts />
      {/* </Suspense> */}
      {/* <Suspense fallback={<LoadingFallback />}> */}
        <Testimonials />
      {/* </Suspense> */}
      {/* <Suspense fallback={<LoadingFallback />}> */}
        <Faq />
      </Suspense>
    </>
  );
};
