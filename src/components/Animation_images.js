import React, { useState, useEffect } from 'react';
import '../style.css'

const Animation_images = () => {

    const [isPlaying, setIsPlaying] = useState(false)
  
    const handlePlay = () => {
        setIsPlaying(true)
    }
    
    const handlePause = () => {
        setIsPlaying(false)
    }

  useEffect(() => {
    const button1 = document.getElementById('btn_bread_1');
    const div1 = document.getElementById('img_bread_1');
    const button2 = document.getElementById('btn_bread_2');
    const div2 = document.getElementById('img_bread_2');
    const button3 = document.getElementById('btn_bread_3');
    const div3 = document.getElementById('img_bread_3');
    const button4 = document.getElementById('btn_bread_4');
    const div4 = document.getElementById('img_bread_4');
    const button5 = document.getElementById('btn_bread_5');
    const div5 = document.getElementById('img_bread_5');

    button1.addEventListener('click', () => {
        div1.className="block";
        div1.style.animation = 'action_bread_1 2s ease-in-out';
        setTimeout(() => { div1.style.animation = '';}, 3000);
    });
    button2.addEventListener('click', () => {
        div2.className="block";
        div2.style.animation = 'action_bread_2 2s ease-in-out';
        setTimeout(() => { div2.style.animation = '';}, 3000);
    });
    button3.addEventListener('click', () => {
        div3.className="block";
        div3.style.animation = 'action_bread_3 2s ease-in-out';
        setTimeout(() => { div3.style.animation = '';}, 3000);
    });
    button4.addEventListener('click', () => {
        div4.className="block";
        div4.style.animation = 'action_bread_4 2s ease-in-out';
        setTimeout(() => { div4.style.animation = '';}, 3000);
    });
    button5.addEventListener('click', () => {
        div5.className="block";
        div5.style.animation = 'action_bread_5 2s ease-in-out';
        setTimeout(() => { div5.style.animation = '';}, 3000);
    });
  }, [])
  
  return (    
    <div className="">
        <div className="grid grid-cols-3 gap-4 place-items-center h-28 pt-20 xl:grid-cols-3 lg:grid-cols-1 sm:grid-cols-1">
            <div>
                <img src="./gif/girl2.gif" className="play" alt="gif" width="256" height="384" />
            </div>
            <div>
                <span className="text-7xl font-mono tracking-wide text-orange-500 shadow-lg">Pie in the Face</span>
            </div>
            <div>
                <img src="./gif/girl1.gif" className="play" alt="gif" width="256" />
            </div>
        </div>       
        
        <div className="flex grid grid-cols-5 gap-4 ml-20 pt-44 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2">
            <div className="flex-initial w-64">
                <div className="shadow-2xl shadow-cyan-500">
                    <img src="/images/1.jpg" className="rounded-md" alt="logo" />
                </div> 
                <div className="py-12 grid grid-cols-1">
                    <button className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 item-center" id="btn_bread_1">Click Here!</button>
                </div>
                <img src="./images/br1.png" alt="" className="hidden" id="img_bread_1"/>
            </div>
            <div className="flex-initial w-64 ...">
                <div className="shadow-2xl shadow-blue-500">
                    <img src="/images/2.jpg" className="rounded-md" alt="logo" />
                </div>
                <div className="py-12 grid grid-cols-1">
                    <button className="btn btn--primary shadow-lg shadow-blue-500/50 item-center" id="btn_bread_2">Click Here!</button>
                </div>
                <img src="./images/br2.png" alt="" className="hidden" id="img_bread_2"/>
            </div>
            <div className="flex-initial w-64 ...">
                <div className="shadow-2xl shadow-green-500">
                    <img src="/images/3.jpg" className="rounded-md" alt="logo" />
                </div>
                <div className="py-12 grid grid-cols-1">
                    <button className="btn bg-green-500 shadow-lg shadow-green-500/50 item-center" id="btn_bread_3">Click Here!</button>
                </div>
                <img src="./images/br3.png" alt="" className="hidden" id="img_bread_3"/>
            </div>
            <div className="flex-initial w-64 ...">
                <div className="shadow-2xl shadow-indigo-500">
                    <img src="/images/4.jpg" className="rounded-md" alt="logo" />
                </div>
                <div className="py-12 grid grid-cols-1">
                    <button className="btn bg-indigo-500 shadow-lg shadow-indigo-500/50 item-center" id="btn_bread_4">Click Here!</button>
                </div>                
                <img src="./images/br4.png" alt="" className="hidden" id="img_bread_4"/>
            </div>
            <div className="flex-initial w-64 ...">
                <div className="shadow-2xl shadow-blue-500">
                    <img src="/images/5.jpg" className="rounded-md" alt="logo" />
                </div>
                <div className="py-12 grid grid-cols-1">
                    <button className="btn btn--primary shadow-lg shadow-blue-500/50 item-center" id="btn_bread_5">Click Here!</button>
                </div>
                <img src="./images/br5.png" alt="" className="hidden" id="img_bread_5"/>
            </div>
        </div>
        
    </div>
  );
};

export default Animation_images;
