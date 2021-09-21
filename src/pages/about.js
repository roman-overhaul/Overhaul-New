import * as React from 'react'
import Layout from '../components/Layout'
import WorkIntro from '../components/WorkIntro'
import PageHero from '../components/PageHero'
import PageTitle from '../components/PageTitle'
import FullWidthImage from '../components/FUllWidthImage'
import DualImages from '../components/DualImages'
import BlockList from '../components/BlockList'
import BlockClients from '../components/BlockClients'
import BlockServices from '../components/BlockServices'
import BlockAwards from '../components/BlockAwards'
import BlockTeam from '../components/BlockTeam'
import BlockApproach from '../components/BlockApproach'
import { images, listItems, serviceAbilities, clients, ourApproach } from '../../mock-data/work-content'
import { awards } from '../../mock-data/work-awards'
import { team } from '../../mock-data/work-team'

import approachImage from '/src/images/our-approach.jpg'

const AboutPage = () => {

    const lists = [{
            title: 'Services',
            items: [
                'Strategy',
                'Branding',
                'Digital',
            ],
        },
        {
            title: 'Credits',
            items: [
                'Name 1',
                'Name 2',
                'Name 3',
            ],
        },
        {
            title: 'Industry',
            items: [
                'Retail',
            ],
        },
    ]

    return (
        <Layout pageTitle="About Us">
            <PageHero 
                image='https://images.unsplash.com/photo-1631116618155-6074e787a30b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
                title='This is the Title' 
                subTitle="This will be the Subtitle"
            />
            <PageTitle
                title="this is a Title Test"
                subTitle="Subtitle Test too,"
            />
            <DualImages
                images={images}
            />
            <FullWidthImage
                image="https://images.unsplash.com/photo-1583483425070-cb9ce8fc51b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3889&q=80"
                alt="This is an Image i found on The internet"
            />
            <WorkIntro 
                title="An eye for the finer things in life"
                paragraph="<p>Solamente necesito tomar cereales con leche. El queso está bueno, y también lo están las galletas. Me encanta mojar mis nachos en chocolate. Las bufandas son útiles para mantenerte caliente, también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca. Mis padres quieren que tenga un hijo. El colegio es útil si te quieres morir.</p>
                <p>Las bufandas son útiles para mantenerte caliente, también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca. Mis padres quieren que tenga un hijo. El colegio es útil si te quieres morir.</p>"
                taxonomies={lists}
            />
            <BlockApproach
                title="Our Approach"
                image={ approachImage }
                alt="Our Team hard at work"
                content={ ourApproach }
            />
            <BlockList 
                title="Our Values"
                listItems={listItems}
            />
            <BlockClients 
                title="Selected Clients"
                clients={ clients }
            />
            <BlockServices
                title="Services"
                subTitle="Every business decision is a brand opportunity."
                paragraph="Branding doesn't stop with a visual identity or advertising campaign. Every aspect of your company is an opportunity to make your business better for your customers. With that in mind, we've built a team that lets us contribute wherever we can make the biggest impact. "
                serviceItems={serviceAbilities}
            />
            <BlockAwards
                title="Awards"
                awards={awards}
            />
            <BlockTeam 
                title="Meet the Team"
                subTitle="Hired guns don't have all the tools. Big shops move too slow. We meet you in the middle. "
                paragraph="We’re Agile. We’re smaller, but experience tells us that’s a good thing. Our team has decades of experience across multiple discliplines."
                team={team}
            />
        </Layout>
    )
}

export default AboutPage