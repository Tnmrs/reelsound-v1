import TheRegistrationButton from './Sidebar/registration/TheRegistrationButton';
import TheRegistrationInfo from './Sidebar/registration/TheRegistrationInfo';

function TheRegistration() {
  return (
    <a
      href="/"
      className="bg-gradient-to-l from-[#4ade80] to-[#3b82f6] text-white py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2">
      <TheRegistrationInfo />
      <TheRegistrationButton />
    </a>
  );
}

export default TheRegistration;
