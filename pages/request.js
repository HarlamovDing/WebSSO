import Image from 'next/image';
import Link from 'next/link';

export default function Request(props) {
  return(
    <div className="content">
      <div className="content__header">
        <h1>Okko</h1>
      </div>

      <div className="content__request">
        <div className="content__request-left">
          <h4>Requests access to your data</h4>
          <p className="description">
            An application is requesting limited access to your data
          </p>

          <div className="list mt-20 mb-20">
            <span>List of requested data</span>
            <p>FIO, Birthday</p>
          </div>


          <div className="notice mb-20">
            The application will not have full access to your data, we will return only the answers to their questions
          </div>


        </div>
        <div className="content__request-right">
          <div className="content__request--logo">
            <Image width={"82px"} height="82px" src={"/Okko.svg"}></Image>
          </div>
        </div>
      </div>

      <div className="content__btns">
        <Link href="/sucess"
        >
          <a className="btn btn--image btn--orange">
            <Image width={26} height={26} src={'/send.svg'}/>
            Send and check
          </a>
        </Link>
        <Link href="/"
        >
          <a className="btn btn--image btn--white mt-10">
            <Image width={26} height={26} src={'/back.svg'}/>
            Deny access and back
          </a>
        </Link>
      </div>
    </div>
  )
}