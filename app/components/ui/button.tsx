

import React, { useState, useEffect } from 'react';


export default function Button(props) {
  return <button type={props.type} onClick={props.click} className={(props.class) ? props.class : "w-full bg-[#242424] pb-1 pt-1 text-sm cursor-pointer rounded-sm text-md hover:bg-[#070707] outline-none hover:scale-105 transition-all"}>{props.value}</button>;
}