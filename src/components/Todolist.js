import React from 'react';
import AddNewItem from './AddNewItem';
import Header from './Header';
import ItemList from './ItemList';
import UpdateInput from './UpdateInput';

const Todolist = () => {
    return (<>
        <div className='container position-relative'>
            <div
                className='row'
                style={{
                    height: '100vh',
                    zIndex: '1'
                }}
            >
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                    mx-auto my-auto border rounded shadow'>
                    {/* Header Component */}
                    <Header />
                    {/* Add New Item Component */}
                    <AddNewItem />
                    {/* Item List Component */}
                    <ItemList />
                </div>
            </div>
            {/* Update Input Component */}
            <UpdateInput />
        </div>
    </>)
}

export default Todolist;