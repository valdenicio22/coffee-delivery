import { Asterisk } from '@phosphor-icons/react'

export function ProductCardSkeleton() {
  return (
    <div className="border-gray-500 shadow productCard animate-pulse w-[16.5rem] h-[19.3rem]">
      <div className="flex flex-col items-center">
        <Asterisk
          weight="fill"
          className="text-base-button mb-3 -mt-5 w-[7.5rem] h-[7.5rem] "
        />
        <div className="w-16 h-3 bg-gray-400 cardRounded" />
      </div>

      <div className="flex flex-col items-center mt-4 mb-8">
        <div className="h-6 bg-gray-400 rounded-md w-[12rem]" />
        <div className="h-3 bg-gray-400 rounded-full w-[13rem] mt-2" />
        <div className="h-3 bg-gray-400 rounded-full w-[13rem] mt-1" />
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gray-400 rounded-md mt-1 " />
          <div className="bg-gray-400 rounded-md h-7 w-7" />
        </div>

        <div className="w-[7.5rem] flex items-center gap-2">
          <div className="h-7 bg-gray-400 rounded-md w-[4.5rem]" />
          <div className="w-8 bg-gray-400 rounded-md h-7" />
        </div>
      </div>
    </div>
  )
}
