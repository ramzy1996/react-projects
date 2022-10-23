import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate totam, consequuntur itaque aspernatur in error temporibus deleniti vero doloribus, dignissimos esse, laboriosam voluptas soluta. Perferendis hic ipsam beatae ex.
                    </p>
                    <span>Dont you have an account?</span>
                    <Link to={'/register'}>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form autoComplete='off'>
                        <input type="text" placeholder='UserName' />
                        <input type="password" placeholder='Password' />
                        <button >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login