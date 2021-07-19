import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {addUser, usernameChange, roleChange} from "../../store/actions/app";
import { useHistory } from 'react-router-dom';


const Registration = () => {
    let users = useSelector((state) => state.appReducer.users)
    let dispatch = useDispatch()
    const history = useHistory();

    const { handleChange, handleSubmit, values, touched, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(6, 'Password should be longer 6 characters')
                .required(),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            ),
        }),
        // { name: "admin", password: "533533", role: "admin", email: 'admin@mail.ru' }
        onSubmit: (values) => {
            const name = values.firstName
            const email = values.email
            const password = values.password
            let ifIn = users.filter(el => el.email === email)
            if(ifIn.length > 0){
                alert('Такой пользователь есть, порвторите регистрацию с другим ящиком')
            } else {
                dispatch(addUser({ name: name, password: password, role: "user", email: email }))
                dispatch(usernameChange(name))
                dispatch(roleChange('user'))
                history.push('/');
            }
        },
    });

    return (
        <div class="modal_block">
            <form className="modal-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Enter you name</label>
                <input
                    id="user_name"
                    name="firstName"
                    type="name"
                    minlength="6"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.firstName}
                />
                <label htmlFor="surname">Enter you surname</label>
                <input
                    id="user_surname"
                    name="lastName"
                    type="name"
                    minlength="6"
                    placeholder="Surname"
                    onChange={handleChange}
                    value={values.lastName}
                />
                <label htmlFor="password">Enter you password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={values.password}
                />
                {touched.password && errors.password ? <p>{errors.password}</p> : null}
                <label htmlFor="password">Confirm password</label>
                <input
                    id="confirm_password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                    <p className={'error'}>{errors.confirmPassword}</p>
                )}

                <span className="confirm"></span>
                <label htmlFor="mail">Enter you email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="email"
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email ? <div>{errors.email}</div> : null}
                <input
                    id="submit"
                    className="btn-input"
                    type="submit"
                    value="Sing Up"
                />
                <input className="btn-input" type="reset" value="Clear" />
            </form>
        </div>
    );
};

export default Registration;
