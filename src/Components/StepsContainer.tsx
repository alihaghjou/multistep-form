import React from "react";

export default function StepsContainer({
  children,
  ...arg
}: {
  children: React.ReactNode;
}) {
  return (
    <article {...arg} className="m-auto w-3/4 h-full p-10 px-16 flex flex-col justify-center gap-16">
      {children}
    </article>
  );
}
