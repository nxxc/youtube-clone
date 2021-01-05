import React from 'react';

export default function Main() {
  return (
    <header className='flex bg-black justify-around items-center min-w-full h-16 '>
      <a href='/' className='absolute left-4'>
        <img src='images/logo.png' alt='로고' />
      </a>
      <div className='flex w-1/2 '>
        <input
          type='text'
          placeholder='검색어를 입력해 주세요'
          className='w-3/4 h-8 pl-4 focus:outline-none rounded-l-md'
        />
        <button className='w-16 h-8 bg-gray-500 hover:cursor-pointer hover:bg-gray-700 focus:outline-none rounded-r-md'>
          <img src='images/search.png' alt='' className='w-6 h-6 mx-auto' />
        </button>
      </div>
    </header>
  );
}
