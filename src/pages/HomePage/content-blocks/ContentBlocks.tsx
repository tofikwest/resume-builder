import QuoteBlock from './QuoteBlock'
import ResumeTracker from './ResumeTrackerBlock'
import ResumesBlock from './ResumesBlock'

const ContentBlocks = () => {
  return (
    <span className="relative flex h-[35%] w-full flex-col gap-1 after:absolute after:bottom-0 after:right-0 after:block after:h-[130%] after:w-1/3 md:flex-row">
      {/* 3 BLOCKS UNDER HERO */}
      <QuoteBlock />
      <ResumeTracker />
      <ResumesBlock />
    </span>
  )
}

export default ContentBlocks
