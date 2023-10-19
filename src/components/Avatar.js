import React from "react";



export default function Avatar({image}){
    return <>
    {
        image ?    <img class="w-10 h-10 rounded-full" src={image} alt="Rounded avatar"/> :
        <div class="relative inline-flex items-center justify-center
         w-10 h-10 overflow-hidden bg-neutral-200 rounded-full dark:bg-gray-600">
    <span class="font-medium text-gray-600 ">JL</span>
</div>

    }
 
    </>    
}
