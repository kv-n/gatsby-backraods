import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function blog() {
    return (
            <Layout>
                hello from the blog page!!!
            <Link to="/">Back Home</Link>
            </Layout>
    )
}
