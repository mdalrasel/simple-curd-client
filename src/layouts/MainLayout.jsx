
import Header from '../compopnents/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
         <div className='text-center'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;