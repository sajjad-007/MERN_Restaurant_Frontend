import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const BookNow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = async myData => {
    setLoading(true);

    try {
      const { data } = await axios.post(
        'https://mern-restaurant-backend-1j0g.onrender.com/api/v1/reservation/send',
        myData, // ✅ fixed variable name (was 'formDataata')
        {
          headers: {
            'Content-Type': 'application/json', // ✅ correct type for FormData
          },
          withCredentials: true,
        }
      );

      toast.success(data?.message || 'Reservation successful!');
      console.log(data);
      setLoading(false);
      setTimeout(() => {
        navigate('/success');
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Something went wrong.');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="Reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>

            <form onSubmit={handleSubmit(handleBookNow)}>
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  {...register('fullName', {
                    required: 'Full name is required',
                  })}
                />
                {/* {errors.fullName && <p>{errors.fullName.message}</p>} */}
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  {...register('date', { required: 'Date is required' })}
                />
                <input
                  type="time"
                  name="time"
                  {...register('time', { required: 'Time is required' })}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="email_tag"
                  {...register('email', { required: 'Email is required' })}
                />
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  {...register('phoneNumber', {
                    required: 'Phone number is required',
                  })}
                />
              </div>

              {loading ? (
                <button>Please wait..</button>
              ) : (
                <button type="submit">Book Now</button>
              )}
              {/* <button type="submit">Book Now</button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
