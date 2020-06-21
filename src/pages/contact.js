import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from '../components/contact-form/contact-form.component'

export default() => (
    <Layout>
        <SEO title = 'Contact' />
        <ContactForm />
    </Layout>
)