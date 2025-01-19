import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ResetPassword.css'; // Add this CSS for styling

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = () => {
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Reset password logic
        console.log("Password reset successfully!");
        navigate("/");
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Check password strength
        if (newPassword.length < 6) {
            setPasswordStrength("Weak");
        } else if (newPassword.length < 10) {
            setPasswordStrength("Medium");
        } else {
            setPasswordStrength("Strong");
        }
    };

    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        }}>
            <div className="reset-password-container">
                <h2 className="reset-password-title">Reset Password</h2>
                {error && <p className="error-message">{error}</p>}

                <div className="input-group">
                    <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input-field"
                    />
                    <p className={`password-strength ${passwordStrength.toLowerCase()}`}>
                        {passwordStrength && `Strength: ${passwordStrength}`}
                    </p>
                </div>

                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input-field"
                    />
                </div>

                <button onClick={handleResetPassword} className="reset-btn">
                    Reset Password
                </button>
            </div>
        </div>
    );
};

export default ResetPassword;
