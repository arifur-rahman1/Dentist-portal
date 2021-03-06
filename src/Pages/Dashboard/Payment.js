import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`;

    // using react query for see payment 
    // used array for multiple booking id 
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success text-xl font-bold'>Hello {appointment.patintName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>We will see you at {appointment.date} on {appointment.slot}</p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;