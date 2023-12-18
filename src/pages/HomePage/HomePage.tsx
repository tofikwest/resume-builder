import HeroBlock from './HeroBlock'
import ContentBlocks from './content-blocks/ContentBlocks'

const HomePage = () => {
  return (
    <section
      data-testid="builderPage"
      className="border-10 relative flex h-screen select-none flex-col border-[15px] border-solid bg-black"
    >
      <HeroBlock />
      <ContentBlocks />
    </section>
  )
}

export default HomePage
