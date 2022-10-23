import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Zonet Social</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate totam, consequuntur itaque aspernatur in error temporibus deleniti vero doloribus, dignissimos esse, laboriosam voluptas soluta. Perferendis hic ipsam beatae ex.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to={'/login'}>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form autoComplete='off'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='UserName' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button >Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register