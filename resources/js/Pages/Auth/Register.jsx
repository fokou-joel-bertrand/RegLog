import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
  
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        country: '',
        phonenumber: '',
        countrycode: '',
        city: '',
        useraddress: '',
        companyname: '',
        companysize: '',
        compagnyadress: '',
        compagnylogo: '',
        googleid: '',
        facebookid: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
          setLogin(true);
        } else {
          setLogin(false);
        }
      }

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>

            <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                
                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <Button className="ml-4" processing={processing}>
                    <GoogleLogin name="googleid" onSuccess={responseMessage} onError={errorMessage} />
                </Button>  

                <Button className="ml-4" processing={processing}>
                <FacebookLogin
                        appId="562118384400275"
                        name="facebookid"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook" />
                </Button>  


                <div className="mt-4">
                    <Label forInput="firstname" value="First Name" />

                    <Input
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="mt-1 block w-full"
                        autoComplete="firstname"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="lastname" value="Last Name" />

                    <Input
                        type="text"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="country" value="Country" />

                    <Input
                        type="text"
                        name="country"
                        value={data.country}
                        className="mt-1 block w-full"
                        autoComplete="country"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="city" value="City" />

                    <Input
                        type="text"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="phonenumber" value="Phone Number" />

                    <Input
                        type="number"
                        name="phonenumber"
                        value={data.phonenumber}
                        className="mt-1 block w-full"
                        autoComplete="phonenumber"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="useraddress" value="Address" />

                    <Input
                        type="text"
                        name="useraddress"
                        value={data.useraddress}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="companyname" value="Company Name" />

                    <Input
                        type="text"
                        name="companyname"
                        value={data.companyname}
                        className="mt-1 block w-full"
                        autoComplete="companyname"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="companysize" value="Company Size" />

                    <Input
                        type="number"
                        name="companysize"
                        value={data.companysize}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="companyaddress" value="Company Address" />

                    <Input
                        type="text"
                        name="companyaddress"
                        value={data.companyaddress}
                        className="mt-1 block w-full"
                        autoComplete="companyaddress"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="lastname" value="Last Name" />

                    <Input
                        type="lastname"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <FileInput
                    className="w-full pb-8 pr-6 lg:w-1/2"
                    label="Company Logo"
                    name="companylogo"
                    accept="image/*"
                    errors={errors.companylogo}
                    value={data.companylogo}
                    onChange={companylogo => setData('companylogo', companylogo)}
                    />


                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
