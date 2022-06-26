import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
      Home
    </>
  )
}

export default HomePage
