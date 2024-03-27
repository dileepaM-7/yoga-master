import React, { useEffect, useState } from 'react'
import useAxiosFetch from './hooks/useAxiosFetch';
import img from './assets/home/girl.jpg';

const PopularTecher = () => {
    const [instrucotors, setInstructors] = useState([]);
    const axiosFetch = useAxiosFetch();
    useEffect(() => {
        axiosFetch.get('/popular-instructors').then((data) =>{
            setInstructors(data.data);
        }).catch((err) => {console.log(err)})
    },[]);

  return (
    <div className='md:w-[80%] mx-auto my-36'>
        <div>
            <h1 className='text-5xl font-bold text-center'> Our <span className='text-secondary'>Best</span> Instructors</h1>
            <div className='w-[40%] text-center mx-auto my-4'>
                <p className='text-gray-500'>
                    Explore our Best instructors. Here are some Best Instructors who are registered for us!
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    instrucotors ? <>
                    <div>
                        {
                            instrucotors?.map((instructor, i) => (
                                <div>
                                    <div className=''>
                                        <img className='rounded-full border-4 border-gray-300 h-24 w-24 mx-auto' src={instructor?.instructor?.photoUrl || `${img}`} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    </> : <>

                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default PopularTecher
