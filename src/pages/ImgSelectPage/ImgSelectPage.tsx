// @ts-nocheck

import React, { useState, useCallback, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { getOrientation } from 'get-orientation/browser'
import ImgDialog from '../../components/ImgDialog/ImgDialog'
import {
  getCroppedImg,
  getRotatedImage,
} from '../../helpers/canvasUtils/canvasUtils'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { PERSONAL_DETAILS, PROF_SUMMARY } from '../../redux/pdf/constants'

const ORIENTATION_TO_ANGLE = {
  '3': 180,
  '6': 90,
  '8': -90,
}

interface IProps {
  classes: any
}
const Demo: React.FC<IProps> = ({ classes, photoStateF }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const personalDetails = useSelector(
    (state: RootState) => state.pdf.personalDetails,
  )

  const dispatch = useDispatch()

  const [imageSrc, setImageSrc] = React.useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const [isfileExist, setIsFileExist] = useState(false)

  const currentTemplateName = useSelector(
    (state: RootState) => state.pdf.templateName.currentTemplateName,
  )

  const onDelete = () => {
    dispatch(
      ADD({
        section: PERSONAL_DETAILS,
        data: { ...personalDetails, photo: null },
      }),
    )
    onClose()
    setIsFileExist(false)
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const onClose = () => {
    setCroppedImage(null)
    setImageSrc(null)
  }

  const showCroppedImage = async () => {
    try {
      const croppedImage: string = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
      )
      console.log('donee', { croppedImage })

      setCroppedImage(croppedImage)

      dispatch(
        ADD({
          section: PERSONAL_DETAILS,
          data: { ...personalDetails, photo: croppedImage },
        }),
      )
      setIsFileExist(true)
      onClose()
    } catch (e) {
      console.error(e)
    }
  }

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)

      try {
        // apply rotation if needed
        const orientation = await getOrientation(file)
        const rotation = ORIENTATION_TO_ANGLE[orientation]
        if (rotation) {
          imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
        }
      } catch (e) {
        console.warn('failed to detect the orientation')
      }

      setImageSrc(imageDataUrl)
    }
  }

  return (
    <div
      className={`${
        isfileExist ? 'bg-white' : 'bg-black'
      } relative z-[11] -ml-1 w-screen xl:w-1/2`}
    >
      {imageSrc ? (
        <div className="absolute left-[95%] top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[191%] lg:left-20 lg:w-96 xl:left-[300%] xl:w-[500px]">
          <div className="mt-[50x] h-[450px] w-[105vw] bg-black md:w-screen lg:w-screen xl:w-full">
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              classes={{
                containerClassName: ' w-[100%] h-[50%] md:w-[95%] md:h-[65%] ',
                cropAreaClassName: 'border border-white',
                controlsClassName: 'hidden', // Hide the built-in controls
              }}
            />
          </div>
          <div
            className={
              ' absolute bottom-[-15%] left-0 flex w-[105vw] flex-col bg-black pl-10 pr-[50px] pt-[10px] md:w-screen xl:w-[500px]'
            }
          >
            <div className={''}>
              <Typography
                variant="overline"
                classes={{ root: classes.sliderLabel }}
              >
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                classes={{ root: classes.slider }}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
            <div className={''}>
              <Typography
                variant="overline"
                classes={{ root: classes.sliderLabel }}
              >
                Rotation
              </Typography>
              <Slider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby="Rotation"
                classes={{ root: classes.slider }}
                onChange={(e, rotation) => setRotation(rotation)}
              />
            </div>
            <div className="mr-[-15px] flex justify-center pb-5">
              <Button
                onClick={showCroppedImage}
                variant="contained"
                color="primary"
                classes={{ root: classes.cropButton }}
              >
                Save
              </Button>

              <Button
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                }}
                variant="contained"
                color="secondary"
                classes={{ root: classes.cropButton }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <input
          ref={inputRef}
          type="file"
          onChange={onFileChange}
          accept="image/*"
          id="photo"
          style={{ display: 'none' }}
          disabled={currentTemplateName ? false : true}
        />
      )}
      {isfileExist ? (
        <button
          onClick={(e) => {
            e.preventDefault()
            onDelete()
            onClose()
          }}
          className="-ml-4 p-2 text-center text-additional-color hover:text-red-600 focus:text-red-600 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

function readFile(file) {
  return new Promise((resolve) => {
    try {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    } catch (error) {
      console.log(error)
    }
  })
}

const StyledDemo = withStyles(styles)(Demo)

export default StyledDemo
