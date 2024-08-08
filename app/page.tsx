import Image from "next/image";
import data from "../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex w-full items-center ">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              src={image}
              alt={title}
              width={40}
              height={40}
            />
          )}
        </div>

        <h2
          className="font-semibold w-full flex justify-center items-center text-gray-700
        -ml-10"
        >
          {title}
        </h2>
      </div>
    </a>
  );
}

export function GithubIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      
      width={32}
      height={32}
    >
      <title>GitHub</title>

      <path
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        fill="white"
      />
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      
      width={32}
      height={32}
    >
      <title>X</title>
      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        fill="white"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8 ">
      <Image
        className="rounded-full  "
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex  items-center gap-4 mt-8">
        {data.socials.map((link) => {
          if (link.title === "GitHub") {
            return <GithubIcon />;
          }
          if (link.title === "Twitter") {
            return <TwitterIcon />;
          }
        })}
      </div>
    </div>
  );
}
