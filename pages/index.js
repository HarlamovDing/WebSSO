import Button from '../src/components/Button';
import Checkbox from '../src/components/Checkbox';
import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function QRCode() {
  const [timer, setTimer] = useState(299);

  useEffect(() => {
    const i = setInterval(function (){
      if(timer > 0) {
        setTimer(timer - 1)
      }
    }, 1000)

    return () => clearInterval(i)
  }, [timer])

  return(
    <div className="content">
      <div className="content__header">
        <h2>Login by QR-Code</h2>
        <p className="description description--gray">With Defispace App</p>
      </div>

      <div className="content__code">
        <div className="content__code-left">
          <p className="description">
            Scan the QR code in the <a target={"_blank"} href="https://play.google.com/store/games?hl=ru&gl=US">Defispace App</a>
          </p>

          <Checkbox id="remember-me" label="Remember me"/>
          <p>Code expiration date: {
            Math.floor(timer / 60) + ':' +
            ((Math.floor(timer - Math.floor(timer / 60) * 60) < 10) ?
              ('0' + Math.floor(timer - Math.floor(timer / 60) * 60)) :
              (Math.floor(timer - Math.floor(timer / 60) * 60)))
          }
          </p>


          <div className="markets">
            <div className="markets__item">
              <a target={"_blank"} href="https://play.google.com/store/games?hl=ru&gl=US">
                <div className="markets__item-image">
                  <Image width={"28"} height={"28"} src={"/google.svg"}></Image>
                </div>
                <div className="markets__item-content">
                  <span>Free download</span>
                  <h5>Google Play</h5>
                </div>
              </a>
            </div>
            <div className="markets__item">
              <a target={"_blank"} href="https://www.apple.com/ru/app-store/">
                <div className="markets__item-image">
                  <Image width={"28"} height={"28"} src={"/apple.svg"}></Image>
                </div>
                <div className="markets__item-content">
                  <span>Free download</span>
                  <h5>App Store</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="content__code-right">
          <Image className="qrCode" width={"380px"} height={"380px"} src={'/QRCode.svg'} ></Image>
        </div>
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
        </ul>
      </div>

      <div className="content__footer">
        <div className="content__footer-divider">
          <span>or</span>
        </div>
        <div className="content__footer-btns">
          <div className="content__footer-btn">
            <Link href="/account-login"
            >
              <a className="btn btn--image btn--white">
                <Image width={26} height={26} src={'/view.svg'}/>
                Login with account
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
