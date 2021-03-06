import Button from '../src/components/Button';
import Checkbox from '../src/components/Checkbox';
import Input from '../src/components/Input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function AccountLogin() {
  const router = useRouter();
  const [form, setForm] = useState(null);
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }

  const handleSignIn = (e) => {
    e.preventDefault();

    if(form?.phone.toString().slice(-1) !== '_' && form?.phone) {
      setError(false)
      router.push('/push-notification')
    } else {
      setError(true)
    }
  }

  return(
    <div className="content">
      <div className="content__header">
        <h2>Login by Account</h2>
        <p className="description description--gray">With phone number</p>
      </div>

      <div className="content__form">
        <Input error={error} onChange={(e) => handleOnChange(e)} value={form?.phone} type={'phone'} name="phone" label={'Enter Phone Number'} placeholder={"+0 (000) 000-00-00"}/>
        <Link href="/push-notification"
        >
          <a onClick={(e) => handleSignIn(e)}
             className='btn btn--image btn--orange mt-10'
          >
            <Image width={28} height={28} src={'/sign-in.svg'}/>
            Sign In
          </a>
        </Link>

        <Checkbox id="remember-me" label="Remember me"/>
      </div>

      <div className="content__links">
        <ul>
          <li>
            <Link href={"/sign-up"}>
              <a>
                Sign Up
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/sign-up"}>
              <a>
                Can't sign in
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="content__footer">
        <div className="content__footer-divider">
          <span>or</span>
        </div>
        <div className="content__footer-btns">
          <div className="content__footer-btn">
            <Link href="/"
            >
              <a className="btn btn--image btn--white">
                <Image width={28} height={28} src={'/code.svg'}/>
                By QR-code
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}