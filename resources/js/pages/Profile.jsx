import { useEffect, useState } from "react";
import api from "../services/api";

export default function Profile() {

    const [profile, setProfile] =useState({});

    const [showEdit, setShowEdit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [passwordForm, setPasswordForm] = useState({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const fetchProfile = async () => {

        try{

            const response = await api.get("/profile");

            setProfile(response.data);

            setForm({
                name: response.data.name || "",
                email: response.data.email || "",
                phone: response.data.phone || "",
            });

        }catch(error){

            console.error(error);

        }

    };

    useEffect(() => {

        fetchProfile();

    }, []);

    const updateProfile = async () => {

        try{

            await api.put("/profile", form);

            alert("Profile updated successfully.");

            setShowEdit(false);

            fetchProfile();

        }catch(error){

            console.error(error);

            alert("Failed to update profile.");

        }

    };

    const changePassword = async () => {

        try{

            await api.put("/profile/password", passwordForm);

            alert("Password changed successfully.");

            setPasswordForm({
                current_password:"",
                password:"",
                password_confirmation:"",
            });

            setShowPassword(false);

        }catch(error){

            console.error(error);

            alert(error.response?.data?.message || "Failed to change password.");

        }

    };

    return (

        <div className="profile-container">

            <div className="reports-header">
                <h1 className="page-title">My Profile</h1>
            </div>

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
                        <span>{profile.phone}</span>
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
                        <span>
                            {new Date(profile.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                            })}
                        </span>
                    </div>

                    <div className="profile-row">
                        <strong>Updated</strong>
                        <span>
                            {new Date(profile.updated_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                            })}
                        </span>
                    </div>

                </div>

                <div className="profile-buttons">

                    <button
                        className="btn-green"
                        onClick={() => setShowEdit(true)}
                    >
                        Edit Profile
                    </button>

                    <button
                        className="btn-outline"
                        onClick={() => setShowPassword(true)}
                    >
                        Change Password
                    </button>

                </div>

            </div>

            {/* Edit Profile Modal */}

            {showEdit && (

                <div className="modal-overlay">

                    <div className="modal">

                        <div className="modal-header">

                            <h2>Edit Profile</h2>

                            <button
                                className="close-btn"
                                onClick={() => setShowEdit(false)}
                            >
                                ×
                            </button>

                        </div>

                        <div className="modal-body">

                            <div className="form-group">

                                <label>Name</label>

                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e)=>setForm({...form,name:e.target.value})}
                                />

                            </div>

                            <div className="form-group">

                                <label>Email</label>

                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e)=>setForm({...form,email:e.target.value})}
                                />

                            </div>

                            <div className="form-group">

                                <label>Phone</label>

                                <input
                                    type="text"
                                    value={form.phone}
                                    onChange={(e)=>setForm({...form,phone:e.target.value})}
                                />

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="cancel-btn"
                                    onClick={()=>setShowEdit(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                    onClick={updateProfile}
                                >
                                    Save
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* Change Password Modal */}

            {showPassword && (

                <div className="modal-overlay">

                    <div className="modal">

                        <div className="modal-header">

                            <h2>Change Password</h2>

                            <button
                                className="close-btn"
                                onClick={()=>setShowPassword(false)}
                            >
                                ×
                            </button>

                        </div>

                        <div className="modal-body">

                            <div className="form-group">

                                <label>Current Password</label>

                                <input
                                    type="password"
                                    value={passwordForm.current_password}
                                    onChange={(e)=>setPasswordForm({...passwordForm,current_password:e.target.value})}
                                />

                            </div>

                            <div className="form-group">

                                <label>New Password</label>

                                <input
                                    type="password"
                                    value={passwordForm.password}
                                    onChange={(e)=>setPasswordForm({...passwordForm,password:e.target.value})}
                                />

                            </div>

                            <div className="form-group">

                                <label>Confirm Password</label>

                                <input
                                    type="password"
                                    value={passwordForm.password_confirmation}
                                    onChange={(e)=>setPasswordForm({...passwordForm,password_confirmation:e.target.value})}
                                />

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="cancel-btn"
                                    onClick={()=>setShowPassword(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                    onClick={changePassword}
                                >
                                    Change Password
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}