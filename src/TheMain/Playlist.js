import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistContextMenu from './PlaylistContextMenu';
import PlaylistCover from './PlaylistCover';
import PlaylistDescription from './PlaylistDescription';
import PlaylistTitle from './PlaylistTitle';

const menuItems = [
  {
    label: 'Add to Your Library',
  },

  {
    label: 'Share',

    subMenuItems: [
      {
        label: 'Copy link to playlist',
      },

      {
        label: 'Embed playlist',
      },
    ],
  },

  {
    label: 'About recommendations',
  },

  {
    label: 'Open in Desktop app',
  },
];

const clickPosition = { x: null, y: null };

function Playlist({ classes, coverUrl, title, description, toggleScrolling }) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const contextMenuRef = useRef(null);

  const bgClasses = isContextMenuOpen ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]';

  function updateContextMenuVerticalPosition() {
    const menuHeight = contextMenuRef.current.offsetsHeight;
    const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;

    contextMenuRef.current.style.top = shouldMoveUp
      ? `${clickPosition.y - menuHeight}px`
      : `${clickPosition.y}px`;
  }

  function updateContextMenuHorizontalPosition() {
    const menuWidth = contextMenuRef.current.offsetsWidth;
    const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;

    contextMenuRef.current.style.left = shouldMoveLeft
      ? `${clickPosition.x - menuWidth}px`
      : `${clickPosition.x}px`;
  }

  function updateContextMenuPosition() {
    updateContextMenuVerticalPosition();
    updateContextMenuHorizontalPosition();
  }

  useLayoutEffect(() => {
    toggleScrolling(!isContextMenuOpen);
    if (isContextMenuOpen) {
      updateContextMenuPosition();
    }
  });

  useEffect(() => {
    if (!isContextMenuOpen) return;

    function handleClickAway(event) {
      if (!contextMenuRef.current.contains(event.target)) {
        closeContextMenu();
      }
    }

    function handleEsc(event) {
      if (event.keyCode === 27) {
        closeContextMenu();
      }
    }

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('keydown', handleEsc);
    };
  });

  /* Открытие меню */
  function openContextMenu(event) {
    event.preventDefault();

    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;

    setIsContextMenuOpen(true);
  }

  function closeContextMenu() {
    setIsContextMenuOpen(false);
  }
  return (
    <a
      href="/"
      className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
      onClick={(event) => event.preventDefault()}
      onContextMenu={openContextMenu}>
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {isContextMenuOpen && (
        <PlaylistContextMenu
          ref={contextMenuRef}
          menuItems={menuItems}
          classes="fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 "
        />
      )}
    </a>
  );
}

export default Playlist;
