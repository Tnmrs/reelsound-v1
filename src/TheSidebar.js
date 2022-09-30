import TheFooter from './Sidebar/TheFooter';
import TheLogo from './Sidebar/TheLogo';
import TheNav from './Sidebar/TheNav';
function TheSidebar() {
  return (
    <aside
      id="sidebar"
      className="bg-[#24d465]  w-[256px] text-[#ffffffd3] overflow-hidden flex flex-col fixed lg:sticky 
    top-0 z-30 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer">
      {/* Logo  */}
      <TheLogo />
      <TheNav />
      <TheFooter />
    </aside>
  );
}

export default TheSidebar;
