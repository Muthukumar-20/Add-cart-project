import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Homepage from './Homepage';


const Addcart = (props) => {

    const [data, setdata] = useState([]);
    const [isPresent, setisPresent] = useState(false);
    let [totalQuantity, setTotalQuantity] = useState(0)
    const [subtotal, setSubtotal] = useState(0)


    useEffect(() => {
        const addKeyValue = () => {
            const foundItem = data.find(item => item.id === props.id);

            if (foundItem) {
                alert("Product is aldrady added 😄");
                setisPresent(true);
            }
            else if (props.id) {
                setisPresent(false);
                setdata(prevData => [...prevData, {
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    image: props.image,
                    totalPrice: props.price,
                    quantity: 1

                }]);
            }
        };

        addKeyValue();
        // identifyquantity();


    }, [props.id, props.title, props.price, props.image,]);

    function updatequantuity(newQuantity, itemid) {
        let updatedData = data.map((object) => {
            if (object.id === itemid) {
                return {
                    ...object, quantity: newQuantity,
                    totalPrice: (object.price * newQuantity)
                };
            }
            return object;
        })

        setdata(updatedData);


    }


    function incrementquan(itemid) {
        const targetObject = data.find(object => object.id === itemid)

        let newQuantity = targetObject.quantity + 1
        updatequantuity(newQuantity, itemid)

    }
    function decrementquan(itemid) {
        const targetObject = data.find(object => object.id === itemid)
        if (targetObject.quantity > 1) {
            let newQuantity = targetObject.quantity - 1
            updatequantuity(newQuantity, itemid)
        }

    }
    // create increment and decrement functionality for product quantity 

    useEffect(() => {
        // console.log(data);// Logs the updated data

        setTotalQuantity(data.reduce((acc, item) => acc + item.quantity, 0));
        setSubtotal(data.reduce((acc, item) => acc + item.totalPrice, 0));
    }, [data]);

    props.Addcartquantity(totalQuantity)

    function deletingarray(reciveId) {
        setdata(data.filter((item) => item.id !== reciveId));
    }

    return (
        <>
            <div className='Addcart fixed z-20 w-96 h-[100vh] right-0 invisible border border-black bg-white overflow-scroll'>
                <div className='border border-black w-96 h-10 text-center font-semibold'>
                    <p>Suptotal: <span>{subtotal}</span></p>

                </div>

                {data.map((item, index) => (
                    // Terrionery operatitor
                    // Conditions
                    item.id && item.title && item.image && item.price ? (

                        // expression 1
                        <div key={index} className=''>
                            <div className='grid m-2 gap-4 '>
                                <div className="shadow-xl h-32">

                                    <p className='flex gap-6'>

                                        <img src={item.image} class="h-28 w-28" alt="" />
                                        <div>
                                            <p>{item.title}</p>

                                            <p className='flex justify-center '>
                                                <p className='text-xl text-green-700'>${item.totalPrice}</p>
                                            </p>
                                            <div className='flex justify-center mt-2 gap-4'>


                                                <button className='border border-black bg-gray-300 rounded-xl w-14  active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'
                                                    onClick={() => {
                                                        decrementquan(item.id)
                                                    }}

                                                >-</button>
                                                <p>{item.quantity}</p>
                                                <button className='border border-black bg-gray-300 rounded-xl w-14 active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'
                                                    onClick={() => {
                                                        incrementquan(item.id)

                                                    }}
                                                >+</button>
                                                <span class="material-symbols-outlined cursor-pointer" onClick={() => {
                                                    deletingarray(item.id)
                                                }}>
                                                    delete

                                                </span>

                                            </div>
                                        </div>
                                    </p>
                                </div>


                            </div>


                        </div>

                    ) : null
                    // exprssion 2
                ))}

            </div>



        </>
    )
}

export default Addcart;

