import HeroBlock from './HeroBlock'
import ContentBlocks from './content-blocks/ContentBlocks'

const HomePage = () => {
  return (
    <section
      data-testid="builderPage"
      className="border-10 relative flex h-full select-none flex-col border-[15px] border-solid bg-black md:h-screen"
    >
      <HeroBlock />
      <ContentBlocks />
    </section>
  )
}

export default HomePage
