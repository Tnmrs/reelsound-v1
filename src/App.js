import React, { useEffect, useRef } from 'react';
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar';
import TheMain from './TheMain';
import TheRegistration from './TheRegistration';
import TheSidebarOverlay from './TheSidebarOverlay';
function App() {
  const contentWrapperRef = useRef(null);
  let isScrollingEnabled = true;

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;

    event.preventDefault();
    event.stopPropagation();
  }

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;
    contentWrapper.addEventListener('wheel', handleScrolling);

    return () => contentWrapper.removeEventListener('wheel', handleScrolling);
  });
  return (
    <>
      {/* Sidebar */}

      <div className="flex flex-grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />

        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
          <TheMain toggleScrolling={toggleScrolling} />
        </div>
      </div>

      {/* footer */}

      <TheRegistration />
    </>
  );
}

export default App;
