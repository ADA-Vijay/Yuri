import React from "react";
import styles from "@/app/page.module.css";
import Container from "react-bootstrap/Container";
import { notFound } from "next/navigation";
import BreadCrumb from "@/components/breadCrumb/breadCrumb";
async function getData(productName) {
  const ApiUrl = "https://yuri-api.alphadigitall.com/api/Product/GetByName/";
  try {
    const response = await fetch(ApiUrl + productName,
      {
        next: { revalidate: 180 },
      }
    );
    const data = await response.json();
    return data ? data : null;
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}

export async function generateMetadata({ params }) {
  const data = await getData(params.productName);
  if (data && data.resp) {
    return {
      title: data.respObj.name,
      description: data.respObj.description,
      keywords: ['Next.js', 'React', 'JavaScript'],
      openGraph: {
        title: data.respObj.name,
        // url: AppConfig.domain + "product/" + data.respObj.url_name, 
        description: data.respObj.description,
        images: [
          {
            url: 'https://fama.b-cdn.net/Yuri/Dev/' + "products/" + data.respObj.images.split(',').map((url) => url.trim())[0],
            height: 1200,
            width: 600,
            alt: data.respObj.name,
          },
        ],
      },

    };
  }
}
const page = async ({ params }) => {
  const data = await getData(params.productName);
  if (!data || !data.resp) {
    return notFound();
  }
  return (
    <div>${data.respObj.name}</div>
  );
};

export default page;
