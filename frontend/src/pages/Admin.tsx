import Header from '../components/Header';
import Footer from '../components/Footer';
import TestBody from '../components/TestBody';
function Admin() {
  return (
    <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
      <Header />
      <div className="grid mt-32 mb-[92px] col-span-full row-span-6 sm:mb-[72px] ">
        <TestBody title="Admin" />
      </div>
      <Footer />
    </div>
  );
}
export default Admin;
