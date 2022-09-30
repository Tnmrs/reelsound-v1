import React from 'react';
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar';
import TheMain from './TheMain';
import TheRegistration from './TheRegistration';
import TheSidebarOverlay from './TheSidebarOverlay';
function App() {
  return (
    <>
      {/* Sidebar */}

      <div className="flex flex-grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />

        <div className="flex-1 overflow-auto">
          <TheHeader />
          <TheMain />
        </div>
      </div>

      {/* footer */}

      <TheRegistration />
    </>
  );
}

export default App;
