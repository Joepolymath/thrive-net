'use client';
import {
  MagnifyingGlassCircleIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const Tweetbox = () => {
  const [post, setPost] = useState<string>('');
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 mt-4 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt="profile-image"
      />

      <div className="flex flex-1 items-center pl-2">
        <form action="" className="flex flex-1 flex-col">
          <input
            type="text"
            name="post"
            id="post"
            placeholder="Update your community"
            className="h-24 outline-none w-full text-xs placeholder:text-xs md:text-xl md:placeholder:text-xl"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <div className="flex items-center">
            <div className="flex space-x-2 text-red-600 flex-1">
              <PhotoIcon className="h-5 w-5 transition-transform duration-150 cursor-pointer ease-out hover:scale-150" />
              <MagnifyingGlassCircleIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!post}
              className="bg-red-600 px-5 py-2 text-white rounded-full font-bold disabled:opacity-40"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tweetbox;
