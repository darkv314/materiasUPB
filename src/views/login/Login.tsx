import './login.css'
export default function Login() {
    return (
        <div className="login-page">
            <div className="login">
                <h1>Materias</h1>
                <form className="login-form">
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="username">Password</label>
                        <input
                            type="password"
                            id="username"
                            placeholder="Password"
                        />
                    </div>
                </form>
                <button className="login-button">Ingresar</button>
            </div>
        </div>
    );
}
