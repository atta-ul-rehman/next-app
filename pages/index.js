import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/usersSlice";
export default function Home({ me }) {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("me", me.data);
    if (me.success) {
      dispatch(addUser(me.data));
    }
  }, []);
  let paymentConfig = {
    // pgUrl:
    //   "https://jazzcash.com.pk/CustomerPortal/TransactionManagement/DoTransactionViaSDK/",
    // Merchant specific payment gateway base url
    hmacSalt: "0123456789", // HMAC hash key
    merchantId: "TestRafayKhan7", //Merchant id
    subMerchantId: "TestMerc0005", //Sub Merchant id [Optional]
    merchantPassword: "0123456789", //Merchant password
    transactionRefNumber: "T20170307171825", //Transaction reference number
    amount: "875045", //Transaction amount (Format: 875045 for Rs. 8,750.45)
    discountedAmount: "765045", //Discounted amount (Format: 765045 for Rs. 7,650.45) [Optional]
    discountedBank: "765045", //Discount bank [Optional]
    transactionDateTime: "20170302112731", //Transaction date time (Format: YYYYMMddHHmmss)
    invoiceRefNumber: "INV4455454", //Invoice number
    description: "iPhone 7 Plus - 32GB", //Transaction description
    expiryDateTime: "20170309112731", //Transaction expiry date time (Format: YYYYMMddHHmmss)
  };
  // https://sandbox.jazzcash.com.pk/Customer Portal/transactionmanagement/merchantform/
  const getJazCash = async () => {
    await fetch(
      "https://jazzcash.com.pk/CustomerPortal/TransactionManagement/DoTransactionViaSDK/",
      {
        method: "POST",

        body: JSON.stringify(paymentConfig),
      }
    )
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.warn(err));
  };
  return (
    <div>
      <Head>
        <title>CodeCommerce.com </title>
        <meta name="description" content="Ecommerce App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="/freestocks-_3Q3tsJ01nc-unsplash.jpg"
        alt=""
        height={1300}
        width={3000}
        objectFit="cover"
      />

      <div className="-rotate-12">
        <button
          onClick={getJazCash}
          className="flex text-yellow-400 font-bold items-center text-lg"
        >
          <span className="px-0.5 py-1 bg-red-600 rounded-full items-center mx-1">
            Jazz
          </span>{" "}
          Cash
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const head = context.req.cookies.authToken2;
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth2/getMe`, {
    headers: {
      cookies: head,
    },
  });
  const json = await resp.json();
  return { props: { me: json } };
}
