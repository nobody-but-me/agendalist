
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

function CheckBox({click}) {
  const [isSelect, setIsSelect] = useState(false);
  const clicked = () => {
    const new_select = !isSelect;
    if (click) click(new_select);
    setIsSelect(new_select);
  };
  return <button onClick={clicked} className="bg-[#242424] flex flex-row justify-center items-center text-white w-5 h-5 text-sm cursor-pointer rounded-sm text-md transition-all">{(isSelect === true) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 transition-all"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg> : <></>}</button>;
}

function TodoElement({text, checked}) {
  return (
    <div className="flex flex-row w-full">
      <span className="w-full">{text}</span>
      <CheckBox />
    </div>
  )
}

export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-row justify-center bg-[#070707] p-5">
      <div className="w-1/3 h-full flex flex-col p-5 justify-center gap-1">
        <TodoElement text="Prepare the supper"/>
        <TodoElement text="Clean the bedroom"/>
        <TodoElement text="Wash the dishes"/>
        <TodoElement text="Make coffee"/>
      </div>
    </section>
  )
}