import React, { useState, FunctionComponent } from "react"

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

const ImageUploadForm: FunctionComponent = () => {
  const [imageToUpload, setImageToUpload] = useState<File | undefined>(
    undefined
  )

  const handleSelect = (event: HTMLInputEvent) => {
    event.preventDefault()
    const file = event.target.files ? event.target.files[0] : undefined
    setImageToUpload(file)
  }

  return (
    <div>
      <input type="file" onChange={() => handleSelect} />
    </div>
  )
}

export default ImageUploadForm
