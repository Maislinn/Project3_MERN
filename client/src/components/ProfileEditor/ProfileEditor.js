import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { UPDATE_PROFILE } from '../../utils/mutations';

const EditUserProfile = ({ userId }) => {
    const { loading, error, data } = useQuery(QUERY_USER, {
        variables: { userId },
    });

    const [updateUserProfile, { loading: updateLoading, error: updateError }] = useMutation(
        UPDATE_PROFILE
    );
    const [showModal, setShowModal] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        if (data && data.user) {
            setFirstName(data.user.firstName);
            setLastName(data.user.lastName);
            setEmail(data.user.email);
            setPassword('');
            setLocation(data.user.location);
            setAvatar(data.user.avatar);
        }
    }, [data]);

    const handleConfirmUpdate = async () => {
        try {
            await updateUserProfile({
                variables: {
                    userId,
                    profile: {
                        firstName,
                        lastName,
                        email,
                        oldPassword,
                        newPassword: password,
                        location,
                        avatar,
                    },
                },
            });
            console.log('Changes saved!');
            setShowModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({
                variables: {
                    userId,
                    profile: {
                        firstName,
                        lastName,
                        email,
                        password,
                        location,
                        avatar,
                    },
                },
            });
            console.log('Profile updated!');
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user data</p>;

    return (
        <div className="edit-user-profile">
            <h1>Edit User Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    minLength="5"
                    required
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                />
                <input
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    placeholder="Avatar URL"
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default EditUserProfile;