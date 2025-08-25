
"use client";
import React, { useState, useEffect } from 'react';

import Horizontal from '@/app/components/ui/horizontal_line.tsx';
import { Input } from '@/app/components/ui/input.tsx';


function Button(props) {
  return <button type={props.type} onClick={props.click} className={(props.class) ? props.class : "w-full bg-[#242424] pb-1 pt-1 text-sm cursor-pointer rounded-sm text-md hover:bg-[#070707] outline-none hover:scale-105 transition-all"}>{props.value}</button>;
}

function CheckBox({click}) {
  const [isSelect, setIsSelect] = useState(false);
  const clicked = () => {
    const new_select = !isSelect;
    if (click) click(new_select);
    setIsSelect(new_select);
  };
  return <button onClick={clicked} className="bg-[#242424] hover:bg-[#525252] flex flex-row justify-center items-center text-white w-5 h-5 text-sm cursor-pointer rounded-sm text-md transition-all">{(isSelect === true) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 transition-all"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg> : <></>}</button>;
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
  
  const [taskToBeAdd, setTaskToBeAdd] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  
  const add_task = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (taskToBeAdd === "") throw error;
      const new_tasks = [...tasks];
      new_tasks.push(taskToBeAdd);
      setTasks(new_tasks);
      setTaskToBeAdd("");
      
    } catch (error) {
      console.error("Could not add task to list");
      alert("Task could not be added to list!");
      return;
    }
    return;
  };
  
  return (
    <section className="w-screen h-screen flex flex-row justify-center bg-[#070707] p-5">
      <div className="w-1/3 h-full flex flex-col p-5 justify-center gap-1">
        {(tasks.length === 0) ? <span>No tasks added yet</span> : <>{tasks.map((task, index) => (
	  <TodoElement key={index} text={task} />
	))}</>}
	<Horizontal />
	<form onSubmit={add_task} className="flex flex-row justify-center gap-2">
	  <Input className="w-full" autoComplete="off" type="text" value={taskToBeAdd} placeholder="Task title" onChange={(e) => {setTaskToBeAdd(e.target.value);}} required />
	  <Button class="w-1/4 bg-[#242424] hover:bg-[#525252] pb-1 pt-1 text-sm cursor-pointer rounded-sm text-md outline-none hover:scale-105 transition-all" type="submit" value="Add"/>
	</form>
      </div>
    </section>
  )
}