"use client";

import { useEffect, useState } from "react";

export function Foo() {
  const [data, setData] = useState<{ name: string; value: string }[]>();

  useEffect(() => {
    async function service() {
      const res = await fetch("/apis/c8a0b31e-7d6f-48e4-abed-48f150ba0dd0");
      const d = await res.json();
      setData(d);
      console.log(d);
    }
    service();
  }, []);

  return (
    <div className="m-4">
      <h1>DATA from mocki.io/v1/</h1>
      {data?.map(d => (<div key={d.name}>{d.name}:{d.value}</div>))}
    </div>
  );
}
