import Header from './Header';
import Footer from './Footer';
function Admin() {
  return (
    <div>
      <Header />
      <div className='flex h-80'>
        <div className='flex-auto bg-garden1'>내용1</div>
        <div className='flex-auto w-80 bg-garden4'>내용2</div>
      </div>
      <Footer />
    </div>
  );
}
export default Admin;
