import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/UserContext';

const ForgotPassword = () => {
    const { userPasswordReset } = useContext(AuthContext);

    const handlePasswordReset = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        userPasswordReset(email)
            .then(() => {
                toast.success('Password Reset link Successfully sent to your email');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className='flex justify-center items-center w-full pt-10'>
            <div className="flex flex-col max-w-lg p-6 rounded-md sm:py-8 sm:px-10 bg-gray-100 text-gray-900 shadow-xl border border-t-4 border-amber-400">
                <div className="mb-6 text-center">
                    <h1 className="my-3 text-4xl font-bold">Forgot Password</h1>
                    <p className="text-sm dark:text-gray-400">Please Insert your email</p>
                </div>
                <form onSubmit={handlePasswordReset} className="space-y-4">
                    <div className="space-y-4">
                        <div className='w-full'>
                            <label htmlFor="email" className="block w-full mb-3 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-3 border-gray-300 rounded-md focus:border-gray-900 bg-gray-200 text-gray-900" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-900 dark:text-gray-200">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;