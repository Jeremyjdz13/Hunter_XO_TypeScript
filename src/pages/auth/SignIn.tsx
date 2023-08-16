import { useState, useRef } from 'react';
import { useAuth } from '../../api/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { signInSignUpStyles } from '../../styles/AuthStyles';

export function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        setError('');
        setLoading(true);
        await signIn(emailRef.current.value, passwordRef.current.value);
        navigate('/*');
      
        
      } catch {
        setError('Failed to log in');
      }

      setLoading(false);
    }
  }


  return (
    <div style={signInSignUpStyles.container}>
        <div className="anotherDanger" style={signInSignUpStyles.title}>Sign In</div>
        {error && <div>{error}</div>}
        <form style={signInSignUpStyles.formContainer} onSubmit={handleSubmit}>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="email" style={signInSignUpStyles.label}>Email</label>
                <input type="email" id="email" ref={emailRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="password" style={signInSignUpStyles.label}>Password</label>
                <input type="password" id="password" ref={passwordRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.buttonContainer}>
                <button disabled={loading} type="submit">
                Sign In
                </button>
            </div>
          
        </form>
        <div style={signInSignUpStyles.linkContainer}>
            <Link className="anotherDanger" style={signInSignUpStyles.links} to="/auth/forgotPassword">Forgot Password?</Link>
        </div>
        <div style={signInSignUpStyles.linkContainer}>
            Need an account? <Link className="anotherDanger" style={signInSignUpStyles.links} to="/auth/signUp">Sign Up</Link>
        </div>
    </div>
  );
}
