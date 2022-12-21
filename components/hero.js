import Container from "./container";

export default function Hero() {
  return (
    <>
      <Container className="flex justify-center ">
        <div className="flex items-center w-full lg:w-2/3">
          <div className="flex flex-col items-center max-w-5xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white text-center pb-20">
              A Landing Page Builder for Builders
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 text-center pb-20">
              Build your landing page with just one line!
            </p>

            <a
              href="https://google.de"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
            >
              Try for free
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
