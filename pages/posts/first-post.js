import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = () => {
 return(
     <Layout>
     <Head>
         <title>First Post</title>
     </Head>
        <h1>First Post</h1>
        <h2>
            Blah Blah Blah
        </h2>
        <p>
            Lorem Ipsum stuff filler and eyah. Lorem Ipsum stuff filler and eyah. Lorem Ipsum stuff filler and eyah. Lorem Ipsum stuff filler and eyah. Lorem Ipsum stuff filler and eyah. Lorem Ipsum stuff filler and eyah.
        </p>
        
     </Layout>
 )
}

export default FirstPost