import { useEffect, useState } from "react";
import api from "../services/api";

export default function Profile() {

    const [profile, setProfile] = useState({});

    useEffect(() => {

        api.get("/profile")
            .then((response) => {

                setProfile(response.data);

            })
            .catch((error) => {

                console.error(error);

            });

    }, []);

    return (

        <div className="profile-container">

            <h1 className="page-title">My Profile</h1>

            <div className="profile-card">

                <div className="profile-header">

                    <div className="avatar">

                        {profile.name
                            ? profile.name.charAt(0).toUpperCase()
                            : "U"}

                    </div>

                    <h2>{profile.name}</h2>

                    <p>{profile.role}</p>

                </div>

                <hr />

                <div className="profile-section">

                    <h3>Personal Information</h3>

                    <div className="profile-row">
                        <strong>Name</strong>
                        <span>{profile.name}</span>
                    </div>

                    <div className="profile-row">
                        <strong>Email</strong>
                        <span>{profile.email}</span>
                    </div>

                    <div className="profile-row">
                        <strong>Phone</strong>
                        <span>{profile.phone_number}</span>
                    </div>

                    <div className="profile-row">
                        <strong>Role</strong>
                        <span>{profile.role}</span>
                    </div>

                    <div className="profile-row">
                        <strong>Barangay</strong>
                        <span>{profile.barangay}</span>
                    </div>

                </div>

                <hr />

                <div className="profile-section">

                    <h3>Account</h3>

                    <div className="profile-row">
                        <strong>Password</strong>
                        <span>••••••••</span>
                    </div>

                    <div className="profile-row">
                        <strong>Created</strong>
                        <span>{profile.created_at}</span>
                    </div>

                    <div className="profile-row">
                        <strong>Updated</strong>
                        <span>{profile.updated_at}</span>
                    </div>

                </div>

                <div className="profile-buttons">

                    <button className="btn-green">
                        Edit Profile
                    </button>

                    <button className="btn-outline">
                        Change Password
                    </button>

                </div>

            </div>

        </div>

    );

}