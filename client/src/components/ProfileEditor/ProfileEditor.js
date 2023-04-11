import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { EDIT_USER } from '../../utils/mutations';

const EditUserProfile = ({ userId }) => {
    const { loading, error, data } = useQuery(QUERY_USER, {
        variables: { userId },
    });

    const [editUser, { loading: updateLoading, error: updateError }] = useMutation(
        EDIT_USER
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
        wq
        try {
            await editUser({
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
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
                    name="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Input your old password to confirm changes"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New Password"
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
                <button type="submit" disabled={updateLoading}>
                    Save Changes
                </button>
            </form>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to update your profile?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditUserProfile;