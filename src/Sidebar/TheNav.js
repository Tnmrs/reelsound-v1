import {
  HomeIcon,
  SearchIcon,
  ViewBoardsIcon,
  PlusCircleIcon,
  HeartIcon,
} from '@heroicons/react/outline';

function TheNav() {
  return (
    <nav>
      <a
        href="."
        className="flex items-center text-white bg-gradient-to-l from-[#24d465] to-[#3b82f6] mx-2 px-4 py-2 rounded">
        <HomeIcon className="h-6 w-6" />

        <span className="ml-4 text-sm font-semibold">Home</span>
      </a>

      {/* Search */}
      <a
        href="."
        className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300">
        <SearchIcon className="h-6 w-6" />

        <span className="ml-4 text-sm font-semibold">Search</span>
      </a>
      {/* Your Library */}
      <a
        href="."
        className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300 mb-6">
        <ViewBoardsIcon className="h-6 w-6" />

        <span className="ml-4 text-sm font-semibold">Your Library</span>
      </a>

      {/* Create Playlist */}
      <a
        href="."
        className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300">
        <PlusCircleIcon className="h-6 w-6" />

        <span className="ml-4 text-sm font-semibold">Create Playlist</span>
      </a>

      {/* Favorited Songs  */}
      <a
        href="."
        className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300">
        <HeartIcon className="h-6 w-6" />

        <span className="ml-4 text-sm font-semibold">Favorited Songs</span>
      </a>
    </nav>
  );
}

export default TheNav;
