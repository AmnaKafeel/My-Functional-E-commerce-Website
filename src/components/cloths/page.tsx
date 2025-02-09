// 'use client'

// import React, { useEffect, useState } from 'react'
// import { client } from '@/sanity/lib/client'
// import { allProducts, four } from '@/sanity/lib/quries'
// import { urlFor } from '@/sanity/lib/image'
// import Image from 'next/image'


// const Cloths = () => {

//     const [product, setProduct] = useState<Products[]>([])

//     useEffect(()=>{
//         async function fetchproduct(){
//             const fetchedproduct : Products[] = await client.fetch(four)
//             setProduct(fetchedproduct)
//         }
//         fetchproduct()
//     }, [])

//   return (
//     <div className='max-w-6xl mx-auto px-4 py-8'>
//         <h1>Casual</h1>
//         <div className='grid grid-col-1 sm:grid-cols-2 '></div>
//       {product.map((product) => (
//         <div key={product._id}>
//        {product.productName}
//        {product.image && (
//         <Image
//         src={urlFor(product.image).url()}
//         alt={product.productName}
//         width ={300}
//         height ={300}
//         />

//        ) }
//        {product.price}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Cloths
