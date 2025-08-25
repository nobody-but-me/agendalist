
"use client";
import React, { useState, useEffect } from 'react';

function SelectableButton({content, click}) {
  const [isSelect, setIsSelect] = useState(false);
  const clicked = () => {
    const new_select = !isSelect;
    if (click) click(new_select);
    setIsSelect(new_select);
  };
  return <button onClick={clicked} className="text-white pb-1 pt-1 pl-2 pr-2 text-sm cursor-pointer rounded-sm text-md transition-all" style={{backgroundColor: isSelect ? 'red' : 'green'}}>{content}</button>;
}

export default function Home() {
  return (
    <section className="w-screen h-screen bg-[#070707] p-5">
      <SelectableButton content="teste" />
    </section>
  )
}