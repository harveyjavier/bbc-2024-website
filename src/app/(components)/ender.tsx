import * as React from "react";

function Ender() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col self-center max-w-full w-[450px] mt-20 items-center">
        <div className="text-4xl font-semibold text-amber-300 max-md:max-w-full">
          OUR EVENT PARTNERS
        </div>
        <div className="flex items-center w-full max-md:max-w-full">
          <div className="flex shrink-0 self-stretch my-auto h-2.5 bg-zinc-500 w-[225px]" />
          <div className="flex shrink-0 self-stretch my-auto h-2.5 bg-neutral-800 w-[225px]" />
        </div>
      </div>
      <div className="flex gap-2.5 justify-center items-center px-28 py-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full bg-gray-100">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[1219px]">
          <div className="flex flex-col pr-12 pl-12 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col self-center max-w-full text-4xl font-medium text-center text-black whitespace-nowrap w-[500px]">
              <div className="max-md:max-w-full">Presenters</div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1417a1e27bdf45fff6a73db7ddddc4a3c8c5ba64cfdaa83f89146fcb8d7af?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                className="object-contain mt-5 w-full aspect-[1.07] max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="text-4xl font-medium text-center text-black max-md:max-w-full">
                  Gold
                </div>
                <div className="flex flex-wrap gap-10 items-end mt-16 w-full max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d6922a367cc91fb550ce7b3ce56d9a4be7dae57b456db9140ca9d543552fa07?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                    className="object-contain grow shrink aspect-[1.52] min-w-[240px] w-[420px] max-md:max-w-full"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f12163b8f08339be971adf3de389e6e7a3c00162545ecaebc1fd767c71d4ea92?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                    className="object-contain grow shrink w-80 aspect-[1.16] min-w-[240px]"
                  />
                </div>
              </div>
              <div className="flex flex-col px-24 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-medium text-center text-black max-md:max-w-full">
                  Supported By
                </div>
                <div className="flex flex-wrap gap-10 items-center mt-24 w-full max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                    className="object-contain grow shrink self-stretch my-auto aspect-[1.05] min-w-[240px] w-[280px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e1315bc961d2a43518cf4414439f6d3d4d9c7cd6b7ab7e435e113274e9b4756?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                    className="object-contain grow shrink self-stretch my-auto aspect-[1.05] min-w-[240px] w-[280px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-6 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="text-4xl font-medium text-center text-black max-md:max-w-full">
                Media
              </div>
              <div className="flex flex-wrap gap-10 items-center mt-14 w-full max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c5f2a1db0f6d92d8868741fa1eed466f3ddbbba1f3067c5f3974ee4d5f9bb4e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[200px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c62bced864d8477a360f5e860b666cb369825b34c16d9fbc10f8494827c1714e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                  className="object-contain self-stretch my-auto aspect-[3.23] min-w-[240px] w-[300px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/043326b795e7924fe90a98b6f816e0efc1edacc5ba7da3aa66e483356d296d89?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[3.13] min-w-[240px] w-[250px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f01b0e3afca22602d053d89d94063f48c51b1db2d12415198c32ddd0fe5019df?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                  className="object-contain flex-1 shrink self-stretch my-auto aspect-[7.14] basis-0 w-[200px]"
                />
              </div>
            </div>
            <div className="flex flex-col self-center mt-14 max-w-full w-[611px] max-md:mt-10">
              <div className="flex flex-col self-center max-w-full text-4xl font-medium text-center text-black whitespace-nowrap w-[225px]">
                <div>Community</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d0f5da95859e21df167dc7be82386ab15c0fecac56c314c03722482cf369606?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                  className="object-contain mt-4 w-full aspect-square"
                />
              </div>
              <div className="flex flex-col mt-9 w-full max-md:max-w-full">
                <div className="text-4xl font-medium text-center text-black max-md:max-w-full">
                  Community
                </div>
                <div className="flex flex-wrap gap-10 justify-between items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8908bdb6ecfba61e58031eefcc30033ab86be48045c84c9493b06d6cfe098b?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                    className="object-contain shrink-0 aspect-[1.14] w-[200px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2114cf8483edce0f2c5026c9b289dc875c1a0c6551b069f4d9829d982b3534ba?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                    className="object-contain shrink-0 aspect-[0.79] w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ender;